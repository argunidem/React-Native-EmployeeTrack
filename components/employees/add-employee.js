import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const AddEmployee = () => {
   const router = useRouter();

   return (
      <View>
         <Pressable onPress={() => router.push("/(home)/add-details")}>
            <AntDesign
               name='pluscircle'
               size={24}
               color='black'
            />
         </Pressable>
      </View>
   );
};

export default AddEmployee;
