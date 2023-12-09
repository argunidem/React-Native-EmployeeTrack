const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const { addEmployee, getEmployees } = require("./controllers/employee");

const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const { markAttendance, getAttendance, getAttendanceReport } = require("./controllers/attendance");

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

app.post("/addEmployee", addEmployee);
app.get("/employees", getEmployees);
app.post("/attendance", markAttendance);
app.get("/attendance", getAttendance);
app.get("/attendance-report", getAttendanceReport);
