"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  ACCEPTED_FILE_TYPES,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
} from "@/lib/validations/leadForm";

export function FileUploadField({
  files,
  onChange,
  error,
}: {
  files: File[];
  onChange: (files: File[]) => void;
  error?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const list = Array.from(incoming);
      const valid: File[] = [];

      for (const file of list) {
        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
          setLocalError(`Formato não aceito: ${file.name}. Envie PDF, JPG, JPEG ou PNG.`);
          continue;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
          setLocalError(`${file.name} excede o limite de ${MAX_FILE_SIZE_MB}MB.`);
          continue;
        }
        valid.push(file);
      }

      if (valid.length) {
        setLocalError(null);
        onChange([...files, ...valid]);
      }
    },
    [files, onChange]
  );

  return (
    <div className="flex flex-col gap-2">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-line bg-white px-6 py-10 text-center transition-colors",
          isDragging && "border-accent bg-accent-light/40"
        )}
      >
        <UploadCloud className="text-accent-dark" size={26} />
        <p className="text-sm text-ink">
          Arraste os arquivos aqui ou{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-medium text-accent-dark underline underline-offset-2"
          >
            selecione no dispositivo
          </button>
        </p>
        <p className="text-xs text-muted">
          PDF, JPG, JPEG ou PNG · até {MAX_FILE_SIZE_MB}MB por arquivo
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_TYPES.join(",")}
          className="hidden"
          onChange={(e) => e.target.files && addFiles(e.target.files)}
        />
      </div>

      {(localError || error) && (
        <p role="alert" className="text-xs text-[#B3261E]">
          {localError || error}
        </p>
      )}

      {files.length > 0 && (
        <ul className="mt-1 flex flex-col gap-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-sm border border-line bg-white px-3 py-2 text-sm"
            >
              <span className="flex items-center gap-2 truncate text-ink">
                <FileText size={15} className="shrink-0 text-accent-dark" />
                <span className="truncate">{file.name}</span>
                <span className="shrink-0 text-xs text-muted">
                  ({(file.size / (1024 * 1024)).toFixed(1)}MB)
                </span>
              </span>
              <button
                type="button"
                aria-label={`Remover ${file.name}`}
                onClick={() => onChange(files.filter((_, i) => i !== index))}
                className="shrink-0 text-muted hover:text-[#B3261E]"
              >
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
