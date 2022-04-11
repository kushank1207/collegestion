

describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it("Login form testing",()=>{
        cy.get('input[name="email"]').type("singh.kushank12@gmail.com")
        cy.get('input[name="password"]').type("12345678")
        cy.get('#login-form').submit()

    })
})