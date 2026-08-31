# Site — Escritório de Direito de Trânsito

Site institucional para escritório de advocacia especializado em Direito de
Trânsito, com atendimento digital nacional. Construído em **Next.js 14 (App
Router) + TypeScript + Tailwind CSS**, com formulário multi-etapas de captação
de leads ("Raio-X da Autuação"), blog com estrutura SEO e páginas legais
(LGPD).

## Stack e por que essa escolha

- **Next.js 14 (App Router)**: renderização híbrida (SSG para páginas de
  conteúdo, rota de API para o formulário), SEO nativo (`metadata`,
  `sitemap.ts`, `robots.ts`), e caminho natural de evolução para área do
  cliente autenticada.
- **TypeScript**: segurança de tipos em formulários, validações e conteúdo.
- **Tailwind CSS**: design system consistente via tokens (`tailwind.config.ts`),
  sem CSS solto.
- **React Hook Form + Zod**: validação robusta e por etapa no formulário
  principal, com mensagens de erro em português.
- **lucide-react**: ícones leves, sem dependência de sprites externos.

## Estrutura do projeto

```
app/
  (site)/              # grupo de rotas com Header/Footer/WhatsApp
    page.tsx            # home
    sobre/
    servicos/            # índice + 7 subpáginas de serviço
    empresas/
    raio-x-da-autuacao/  # formulário + página de confirmação
    blog/                # índice + [slug] dinâmico
    contato/
    politica-de-privacidade/
    termos-de-uso/
    politica-de-cookies/
  api/leads/route.ts     # recebe o formulário, valida e aciona os stubs
  layout.tsx             # fontes, metadata global, analytics
  sitemap.ts / robots.ts
components/
  ui/                    # Button, Field, Surface (Card/Badge/Alert), Accordion
  layout/                # Header, Footer, WhatsAppFloatButton
  sections/               # Hero, HowItWorks, ServicesGrid, FaqSection, CtaBand...
  forms/                  # RaioXForm, FileUploadField, StepProgress
lib/
  constants/              # site.ts (placeholders centrais), nav.ts, services.ts, faq.ts
  content/                # servicePages.ts, blogPosts.ts (conteúdo estruturado)
  validations/            # leadForm.ts (schemas Zod por etapa)
  services/               # crm.ts e storage.ts (stubs de integração futura)
  types/                  # lead.ts
  analytics/               # GA4/GTM (placeholders)
  utils/                   # cn.ts
```

## Como rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha o que for aplicável (ver seção abaixo)
npm run dev
```

Acesse `http://localhost:3000`.

> **Nota sobre fontes**: o projeto usa `next/font/google` (Fraunces, Inter,
> IBM Plex Mono), que exige acesso à internet no momento do build/dev para
> baixar os arquivos de fonte. Isso funciona normalmente em qualquer ambiente
> com internet (local, Vercel, etc.).

## Build de produção

```bash
npm run build
npm run start
```

## Deploy

O projeto está pronto para deploy na **Vercel** (recomendado, por ser a
plataforma nativa do Next.js) ou qualquer ambiente Node.js 18+:

1. Suba o repositório para o GitHub/GitLab.
2. Importe o projeto na Vercel.
3. Configure as variáveis de ambiente (ver `.env.example`) no painel da
   Vercel antes do primeiro deploy em produção.
4. Configure o domínio definitivo e atualize `SITE.url` em
   `lib/constants/site.ts`.

## Substituindo os placeholders

Todos os dados reais do escritório foram deixados como placeholders
explícitos, pois não foram informados no briefing. **Não publique o site sem
substituí-los.** Local central: `lib/constants/site.ts`.

| Placeholder | Onde aparece | O que colocar |
|---|---|---|
| `SITE.name` | Header, Footer, metadados, políticas | Nome do escritório |
| `SITE.lawyerName` | Footer, página Sobre | Nome do advogado responsável |
| `SITE.oab` | Footer, página Sobre | Número de inscrição na OAB |
| `SITE.cnpj` | Footer, políticas | CNPJ do escritório |
| `SITE.addressPlaceholder` | Footer, Contato | Endereço, se houver |
| `SITE.emailPlaceholder` | Footer, Contato, políticas | E-mail de contato |
| `SITE.phonePlaceholder` | Footer, Contato | Telefone |
| `SITE.whatsappNumber` | Botão flutuante, CTAs | Número em formato E.164 (ex: `5527999999999`) |
| `SITE.url` | Metadados, sitemap, JSON-LD | Domínio definitivo (`https://www.seudominio.com.br`) |
| `SITE.gaMeasurementId` / `gtmContainerId` | `lib/analytics` | IDs reais do GA4/GTM |
| `SITE.recaptchaSiteKey` | Formulário (a implementar) | Chave pública do reCAPTCHA |
| Foto e formação do advogado | `app/(site)/sobre/page.tsx` | Substituir os textos entre colchetes e adicionar a foto |

