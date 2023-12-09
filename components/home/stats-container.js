import { StyleSheet, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Stats from "./stats";

const StatsContainer = () => {
   return (
      <View style={styles.container}>
         <Stats
            color='#f79d00'
            icon={
               <MaterialCommunityIcons
                  name='guy-fawkes-mask'
                  size={24}
                  color='black'
               />
            }
            text='Attendance Criteria'
         />
         <Stats
            color='#ABCABA'
            icon={
               <Feather
                  name='bar-chart'
                  size={24}
                  color='black'
               />
            }
            text='Increased Workflow'
         />
         <Stats
            color='#D3CCE3'
            icon={
               <MaterialCommunityIcons
                  name='guy-fawkes-mask'
                  size={24}
                  color='black'
               />
            }
            text='Cost Savings'
         />
         <Stats
            color='#bdc3c7'
            icon={
               <Feather
                  name='bar-chart'
                  size={24}
                  color='black'
               />
            }
            text='Employee Performance'
         />
      </View>
   );
};

export default StatsContainer;
const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      marginHorizontal: 10,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
   },
});
