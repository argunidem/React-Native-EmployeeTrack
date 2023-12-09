import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MarkAttendance = () => {
   const router = useRouter();

   return (
      <Pressable
         onPress={() => router.push("/(home)/mark-attendance")}
         style={styles.container}
      >
         <View style={styles.iconContainer}>
            <Ionicons
               name='ios-people-sharp'
               size={24}
               color='black'
            />
         </View>
         <Text style={styles.text}>Mark Attendance</Text>
      </Pressable>
   );
};

export default MarkAttendance;

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
