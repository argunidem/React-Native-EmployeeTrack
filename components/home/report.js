import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const Report = ({ route, icon, text }) => {
   const router = useRouter();

   return (
      <Pressable
         onPress={() => route && router.push(route)}
         style={styles.container}
      >
         <View style={styles.iconContainer}>{icon}</View>
         <Text style={styles.text}>{text}</Text>
         <View style={styles.arrowContainer}>
            <Entypo
               name='chevron-right'
               size={24}
               color='black'
            />
         </View>
      </Pressable>
   );
};

export default Report;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#BE93C5",
      borderRadius: 6,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
   },
   iconContainer: {
      padding: 7,
      width: 45,
      height: 45,
      borderRadius: 7,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
   },
   text: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: "600",
      flex: 1,
   },
   arrowContainer: {
      width: 35,
      height: 35,
      borderRadius: 7,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
   },
});
