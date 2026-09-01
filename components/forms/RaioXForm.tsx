"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, TextInput, TextArea, Select } from "@/components/ui/Field";
import { FileUploadField } from "@/components/forms/FileUploadField";
import { StepProgress } from "@/components/forms/StepProgress";
import { Alert } from "@/components/ui/Surface";
import { LEAD_FORM_STEPS } from "@/lib/types/lead";
import {
  leadFormSchema,
  SITUATION_OPTIONS,
  type LeadFormValues,
} from "@/lib/validations/leadForm";

const STEP_FIELDS: Record<string, (keyof LeadFormValues)[]> = {
  identification: ["fullName", "cpf", "phone", "whatsapp", "email"],
  situation: ["situation"],
  infractionData: [
    "issuingAgency",
    "aitNumber",
    "plate",
    "infractionCode",
    "infractionDate",
    "notificationDate",
    "deadline",
    "infractionDescription",
  ],
  upload: [],
  notes: ["notes"],
  consent: ["consent"],
};

export function RaioXForm() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | undefined>();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
 const {
    register,
    trigger,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      cpf: "",
      phone: "",
      whatsapp: "",
      email: "",
      notes: "",
      consent: undefined as unknown as true,
    },
  });

  const currentStep = LEAD_FORM_STEPS[stepIndex];
  const isLastStep = stepIndex === LEAD_FORM_STEPS.length - 1;

