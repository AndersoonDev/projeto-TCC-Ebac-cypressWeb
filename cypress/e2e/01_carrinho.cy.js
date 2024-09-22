/// <reference types='cypress' />


describe('Funcionalidade carrinho', () => {
    beforeEach(() => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});
it('Deve adicionar um item ao carrinho com sucesso', () => {
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    cy.get('#primary-menu > .menu-item-629 > [href="http://lojaebac.ebaconline.art.br/produtos/"]').click()
    cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-36').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click();
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    })
});
