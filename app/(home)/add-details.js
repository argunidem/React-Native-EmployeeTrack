import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from "react-native";
import axios from "axios";
import BackButton from "../../components/shared/back-button";
import Input from "../../components/add-details/input";
import Label from "../../components/add-details/label";

const AddDetails = () => {
   const [name, setName] = useState("");
   const [employeeId, setEmployeeId] = useState("");
   const [dob, setDob] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [joiningDate, setJoiningDate] = useState("");
   const [salary, setSalary] = useState("");
   const [address, setAddress] = useState("");
   const [designation, setDesignation] = useState("");

   const handleRegister = () => {
      const employeeData = {
         employeeName: name,
         employeeId: employeeId,
         designation: designation,
         phoneNumber: phoneNumber,
         dateOfBirth: dob,
         joiningDate: joiningDate,
         activeEmployee: true,
         salary: salary,
         address: address,
      };

      axios
         .post(`${process.env.REACT_APP_BACKEND_URL}/addEmployee`, employeeData)
         .then((response) => {
            Alert.alert("Registration Successful", "You have been registered successfully");
            setName("");
            setEmployeeId("");
            setDob("");
            setPhoneNumber("");
            setSalary("");
            setAddress("");
            setJoiningDate("");
            setDesignation("");
         })
         .catch((error) => {
            Alert.alert("Registration Fail", "An error occurred during registration");
            console.log("Register failed", error);
         });
   };

   return (
      <ScrollView style={styles.container}>
         <BackButton />
         <View style={styles.formContainer}>
            <Text style={styles.title}>Add new employee</Text>

            <View>
               <Label>Full Name</Label>
               <Input
                  value={name}
                  onChange={(text) => setName(text)}
                  placeholder='Enter full name'
               />
            </View>

            <View>
               <Label>Employee ID</Label>
               <Input
                  value={employeeId}
                  onChange={(text) => setEmployeeId(text)}
                  placeholder='Employee ID'
               />
            </View>

            <View>
               <Label>Designation</Label>
               <Input
                  value={designation}
                  onChange={(text) => setDesignation(text)}
                  placeholder='Designation'
               />
            </View>

            <View>
               <Label>Phone Number</Label>
               <Input
                  value={phoneNumber}
                  onChange={(text) => setPhoneNumber(text)}
                  placeholder='Phone Number'
               />
            </View>

            <View>
               <Label>Date of Birth</Label>
               <Input
                  value={dob}
                  onChange={(text) => setDob(text)}
                  placeholder='Date of Birth'
               />
            </View>

            <View>
               <Label>Joining Date</Label>
               <Input
                  value={joiningDate}
                  onChange={(text) => setJoiningDate(text)}
                  placeholder='Joining Date'
               />
            </View>

            <View>
               <Label>Salary</Label>
               <Input
                  value={salary}
                  onChange={(text) => setSalary(text)}
                  placeholder='Salary'
               />
            </View>

            <View>
               <Label>Address</Label>
               <Input
                  value={address}
                  onChange={(text) => setAddress(text)}
                  placeholder='Address'
               />
            </View>

            <Pressable
               onPress={handleRegister}
               style={styles.buttonContainer}
            >
               <Text style={styles.button}>Add Employee</Text>
            </Pressable>
         </View>
      </ScrollView>
   );
};
export default AddDetails;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   formContainer: {
      paddingVertical: 25,
      paddingHorizontal: 20,
      rowGap: 15,
   },
   title: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 10,
   },
   buttonContainer: {
      backgroundColor: "#333",
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
   },
   button: {
      fontSize: 15,
      fontWeight: "bold",
      color: "white",
   },
});
