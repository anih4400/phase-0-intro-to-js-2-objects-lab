const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) 
  {
    const newEmployee = {...employee}
    
    newEmployee[key] = value;
    return newEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;

  }

  function deleteFromEmployeeByKey(employee, key) 
  {
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
  }

  function destructivelyDeleteFromEmployeeByKey(Employee, key) {
    delete Employee[key];
    return Employee;
  }