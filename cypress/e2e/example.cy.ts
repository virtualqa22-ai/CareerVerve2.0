describe('Homepage', () => {
  it('should display the main heading', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('h1', 'Frontend Page').should('be.visible');
  });
});
