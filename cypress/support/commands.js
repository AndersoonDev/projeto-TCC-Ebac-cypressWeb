// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > [href="http://lojaebac.ebaconline.art.br/minha-conta/edit-account/"]').click()
    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
  });


Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email)
    cy.get('#password').type(senha,{log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Anderson')
  });

  Cypress.Commands.add('loginProdutos', (email, senha) => {
      cy.visit('minha-conta')
      cy.get('#username').type(email)
      cy.get('#password').type(senha,{log: false})
      cy.get('.woocommerce-form > .button').click()
      cy.visit('produtos')
    });

  Cypress.Commands.add('cadastroFaturamento', (nome, sobrenome, país, endereco, numero, cidade, estado, cep) => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > h3').should('be.visible')
    cy.get(':nth-child(2) > .title > .edit').click()
    cy.get('#shipping_first_name').clear().type(nome)
    cy.get('#shipping_last_name').clear().type(sobrenome)
    cy.get('#select2-shipping_country-container').click().type(país +'{enter}')
    cy.get('#shipping_address_1').clear().type(endereco)
    cy.get('#shipping_address_2').clear().type(numero)
    cy.get('#shipping_city').clear().type(cidade)
    cy.get('#select2-shipping_state-container').click().type(estado)
    cy.get('#shipping_postcode').clear().type(cep, {force: true})
    cy.get('.button').click()
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  });