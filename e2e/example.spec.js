// @ts-check
const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { AddEmployeePage } from '../pages/addEmployee.page';

test('can add two new employees', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  const randomString = Math.random().toString(36).substring(2, 10);
  const randomEmail1 = 'john.foo-' + randomString + '@example.com';
  const randomEmail2 = 'jane.bar-' + randomString + '@example.com';
  const employee1 = {
    firstName: 'John',
    lastName: 'Foo',
    jobTitle: 'Developer',
    email: randomEmail1,
    phone: '07777777777'
  };
  const employee2 = {
    firstName: 'Jane',
    lastName: 'Bar',
    jobTitle: 'Tester',
    email: randomEmail2,
    phone: '07765432101'
  };
  await page.goto('/login');

  // Login
  await loginPage.login('sachamannion+task@gmail.com', 'VeryBrightHR<3');

  // Add first employee
  await dashboardPage.clickEmployeesTab();
  await addEmployeePage.clickAddEmployeeButton();
  await addEmployeePage.fillEmployeeInfo(employee1);
  await addEmployeePage.clickSaveEmployeeButton();
  await addEmployeePage.clickAddAnotherEmployeeButton();
  //expect "John added to BrightHR Lite"
  console.log('Employee 1 added');

  //Add second employee
  await addEmployeePage.fillEmployeeInfo(employee2);
  await addEmployeePage.clickSaveEmployeeButton();
  //expect "Jane added to BrightHR Lite"

  //Verify 2 employees have been added
  
})