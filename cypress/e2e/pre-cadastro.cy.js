/// <reference types='cypress' />

import { faker } from '@faker-js/faker'

describe('Funcionalidade pré-cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve completar o pre-cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > [href="http://lojaebac.ebaconline.art.br/minha-conta/edit-account/"]').click()
        cy.get('#account_first_name').clear().type(faker.person.firstName(faker.internet.email()))
        cy.get('#account_last_name').clear().type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    })  
    it('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        
    });
    
    it('Deve exibir mensagem de erro ao não inserir o sobrenome', () => {
        
    });
    
    it('Deve exibir mensagem de erro ao não inserir o nome', () => {
        
    });

    it('Deve exibir mensagem de erro se não inserir o nome e sobrenome', () => {
        
    });
})