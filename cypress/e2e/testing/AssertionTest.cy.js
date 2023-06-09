describe('XpathLocator', () => {
    // it('Test1 with Implicit Assertion', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //     cy.url().should('include', 'index.php/auth/login');
    //     cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.url().should('contains','orangehrmlive')

    //     //or

    //     cy.url().should('include', 'login')
    //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .should('contains','orangehrmlive')

    //     //or

    //     cy.url().should('include', 'opensource')
    //     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .and('not.contains','orangehrmlive123')

    //     cy.title().should('include', 'OrangeHRM').and('eq', 'OrangeHRM').and('not.contain', 'OrangeHRM  123')
    //     cy.get("[alt='company-branding']").should('be.visible').and('exist')

    //     cy.xpath("//h5[normalize-space()='Login']").should('be.visible')
    //     cy.get("link").should('have.length', 7)
    //     cy.xpath("//input[@placeholder='Username']").type("Admin").should('have.value', 'Admin')
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").should('be.visible').click()
    // })

    it('Test2 with Explicit Assertion', () => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()

            let expName = "Groot Collings";

            cy.get(".oxd-userdropdown-name").then((x)=>{

                let actualName = x.text()
                
                //BDD approach
                expect(actualName).to.equal(expName)
                // expect(actualName).to.not.equal(expName)

                //TDD approach
                
                assert.equal(actualName,expName)
                // assert.notEqual(actualName,expName)

            })

        })
})