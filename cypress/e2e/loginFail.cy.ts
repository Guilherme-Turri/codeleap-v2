///<reference types="cypress" />
describe('Login fail', ()=>{
  beforeEach(() => {
    cy.visit('https://codeleap-v2.vercel.app/')
  })
  it('should try to login with a invalid type email', ()=>{
    cy.title().should('be.equal', 'Login | Codeleap Test')
   cy.get('[type="text"]').type('cypress@');
   cy.get('[type="password"]').type('123');
   cy.document().contains('Please fill in a valid email').should('exist')

  })
  it('should enter', ()=>{
    cy.visit('https://codeleap-v2.vercel.app/')
   cy.get('[type="text"]').type('cypress@test.com');
   cy.get('[type="password"]').type('123');
   cy.contains('Enter').click();
   cy.wait(5000) 
   cy.contains('Invalid Email/Password').should('be.visible')
  })
})