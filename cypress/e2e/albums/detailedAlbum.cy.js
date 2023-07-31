/// <reference types="cypress" />

describe('Enter website', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/album/1')
  })


  it('shows the title', () => {
    // Uso el comando `cy.get()` para obtener todos los elementos que hagan match a ese selector.
    // Después, uso `should` Para asegurar que contiene la palabra Title: .
    // Si lo encuentra, entonces si muestra el titulo.
    cy.get('#album-title').should('contain', 'Title:')
  })

  it('open the modal when clicking', () => {
     // Uso el comando `cy.get()` para obtener el elemento que haga match a ese selector.
     // Después, uso `click` para hacer click en el elemento.
     // Por último, uso `should` Para asegurar que el modal esta abierto.
     cy.get('#photo-1').click();
     cy.get('div[role="dialog"]').should("be.visible");
  })
})
