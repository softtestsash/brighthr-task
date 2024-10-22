exports.AddEmployeePage = class AddEmployeePage {
    constructor(page) {
        this.page = page;
        this.addEmployeeButton = page.getByRole('button', { name: 'Add employee' });
        this.addAnotherEmployeeButton = page.getByRole('button', { name: 'Add another employee' });
        this.employeeFirstNameInput = page.locator("id=firstName");
        this.employeeLastNameInput = page.locator("id=lastName");
        this.employeeEmailInput = page.locator("id=email");
        this.employeePhoneInput = page.locator("id=phoneNumber");
        this.employeeJobTitleInput = page.locator("id=jobTitle");
        this.employeeStartDateInput = page.locator("id=startDate");
        this.today = page.locator('.DayPicker-Day--today');
        this.employeeSaveButton = page.getByRole('button', { name: 'Save new employee' });
    }

    async clickAddEmployeeButton() {
        await this.addEmployeeButton.click();
    }

    async clickAddAnotherEmployeeButton() {
        await this.addAnotherEmployeeButton.click();
    }

    async fillEmployeeInfo(employee) {
        await this.employeeFirstNameInput.fill(employee.firstName);
        await this.employeeLastNameInput.fill(employee.lastName);
        await this.employeeEmailInput.fill(employee.email);
        await this.employeePhoneInput.fill(employee.phone);
        await this.employeeStartDateInput.click();
        await this.today.click();//could do something clever here to get the day and add 1 or so to choose the number
        await this.employeeJobTitleInput.fill(employee.jobTitle);
    }

    async clickSaveEmployeeButton() {
        await this.employeeSaveButton.click();
    }
}