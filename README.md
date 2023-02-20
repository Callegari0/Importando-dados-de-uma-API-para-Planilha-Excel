# Importando-dados-de-uma-API-para-Planilha-Excel
Projeto capaz de acessar os dados de uma API (nesse caso, está sendo usada a do GitHub) e passar os dados para uma planilha Excel que será criada e atualizada com esse mesmo script.

Para utilizar este projeto você precisará ter o Node instalado.

Após instalar o Node, basta seguir estes passos:

1. Baixe os arquivos disponibilizados nesse repositório e coloque-os em um local de fácil acesso.

2. Acesse a pasta na qual o "script.js" está através do prompt de comando de sua preferência.

3. Digite no prompt o código: node script

4. Após esses procedimentos, será criado um arquivo xlsx (excel) na pasta onde o script está localizado e nele estarão alguns dados provenientes da API do GitHub, separados por colunas (Login, Id, URL do Perfil).

5. Caso esse script seja executado novamente, sem o nome do arquivo no código e o local dele, após ser gerado, serem alterados, será como se fosse feito um "refresh" e os dados serão atualizados no mesmo arquivo, sem a criação de um novo.
