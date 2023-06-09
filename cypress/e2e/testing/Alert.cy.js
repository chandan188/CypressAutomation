describe("Alert testing",()=>{

    it("Simple window ", ()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert", (testAlert)=> {

            expect(testAlert).to.contains("I am a JS");
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    it("Confirm with OK and cancel button window ", ()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:alert", (testAlert)=> {

            expect(testAlert).to.contains("I am a JS Confirm");
        })
        cy.on("window:confirm", ()=> false);
        cy.get("#result").should("have.text", "You clicked: Cancel");

    })

    it("Enter text into the prompt", ()=> {

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Chandan")
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.on("window:confirm", ()=> false);
        cy.get("#result").should("have.text", "You entered: Chandan");

    })

    it("Authentication Window", ()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{
            username :"admin", password: "admin"
        }})
        cy.get("div[class='example'] p").should("have.contain", "Congratu");
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "credent");


    })

})