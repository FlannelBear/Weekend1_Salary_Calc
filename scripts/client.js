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
    // runs createEmployee with input values passed as parameters
    createEmployee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
    // clears all the input fields
    $('.input').val('');
} // end runCreateEmployee

function createEmployee(firstName, lastName, idNumber, title, annualSalary){
    let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
    employees.push(employee);
    return employee;
} // end createEmployee





