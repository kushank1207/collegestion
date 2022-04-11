describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Dashboard')
    })
    it("Should redirect to Dashboard page",()=>{
        cy.get('#password').type("kireeti@128")
        cy.get('#password_confirmation').type("kireeti@12")
        cy.get("#password-change-form").submit()
        cy.contains("Password and Confirm Password Doesn't Match")   
    })
})