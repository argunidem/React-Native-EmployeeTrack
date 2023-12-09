import { ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/home/header";
import EmployeeList from "../../components/home/employee-list";
import MarkAttendance from "../../components/home/mark-attendance";
import Reports from "../../components/home/reports";
import StatsContainer from "../../components/home/stats-container";

const Home = () => {
   return (
      <ScrollView>
         <LinearGradient
            colors={["#7F7FD5", "#E9E4F0"]}
            style={styles.container}
         >
            <View style={{ padding: 12 }}>
               <Header />

               {/* NavBar */}
               <View style={styles.navContainer}>
                  <EmployeeList />
                  <MarkAttendance />
               </View>

               {/* Reports */}
               <Reports />

               {/* Stats */}
               <StatsContainer />
            </View>
         </LinearGradient>
      </ScrollView>
   );
};

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   navContainer: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
   },
});
