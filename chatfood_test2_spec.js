describe('ChatFoodTesting2', () => {
	it('Gets, types and asserts', () => {
	  cy.visit('https://www.themoviedb.org/')
  
	  cy.contains('Movies').click()
      .click(cy.get('.k-animation-container > .k-group > .k-last > .k-link'))

	  // Should be on a new URL which includes '/movie/top-rated'
	  cy.url().should('include', '/movie/top-rated')


        //TO COMPLETE TESTING - DROPDOWN LIST//
        .select('5', 'Release Date Ascending')
        cy.contains('Rating Descending').click()
        cy.get('select').select('[data-offset-index="5"]')

        
        cy.get(':nth-child(2) > .name').click()
        cy.get('[data-value="99"]').click() //Genre - Documentary

        cy.get(':nth-child(1) > .apply > p.load_more > .no_click').click() //Search button
        cy.wait (2000)
        cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').click() //First movie selected

        cy.get('.media > .menu > ul > :nth-child(2)') //Videos field validation
        cy.get('#videos > span') //Number of videos presenting
        cy.contains('Videos 1') // TOTAL NUMBER OF VIDEOS
        cy.get('#videos').click() //amount of Videos validation
        cy.get('.view_all > a').click() //Check ALL Videos page
        cy.get('.selected > span') //Check the quantity of videos is the same as per last page

        //Showing all of the video options and validating its quantity to make sure it matches with the number we've checked before
        cy.get('#video_menu > :nth-child(1)')
        cy.contains('Trailers 1')
        cy.get('#video_menu > :nth-child(2)')
        cy.contains('Teasers 0')
        cy.get('#video_menu > :nth-child(3)')
        cy.contains('Clips 0')
        cy.get('#video_menu > :nth-child(4)')
        cy.contains('Behind the Scenes 0')
        cy.get('#video_menu > :nth-child(5)')
        cy.contains('Bloopers 0')
        cy.get('#video_menu > :nth-child(6)')
        cy.contains('Featurettes 0')
        
	})
  })