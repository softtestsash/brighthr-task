exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.employeesTab = page.locator('[data-e2e="employees"]')
    }

    async clickEmployeesTab() {
        await this.employeesTab.click();
    }
}