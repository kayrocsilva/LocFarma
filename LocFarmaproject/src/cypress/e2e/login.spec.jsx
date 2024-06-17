// cypress/e2e/login.spec.js
describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      cy.visit('/login'); // Substitua pelo caminho do seu componente de login
  
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/perfil'); // Substitua pelo caminho esperado após o login
      cy.contains('Welcome').should('be.visible'); // Ajuste conforme necessário
    });
  });
  