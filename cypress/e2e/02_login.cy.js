/// <reference types='cypress' />

describe('Fazer login com sucesso', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
it('Fazer login com sucesso', () => {
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    
    });
});