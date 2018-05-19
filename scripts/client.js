$(document).ready(setUp);

// Global Variables

let employees = [];
let monthlyTotal = 0;

// Employee Class

class Employee{
    constructor(firstName, lastName, idNumber, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.annualSalary = annualSalary;
    }
} // end Employee Class

// Functions

function setUp(){
    $('#submitBtn').on('click', executeScript);
} // end setUp

function executeScript(){
    // runs createEmployee with input values passed as parameters
    createEmployee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
    // clears all the input fields
    $('.input').val('');
    // appends new data to the table
    appendToTable();
    // Increases monthly total payroll accordingly
    updateMonthlyTotal();
} // end runCreateEmployee

function createEmployee(firstName, lastName, idNumber, title, annualSalary){
    // creates new employee instance
    let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
    // pushes new instance into employees array
    employees.push(employee);
    return employee;
} // end createEmployee

function appendToTable(){
    // for loop starts at the end (could become problematic when deleting employees happens, unless we don't remove them from the array)
    for(let i = employees.length-1; i < employees.length; i++){
        $('table').append(`<tr id="data"><td>${employees[i].firstName}</td><td>${employees[i].lastName}</td><td>${employees[i].idNumber}</td><td>${employees[i].title}</td><td>${employees[i].annualSalary}</td></tr>`);
        updateMonthlyTotal(employees[i]);
    }
} // end appendToTable

function updateMonthlyTotal(employee){
        monthlyTotal += Math.round((employee.annualSalary / 12));
        $('#monthlyPayroll').empty();
        $('#monthlyPayroll').append(monthlyTotal);
} // end updateMonthlyTotal




