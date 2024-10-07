# Projeto Cypress End-to-End
### ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

## TCC EbacShop Projeto final de conclusão do curso EBAC: Teste de Software

**Este repositório contém um projeto de testes end-to-end (E2E) automatizados utilizando a ferramenta Cypress. O objetivo deste projeto é garantir a qualidade e a confiabilidade do sistema através de testes automatizados de ponta a ponta, cobrindo diversos cenários de interação do usuário com a aplicação.**

**Ebac Shop**: http://lojaebac.ebaconline.art.br/

## Frameworks e Bibliotecas utilizados
- **Node.js:** Ambiente de execução para JavaScript no lado do servidor.
- **Cypress:** Ferramenta principal para automação de testes.
- **JavaScript:** Linguagem de programação usada para desenvolver os testes.
- **Node.js:** Ambiente de execução para JavaScript no lado do servidor.
- **faker.js:** Biblioteca para geração de dados aleatórios, simulando usuários e cenários de teste.
- **Mochawesome:** Biblioteca de geração de relatórios em HTML para os testes automatizados.
- **GitHub Actions:** Utilizado para configurar pipelines de integração contínua (CI), executando os testes automaticamente a cada novo commit.

## Cenários Testados
Os cenários foram organizados em três categorias: Caminho feliz, fluxos alternativos e negativos, garantindo uma cobertura de testes ampla para diferentes situações de uso.

## Funcionalidades Testadas
- Pré-cadastro
- Login
- Carrinho
- Produtos
- Faturamento
- Cadastrar Endereço

## Pré-requisitos
- Node.js (>= versão 14)
- Cypress (>= versão 10)
- Git

## Instalação e Configuração
1. Clone o repositório:
``` bash
git clone https://github.com/AndersoonDev/projeto-TCC-Ebac-cypressWeb.git
```
2. Acesse a pasta do projeto:
``` bash
cd seu-projeto
```
3. Instale as dependências:
``` bash
npm install
```
## Como Executar os Testes
1. Para rodar os testes em modo interativo:
``` bash
npx cypress open
```
2. Para rodar os testes em modo headless (no terminal):
``` bash
npx cypress run
```

## Arquivos de Suporte e Fixação
- **fixtures/:**  Armazena dados fixos em arquivos JSON, que são usados para simular inputs e facilitar testes com dados repetitivos.

- **support/commands.js:**  Define comandos customizados do Cypress, como **cy.login()** para simplificar a autenticação em múltiplos testes.

- **support/page-objects/endereco.page.js:**  Define comandos customizados do Cypress, como **EnderecoPage.editarEnderecoFaturamento()** para simplificar a autenticação em múltiplos testes.

## Relatórios de Teste
Os relatórios dos testes são gerados utilizando Mochawesome e estão disponíveis na pasta **reports/html/**. Esses relatórios incluem uma visão detalhada de cada execução, com status de sucesso ou falha para cada teste.

## CI/CD com GitHub Actions
Este projeto utiliza **GitHub Actions** para executar os testes automaticamente a cada novo push. O arquivo de configuração **(.github/workflows/ci.yml)** define as etapas para instalação das dependências, execução dos testes e geração dos relatórios.

## Licença
Este projeto está licenciado sob a MIT License.