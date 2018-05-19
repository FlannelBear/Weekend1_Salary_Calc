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
    $('#deleteButton').on('click', removeEmployee);
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

function updateMonthlyTotal(){
    for( let i = employees.length-1; i < employees.length; i++ ){
    monthlyTotal += Math.round(employees[i].annualSalary / 12);
    }
    $('#monthlyPayroll').empty();
    $('#monthlyPayroll').append(monthlyTotal);
    checkCosts();
} // end updateMonthlyTotal

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
}

function appendToTable(){
    $('#dataTable').empty();
    // for loop starts at the end (could become problematic when deleting employees happens, unless we don't remove them from the array)
    for(let i = 0; i < employees.length; i++){
        $('#dataTable').append(`<tr id="index${i}"class=${classToggle(i)}><td class="firstname">${employees[i].firstName}</td><td class="lastname">${employees[i].lastName}</td><td class="id">${employees[i].idNumber}</td><td class="title">${employees[i].title}</td><td class="salary">${employees[i].annualSalary}</td></tr>`);
        employees[i].position = i;
    }
} // end appendToTable

function checkCosts(){
    if(monthlyTotal > 20000){
        $("#monthlyCosts").addClass('red');
    }
} // end check costs

function test(){
    console.log('Test');
    
}

function removeEmployee() {
    let i = 0;
    let employeeID = $('#deleteInput').val();
    for(employee of employees){
        if(employee.idNumber === employeeID){
            i = employee.position;
        }
    }
        employees.splice(i, 1);
        appendToTable();
        $('#deleteInput').val('');
        return true;
}






