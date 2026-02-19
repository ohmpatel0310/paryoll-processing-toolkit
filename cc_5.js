// Step 2: Creating an array of employees

let employees = [
    {name: "Timtom", hourlyRate: 20, hoursWorked: 40},
    {name: "Bimbom", hourlyRate: 25, hoursWorked: 35},
    {name: "Jimjom", hourlyRate: 30, hoursWorked: 45}
]

// Step 3: Writing calculateBasePay Function

function calculateBasePay(rate, hours) {
    let baseHours = hours > 40 ? 40: hours;
    return rate * baseHours;
}

// Step 4: Writing calculateOvertimePay Function

function calculateOvertimePay(rate, hours){
    let overtimeHours = hours > 40 ? hours - 40: 0;
    return (rate * 1.5) * overtimeHours
}

