describe('Home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')



  })

  it('the h1 contains the correct text', () => {
    cy.get('[data-test="hero-heading"] > .block')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress')
 

    })

    it.only('the features on the home page are correct', ()=>{
      cy.get('dt').should('be.visible').eq(0).contains('4 Courses')
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })



})