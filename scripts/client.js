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

// Functions Alphabetically

function appendToTable(){
    $('#dataTable').empty();
    // for loop starts at the end (could become problematic when deleting employees happens, unless we don't remove them from the array)
    for(let i = 0; i < employees.length; i++){
        $('#dataTable').append(`<tr id="index${i}"class=${classToggle(i)}><td class="firstname">${employees[i].firstName}</td><td class="lastname">${employees[i].lastName}</td><td class="id">${employees[i].idNumber}</td><td class="title">${employees[i].title}</td><td class="salary">${employees[i].annualSalary}</td></tr>`);
        employees[i].position = i;
    }
    return true;
} // end appendToTable

function checkCosts(){
    // checks value of monthlyTotal
    if(monthlyTotal < 20000){
        // if less that 20000 remove red background
        $("#monthlyCosts").removeClass('red');
        return true;
    } else {
        // if over 20000 add red background
        $('#monthlyCosts').addClass('red');
        return false;
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
    return true;
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
    return true;
} // end runCreateEmployee

function removeEmployee() {
    // takes value from delete input field on html
    let employeeID = $('#deleteInput').val();
    // iterates through array 
    for(employee of employees){
        // searches for an object with the idNumber that matches the input
        if(employeeID === employee.idNumber){
            // splices the employee out of the array using the saved position property
            employees.splice(employee.position, 1);
            // appends new array to table
            appendToTable();
            // updates monthly cost
            updateMonthlyTotal();
            // empties delete input field
            $('#deleteInput').val('');
            return true;
        } 
    }
    // if no match, alert box appears
    alert('Input valid ID number.');
} // end removeEmployee

function updateMonthlyTotal(){
    // resets monthly total to 0
    monthlyTotal = 0;
    // iterates through employees array
    for( let i = 0; i < employees.length; i++ ){
        // adds the salary divided by 12 each iteration
        monthlyTotal += (employees[i].annualSalary / 12);
    }
    // empties the monthly payroll
    $('#monthlyPayroll').empty();
    // appends the new total to the DOM
    $('#monthlyPayroll').append(monthlyTotal.toFixed(2));
    // checks the costs and updates the DOM with the appropriate background color
    checkCosts();
    return true;
} // end updateMonthlyTotal