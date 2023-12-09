import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResults from "../../components/employees/search-results";
import Search from "../../components/employees/search";
import AddEmployee from "../../components/employees/add-employee";
import BackButton from "../../components/shared/back-button";

const Employees = () => {
   const [employees, setEmployees] = useState([]);
   const [input, setInput] = useState("");

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

   return (
      <View style={styles.container}>
         <View style={styles.optionsContainer}>
            <BackButton />
            <Pressable style={styles.pressable}>
               <Search
                  input={input}
                  setInput={setInput}
               />
               {employees.length > 0 && <AddEmployee />}
            </Pressable>
         </View>

         {employees.length > 0 ? (
            <SearchResults
               data={employees}
               input={input}
               setInput={setInput}
            />
         ) : (
            <View style={styles.noDataContainer}>
               <Text>No Data</Text>
               <Text>Add an employee</Text>
               <Pressable onPress={() => router.push("/(home)/add-details")}>
                  <AntDesign
                     style={{ marginTop: 30 }}
                     name='pluscircle'
                     size={24}
                     color='black'
                  />
               </Pressable>
            </View>
         )}
      </View>
   );
};

export default Employees;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
   },
   optionsContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
   },
   pressable: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 7,
      gap: 10,
      backgroundColor: "white",
      height: 40,
      borderRadius: 3,
      flex: 1,
   },
   noDataContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});
