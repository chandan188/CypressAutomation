
describe('Suite Name', ()=>{

    it('Test1 for Login', ()=>{

      cy.visit("https://www.facebook.com/")
      cy.get("[data-cookiebanner = 'accept_button']").click();
      cy.contains('Facebook')

    })

    // it('Test2 for LoginPage Title verification', ()=>{


       

    // })

    // it('Test3 for Homepage URL verification', ()=>{

        

    // })
})