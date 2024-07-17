describe('test1 open page and verify page title', () => {
  it('visit', () => {
    cy.visit('/');
    cy.title().should('eq', 'TodoMVC')
  })
})