/// <reference types='cypress' />

import { faker } from '@faker-js/faker' 
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
const numero = Math.floor(Math.random() * 3)


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.email, dados.senha)
        });        
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(faker.person.firstName())
        cy.get('#shipping_last_name').clear().type(faker.person.lastName())
        cy.get('#select2-shipping_country-container').click().type('Brasil{enter}')
        cy.get('#shipping_address_1').clear().type(faker.location.street({format: 'avenida'}))
        cy.get('#shipping_address_2').clear().type(faker.number.int({ min: 1, max: 1000 }))
        cy.get('#shipping_city').clear().type('São Paulo')
        cy.get('#select2-shipping_state-container').click().type('São Paulo{enter}')
        cy.get('#shipping_postcode').clear().type(faker.location.zipCode({ format: '#####-###' }))
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
    
    it('Deve fazer cadastro de entrega com sucesso - usando Page Objects', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[numero].nome,
            dadosEndereco[numero].sobrenome,
            dadosEndereco[numero].nomeEmpresa,
            dadosEndereco[numero].país,
            dadosEndereco[numero].rua,
            dadosEndereco[numero].numero,
            dadosEndereco[numero].cidade,
            dadosEndereco[numero].estado,
            dadosEndereco[numero].cep
        )
    });
    

    it('Deve editar cadastro de faturamento com sucesso - usando Fixture', () => {
       
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(dadosEndereco[numero].nome)
        cy.get('#billing_last_name').clear().type(dadosEndereco[numero].sobrenome)
        cy.get('#billing_company').clear().type(dadosEndereco[numero].nomeEmpresa)
        cy.get('#select2-billing_country-container').click().type(dadosEndereco[numero].país + '{enter}')
        cy.get('#billing_address_1').clear().type(dadosEndereco[numero].rua)
        cy.get('#billing_address_2').clear().type(dadosEndereco[numero].numero)
        cy.get('#billing_city').clear().type(dadosEndereco[numero].cidade)
        cy.get('#select2-billing_state-container').click().type(dadosEndereco[numero].estado + '{enter}')
        cy.get('#billing_postcode').clear().type(dadosEndereco[numero].cep)
        cy.get('#billing_phone').clear().type(dadosEndereco[numero].telefone)
        cy.get('#billing_email').clear().type(dadosEndereco[numero].email)
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de endereço de faturamento com sucesso - usando Page Objects', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[numero].nome,
            dadosEndereco[numero].sobrenome,
            dadosEndereco[numero].nomeEmpresa,
            dadosEndereco[numero].país,
            dadosEndereco[numero].rua,
            dadosEndereco[numero].numero,
            dadosEndereco[numero].cidade,
            dadosEndereco[numero].estado,
            dadosEndereco[numero].cep,
            dadosEndereco[numero].telefone,
            dadosEndereco[numero].email
        )
    });


    it.only('Deve exibir um erro ao inserir cep inválido', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(faker.person.firstName())
        cy.get('#shipping_last_name').clear().type(faker.person.lastName())
        cy.get('#select2-shipping_country-container').click().type('Brasil{enter}')
        cy.get('#shipping_address_1').clear().type(faker.location.street({format: 'avenida'}))
        cy.get('#shipping_address_2').clear().type(faker.number.int({ min: 1, max: 1000 }))
        cy.get('#shipping_city').clear().type('São Paulo')
        cy.get('#select2-shipping_state-container').click().type('São Paulo' + '{enter}')
        cy.get('#shipping_postcode').clear().type('0000000')
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Digite um CEP válido.')
    });    
});