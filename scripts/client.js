$(document).ready(setUp);

// Global Variables

let employees = [];


// Employee Class

class Employee{
    constructor(firstName, lastName, idNumber, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.annualSalary = annualSalary;
    }
} // end Employee Class

// Functions

function setUp(){
    $('#submitBtn').on('click', runCreateEmployee);
} // end setUp

function runCreateEmployee(){
    createEmployee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
}

function createEmployee(firstName, lastName, idNumber, title, annualSalary){
    let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
    employees.push(employee);
    return employee;
} // end createEmployee





