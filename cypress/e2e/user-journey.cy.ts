describe('User Journey', () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        cy.wait(1000)
    })

    it('a user can find a course on the home page and complete the course lessons', ()=>{
        cy.getByData('course-0').find('a').eq(3).click()
        cy.location('pathname').should('eq','/testing-your-first-application')
        cy.get('[data-test="next-lesson-button"]').click()
        cy.location('pathname')
            .should('eq','/testing-your-first-application/app-install-and-overview')

        cy.get('[data-test="challenge-answer-0"]').check()

        cy.get('[data-test="next-lesson-button"] > .mx-auto').click()
        cy.location('pathname')
            .should('eq','/testing-your-first-application/installing-cypress-and-writing-our-first-test')

        cy.get('[data-test="challenge-answer-0"]').check()
        cy.get('[data-test="next-lesson-button"] > .mx-auto').click()

        cy.location('pathname')
        .should('eq','/testing-your-first-application/setting-up-data-before-each-test')

        cy.get('[data-test="challenge-answer-0"]').check()
        cy.get('[data-test="next-lesson-button"] > .mx-auto').should('have.text','Complete Course').click()

        cy.location('pathname')
        .should('eq','/')




    })

})