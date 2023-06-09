const { expect } = require("chai")

cy.on("window:alert", (win)=>{

    expect(win).to.contains(" mxcbv")
cy.on("window:confirm", ()=> false)
} )