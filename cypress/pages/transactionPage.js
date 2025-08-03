class TransactionPage{
         selectoList() {
            const selectors = {
             ButtomTransaction: ".MuiButton-contained",
             buttomDestinatario: ".MuiFormControl-marginDense",
             selecaoDestinatario: '.css-konndc-MuiListItemText-root',
             selecaoValor: "[name='amount']",
             selecaoDescrição: '#transaction-create-description-input',
             buttomSubmit: '[data-test="transaction-create-submit-payment"]',
             confirmationTransaction: '.MuiAlert-message'

            }
            return selectors
         }

transactionSucess(){
cy.get(this.selectoList().ButtomTransaction).click()
cy.get(this.selectoList().buttomDestinatario).click().type('maia20')
cy.get(this.selectoList().selecaoDestinatario).eq(1).click()
cy.get(this.selectoList().selecaoValor).click().type('$150,000')
cy.get(this.selectoList().selecaoDescrição).click().type('Pagamento')
cy.get(this.selectoList().buttomSubmit).click()
cy.get(this.selectoList().confirmationTransaction).should('contain', 'Transaction Submitted')

}

transactionFail(){
cy.get(this.selectoList().ButtomTransaction).click()
cy.get(this.selectoList().buttomDestinatario).click().type('maia20')
cy.get(this.selectoList().selecaoDestinatario).eq(1).click()
cy.get(this.selectoList().selecaoValor).click().type('50')
cy.get(this.selectoList().selecaoDescrição).click().type('Pagamento')
cy.get(this.selectoList().buttomSubmit).click()

}

}

export default TransactionPage