import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const AttendanceStatus = ({ attendanceStatus, setAttendanceStatus, currentStatus, text }) => {
   return (
      <Pressable
         onPress={() => setAttendanceStatus(currentStatus)}
         style={styles.container}
      >
         {attendanceStatus === currentStatus ? (
            <FontAwesome5
               name='dot-circle'
               size={24}
               color='black'
            />
         ) : (
            <Entypo
               name='circle'
               size={24}
               color='black'
            />
         )}
         <Text style={styles.text}>{text}</Text>
      </Pressable>
   );
};

export default AttendanceStatus;
const styles = StyleSheet.create({
   container: {
      backgroundColor: "#F1F1F1",
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   text: { fontWeight: "bold" },
});
