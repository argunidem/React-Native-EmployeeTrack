import { StyleSheet, Text, View } from "react-native";

const Stats = ({ color, icon, text }) => {
   return (
      <View
         style={[
            styles.container,
            {
               backgroundColor: color,
            },
         ]}
      >
         <View style={styles.iconContainer}>{icon}</View>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
};

export default Stats;
const styles = StyleSheet.create({
   container: {
      borderRadius: 6,
      padding: 12,
      alignItems: "center",
      justifyContent: "center",
      width: "48%",
   },
   iconContainer: {
      width: 35,
      height: 35,
      borderRadius: 7,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
   },
   text: {
      marginTop: 7,
      textAlign: "center",
      fontWeight: "500",
   },
});
