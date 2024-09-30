/// <reference types='cypress' />

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com',{log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')    
    });

    it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
        cy.get('#username').type(perfil.email)
        cy.get('#password').type(perfil.senha,{log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });

    it('Deve fazer login com sucesso - Usando fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.email)
            cy.get('#password').type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
        })
    });

    it('Deve exibir uma mensagem de erro ao inserir email inválido', () => {
        cy.get('#username').type('111111@teste.com')
        cy.get('#password').type('teste@teste.com',{log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('12345678',{log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')
    })
});