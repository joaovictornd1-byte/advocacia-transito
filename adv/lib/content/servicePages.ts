export type ServicePageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string[];
  topics: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  multas: {
    slug: "multas",
    eyebrow: "Serviços · Multas e Autuações",
    title: "Multas e Autuações",
    description:
      "Análise individualizada de autos de infração e condução dos procedimentos administrativos cabíveis, da defesa prévia ao CETRAN.",
    intro: [
      "Cada Auto de Infração de Trânsito (AIT) possui elementos formais e materiais próprios — órgão autuador, tipificação, prazos e circunstâncias registradas — que determinam quais medidas administrativas são juridicamente cabíveis.",
      "A atuação do escritório abrange a análise da documentação, a orientação sobre o procedimento adequado e, quando contratado, a elaboração e o acompanhamento das peças administrativas correspondentes.",
    ],
    topics: [
      { title: "Defesa prévia", description: "Apresentada antes da aplicação da penalidade, perante o órgão autuador." },
      { title: "Recursos administrativos", description: "Interpostos após a aplicação da penalidade, dentro do prazo legal." },
      { title: "JARI", description: "Recurso em primeira instância administrativa, perante a Junta Administrativa de Recursos de Infrações." },
      { title: "CETRAN", description: "Recurso em segunda instância, quando cabível, ao Conselho Estadual de Trânsito." },
      { title: "Análise de autos de infração", description: "Verificação de eventuais vícios formais e materiais na autuação." },
    ],
    faq: [
      {
        question: "Toda multa pode ser questionada?",
        answer:
          "A possibilidade de questionamento depende das características específicas de cada autuação. A análise individualizada da documentação é o que permite identificar as medidas cabíveis.",
      },
      {
        question: "Qual o prazo para apresentar defesa ou recurso?",
        answer:
          "Os prazos variam conforme a fase processual e são informados na própria notificação. É recomendável iniciar a análise assim que a notificação for recebida.",
      },
    ],
  },
  "defesa-previa": {
    slug: "defesa-previa",
    eyebrow: "Serviços · Multas e Autuações",
    title: "Defesa Prévia",
    description:
      "Medida administrativa apresentada antes da aplicação da penalidade, perante o órgão autuador responsável.",
    intro: [
      "A defesa prévia é a primeira oportunidade de manifestação do condutor autuado, apresentada antes da conversão da autuação em penalidade.",
      "Sua análise considera os elementos do auto de infração, os documentos que o acompanham e o prazo legal para apresentação, contado a partir da notificação da autuação.",
    ],
    topics: [
      { title: "Prazo legal", description: "Contado a partir do recebimento da notificação de autuação, conforme o órgão responsável." },
      { title: "Fundamentação", description: "Baseada nos elementos formais e materiais identificados na análise do auto de infração." },
      { title: "Órgão competente", description: "Apresentada perante o próprio órgão que lavrou a autuação." },
    ],
    faq: [
      {
        question: "A defesa prévia suspende o prazo da multa?",
        answer:
          "Os efeitos processuais dependem do procedimento de cada órgão autuador. Essa informação é analisada caso a caso a partir da documentação apresentada.",
      },
    ],
  },
  jari: {
    slug: "jari",
    eyebrow: "Serviços · Multas e Autuações",
    title: "JARI",
    description:
      "Recurso administrativo em primeira instância, dirigido à Junta Administrativa de Recursos de Infrações.",
    intro: [
      "A JARI (Junta Administrativa de Recursos de Infrações) é o órgão colegiado responsável por julgar, em primeira instância administrativa, os recursos apresentados contra penalidades de trânsito já aplicadas.",
      "O recurso à JARI é cabível após a aplicação da penalidade e deve observar os prazos e requisitos formais estabelecidos pelo Código de Trânsito Brasileiro.",
    ],
    topics: [
      { title: "Natureza do órgão", description: "Colegiado administrativo vinculado ao órgão de trânsito responsável pela autuação." },
      { title: "Momento cabível", description: "Após a aplicação da penalidade, dentro do prazo recursal estabelecido." },
      { title: "Instância seguinte", description: "Em caso de indeferimento, pode ser cabível recurso ao CETRAN, a depender do caso." },
    ],
    faq: [
      {
        question: "O que acontece se a JARI indeferir o recurso?",
        answer:
          "A depender da hipótese, é possível recorrer ao CETRAN (ou CONTRANDIFE, no Distrito Federal), observados os prazos e requisitos aplicáveis.",
      },
    ],
  },
  cetran: {
    slug: "cetran",
    eyebrow: "Serviços · Multas e Autuações",
    title: "CETRAN",
    description:
      "Recurso administrativo em segunda instância, dirigido ao Conselho Estadual de Trânsito, quando cabível.",
    intro: [
      "O CETRAN (Conselho Estadual de Trânsito) julga, em segunda instância administrativa, os recursos não acolhidos pela JARI, observados os requisitos e prazos legais.",
      "A análise do cabimento do recurso ao CETRAN considera o histórico do processo administrativo e os fundamentos já apresentados nas fases anteriores.",
    ],
    topics: [
      { title: "Segunda instância", description: "Atua após o julgamento do recurso pela JARI." },
      { title: "Requisitos formais", description: "Observância de prazos e fundamentos compatíveis com a fase recursal." },
      { title: "Abrangência estadual", description: "Órgão vinculado ao Departamento de Trânsito do respectivo estado." },
    ],
    faq: [
      {
        question: "Qualquer recurso pode chegar ao CETRAN?",
        answer:
          "O cabimento depende das características do processo administrativo e da matéria discutida. A análise individualizada indica se a medida é aplicável ao caso.",
      },
    ],
  },
  "suspensao-cnh": {
    slug: "suspensao-cnh",
    eyebrow: "Serviços · CNH",
    title: "Suspensão do Direito de Dirigir",
    description:
      "Acompanhamento do procedimento administrativo relacionado à suspensão do direito de dirigir, com direito ao contraditório e à ampla defesa.",
    intro: [
      "A suspensão do direito de dirigir pode decorrer do atingimento da pontuação máxima permitida em CNH ou da prática de infrações específicas previstas no Código de Trânsito Brasileiro.",
      "O condutor notificado tem direito a apresentar defesa no processo administrativo instaurado, sendo a análise da notificação recebida o ponto de partida para identificar a medida cabível.",
    ],
    topics: [
      { title: "Notificação da penalidade", description: "Marco inicial do prazo para apresentação de defesa no processo administrativo." },
      { title: "Direito de defesa", description: "Garantido ao longo de todo o procedimento, conforme o devido processo legal." },
      { title: "Efeitos da suspensão", description: "Impedimento temporário de conduzir veículo automotor, conforme decisão no processo." },
    ],
    faq: [
      {
        question: "Recebi notificação de suspensão. O que devo fazer?",
        answer:
          "Recomenda-se reunir a documentação recebida e buscar orientação jurídica o quanto antes, tendo em vista os prazos processuais aplicáveis.",
      },
    ],
  },
  "cassacao-cnh": {
    slug: "cassacao-cnh",
    eyebrow: "Serviços · CNH",
    title: "Cassação da CNH",
    description:
      "Acompanhamento do procedimento administrativo relacionado à cassação da Carteira Nacional de Habilitação, nas hipóteses previstas em lei.",
    intro: [
      "A cassação da CNH está prevista em hipóteses específicas do Código de Trânsito Brasileiro, como a reincidência em infrações gravíssimas dentro de um período determinado.",
      "O procedimento administrativo correspondente assegura ao condutor o direito ao contraditório e à ampla defesa, cuja condução depende da análise das circunstâncias do caso concreto.",
    ],
    topics: [
      { title: "Hipóteses legais", description: "Previstas em dispositivos específicos do Código de Trânsito Brasileiro." },
      { title: "Procedimento administrativo", description: "Conduzido pelo órgão de trânsito competente, com direito à defesa." },
      { title: "Nova habilitação", description: "Sujeita a requisitos próprios após o período de cassação, conforme legislação vigente." },
    ],
    faq: [
      {
        question: "É possível apresentar defesa em processo de cassação?",
        answer:
          "Sim. O processo administrativo de cassação assegura o direito ao contraditório e à ampla defesa, cuja estratégia depende da análise individualizada do caso.",
      },
    ],
  },
  infracoes: {
    slug: "infracoes",
    eyebrow: "Serviços · Infrações específicas",
    title: "Infrações Específicas",
    description:
      "Análise individualizada conforme a natureza da infração apontada no auto — velocidade, alcoolemia, sinalização e demais hipóteses.",
    intro: [
      "Cada tipo de infração possui elementos de prova e procedimentos de aferição próprios, que devem ser verificados na análise do auto de infração.",
      "O escritório analisa a documentação apresentada para identificar as características da autuação e orientar sobre as medidas administrativas cabíveis.",
    ],
    topics: [
      { title: "Excesso de velocidade", description: "Aferição por equipamento de controle, sujeita a requisitos técnicos e de sinalização." },
      { title: "Recusa ao teste do etilômetro", description: "Hipótese com procedimento e consequências administrativas próprias." },
      { title: "Alcoolemia", description: "Envolve aferição técnica específica, cuja regularidade pode ser objeto de análise." },
      { title: "Avanço de sinal", description: "Infração aferida por equipamento eletrônico ou constatação de agente de trânsito." },
      { title: "Uso de celular ao volante", description: "Infração constatada mediante fiscalização direta." },
      { title: "Ultrapassagens irregulares", description: "Avaliadas conforme as circunstâncias registradas no local da autuação." },
    ],
    faq: [
      {
        question: "Todas as infrações têm o mesmo procedimento de análise?",
        answer:
          "Não. Cada tipo de infração pode envolver elementos de prova e procedimentos de aferição distintos, por isso a análise é sempre individualizada.",
      },
    ],
  },
};
