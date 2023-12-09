import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import moment from "moment";
import { DataTable } from "react-native-paper";
import BackButton from "../../components/shared/back-button";
import Date from "../../components/mark-attendance/date";

const Summary = () => {
   const [attendanceData, setAttendanceData] = useState([]);
   const [currentDate, setCurrentDate] = useState(moment());

   const fetchAttendanceReport = async () => {
      try {
         const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/attendance-report`,
            {
               params: {
                  month: 12,
                  year: 2023,
               },
            }
         );

         setAttendanceData(response.data.report);
      } catch (error) {
         console.log("Error fetching attendance");
      }
   };
   useEffect(() => {
      fetchAttendanceReport();
   }, []);
   console.log(attendanceData);
   return (
      <ScrollView style={styles.container}>
         <View style={styles.optionsContainer}>
            <BackButton />
            <View style={styles.dateContainer}>
               <Date
                  currentDate={currentDate}
                  setCurrentDate={setCurrentDate}
               />
            </View>
         </View>

         <View style={styles.usersContainer}>
            {attendanceData?.map((item, index) => (
               <View
                  key={index}
                  style={styles.userContainer}
               >
                  <View style={styles.itemContainer}>
                     <View style={styles.detailsContainer}>
                        <Text style={styles.icon}>{item?.name?.charAt(0)}</Text>
                     </View>
                     <View style={{ flex: 1 }}>
                        <Text style={styles.name}>{item?.name}</Text>
                        <Text style={styles.designation}>
                           {item?.designation} ({item?.employeeId})
                        </Text>
                     </View>
                  </View>

                  <View style={styles.table}>
                     <DataTable>
                        <DataTable.Header>
                           <DataTable.Title>P</DataTable.Title>
                           <DataTable.Title>A</DataTable.Title>
                           <DataTable.Title>HD</DataTable.Title>
                           <DataTable.Title>H</DataTable.Title>
                           <DataTable.Title>NW</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                           <DataTable.Cell>{item?.present}</DataTable.Cell>
                           <DataTable.Cell>{item?.absent}</DataTable.Cell>
                           <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                           <DataTable.Cell>1</DataTable.Cell>
                           <DataTable.Cell>8</DataTable.Cell>
                        </DataTable.Row>
                     </DataTable>
                  </View>
               </View>
            ))}
         </View>
      </ScrollView>
   );
};

export default Summary;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   usersContainer: {
      marginHorizontal: 12,
   },
   userContainer: {
      marginVertical: 10,
   },
   itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   detailsContainer: {
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
      fontSize: 16,
   },
   name: {
      fontSize: 16,
      fontWeight: "bold",
   },
   designation: {
      marginTop: 5,
      color: "gray",
   },
   table: {
      marginTop: 15,
      margin: 5,
      padding: 5,
      backgroundColor: "#A1FFCE",
      borderRadius: 5,
   },
   optionsContainer: {
      flexDirection: "row",
      alignItems: "center",
   },
   dateContainer: {
      marginLeft: "15%",
   },
});
