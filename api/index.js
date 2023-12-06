const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.log("Error connecting to MongoDB", err);
   });

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

app.post("/addEmployee", async (req, res) => {
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
});

app.get("/employees", async (req, res) => {
   try {
      const employees = await Employee.find();
      res.status(200).json(employees);
   } catch (error) {
      res.status(500).json({ message: "Error fetching employees" });
   }
});
