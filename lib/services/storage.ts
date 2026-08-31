/**
 * ARMAZENAMENTO PRIVADO DE DOCUMENTOS
 * ------------------------------------------------------------------
 * Os documentos enviados pelo formulário (notificação, AIT, CNH etc.)
 * contêm dados pessoais sensíveis e NUNCA devem ficar acessíveis por
 * URL pública sem autenticação.
 *
 * Esta função é um stub que representa o ponto de integração com um
 * provedor de armazenamento privado (ex.: Amazon S3 com bucket privado
 * e URLs assinadas, Google Cloud Storage com IAM, ou storage do próprio
 * CRM). Nenhum arquivo é persistido nesta versão do projeto.
 *
 * Ao implementar:
 * 1. Validar novamente no servidor a extensão, o MIME type e o tamanho
 *    de cada arquivo (a validação client-side é apenas UX, nunca a
 *    única barreira de segurança);
 * 2. Gerar nomes de arquivo aleatórios (não usar o nome original) para
 *    evitar colisão e vazamento de metadados;
 * 3. Armazenar em bucket/contêiner privado, sem listagem pública;
 * 4. Gerar URLs assinadas de curta duração apenas para os usuários
 *    autorizados (equipe interna) quando necessário acessar o arquivo;
 * 5. Registrar logs de acesso (quem acessou, quando);
 * 6. Definir política de retenção e exclusão de dados conforme a LGPD.
 * ------------------------------------------------------------------
 */
export type StoredFileRef = {
  originalName: string;
  sizeBytes: number;
  mimeType: string;
};

export async function storeLeadFilesPrivately(
  files: { name: string; size: number; type: string }[]
): Promise<StoredFileRef[]> {
  // Stub: nesta versão apenas registramos metadados, sem persistir binários.
  return files.map((file) => ({
    originalName: file.name,
    sizeBytes: file.size,
    mimeType: file.type,
  }));
}
