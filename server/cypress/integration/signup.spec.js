describe("Submit", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/signup')
    })
    it("Creating new user",()=>{
        cy.get('input[name="fname"]').type('new')
        cy.get('input[name="lname"]').type('user')
        cy.get('input[name="email"]').type("new.user@gmail.com")
        cy.get('input[name="password"]').type("userpassword")
    
        cy.get('#signup-form').submit()
    })
})