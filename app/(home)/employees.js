import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResults from "../../components/search-results";

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
      <View
         style={{
            flex: 1,
            backgroundColor: "white",
         }}
      >
         <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
            <Ionicons
               style={{ marginLeft: 10 }}
               name='arrow-back'
               size={24}
               color='black'
            />
            <Pressable
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 7,
                  gap: 10,
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 3,
                  flex: 1,
               }}
            >
               <AntDesign
                  name='search1'
                  size={20}
                  color='black'
               />
               <TextInput
                  placeholder='Search'
                  value={input}
                  onChangeText={(text) => setInput(text)}
                  style={{
                     flex: 1,
                  }}
               />
               {employees.length > 0 && (
                  <View>
                     <Pressable>
                        <AntDesign
                           name='pluscircle'
                           size={24}
                           color='black'
                        />
                     </Pressable>
                  </View>
               )}
            </Pressable>
         </View>

         {employees.length > 0 ? (
            <SearchResults
               data={employees}
               input={input}
               setInput={setInput}
            />
         ) : (
            <View
               style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
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
