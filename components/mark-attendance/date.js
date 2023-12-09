import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

const Date = ({ currentDate, setCurrentDate }) => {
   const goToNextDay = () => {
      const nextDate = moment(currentDate).add(1, "day");
      setCurrentDate(nextDate);
   };

   const goToPrevDay = () => {
      const prevDate = moment(currentDate).subtract(1, "day");
      setCurrentDate(prevDate);
   };

   const formatDate = (date) => {
      return date.format("MMMM D, YYYY");
   };

   return (
      <View style={styles.container}>
         <AntDesign
            onPress={goToPrevDay}
            name='left'
            size={24}
            color='black'
         />
         <Text style={styles.text}>{formatDate(currentDate)}</Text>
         <AntDesign
            onPress={goToNextDay}
            name='right'
            size={24}
            color='black'
         />
      </View>
   );
};

export default Date;
const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginLeft: "auto",
      marginRight: "auto",
      marginVertical: 20,
   },
   text: { fontWeight: "bold" },
});
