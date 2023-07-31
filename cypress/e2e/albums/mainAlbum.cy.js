/// <reference types="cypress" />

describe('Enter website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays 100 album covers', () => {
    // Uso el comando `cy.get()` para obtener todos los elementos que hagan match a ese selector.
    // Después, uso `should` Para asegurar que hay 100 elementos.
    cy.get('#counter').should('contain', '100')
  })

  it('Does the search works?', () => {
    // Creo una variable con un valor aleatorio para realizar la busqueda, en este caso 'ae'.
    // Uso el comando `cy.get()` para obtener el elemento que haga match a ese selector.
    // Después, uso `type` para escribir el valor de la variable en el elemento.
    // Por último, uso `should` Para asegurar que hay menos de 100 elementos.
    const randomValue = 'ae'
    cy.get('#searchBar').type(randomValue)
    cy.get('#counter').should('not.contain', '100')
  })

  it('Navigates to the album page', () => {
    // Uso el comando `cy.get()` para obtener el elemento que haga match a ese selector.
    // Después, uso `click` para hacer click en el elemento.
    // Por último, uso `should` Para asegurar que la url contiene '/album/'.
    cy.get("#album-1").first().click();
    cy.url().should('include', '/album/1')
  })
})
