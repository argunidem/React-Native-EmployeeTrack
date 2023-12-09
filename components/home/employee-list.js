import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const EmployeeList = () => {
   const router = useRouter();

   return (
      <Pressable
         onPress={() => router.push("/(home)/employees")}
         style={styles.container}
      >
         <View style={styles.iconContainer}>
            <Ionicons
               name='ios-people-sharp'
               size={24}
               color='black'
            />
         </View>
         <Text style={styles.text}>Employee List</Text>
      </Pressable>
   );
};

export default EmployeeList;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#D3CCE3",
      padding: 12,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
   },
   iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
   },
   text: {
      marginTop: 7,
      fontWeight: "600",
   },
});
