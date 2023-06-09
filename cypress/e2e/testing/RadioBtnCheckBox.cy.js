describe("Radio button testing", ()=>{
   /* it("This test case for radio button test", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get("input#female").should("be.visible")
        cy.get("input#male").should("be.visible")

        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")

        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")

    })*/

    it("This test for checked box", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get("input#monday").should("be.visible").check()
        cy.get("#tuesday").should("be.visible").and("not.be.checked")
        cy.get("#monday").uncheck().should("not.be.checked")

        //select all the checkbox

        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // Select from multiple checkbox 1st and last

        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")


    })
    

})