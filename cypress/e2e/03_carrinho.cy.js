/// <reference types='cypress' />


describe('Funcionalidade carrinho', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.login('aluno_ebac@teste.com', 'teste@teste.com');
});

    it.only('Deve selecionar um produto da loja', () => {
        cy.get('#primary-menu > .menu-item-629 > [href="http://lojaebac.ebaconline.art.br/produtos/"]').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.product_title').should('be.visible')
    });

    it('Deve selecionar um produto da loja e colocar na lista de desejos', () => {
        cy.get('#primary-menu > .menu-item-629 > [href="http://lojaebac.ebaconline.art.br/produtos/"]').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button').click()
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').click()
        cy.get('.remove > .fa').click()
        cy.get('.woocommerce-message').should('contain', 'Produto removida com sucesso.')
        cy.get(':nth-child(2) > .text-skin > .count_wishlist').should('contain', '0')
    });

    it('Deve adicionar um item ao carrinho com sucesso', () => {
        cy.get('#primary-menu > .menu-item-629 > [href="http://lojaebac.ebaconline.art.br/produtos/"]').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1')
    });

    it('Deve adicionar um item ao carrinho e excluir com sucesso', () => {
        cy.get('#primary-menu > .menu-item-629 > [href="http://lojaebac.ebaconline.art.br/produtos/"]').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .mini-cart-items').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.remove > .fa').click()
        cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '0')
    });

    it('Deve adicionar um item ao carrinho e fazer checkout com sucesso', () => {
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
        cy.get('.page-title').should('be.visible')
        cy.get('.page-title').should('contain', 'Pedido recebido')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })

});
