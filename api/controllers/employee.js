const Employee = require("../models/employee");

const addEmployee = async (req, res) => {
   try {
      const {
         employeeName,
         employeeId,
         designation,
         phoneNumber,
         dateOfBirth,
         joiningDate,
         activeEmployee,
         salary,
         address,
      } = req.body;

      const newEmployee = new Employee({
         employeeName,
         employeeId,
         designation,
         phoneNumber,
         dateOfBirth,
         joiningDate,
         activeEmployee,
         salary,
         address,
      });

      await newEmployee.save();

      res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
   } catch (error) {
      console.log("Error adding employee");
      res.status(500).json({ message: "Error adding employee" });
   }
};

const getEmployees = async (req, res) => {
   try {
      const employees = await Employee.find();
      res.status(200).json(employees);
   } catch (error) {
      res.status(500).json({ message: "Error fetching employees" });
   }
};

module.exports = { addEmployee, getEmployees };
