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

// document ready function

function setUp(){
    checkCosts();
    $('#submitBtn').on('click', executeScript);
    $('#deleteButton').on('click', removeEmployee);
} // end setUp

// Alphabetical functions

function appendToTable(){
    $('#dataTable').empty();
    // for loop starts at the end (could become problematic when deleting employees happens, unless we don't remove them from the array)
    for(let i = 0; i < employees.length; i++){
        $('#dataTable').append(`<tr id="index${i}"class=${classToggle(i)}><td class="firstname">${employees[i].firstName}</td><td class="lastname">${employees[i].lastName}</td><td class="id">${employees[i].idNumber}</td><td class="title">${employees[i].title}</td><td class="salary">${employees[i].annualSalary}</td></tr>`);
        employees[i].position = i;
    }
} // end appendToTable

function checkCosts(){
    if(monthlyTotal < 20000){
        $("#monthlyCosts").removeClass('red');
    } else {
        $('#monthlyCosts').addClass('red');
    }
} // end check costs

function classToggle(i) {
    let toggle = 0;
    if(i%2 == 0 || i == 0){
        toggle = 1;
    } // odd numbered row on table even though index is even 
    else {
        toggle = 2;
    } // even numbered row on table even though index is odd
    // determine class
    switch(toggle){
        case 1:
            return 'oddRow';
            break;
        case 2:
            return 'evenRow';
            break;
        default:
            break;
    }
} // end class toggle

function createEmployee(firstName, lastName, idNumber, title, annualSalary){
    // creates new employee instance
    let employee = new Employee(firstName, lastName, idNumber, title, annualSalary);
    // pushes new instance into employees array
    employees.push(employee);
    return employee;
} // end createEmployee

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

function removeEmployee() {
    let employeeID = $('#deleteInput').val();
    for(employee of employees){
        if(employeeID === employee.idNumber){
            employees.splice(employee.position, 1);
            appendToTable();
            updateMonthlyTotal();
            $('#deleteInput').val('');
            return true;
        } else {
            alert('Input valid Employee ID');
        }
    }
} // end removeEmployee

function updateMonthlyTotal(){
    monthlyTotal = 0;
    for( let i = 0; i < employees.length; i++ ){
        monthlyTotal += Math.round(employees[i].annualSalary / 12);
    }
    $('#monthlyPayroll').empty();
    $('#monthlyPayroll').append(monthlyTotal);
    checkCosts();
} // end updateMonthlyTotal