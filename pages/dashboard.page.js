exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.employeesTab = page.getByRole('link', { name: 'Employees' })
    }

    async clickEmployeesTab() {
        await this.employeesTab.click();
    }
}