class EnderecoFaturamento {

    editarEnderecoFaturamento(nome, sobrenome, empresa, país, rua, numero, cidade, estado, cep, telefone, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(país + '{enter}')
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    }

    editarEnderecoEntrega(nome, sobrenome, empresa, país, rua, numero, cidade, estado, cep){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > h3').should('be.visible')
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').click().type(país + '{enter}')
        cy.get('#shipping_address_1').clear().type(rua)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    }

}

export default new EnderecoFaturamento()


