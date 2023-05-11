///<reference types="cypress" />
describe('Register fail', ()=>{
  beforeEach(() => {
    cy.visit('https://codeleap-v2.vercel.app/register')
  })
  it('should try to register with a invalid type email', ()=>{
    cy.title().should('be.equal', 'Register | Codeleap Test')
    cy.get('[placeholder="Name"]').type('cypress');
    cy.get('[placeholder="Email"]').type('cypress@')
    cy.get('[type="password"]').type('123')
   cy.document().contains('Please fill in a valid email').should('exist')
    })
   
  it('should try  to register an user/mail thats already in use', ()=>{
    cy.get('[placeholder="Name"]').type('cypress');
    cy.get('[placeholder="Email"]').type('cypress@test.com')
    cy.get('[type="password"]').type('123')
    cy.get('.sc-blLsxD').click();
    cy.wait(5000) 
   cy.document().contains('This email is already in use by another account').should('exist')
  }) 
})


