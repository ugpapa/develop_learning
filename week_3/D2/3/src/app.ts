// Abstract class Department 
abstract class Department {
    static fiscalYear = 2020;  // Static property
    protected employees: string[] = [];  // Protected property accessible only within this class and its subclasses
    
    constructor(protected readonly id: string, public name: string) {}  // Constructor with two parameters: id and name
  
    // Static method createEmployee
    static createEmployee(name: string) {
      return { name: name };
    }
  
    // Abstract method describe to be implemented by all subclasses
    abstract describe(this: Department): void;
  
    // Method to add an employee
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    // Method to print employee information
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  // Subclass ITDepartment extends Department
  class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');  // Calls the constructor of the superclass
      this.admins = admins;
    }
  
    // Implementation of the abstract method describe
    describe() {
      console.log('IT Department - ID: ' + this.id);
    }
  }
  
  // Subclass AccountingDepartment extends Department
  class AccountingDepartment extends Department {
    private lastReport: string;  // Private property
    private static instance: AccountingDepartment;  // Singleton instance
  
    // Getter for mostRecentReport
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    // Setter for mostRecentReport
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
  
    // Static method for singleton pattern
    static getInstance() {
      if (AccountingDepartment.instance) {
        return this.instance;
      }
      this.instance = new AccountingDepartment('d2', []);
      return this.instance;
    }
  
    // Implementation of the abstract method describe
    describe() {
      console.log('Accounting Department - ID: ' + this.id);
    }
  
    // Method to add an employee with a restriction
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    // Method to add a report
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    // Method to print reports
    printReports() {
      console.log(this.reports);
    }
  }
  
  // Create a new employee using the static method of Department
  const employee1 = Department.createEmployee('Alice');
  console.log(employee1, Department.fiscalYear);
  
  // Create an instance of ITDepartment
  const it = new ITDepartment('d1', ['Alice']);
  
  it.addEmployee('Alice');
  it.addEmployee('Bob');
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  // Using singleton pattern for AccountingDepartment
  const accounting = AccountingDepartment.getInstance();
  const accounting2 = AccountingDepartment.getInstance();
  
  console.log(accounting, accounting2);
  
  accounting.mostRecentReport = 'Year End Report';
  accounting.addReport('Something went wrong...');
  console.log(accounting.mostRecentReport);
  
  accounting.addEmployee('Max');
  accounting.addEmployee('Manu');
  
  accounting.describe();
  