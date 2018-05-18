console.log('js');

$(document).ready(setUp);

function setUp(){
    console.log('jq');
}

class Employee{
    constructor(firstName, lastName, idNumber, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.annualSalary = annualSalary;
    }
}


