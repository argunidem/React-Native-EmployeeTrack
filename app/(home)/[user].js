import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import AttendanceForm from "../../components/mark-attendance/attendance-form";
import Date from "../../components/mark-attendance/date";
import BackButton from "../../components/shared/back-button";

const User = () => {
   const params = useLocalSearchParams();
   const [currentDate, setCurrentDate] = useState(moment());

   return (
      <View style={styles.container}>
         <View style={styles.optionsContainer}>
            <BackButton />
            <View style={styles.dateContainer}>
               <Date
                  currentDate={currentDate}
                  setCurrentDate={setCurrentDate}
               />
            </View>
         </View>
         <Pressable style={styles.pressable}>
            <View style={styles.iconContainer}>
               <Text style={styles.icon}>{params?.name.charAt(0)}</Text>
            </View>
            <View style={{ flex: 1 }}>
               <Text style={styles.name}>{params?.name}</Text>
               <Text style={styles.designation}>
                  {params?.designation} ({params?.id})
               </Text>
            </View>
         </Pressable>
         <Text style={styles.salary}>Basic Pay : {params?.salary}</Text>
         <AttendanceForm />
      </View>
   );
};
export default User;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   pressable: {
      marginVertical: 10,
      marginHorizontal: 12,
      flexDirection: "row",
      gap: 10,
   },
   iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 8,
      padding: 10,
      backgroundColor: "#4b6cb7",
      alignItems: "center",
      justifyContent: "center",
   },
   icon: {
      color: "white",
      fontSize: 22,
   },
   name: {
      fontSize: 16,
      fontWeight: "bold",
   },
   designation: {
      marginTop: 5,
      color: "gray",
      fontSize: 14,
   },
   salary: {
      fontSize: 16,
      fontWeight: "500",
      marginHorizontal: 12,
   },
   optionsContainer: {
      flexDirection: "row",
      alignItems: "center",
   },
   dateContainer: {
      marginLeft: "15%",
   },
});
