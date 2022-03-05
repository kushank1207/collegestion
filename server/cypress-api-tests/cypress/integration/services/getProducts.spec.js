describe('API Testing with Cypress', () => {
    beforeEach(() => {
        cy.request('products').as('collegestion');
    });
 
    it('Validate the header', () => {
        cy.get('@collegestion')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
 
 });