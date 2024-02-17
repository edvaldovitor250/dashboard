# Documentação - Teste Técnico

## Índice
1. [Visão Geral](#visão-geral)
2. [Tela do Dashboard](#tela-do-dashboard)
3. [Campos de Filtro](#campos-de-filtro)
4. [Regras de Negócio](#regras-de-negócio)
5. [Funcionamento dos Filtros](#funcionamento-dos-filtros)
6. [Tela - Cliente](#tela---cliente)
7. [Instruções de Inicialização do Projeto](#instruções-de-inicialização-do-projeto)
8. [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral 
A tela do Dashboard apresenta um conjunto de indicadores e gráficos que fornecem insights sobre os dados relevantes para a TechNation. Esta documentação descreve os campos de filtro disponíveis, as regras de negócio aplicáveis e o funcionamento dos filtros.

## Tela do Dashboard 
![Dashboard - Tech-Nation](https://github.com/edvaldovitor250/dashbord/assets/116117189/8a8e2026-863a-45cf-b7b2-6acd17d61e8d)
## Campos de Filtro
A tela do Dashboard possui campos de filtro que permitem ao usuário personalizar a visualização dos dados. Abaixo estão os campos disponíveis:
- **Mês:** Permite selecionar o mês desejado.
- **Trimestre:** Permite escolher o trimestre desejado.
- **Ano:** Permite selecionar o ano desejado.

## Regras de Negócio
Ao aplicar os filtros, há uma regra de negócio que limita a combinação de filtros que podem ser aplicados simultaneamente. As seguintes restrições se aplicam:
- O usuário não pode escolher aplicar o filtro de mês e trimestre ao mesmo tempo.
- A combinação válida é mês e ano OU trimestre e ano.

## Funcionamento dos Filtros
Ao aplicar um filtro, os indicadores e o dashboard serão alterados de acordo com a pesquisa realizada. Se o filtro de trimestre for aplicado, os dados serão somados para os meses correspondentes ao trimestre selecionado.
Exemplo: Se o trimestre 1 for selecionado, os dados de janeiro, fevereiro e março serão somados para gerar os dados exibidos nos indicadores e no dashboard.
![Clientes - Tech-Nation](https://github.com/edvaldovitor250/dashbord/assets/116117189/2dc51901-3dad-420f-ad2f-5f2a741fee54)

## Tela - Cliente
![Dashboards - Tech-Nation](https://github.com/edvaldovitor250/dashbord/assets/116117189/18442912-14d1-4e7a-bb13-0ba9d7344ef2)

Na tela cliente, existem opções de filtro correspondentes ao que o usuário deseja.
### Filtros disponíveis:
- Mês de emissão 📅
- Mês de cobrança 💵
- Mês de pagamento 💳
- Status de notas 📝
Ao aplicar o filtro, a tela ficará assim:
![Dashboards - Tech-Nation ](https://github.com/edvaldovitor250/dashbord/assets/116117189/3170bcf7-4bfc-4559-ba40-aa9cdb90bdd2)

## Instruções de Inicialização do Projeto
1. Para iniciar o projeto, basta abrir o arquivo `index.html` no seu navegador web preferido.
   <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/8b9fb383-d9e5-44b8-9e54-dff95d16fb44" alt="Visual Studio Code - index.html" style="display:block; margin-right:10px;">
2. Em seguida, é recomendado ter a extensão do Live Server instalada no Visual Studio Code:
   <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/88c85725-2358-4f13-b6ed-1e9270f87beb" alt="Extensão Live Server" style="display:block; margin-right:10px;">
3. Após isso, basta clicar no botão "Go Live" para iniciar o servidor local e visualizar o projeto:
   <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/2635408a-c84c-471a-ae64-23182c556615" alt="parte3" style="display:block; margin-right:10px;">



## Tecnologias Utilizadas
| ![HTML5](https://skillicons.dev/icons?i=html) | ![CSS](https://skillicons.dev/icons?i=css) | ![Maven](https://skillicons.dev/icons?i=js) | ![PostgreSQL](https://skillicons.dev/icons?i=jquery) |
| --- | --- | --- | --- |
| HTML | CSS | JavaScript | jQuery |
| 🔖 5 | 🔖 3 | 🔖  ES6 | 🔖3.5.1 |
