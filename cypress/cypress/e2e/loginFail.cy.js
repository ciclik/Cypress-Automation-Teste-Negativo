describe('Teste negativo de login no LinkedIn', () => {
  it('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.visit('https://www.linkedin.com/login');

    // Preenche o campo de email com um valor inválido
    cy.get('#username').type('email-invalido@hotmail.com');

    // Preenche o campo de senha com um valor inválido
    cy.get('#password').type('senha-invalida');

    // Clica no botão "Entrar"
    cy.get('.btn__primary--large').click();

    // Verifica se a mensagem de erro é exibida corretamente
    cy.get('#error-for-password').should('be.visible')
      
  });
}); 
