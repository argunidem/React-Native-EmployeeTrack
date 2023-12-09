import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onChange, placeholder }) => {
   return (
      <TextInput
         value={value}
         onChangeText={onChange}
         style={styles.input}
         placeholder={placeholder}
         placeholderTextColor={"black"}
      />
   );
};

export default Input;
const styles = StyleSheet.create({
   input: {
      padding: 10,
      borderColor: "#D0D0D0",
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 5,
   },
});
