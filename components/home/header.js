import { StyleSheet, Text, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Header = () => {
   return (
      <View style={styles.container}>
         <Feather
            name='bar-chart'
            size={24}
            color='black'
         />
         <Text style={styles.text}>Employee Management System</Text>
         <Entypo
            name='lock'
            size={24}
            color='black'
         />
      </View>
   );
};

export default Header;

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   text: { fontSize: 16, fontWeight: "600" },
});
