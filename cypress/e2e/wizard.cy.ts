describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/headless-wizard/')

    cy.findByTestId('card-button-0').findByRole('button').click()
    cy.findByTestId('card-button-1').findByRole('button').click()
    cy.findByTestId('card-button-2').findByRole('button').click()
    cy.findByTestId('card-button-3').findByRole('button').click()
    cy.findByTestId('card-button-4').findByRole('button').click()
    cy.findByTestId('card-button-5').findByRole('button').click()

    cy.findByRole('button', { name: 'RESET' }).click()

    cy.findAllByRole('button').should('have.length', 7)
  })
})
