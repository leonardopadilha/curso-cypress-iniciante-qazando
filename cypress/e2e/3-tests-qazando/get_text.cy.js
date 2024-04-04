describe('Get Texts', () => {
    it('Obter texto de um elemento', () => {
        cy.visit('/')
            .get('.header-logo img')

        cy.get('.top_header_left p')
            .then((element) => {
                console.log(element.text())
            })
    })
})