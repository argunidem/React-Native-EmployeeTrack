import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, Pressable } from "react-native";
import axios from "axios";
import AttendanceStatus from "./attendance-status";

const AttendanceForm = () => {
   const [attendanceStatus, setAttendanceStatus] = useState("present");

   const submitAttendance = async () => {
      try {
         const attendanceData = {
            employeeId: params?.id,
            employeeName: params?.name,
            date: currentDate.format("MMMM D, YYYY"),
            status: attendanceStatus,
         };
         const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/attendance`,
            attendanceData
         );

         if (response.status === 200) {
            Alert.alert(`Attendance submitted successfully for ${params?.name}`);
         }
      } catch (error) {
         console.log("error submitting attendance", error);
      }
   };

   return (
      <View style={{ marginHorizontal: 12 }}>
         <Text style={styles.label}>ATTENDANCE</Text>
         <View style={styles.row}>
            <AttendanceStatus
               attendanceStatus={attendanceStatus}
               setAttendanceStatus={setAttendanceStatus}
               currentStatus='present'
               text='Present'
            />
            <AttendanceStatus
               attendanceStatus={attendanceStatus}
               setAttendanceStatus={setAttendanceStatus}
               currentStatus='absent'
               text='Absent'
            />
         </View>

         <View style={styles.row}>
            <AttendanceStatus
               attendanceStatus={attendanceStatus}
               setAttendanceStatus={setAttendanceStatus}
               currentStatus='halfday'
               text='Half Day'
            />

            <AttendanceStatus
               attendanceStatus={attendanceStatus}
               setAttendanceStatus={setAttendanceStatus}
               currentStatus='holiday'
               text='Holiday'
            />
         </View>
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.input}
               placeholderTextColor='black'
               placeholder='Advance / Loans'
            />
            <TextInput
               style={styles.input}
               placeholderTextColor='black'
               placeholder='Extra Bonus'
            />
         </View>

         <Pressable
            onPress={submitAttendance}
            style={styles.submitButton}
         >
            <Text style={styles.buttonText}>Submit Attendance</Text>
         </Pressable>
      </View>
   );
};

export default AttendanceForm;
const styles = StyleSheet.create({
   label: {
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: 3,
      marginTop: 7,
   },
   row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginVertical: 10,
   },
   inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   input: {
      borderRadius: 6,
      marginTop: 10,
      borderWidth: 2,
      borderColor: "#E0E0E0",
      padding: 10,
      flex: 1,
   },
   submitButton: {
      paddingVertical: 15,
      backgroundColor: "#333",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
      borderRadius: 6,
   },
   buttonText: {
      textAlign: "center",
      color: "white",
      fontWeight: "500",
   },
});