async function goNext() {
    if (currentStep.key === "upload") {
      if (files.length === 0) {
        setFileError("Envie ao menos um documento para análise.");
        return;
      }
      setFileError(undefined);
      setStepIndex((i) => i + 1);
      return;
    }

    const fields = STEP_FIELDS[currentStep.key];
    const valid = fields.length > 0 ? await trigger(fields) : true;
    if (valid) setStepIndex((i) => i + 1);
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) formData.append(key, String(value));
      });
      files.forEach((file) => formData.append("files", file));
      if (honeypotRef.current?.value) formData.append("website", honeypotRef.current.value);

      const response = await fetch("/api/leads", { method: "POST", body: formData });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Não foi possível enviar sua documentação.");
      }

      // evento de analytics — ver lib/analytics
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof window !== "undefined" && gtag) {
        gtag("event", "form_submit_raio_x");
      }

      router.push("/raio-x-da-autuacao/confirmacao");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Ocorreu um erro ao enviar. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-2xl rounded-lg border border-line bg-white p-6 shadow-card md:p-10"
    >
      {/* honeypot anti-spam — invisível para humanos, bots costumam preencher todos os campos */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <StepProgress currentIndex={stepIndex} />

      <div className="mt-8 flex flex-col gap-5">
        {currentStep.key === "identification" && (
<>
            <FieldWrapper label="Nome completo" htmlFor="fullName" required error={errors.fullName?.message}>
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <TextInput id="fullName" hasError={!!errors.fullName} {...field} />
                )}
              />
            </FieldWrapper>

            <FieldWrapper label="CPF" htmlFor="cpf" required error={errors.cpf?.message}>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <TextInput id="cpf" placeholder="000.000.000-00" hasError={!!errors.cpf} {...field} />
                )}
              />
            </FieldWrapper>

            <div className="grid gap-5 sm:grid-cols-2">
              <FieldWrapper label="Telefone" htmlFor="phone" required error={errors.phone?.message}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextInput id="phone" hasError={!!errors.phone} {...field} />
                  )}
                />
              </FieldWrapper>

              <FieldWrapper label="WhatsApp" htmlFor="whatsapp" required error={errors.whatsapp?.message}>
                <Controller
                  name="whatsapp"
                  control={control}
                  render={({ field }) => (
                    <TextInput id="whatsapp" hasError={!!errors.whatsapp} {...field} />
                  )}
                />
              </FieldWrapper>
            </div>

            <FieldWrapper label="E-mail" htmlFor="email" required error={errors.email?.message}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextInput id="email" type="email" hasError={!!errors.email} {...field} />
                )}
              />
            </FieldWrapper>
          </>
        )}

        {currentStep.key === "situation" && (
          <FieldWrapper label="Qual é a situação?" htmlFor="situation" required error={errors.situation?.message}>
            <Select id="situation" hasError={!!errors.situation} {...register("situation")} defaultValue="">
              <option value="" disabled>
                Selecione uma opção
              </option>
              {SITUATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </FieldWrapper>
        )}

        {currentStep.key === "infractionData" && (
          <>
            <Alert>
              Preencha os campos que você tiver disponíveis. Nenhum é obrigatório nesta etapa —
              a análise poderá ser complementada a partir dos documentos enviados a seguir.
            </Alert>
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldWrapper label="Órgão autuador" htmlFor="issuingAgency">
                <TextInput id="issuingAgency" {...register("issuingAgency")} />
              </FieldWrapper>
              <FieldWrapper label="Número do AIT" htmlFor="aitNumber">
                <TextInput id="aitNumber" className="font-mono" {...register("aitNumber")} />
              </FieldWrapper>
              <FieldWrapper label="Placa do veículo" htmlFor="plate">
                <TextInput id="plate" className="font-mono uppercase" {...register("plate")} />
              </FieldWrapper>
              <FieldWrapper label="Código da infração" htmlFor="infractionCode">
                <TextInput id="infractionCode" className="font-mono" {...register("infractionCode")} />
              </FieldWrapper>
              <FieldWrapper label="Data da infração" htmlFor="infractionDate">
                <TextInput id="infractionDate" type="date" {...register("infractionDate")} />
              </FieldWrapper>
              <FieldWrapper label="Data da notificação" htmlFor="notificationDate">
                <TextInput id="notificationDate" type="date" {...register("notificationDate")} />
              </FieldWrapper>
              <FieldWrapper label="Prazo para defesa/recurso" htmlFor="deadline">
                <TextInput id="deadline" type="date" {...register("deadline")} />
              </FieldWrapper>
            </div>
            <FieldWrapper label="Descrição da infração" htmlFor="infractionDescription">
              <TextArea id="infractionDescription" {...register("infractionDescription")} />
            </FieldWrapper>
          </>
        )}

        {currentStep.key === "upload" && (
          <FieldWrapper label="Documentos" htmlFor="files" required hint="Notificação, AIT, CNH e documentos complementares.">
            <FileUploadField files={files} onChange={setFiles} error={fileError} />
          </FieldWrapper>
        )}

        {currentStep.key === "notes" && (
          <FieldWrapper
            label="Conte brevemente o que aconteceu"
            htmlFor="notes"
            error={errors.notes?.message}
            hint="Opcional. Informações adicionais ajudam na análise do caso."
          >
            <TextArea id="notes" hasError={!!errors.notes} {...register("notes")} />
          </FieldWrapper>
        )}

        {currentStep.key === "consent" && (
          <div className="flex flex-col gap-4">
            <Alert title="Antes de enviar">
              Revise os dados informados nas etapas anteriores. Ao confirmar, seus dados serão
              tratados conforme nossa Política de Privacidade.
            </Alert>
            <label className="flex items-start gap-3 text-sm text-ink">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent"
                {...register("consent")}
              />
              <span>
                Autorizo o tratamento dos meus dados pessoais para fins de análise e atendimento
                do meu caso, conforme a{" "}
                <a href="/politica-de-privacidade" target="_blank" className="text-accent-dark underline">
                  Política de Privacidade
                </a>
                .
              </span>
            </label>
            {errors.consent?.message && (
              <p role="alert" className="text-xs text-[#B3261E]">
                {errors.consent.message as string}
              </p>
            )}
          </div>
        )}

        {submitError && (
          <p role="alert" className="text-sm text-[#B3261E]">
            {submitError}
          </p>
        )}
      </div>

      <div className="mt-9 flex items-center justify-between">
        <Button
          type="button"
          variant="secondary"
          onClick={goBack}
          disabled={stepIndex === 0}
          className={stepIndex === 0 ? "invisible" : ""}
        >
          <ArrowLeft size={16} /> Voltar
        </Button>

        {!isLastStep ? (
          <Button type="button" onClick={goNext}>
            Continuar <ArrowRight size={16} />
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Enviando...
              </>
            ) : (
              "Enviar documentação para análise"
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
