describe('test1 open page and verify page title', () => {
  it('visit', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    cy.title().should('eq', 'TodoMVC')
  })
})