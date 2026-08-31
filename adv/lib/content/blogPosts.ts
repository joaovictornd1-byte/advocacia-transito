export type BlogCategory =
  | "Multas"
  | "CNH"
  | "Infrações"
  | "Recursos administrativos"
  | "JARI"
  | "CETRAN"
  | "Empresas e Frotas";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Multas",
  "CNH",
  "Infrações",
  "Recursos administrativos",
  "JARI",
  "CETRAN",
  "Empresas e Frotas",
];

export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  publishedAt: string; // ISO date
  readingTimeMinutes: number;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-funciona-a-defesa-previa-de-uma-multa-de-transito",
    title: "Como funciona a defesa prévia de uma multa de trânsito?",
    category: "Recursos administrativos",
    excerpt:
      "Entenda o que é a defesa prévia, quando ela é cabível e quais elementos costumam ser analisados antes de sua apresentação.",
    publishedAt: "2026-01-12",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "O que é a defesa prévia",
        paragraphs: [
          "A defesa prévia é a manifestação apresentada pelo condutor autuado antes da conversão da autuação em penalidade. Ela é dirigida ao próprio órgão que lavrou o Auto de Infração de Trânsito (AIT) e representa a primeira oportunidade formal de manifestação no processo administrativo.",
          "Sua apresentação não é automática nem obrigatória para todos os casos: depende da análise da notificação recebida, do prazo disponível e das características específicas da autuação.",
        ],
      },
      {
        heading: "O que costuma ser analisado antes de apresentá-la",
        paragraphs: [
          "A análise da documentação recebida — notificação de autuação e, quando disponível, o próprio AIT — permite verificar elementos formais (como prazos e requisitos de notificação) e materiais (como a tipificação da infração e as circunstâncias registradas).",
          "É a partir dessa análise individualizada que se identifica se a apresentação de defesa prévia é uma medida cabível para o caso concreto.",
        ],
      },
      {
        heading: "Prazo e órgão competente",
        paragraphs: [
          "O prazo para apresentação da defesa prévia é informado na própria notificação de autuação e varia conforme o órgão de trânsito responsável. A defesa é protocolada perante esse mesmo órgão, e não perante a JARI, que atua em fase posterior.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-jari-e-quando-e-possivel-recorrer",
    title: "O que é JARI e quando é possível recorrer?",
    category: "JARI",
    excerpt:
      "Saiba o que é a Junta Administrativa de Recursos de Infrações e em que momento do processo administrativo ela atua.",
    publishedAt: "2026-01-19",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "O que é a JARI",
        paragraphs: [
          "JARI é a sigla para Junta Administrativa de Recursos de Infrações, órgão colegiado previsto no Código de Trânsito Brasileiro responsável por julgar, em primeira instância administrativa, os recursos apresentados contra penalidades de trânsito já aplicadas.",
        ],
      },
      {
        heading: "Quando o recurso à JARI é cabível",
        paragraphs: [
          "O recurso à JARI é apresentado após a aplicação da penalidade — ou seja, em fase posterior à defesa prévia — dentro do prazo estabelecido na notificação de penalidade.",
          "A análise da documentação recebida é o que permite identificar se, no caso concreto, há fundamentos para a apresentação desse recurso.",
        ],
      },
      {
        heading: "O que considerar antes de recorrer",
        paragraphs: [
          "É importante reunir toda a documentação relacionada à autuação — notificações, AIT e eventual defesa prévia já apresentada — para que a análise do caso considere o histórico completo do processo administrativo.",
        ],
      },
    ],
  },
  {
    slug: "qual-a-diferenca-entre-defesa-previa-e-recurso",
    title: "Qual a diferença entre defesa prévia e recurso?",
    category: "Recursos administrativos",
    excerpt:
      "Defesa prévia e recurso administrativo atuam em momentos diferentes do processo. Entenda as principais distinções.",
    publishedAt: "2026-01-26",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Momento processual",
        paragraphs: [
          "A defesa prévia é apresentada antes da aplicação da penalidade, logo após a notificação de autuação. O recurso administrativo, por sua vez, é apresentado depois de a penalidade já ter sido aplicada, dirigido à JARI ou, em fase posterior, ao CETRAN.",
        ],
      },
      {
        heading: "Órgão competente para julgamento",
        paragraphs: [
          "A defesa prévia é julgada pelo próprio órgão autuador. Já os recursos administrativos são julgados por órgãos colegiados específicos — a JARI em primeira instância e o CETRAN (ou CONTRANDIFE) em segunda instância, quando cabível.",
        ],
      },
      {
        heading: "Por que a análise individualizada importa",
        paragraphs: [
          "Cada autuação está em uma fase diferente do processo administrativo, o que determina qual medida é cabível em cada momento. Por isso, a análise da documentação recebida — e não apenas do tipo de infração — é o que orienta a estratégia adequada.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-o-processo-administrativo-de-suspensao-da-cnh",
    title: "Como funciona o processo administrativo de suspensão da CNH?",
    category: "CNH",
    excerpt:
      "Entenda as hipóteses que podem levar à suspensão do direito de dirigir e como funciona o procedimento administrativo correspondente.",
    publishedAt: "2026-02-02",
    readingTimeMinutes: 6,
    sections: [
      {
        heading: "Hipóteses de suspensão",
        paragraphs: [
          "A suspensão do direito de dirigir pode decorrer do atingimento da pontuação máxima permitida na CNH dentro do período estabelecido em lei, ou da prática de infrações específicas às quais o Código de Trânsito Brasileiro atribui essa penalidade de forma direta.",
        ],
      },
      {
        heading: "Etapas do processo administrativo",
        paragraphs: [
          "O condutor é notificado da instauração do processo administrativo e tem o direito de apresentar defesa dentro do prazo informado. A condução do processo observa o devido processo legal, com garantia de contraditório e ampla defesa.",
          "A análise da notificação recebida — incluindo a motivação apontada pelo órgão de trânsito — é o ponto de partida para identificar a estratégia de defesa cabível.",
        ],
      },
      {
        heading: "Efeitos da suspensão",
        paragraphs: [
          "Durante o período de suspensão, o condutor fica impedido de conduzir veículo automotor. O prazo de suspensão é definido conforme a decisão proferida no processo administrativo.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-o-processo-de-cassacao-da-cnh",
    title: "Como funciona o processo de cassação da CNH?",
    category: "CNH",
    excerpt:
      "A cassação da CNH está prevista em hipóteses específicas da legislação de trânsito. Veja como funciona esse procedimento administrativo.",
    publishedAt: "2026-02-09",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Hipóteses previstas em lei",
        paragraphs: [
          "A cassação da Carteira Nacional de Habilitação está prevista em dispositivos específicos do Código de Trânsito Brasileiro, entre eles a reincidência em infrações consideradas gravíssimas dentro de um período determinado.",
        ],
      },
      {
        heading: "Direito de defesa no processo",
        paragraphs: [
          "Assim como no processo de suspensão, a cassação da CNH é precedida de processo administrativo que assegura ao condutor o direito ao contraditório e à ampla defesa, conduzido pelo órgão de trânsito competente.",
        ],
      },
      {
        heading: "Após o período de cassação",
        paragraphs: [
          "Encerrado o período de cassação previsto em lei, a obtenção de nova habilitação está sujeita a requisitos próprios estabelecidos pela legislação vigente, que devem ser verificados no momento oportuno.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-o-auto-de-infracao-de-transito",
    title: "O que é o Auto de Infração de Trânsito?",
    category: "Multas",
    excerpt:
      "O AIT é o documento que formaliza a autuação. Entenda sua função e quais informações costumam constar nele.",
    publishedAt: "2026-02-16",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Função do AIT",
        paragraphs: [
          "O Auto de Infração de Trânsito (AIT) é o documento que formaliza a constatação de uma infração de trânsito, seja por agente de fiscalização, seja por equipamento eletrônico. É a partir do AIT que se inicia o processo administrativo relacionado à autuação.",
        ],
      },
      {
        heading: "Informações que costumam constar no documento",
        paragraphs: [
          "Em geral, o AIT contém o órgão autuador, a data e o local da infração, a tipificação (código da infração), a placa do veículo e a descrição da conduta constatada. Esses elementos são justamente os analisados na etapa de verificação da autuação.",
        ],
      },
      {
        heading: "Por que a análise do AIT é importante",
        paragraphs: [
          "A regularidade formal e material do AIT pode influenciar diretamente as medidas administrativas cabíveis. Por isso, sempre que possível, recomenda-se reunir esse documento — e não apenas a notificação — antes de buscar orientação jurídica.",
        ],
      },
    ],
  },
  {
    slug: "recebi-uma-notificacao-de-transito-o-que-devo-verificar",
    title: "Recebi uma notificação de trânsito: o que devo verificar?",
    category: "Multas",
    excerpt:
      "Antes de decidir qual medida tomar, é importante verificar alguns elementos básicos da notificação recebida.",
    publishedAt: "2026-02-23",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Tipo de notificação recebida",
        paragraphs: [
          "É importante identificar se a notificação recebida é de autuação (fase inicial, anterior à aplicação da penalidade) ou de penalidade (fase posterior, quando a multa já foi aplicada), pois isso determina quais medidas são cabíveis e dentro de qual prazo.",
        ],
      },
      {
        heading: "Elementos a conferir",
        paragraphs: [
          "Vale verificar o órgão autuador, a data da infração, o código da infração indicado, a placa do veículo e o prazo informado para eventual manifestação. Esses dados também são os solicitados na etapa de análise individualizada do caso.",
        ],
      },
      {
        heading: "Próximos passos",
        paragraphs: [
          "Reunida a documentação, a análise jurídica individualizada é o que permite identificar se há medida administrativa cabível para o caso — e qual seria o procedimento adequado, considerando os prazos em curso.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-a-indicacao-de-condutor",
    title: "Como funciona a indicação de condutor?",
    category: "Empresas e Frotas",
    excerpt:
      "Para empresas com frota, a indicação de condutor é um procedimento frequente. Entenda seus requisitos básicos.",
    publishedAt: "2026-03-02",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Quando a indicação é necessária",
        paragraphs: [
          "Quando o veículo autuado está registrado em nome de uma pessoa jurídica ou é conduzido por pessoa diversa do proprietário, pode ser necessário indicar o condutor responsável pela infração, conforme os prazos e requisitos estabelecidos pelo órgão autuador.",
        ],
      },
      {
        heading: "Requisitos e prazos",
        paragraphs: [
          "A indicação de condutor deve observar prazo específico, contado a partir da notificação de autuação, e requer a apresentação de documentos que comprovem a identificação do condutor indicado.",
        ],
      },
      {
        heading: "Organização para empresas e frotas",
        paragraphs: [
          "Empresas com frota costumam se beneficiar de um processo organizado de acompanhamento de notificações, de forma a evitar a perda de prazos para indicação de condutor em razão do volume de veículos e autuações.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-o-recurso-de-multa-por-excesso-de-velocidade",
    title: "Como funciona o recurso de multa por excesso de velocidade?",
    category: "Infrações",
    excerpt:
      "Multas por excesso de velocidade envolvem aferição técnica específica. Veja o que costuma ser observado nesses casos.",
    publishedAt: "2026-03-09",
    readingTimeMinutes: 5,
    sections: [
      {
        heading: "Como a infração é aferida",
        paragraphs: [
          "As autuações por excesso de velocidade normalmente decorrem de equipamentos de controle eletrônico, que devem observar requisitos técnicos e de sinalização estabelecidos pela regulamentação do órgão competente.",
        ],
      },
      {
        heading: "O que a análise do caso costuma observar",
        paragraphs: [
          "Entre os pontos analisados estão a regularidade do equipamento utilizado, a sinalização do local no momento da infração e os dados constantes no Auto de Infração de Trânsito.",
        ],
      },
      {
        heading: "Medida cabível",
        paragraphs: [
          "A partir dessa análise, é possível identificar se há fundamento para apresentação de defesa prévia ou recurso administrativo, sempre considerando a fase em que se encontra o processo relativo à autuação.",
        ],
      },
    ],
  },
  {
    slug: "qual-a-diferenca-entre-multa-penalidade-e-medida-administrativa",
    title: "Qual a diferença entre multa, penalidade e medida administrativa?",
    category: "Multas",
    excerpt:
      "Esses três termos são frequentemente confundidos. Entenda o que cada um representa no processo administrativo de trânsito.",
    publishedAt: "2026-03-16",
    readingTimeMinutes: 4,
    sections: [
      {
        heading: "Multa",
        paragraphs: [
          "A multa é uma das penalidades previstas no Código de Trânsito Brasileiro, consistindo em sanção pecuniária aplicada em decorrência da prática de uma infração.",
        ],
      },
      {
        heading: "Penalidade",
        paragraphs: [
          "Penalidade é o gênero do qual a multa é uma espécie. O Código de Trânsito Brasileiro prevê outras penalidades além da multa, como a suspensão do direito de dirigir e a apreensão do veículo, conforme a infração cometida.",
        ],
      },
      {
        heading: "Medida administrativa",
        paragraphs: [
          "Medida administrativa é distinta de penalidade: trata-se de providência imediata adotada pelo agente de trânsito no momento da fiscalização, como a retenção do veículo para regularização, e não constitui, por si só, uma sanção.",
        ],
      },
    ],
  },
];
