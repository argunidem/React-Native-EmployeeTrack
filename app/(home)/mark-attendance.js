import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import axios from "axios";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MarkAttendance = () => {
   const [employees, setEmployees] = useState([]);
   const [attendance, setAttendance] = useState([]);
   const [currentDate, setCurrentDate] = useState(moment());

   const router = useRouter();

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

   const goToNextDay = () => {
      const nextDate = moment(currentDate).add(1, "day");
      setCurrentDate(nextDate);
   };

   const goToPrevDay = () => {
      const prevDate = moment(currentDate).subtract(1, "day");
      setCurrentDate(prevDate);
   };

   const formatDate = (date) => {
      return date.format("MMMM D, YYYY");
   };

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

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "white",
         }}
      >
         <Pressable>
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginVertical: 20,
               }}
            >
               <AntDesign
                  onPress={goToPrevDay}
                  name='left'
                  size={24}
                  color='black'
               />
               <Text style={{ fontWeight: "bold" }}>{formatDate(currentDate)}</Text>
               <AntDesign
                  onPress={goToNextDay}
                  name='right'
                  size={24}
                  color='black'
               />
            </View>

            <View style={{ marginHorizontal: 12 }}>
               {employees.map((item, index) => (
                  <Pressable
                     onPress={() =>
                        router.push({
                           pathname: "/[user]",
                           params: {
                              name: item.employeeName,
                              id: item.employeeId,
                              salary: item?.salary,
                              designation: item?.designation,
                           },
                        })
                     }
                     key={index}
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                     }}
                  >
                     <View
                        style={{
                           width: 50,
                           height: 50,
                           borderRadius: 8,
                           padding: 10,
                           backgroundColor: "#4b6cb7",
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                     >
                        <Text
                           style={{
                              color: "white",
                              fontSize: 22,
                           }}
                        >
                           {item?.employeeName?.charAt(0)}
                        </Text>
                     </View>

                     <View style={{ flex: 1 }}>
                        <Text
                           style={{
                              fontSize: 16,
                              fontWeight: "bold",
                           }}
                        >
                           {item?.employeeName}
                        </Text>
                        <Text
                           style={{
                              marginTop: 5,
                              color: "gray",
                              fontSize: 14,
                           }}
                        >
                           {item?.designation} ({item?.employeeId})
                        </Text>
                     </View>
                  </Pressable>
               ))}
            </View>
         </Pressable>
      </View>
   );
};

export default MarkAttendance;

const styles = StyleSheet.create({});
