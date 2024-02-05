// cypress/integration/forgot-password.spec.js

describe('Forgot Password Functionality', () => {
  it('should submit Forgot Password form with a different email', () => {
    cy.visit('https://dat251.netlify.app/sign-in');

    // Click on the "Forgot Password?" link
    cy.contains('Forgot Password?').click();

    // Verify that the Forgot Password page is displayed
    cy.contains('Forgot Password').should('be.visible');

    // Clear the email input and type a different email
    cy.get('input[name="email"]').clear().type('itsmeskm99@gmail.com');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that the "Check your email" page is displayed
    cy.contains('Check your email').should('be.visible');
  });
});
