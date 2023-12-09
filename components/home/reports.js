import { StyleSheet, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Report from "./report";

const Reports = () => {
   return (
      <View style={styles.container}>
         <Report
            icon={
               <Ionicons
                  name='newspaper-outline'
                  size={24}
                  color='black'
               />
            }
            text='Attendance Report'
         />
         <Report
            route='/(home)/summary'
            icon={
               <Octicons
                  name='repo-pull'
                  size={24}
                  color='black'
               />
            }
            text='Summary Report'
         />
         <Report
            icon={
               <Octicons
                  name='report'
                  size={24}
                  color='black'
               />
            }
            text='All Generate Reports'
         />
         <Report
            icon={
               <Ionicons
                  name='md-people-outline'
                  size={24}
                  color='black'
               />
            }
            text='Overtime Employees'
         />
      </View>
   );
};

export default Reports;

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      backgroundColor: "white",
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 7,
   },
});
