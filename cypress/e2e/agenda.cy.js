/// <reference types="cypress" />

describe('Teste para inclusão, alteração e remoção de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deverá incluir um contato', () => {
        cy.get('.adicionar').click()
    })
    
    it('Deverá editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })
    
    it('Deverá excluir um contato', () => {
        cy.get('.delete').click()
    })
})