// cypress/integration/login.spec.js

describe('Login Functionality', () => {
  it('should show errors for missing username and password', () => {
    cy.visit('https://dat251.netlify.app/sign-in');

    cy.get('button[type="submit"]').click();

    cy.get('.form-explain').should('be.visible').and('contain', 'Please enter your user name');
    cy.get('.form-explain').should('be.visible').and('contain', 'Please enter your password');
  });

  it('should show error for missing password', () => {
    cy.visit('https://dat251.netlify.app/sign-in');

    cy.get('input[name="userName"]').type('admin');

    cy.get('button[type="submit"]').click();

    cy.get('.form-explain').should('be.visible').and('contain', 'Please enter your password');
  });

  it('should log in with valid credentials', () => {
    cy.visit('https://dat251.netlify.app/sign-in');

    cy.get('input[name="userName"]').type('admin');
    cy.get('input[name="password"]').type('123Qwe');

    cy.get('button[type="submit"]').click();

    cy.contains('Sales Overview').should('be.visible');
  });
});
