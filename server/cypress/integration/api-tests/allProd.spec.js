describe('Retreive all products for a business', () => {
    // let product;
    it('fetches Todo items - GET', () => {
        cy.request('http://localhost:5000/products').as('productRequest');
        cy.get('@productRequest').then(prod => {
            expect(prod.status).to.eq(200);
            assert.isArray(prod.body, 'Todos Response is an array')
        });
    });
 });