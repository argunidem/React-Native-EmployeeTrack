import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const User = ({ item }) => {
   const router = useRouter();

   return (
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
         style={styles.container}
      >
         <View style={styles.textContainer}>
            <Text style={styles.whiteLargeText}>{item?.employeeName?.charAt(0)}</Text>
         </View>

         <View style={{ flex: 1 }}>
            <Text style={styles.boldText}>{item?.employeeName}</Text>
            <Text style={styles.grayText}>
               {item?.designation} ({item?.employeeId})
            </Text>
         </View>

         {item?.status && (
            <View
               style={[
                  styles.status,
                  {
                     backgroundColor:
                        item?.status === "present"
                           ? "#4caf50"
                           : item?.status === "absent"
                           ? "#f44336"
                           : item?.status === "halfday"
                           ? "#ff9800"
                           : "#2196f3",
                  },
               ]}
            >
               <Text style={styles.whiteBoldText}>{item.status.charAt(0)}</Text>
            </View>
         )}
      </Pressable>
   );
};

export default User;
const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   textContainer: {
      width: 50,
      height: 50,
      borderRadius: 8,
      padding: 10,
      backgroundColor: "#4b6cb7",
      alignItems: "center",
      justifyContent: "center",
   },
   whiteLargeText: {
      color: "white",
      fontSize: 22,
   },
   boldText: {
      fontSize: 16,
      fontWeight: "bold",
   },
   grayText: {
      marginTop: 5,
      color: "gray",
      fontSize: 14,
   },
   status: {
      widht: 50,
      height: 50,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignItems: "center",
      justifyContent: "center",
   },
   whiteBoldText: {
      fontSize: 22,
      color: "white",
      fontWeight: "bold",
      lineHeight: 22,
   },
});
