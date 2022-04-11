describe('Retreive all customers for a business', () => {
    // let customer;
    it('fetches Todo items - GET', () => {
        cy.request('http://localhost:5000/customers').as('customerRequest');
        cy.get('@customerRequest').then(cust => {
            expect(cust.status).to.eq(200);
            assert.isArray(cust.body, 'Todos Response is an array')
        });
    });
 });