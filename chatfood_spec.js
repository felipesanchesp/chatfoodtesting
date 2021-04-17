describe('ChatFoodTesting', () => {
	it('Gets, types and asserts', () => {
	  cy.visit('https://www.themoviedb.org/')
  
	  cy.contains('TV Shows').click()
      .click(cy.get('.k-animation-container > .k-group > .k-first > .k-link'))
  
	  // Should be on a new URL which includes '/tv'
	  cy.url().should('include', '/tv')


      cy.contains('Popular TV Shows')
      cy.get('#page_1 > :nth-child(2)').click()
      
      // Should be on a new URL which includes '/tv'
	  cy.url().should('include', '/tv/71712-the-good-doctor')

       
        cy.get('.top_billed > h3') //Seies Cast
        cy.contains('Series Cast')
        cy.get('h3 > bdi') //Seasons
        cy.contains('Current Season')
        cy.get('.review > .menu > h3') //Social
        cy.get('#reviews')
        cy.get('#discussions')
      
	})
  })