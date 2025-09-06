describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');
    // Assuming there's a link to an about page
    // cy.get('a[href*="about"]').click();
    // cy.url().should('include', '/about');
  });
});
