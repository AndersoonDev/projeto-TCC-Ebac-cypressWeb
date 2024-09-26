/// <reference types='cypress' />

import { faker } from '@faker-js/faker'

let dados 

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
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        cy.fixture("endereco").then(dadosEndereco => {
            dados = dadosEndereco
        })
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(dados[1].nome)
        cy.get('#billing_last_name').clear().type(endereco.sobrenone)
        cy.get('#billing_company').clear().type(endereco.empresa)
        cy.get('#select2-billing_country-container').click().type(endereco.país + '{enter}')
        cy.get('#billing_address_1').clear().type(endereco.rua)
        cy.get('#billing_address_2').clear().type(endereco.numero)
        cy.get('#billing_city').clear().type(endereco.cidade)
        cy.get('#select2-billing_state-container').click().type(endereco.estado)
        cy.get('#billing_postcode').clear().type(endereco.cep)
        cy.get('#billing_phone').clear().type(endereco.telefone)
        cy.get('#billing_email').clear().type(endereco.email)
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('contain', '.')
    });

    it('Deve fazer cadastro de endereço de entrega com sucesso - usando arquivo de dados', () => {
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    
});