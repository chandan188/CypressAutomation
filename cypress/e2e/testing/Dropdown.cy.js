

describe("Dropdown Testing", ()=>{

    // it("dd test ", ()=>{

    //     cy.visit("https://www.zoho.com/commerce/free-demo.html")
    //     cy.get("#zcf_address_country").select("Togo").should("have.value", "Togo")


    // })

    it("dd with bootstrap", ()=> {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("#select2-billing_country-container").type("India ").type('{enter}')
        cy.get("#select2-billing_country-container").should("have.text", " India")
    })
})