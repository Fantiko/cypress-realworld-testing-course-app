describe('Home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
    cy.wait(1000)


  })

  context('Hero section', () =>{
    
      it('the h1 contains the correct text', () => {
        cy.get('[data-test="hero-heading"] > .block')
          .should('exist')
          .contains('Testing Next.js Applications with Cypress')
     
    
        })
    
        it('the features on the home page are correct', ()=>{
          cy.get('dt').should('be.visible').eq(0).contains('4 Courses')
          cy.get("dt").eq(1).contains("25+ Lessons")
          cy.get("dt").eq(2).contains("Free and Open Source")
        })

  })    

  context('Courses section',()=>{
    it('Couse: testing your first Next.js aplication', ()=>{
      cy.getByData('course-0').find('a').eq(3).click()
      cy.location('pathname').should('eq','/testing-your-first-application')

    })

    it('Couse: Testing Foundations', ()=>{
      cy.getByData('course-1').find('a').eq(3).click()
      cy.location('pathname').should('eq','/testing-foundations')

    })

    it('Couse: Cypress Fundamentals', ()=>{
      cy.getByData('course-2').find('a').eq(3).click()
      cy.location('pathname').should('eq','/cypress-fundamentals')

    })




  })







})