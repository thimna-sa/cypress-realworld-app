class ExtratoPage{
    selectoList(){
        const selectors = {
          ButtomMine:  '[data-test="nav-personal-tab"]',
            verificationExtrat: '[data-test="transaction-list-empty-create-transaction-button"]'
        }
        return selectors
    }

    extratoVerification(){
        cy.get(this.selectoList().ButtomMine).click()
        cy.get(this.selectoList().verificationExtrat)
        
    }

}



export default ExtratoPage
