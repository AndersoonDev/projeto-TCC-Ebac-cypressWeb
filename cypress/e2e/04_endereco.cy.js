/// <reference types='cypress' />

import { faker } from '@faker-js/faker'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then(dados => {
            cy.login(dados.email, dados.senha)
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

    it('Deve fazer cadastro de faturamento com sucesso - usando comandos customizados', () => {
        cy.cadastroFaturamento(faker.person.firstName(), faker.person.lastName(), 'Brasil', faker.location.street({format: 'avenida'}), faker.number.int({ min: 1, max: 1000 }), 'São Paulo', faker.location.zipCode({ format: '#####-###' }))
    })

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        cy.fixture('endereco').then(dadosEndereco => {            
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
            cy.get(':nth-child(2) > .title > h3').should('be.visible')
            cy.get(':nth-child(1) > .title > .edit').click()
            cy.get('#billing_first_name').clear().type(dadosEndereco.nome)
            cy.get('#billing_last_name').clear().type(dadosEndereco.sobrenone)
            cy.get('#billing_company').clear().type(dadosEndereco.nomeEmpresa)
            cy.get('#select2-billing_country-container').click().type(dadosEndereco.país + '{enter}')
            cy.get('#billing_address_1').clear().type(dadosEndereco.rua)
            cy.get('#billing_address_2').clear().type(dadosEndereco.numero)
            cy.get('#billing_city').clear().type(dadosEndereco.cidade)
            cy.get('#select2-billing_state-container').click().type(dadosEndereco.estado)
            cy.get('#billing_postcode').clear().type(dadosEndereco.cep)
            cy.get('#billing_phone').clear().type(dadosEndereco.telefone)
            cy.get('#billing_email').clear().type(dadosEndereco.email)
            cy.get('.button').click()
            cy.get('.woocommerce-message').should('contain', '')
            
        })
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