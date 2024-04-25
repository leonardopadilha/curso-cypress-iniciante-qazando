describe("Interações", () => {
    
    it("Digitar em um campo", () => {
        cy.visit('/')
            .get('[placeholder="Your Mail"]')
                .type("teste@teste.com.br")
    })

    it ("Click", () => {
        cy.visit('/')
            .get('.header-logo')

        // click normal
//        cy.get('.fa-user')
//            .click()

        // click duplo
//        cy.get('.fa-user')
//            .dblclick()

        // click botão direito
//        cy.get('.fa-user')
//            .rightclick()

        // click por coordenadas
//        cy.get('.fa-user')
//            .click(100, 100, {force: true})

        // simular apertar enter
        cy.visit('/')
        .get('[placeholder="Your Mail"]')
            .type("teste@teste.com.br{enter}")
    })

    it('Select', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
                .contains('Checkout View Two')
                    .click()

        cy.get('#country')
            .select('Colombia')
    })

    it('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
                .contains('Checkout View One')
                    .click()

        cy.get('.form-check input')
            .check()
                .uncheck() // desmarcar o checkbox

        cy.get('#css')
            .click()
    })
})