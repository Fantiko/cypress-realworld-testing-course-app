describe('Home page', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
      cy.wait(1000)
  
  
  
    })
  
    it('it allows the user to subscribe to a email list', () => {
          cy.getByData('email-input').type('stefan@ail.com')
          cy.getByData('submit-button').click()
          cy.getByData('success-message').should('exist').contains('stefan@ail.com')
      })
    
    it('does NOT allow a invalid number adress', ()=>{
      cy.getByData('email-input').type('stefan')
      cy.getByData('submit-button').click()
      cy.getByData('success-message').should('not.exist')

    })

    it.only('does NOT allow an already subscribed email', ()=>{
      cy.getByData('email-input').type('john@example.com')
      cy.getByData('submit-button').click()
      cy.getByData('server-error-message').should('exist').contains('john@example.com')

    })




  
  })