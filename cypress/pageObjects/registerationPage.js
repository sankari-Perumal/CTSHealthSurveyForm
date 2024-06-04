class Registeration
{
    usernameElement="//input[contains(@class,'whsOnd')]";
    ageRadioElement="//span[contains(text(),'18 or above')]";
    exerciseDropDownElement="//span[contains(text(),'Choose')]";
    exerciseYesOptionElement="(//span[contains(text(),'Yes')])[2]";
    confirmationMessage="//div[@class='vHW8K']";
    submitButton="//span[contains(text(),'Submit')]";
    setuserName(username)
    {
        cy.xpath(this.usernameElement).type(username);
    }

    setAge()
    {
        cy.xpath(this.ageRadioElement).click();
    }
    setExerciseInfo()
    {
        cy.xpath(this.exerciseDropDownElement).click();
        cy.xpath(this.exerciseYesOptionElement).click();
    }

    submitForm()
    {
        cy.xpath(this.submitButton).click();
    }
    
    getConfirmationMessage()
    {
        cy.xpath(this.confirmationMessage);
    }
}

export default Registeration;