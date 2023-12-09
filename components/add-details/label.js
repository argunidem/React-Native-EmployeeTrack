import { StyleSheet, Text } from "react-native";

const Label = ({ children }) => {
   return <Text style={styles.label}>{children}</Text>;
};

export default Label;
const styles = StyleSheet.create({
   label: {
      fontSize: 17,
      fontWeight: "bold",
   },
});
