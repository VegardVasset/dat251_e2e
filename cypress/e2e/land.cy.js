// cypress/integration/login.spec.js

describe('Should land in login page', () => {
  it('It should always land on login page', () => {
      cy.visit('https://dat251.netlify.app/sign-in');
      
      cy.contains('Welcome back!').should('be.visible');
      cy.contains('Please enter your credentials to sign in!').should('be.visible');
  });
});
