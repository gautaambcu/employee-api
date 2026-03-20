let employees = [];

// Get all employees
exports.getAllEmployees = (req, res) => {
  res.json(employees);
};

// Create employee
exports.createEmployee = (req, res) => {
  const newEmployee = {
    id: "EMP" + (employees.length + 1),
    ...req.body,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

// Get employee by ID
exports.getEmployeeById = (req, res) => {
  const emp = employees.find(e => e.id === req.params.id);
  if (!emp) return res.status(404).json({ message: "Employee not found" });
  res.json(emp);
};

// Update employee
exports.updateEmployee = (req, res) => {
  const index = employees.findIndex(e => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });

  employees[index] = { ...employees[index], ...req.body };
  res.json(employees[index]);
};

// Delete employee
exports.deleteEmployee = (req, res) => {
  employees = employees.filter(e => e.id !== req.params.id);
  res.status(204).send();
};