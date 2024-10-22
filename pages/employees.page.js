exports.EmployeesPage = class EmployeesPage {
    constructor(page) {
        this.page = page;
        this.addEmployeeButton = page.getByRole('button', { name: 'Add employee' });
    }

    async clickAddEmployeeButton() {
        await this.addEmployeeButton.click();
    }
}