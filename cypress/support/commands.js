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

import { faker } from '@faker-js/faker'

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
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
  });