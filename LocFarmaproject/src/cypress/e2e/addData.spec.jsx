describe('Add Data Test', () => {
    it('should add data to Firestore', () => {
      cy.visit('/add-data'); // Substitua pelo caminho do seu componente de adicionar dados
  
      cy.get('input').type('Test Data');
      cy.get('button').click();
  
      // Verifique se os dados foram adicionados (ajuste conforme sua UI)
      cy.contains('Data added successfully').should('be.visible');
    });
  });

  