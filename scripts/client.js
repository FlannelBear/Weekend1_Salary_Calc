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
    $('#submitBtn').on('click', executeSubmit);
} // end setUp

function executeSubmit(){
    // runs createEmployee with input values passed as parameters
    createEmployee($('#firstNameInput').val(), $('#lastNameInput').val(), $('#idInput').val(), $('#titleInput').val(), $('#annualSalaryInput').val());
    // clears all the input fields
    $('.input').val('');
    appendToTable();
    updateMonthlyTotal();
} // end runCreateEmployee

function createEmployee(firstName, lastName, idNumber, title, annualSalary){
    let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
    employees.push(employee);
    return employee;
} // end createEmployee

function appendToTable(){
    for(let i = employees.length-1; i < employees.length; i++){
        let employee = employees[i];
        $('table').append(`<tr id="data"><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.idNumber}</td><td>${employee.title}</td><td>${employee.annualSalary}</td></tr>`);
    }
} // end appendToTable

function updateMonthlyTotal(){
    for( let i = employees.length-1; i < employees.length; i++ ){
        monthlyTotal += Math.round((employees[i].annualSalary / 12));
        $('#monthlyPayroll').empty();
        $('#monthlyPayroll').append(monthlyTotal);
    }
} // end updateMonthlyTotal