Busque por `[` no projeto para localizar rapidamente todos os placeholders
textuais remanescentes:

```bash
grep -rn "\[.*\]" app lib components --include="*.tsx" --include="*.ts"
```

## Formulário "Raio-X da Autuação"

Fluxo em 6 etapas (Identificação → Situação → Dados da autuação → Upload →
Observações → LGPD), validado com Zod + React Hook Form
(`lib/validations/leadForm.ts`, `components/forms/RaioXForm.tsx`).

O envio é feito via `POST /api/leads` (multipart/form-data). A rota:
- valida os dados no servidor (nunca confia apenas na validação client-side);
- rejeita arquivos fora do tipo/tamanho permitido (PDF, JPG, JPEG, PNG · até
  10MB por arquivo);
- possui um campo *honeypot* (`website`) para mitigar spam automatizado;
- delega o envio ao CRM e o armazenamento de arquivos a **stubs** documentados
  (ver abaixo).

## Integrações preparadas (não implementadas nesta versão)

### CRM — `lib/services/crm.ts`
Função `sendLeadToCrm()` já recebe o payload normalizado do lead. Defina
`CRM_WEBHOOK_URL` (e `CRM_API_KEY`, se necessário) no `.env.local` para
ativar o envio HTTP real. Sem essas variáveis, o lead apenas é logado no
console do servidor.

### Armazenamento privado de documentos — `lib/services/storage.ts`
Função `storeLeadFilesPrivately()` é o ponto de integração com um provedor de
armazenamento privado (ex.: Amazon S3 com bucket privado e URLs assinadas).
**Nesta versão, nenhum arquivo é persistido** — apenas os metadados
(nome, tamanho, tipo) são processados. Antes de ir para produção, implemente
esta função seguindo os comentários no próprio arquivo, sempre com:
- revalidação de tipo/tamanho no servidor;
- nomes de arquivo aleatórios (não usar o nome original);
- bucket/contêiner privado, sem listagem pública;
- URLs assinadas de curta duração para acesso interno;
- logs de acesso e política de retenção conforme a LGPD.

### Pagamentos
Nenhuma integração de pagamento foi implementada. Ao integrar (Mercado Pago,
Stripe ou outro gateway), utilize variáveis de ambiente para as chaves — nunca
hardcode credenciais no código.

### Área do cliente
A arquitetura (separação clara entre `app/`, `components/`, `lib/services`,
`lib/types`) foi pensada para comportar, no futuro, uma área autenticada do
cliente (`app/(cliente)/...` com middleware de autenticação), reaproveitando
os tipos de `lib/types/lead.ts` e os serviços já existentes.

### WhatsApp
O botão flutuante (`components/layout/WhatsAppFloatButton.tsx`) já monta links
`wa.me` com mensagens pré-preenchidas diferentes por página. Basta preencher
`SITE.whatsappNumber`.

### Analytics
`lib/analytics/index.tsx` carrega o GA4 apenas em produção (`NODE_ENV`) e
expõe `trackEvent()` para instrumentar os eventos de conversão sugeridos no
briefing (clique WhatsApp, envio de formulário, upload concluído, etc.).
Substitua os IDs placeholder antes do deploy.

## Compliance com publicidade da advocacia (OAB)

O conteúdo textual do site foi redigido evitando promessa de resultado,
comparação com concorrentes, linguagem mercantilista ou estatísticas não
informadas. Ao editar textos, mantenha esse cuidado — especialmente nas
páginas de serviço, blog e no formulário.

## Acessibilidade e performance

- Navegação e formulário totalmente operáveis por teclado, com
  `:focus-visible` customizado.
- `prefers-reduced-motion` respeitado (animações desativadas quando
  solicitado pelo usuário).
- Imagens não foram incluídas nesta entrega (nenhuma foto real foi
  fornecida) — ao adicionar imagens, use `next/image` para otimização
  automática.
- Fontes carregadas via `next/font` (self-hosted pelo Next, sem layout
  shift).

## Testes de build realizados

`npm run build` foi executado com sucesso, gerando as 34 rotas estáticas
(páginas institucionais, 7 páginas de serviço, 10 artigos de blog,
`sitemap.xml` e `robots.txt`) mais a rota dinâmica `/api/leads`.
