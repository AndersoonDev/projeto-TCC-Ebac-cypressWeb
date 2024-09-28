/// <reference types='cypress' />

import { faker } from '@faker-js/faker' 
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
const numero = Math.floor(Math.random() * 3)


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(usuario => {
            cy.login(usuario.email, usuario.senha)
        });
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
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

    it('Deve editar cadastro de faturamento com sucesso - usando arquivo de dadosEnderecoEndereco', () => {
       
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(dadosEndereco[0].nome)
        cy.get('#billing_last_name').clear().type(dadosEndereco[0].sobrenome)
        cy.get('#billing_company').clear().type(dadosEndereco[0].nomeEmpresa)
        cy.get('#select2-billing_country-container').click().type(dadosEndereco[0].país + '{enter}')
        cy.get('#billing_address_1').clear().type(dadosEndereco[0].rua)
        cy.get('#billing_address_2').clear().type(dadosEndereco[0].numero)
        cy.get('#billing_city').clear().type(dadosEndereco[0].cidade)
        cy.get('#select2-billing_state-container').click().type(dadosEndereco[0].estado + '{enter}')
        cy.get('#billing_postcode').clear().type(dadosEndereco[0].cep)
        cy.get('#billing_phone').clear().type(dadosEndereco[0].telefone)
        cy.get('#billing_email').clear().type(dadosEndereco[0].email)
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de endereço de entrega com sucesso - usando page objects', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].nomeEmpresa,
            dadosEndereco[1].país,
            dadosEndereco[1].rua,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    
});