/// <reference types="cypress" />
describe('Navigation - No user Logged', () => {
  it('should visit login page', () => {
    cy.visit('https://codeleap-v2.vercel.app/')
    cy.title().should('be.equal', 'Login | Codeleap Test')
  })
  it('should visit login page and navigate to register', () => {
    cy.visit('https://codeleap-v2.vercel.app/')
    cy.get('a').click()
    cy.title().should('contain', 'Register')
  })
  it('should visit register page and navigate to login', () => {
    cy.visit('https://codeleap-v2.vercel.app/register')
    cy.get('a').click()
    cy.title().should('contain', 'Login')
  })
  it('should visit a wrong url and go to Not Found Page. After click in navigation button, must go to login page', () => {
    cy.visit('https://codeleap-v2.vercel.app/wrongwrong')
    cy.title().should('contain', 'Not Found')
    cy.get('a').click()
    cy.title().should('be.equal', 'Login | Codeleap Test')
  })
  it('should try to go home page, but must stay in login page, because user is not logged in', () => {
    cy.visit('https://codeleap-v2.vercel.app/home')
    cy.title().should('be.equal', 'Login | Codeleap Test')
  })
})