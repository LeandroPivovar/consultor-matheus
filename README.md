# Consultor Matheus Fernandes

Site institucional estático em português para consulta de seguros automotivos. Arquivos públicos em `dist/`, com configuração para importação na Vercel usando preset Other, sem instalação de dependências ou build.

## Dados reais

Nome: Consultor Matheus Fernandes. Serviço de seguros automotivos informado pelo usuário. Telefone: **+55 21 99469-0945**. Endereço: **Avenida Juvenal Figueiredo, 2945, Colubandê, São Gonçalo – RJ, CEP 24744-560**. O perfil comercial informa atendimento 24 horas; o site permite enviar mensagem a qualquer hora e orienta combinar a disponibilidade, sem prometer retorno imediato ou assistência securitária 24h.

Não foram inventados seguradoras parceiras, preços, aceitação, garantias, coberturas contratadas, experiência, clientes, depoimentos, equipe ou registro SUSEP. A cotação e a renovação são entradas de consulta. Orientações gerais sobre proposta, franquia e cobertura foram conferidas na [fonte primária SUSEP](https://www.gov.br/susep/pt-br/assuntos/meu-futuro-seguro/seguros-previdencia-e-capitalizacao/seguros/seguro-de-automoveis), ligada no FAQ. Não há promessa de contratação automática.

O mapa é um iframe interativo do Google usando o endereço fornecido. Endereço e telefone são links funcionais. O formulário não salva dados: prepara objetivo, modelo opcional e uso do veículo na prévia de uma mensagem, e abre o WhatsApp para revisão e envio. Nenhum CPF, placa, pagamento ou informação sensível é solicitado.

## Design

Skills aroe-sites e Taste. Direção **Dressed as something else / borrowed-category**, seed **430109757**, sem sorteios adicionais. Categoria emprestada: revista automotiva. Fotografia grande, conteúdo como pauta sobre a rotina do carro, consultas em menu e processo editorial. Elemento funcional: composição de mensagem a partir do uso do veículo.

Paleta sorteada rosa/lima com preto, duas famílias tipográficas locais: Panchang e Switzer. Hero substituída pela referência obrigatória Aroe: foto integral, overlay preto, cabeçalho sobreposto, h1 de duas linhas à esquerda, palavra em itálico, descrição e dois botões retangulares. Switzer na hero conserva as proporções normais exigidas. Contornos apenas nos CTAs da abertura. Marca textual criada para esta apresentação; não representa um logotipo original fornecido.

Fotografias gratuitas do Pexels: *A Car on a Road*, Garvin St. Villier; *Modern Car in Black Interior*, Mike Bird; *A Car in a City*, Dante Juhasz; *Retro Car Driving in Mountain Landscape on Sunset*, Tolga Aslantürk. São ilustrativas e não representam clientes ou veículos segurados. Títulos, fontes, licenças, usos e tipografia em [`dist/assets/credits.md`](dist/assets/credits.md), ligado no rodapé. O conjunto de floresta sorteado não foi usado por não representar o assunto. Sem vídeo próprio: transição lenta entre duas fotos da hero, com pausa em aba oculta e fallback de movimento reduzido.

## Verificação e publicação

Lint, inspeção real pelo Taste em desktop/tablet/celular, análise de capturas e QA funcional em 360, 390, 768 e 1440 pixels. Verificações: imagens/fontes carregadas, recursos HTTP 200, âncoras, menu, Escape, FAQ, seleção de assunto e uso, mensagem composta, URL de WhatsApp, ligação, mapa real, arquivo direto e movimento reduzido. Relatórios em `.taste-skill/`, excluídos do Git/Vercel, assim como os metadados do CRM.

Resultado final: lint 0 falhas/0 avisos; inspeção 0 falhas/1 aviso (sem vídeo próprio, com transição fotográfica). Dez capturas finais revisadas. QA aprovado sem overflow ou erros no console; mapa e pin renderizados. Autocrítica: design 7,7; usabilidade 8; criatividade 7; conteúdo 7,2; média 7,6. Principal limitação visual: material de banco no lugar de fotografias reais do consultor.

Commit e push autorizados. Usar o repositório vinculado ao cadastro do CRM e reutilizar a integração GitHub → Vercel. Push não comprova publicação: a URL final precisa ser retornada e verificada pelo provedor.
