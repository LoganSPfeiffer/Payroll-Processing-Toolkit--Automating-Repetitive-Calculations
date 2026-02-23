// Our Tropical island workers 

let employees = [
    { name: "Jeffery Epstein", hoursWorked: 75, hourlyRate: 450 },
    { name: "Ghislaine Maxwell", hoursWorked: 80, hourlyRate: 400 },
    { name: "Bill Gates", hoursWorked: 35, hourlyRate: 500 },
    { name: "Elon Musk", hoursWorked: 45, hourlyRate: 600 },
    { name: "Bill Clinton", hoursWorked: 40, hourlyRate: 175 }
];

function calculateBasePay( rate, hours) {
// Calculate the base pay for an employee without overtime
    if (hours > 40) {
        return 40 * rate;
    } else {
        return hours * rate;
    }
}

// Calculate the overtime pay for an employee
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
       let overtimeHours = hours - 40;
       let overtimeRate = rate * 1.5;
       return overtimeHours * overtimeRate;
    } else {
       return 0;
    }
}

// Calculate Taxes , Net pay and Grosspay 
function calculateTaxes(grossPay) {
   let taxRate = 0.15; // 15% tax rate
   let taxAmount = grossPay * taxRate;
   let netPay = grossPay - taxAmount;
   return netPay;
}

// PayRoll
function processPayroll(employee) {

    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let netPay = calculateTaxes(grossPay);

    
    return {

        "Name": employee.name,
        "Base Pay": '$' + basePay.toFixed(2),
        "Overtime Pay": '$' + overtimePay.toFixed(2),
        "Gross Pay": '$' + grossPay.toFixed(2),
        "Net Pay": '$' + netPay.toFixed(2)
    };
}

// Process payroll for each employee and log the results

employees.forEach(employee => {
    let payroll = processPayroll(employee);
    console.log(payroll);
});
