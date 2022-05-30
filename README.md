# Audaces Manager Projeto DEVInHouse

## Objetivos do Projeto

1 - Uma tela de Dashboard contendo 3 cards: Total de coleções (Exibir o total de coleções cadastradas no json-server) , modelos (Exibir total de modelos) e média de orçamento por coleção (Soma de todos os orçamentos das coleções / total de coleções).

2 - A tela  de Dashboard deve conter uma tabela contendo os 5 maiores orçamentos dentre as coleções, a tabela deve ser formada pelas colunas de Código da Coleção (ColeçãoID), Nome da Coleção, Orçamento e Responsável, ela deve estar ordenada do maior para o menor valor em orçamento.

3 - Uma tela de Listagem de Coleções (consumir rota /colecoes do json-server) contendo uma tabela com as colunas ColecaoID, nome da coleção, estação + lançamento (deve ser um dado combinado entre as propriedades) e responsável, além do botão Criar Coleção que redireciona o usuário para tela de cadastro de coleção. Além disso, as linhas da tabela deverão ser clicáveis e o clique na linha deve redirecionar o usuário para Editar Coleção. Seguir layout conforme o mockup disponibilizado.

4 - Uma tela de Cadastro de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento . Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /colecoes do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

5 - Uma tela de Edição de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento. Essa tela precisa receber um parâmetro na rota para identificar que coleção o usuário deseja editar, mostrar no formulário os dados da coleção ao carregar as informações sobre ela. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /colecoes/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Coleções. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

6 - Uma tela de Listagem de Modelos (consumir rota /modelos do json-server) contendo uma tabela com as colunas ModeloID, nome do modelo, coleção relacionada e responsável, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo. Além disso, as linhas da tabela deverão ser clicáveis e o clique na linha deve redirecionar o usuário para Editar Modelo. Seguir layout conforme o mockup disponibilizado.

7 - Uma tela de Cadastro de Modelos, contendo um formulário com os campos nome, responsável, tipo (tag select do HTML com as opções: bermuda, biquíni, bolsa, boné, calça, calçados, camisa, chapéu, saia.), coleção relacionada (listar todas as coleções cadastradas no json-server) e dois “radio group” para verificar se o modelo possui bordado e se possui estampa. Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /modelos do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

8 - Uma tela de Edição de Modelos, contendo um formulário com os mesmos campos presentes no Cadastro de Modelos. Essa tela precisa receber um parâmetro na rota para identificar que modelo o usuário deseja editar, mostrar no formulário os dados do modelo ao carregar as informações sobre ele. Ao clicar no botão salvar, chamar evento de onSubmit e atualizar a unidade via PUT na rota /modelos/:id do json-server, o botão “Cancelar” fará com o que o usuário seja enviado para Listagem de Modelos, além disso um botão Excluir deverá aparecer na tela e o clique será chamado o método DELETE na rota /modelos/:id para remover o modelo, ao fim da exclusão retornar o usuário para “Listagem de Modelos”. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.
 

## Como rodar a aplicação

Inicialmente você tera que ter o NodeJS instalado,e depois instalar o json-server (npm install -g json-server) globalmente.

Faça o clone via github, você terá que ter o Angular CLI (npm install -g @angular/cli) instalado em sua maquina. Rodar no terminal o comando ng serve para rodar a aplicação e json-server --watch db.json, para rodar a fakeAPI.

## Exemplo da Aplicação
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo01.PNG?raw=true' alt='Exemplo'>
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo02.PNG?raw=true' alt='Exemplo'>
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo03.PNG?raw=true' alt='Exemplo'>
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo04.PNG?raw=true' alt='Exemplo'>
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo05.PNG?raw=true' alt='Exemplo'>
<img src='https://github.com/feliperi0s/projetoAudaces/blob/master/examples/exemplo06.PNG?raw=true' alt='Exemplo'>

Todo feedback é bem-vindo. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
