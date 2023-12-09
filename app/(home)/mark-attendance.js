import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import axios from "axios";
import moment from "moment";
import Date from "../../components/mark-attendance/date";
import User from "../../components/mark-attendance/user";
import BackButton from "../../components/shared/back-button";

const MarkAttendance = () => {
   const [employees, setEmployees] = useState([]);
   const [attendance, setAttendance] = useState([]);
   const [currentDate, setCurrentDate] = useState(moment());

   useEffect(() => {
      const fetchEmployeeData = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/employees`);
            setEmployees(response.data);
         } catch (error) {
            console.log("Error fetching employees");
            console.log(error);
         }
      };
      fetchEmployeeData();
   }, []);

   const fetchAttendanceData = async () => {
      try {
         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/attendance`, {
            params: {
               date: currentDate.format("MMMM D, YYYY"),
            },
         });
         setAttendance(response.data);
      } catch (error) {
         console.log("Error fetching attendance data");
      }
   };

   useEffect(() => {
      fetchAttendanceData();
   }, [currentDate]);

   const employeeWithAttendance = employees.map((employee) => {
      const attendanceRecord = attendance.find(
         (record) => record.employeeId === employee.employeeId
      );

      return {
         ...employee,
         status: attendanceRecord ? attendanceRecord.status : "",
      };
   });

   return (
      <View style={styles.container}>
         <Pressable>
            <View style={styles.optionsContainer}>
               <BackButton />
               <View style={styles.dateContainer}>
                  <Date
                     currentDate={currentDate}
                     setCurrentDate={setCurrentDate}
                  />
               </View>
            </View>

            <View style={{ marginHorizontal: 12 }}>
               {employeeWithAttendance.map((item, index) => (
                  <User
                     key={index}
                     item={item}
                  />
               ))}
            </View>
         </Pressable>
      </View>
   );
};

export default MarkAttendance;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   optionsContainer: {
      flexDirection: "row",
      alignItems: "center",
   },
   dateContainer: {
      marginLeft: "15%",
   },
});
