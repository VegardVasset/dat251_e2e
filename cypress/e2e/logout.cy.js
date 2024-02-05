// cypress/integration/login.spec.js

describe('Logout Functionality', () => {
  it('should log out successfully', () => {
    cy.visit('https://dat251.netlify.app/sign-in');
    cy.get('input[name="userName"]').type('admin');
    cy.get('input[name="password"]').type('123Qwe');
    cy.get('button[type="submit"]').click();
    cy.contains('Sales Overview').should('be.visible');

    // Open the dropdown menu
    cy.get('[data-cy="header-username"]').click();

    // Click the "Sign Out" option
    cy.contains('Sign Out').click();

    cy.contains('Sign In').should('be.visible');
  });
});
