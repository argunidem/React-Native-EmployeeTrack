import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
   const router = useRouter();

   return (
      <Pressable onPress={() => router.back()}>
         <Ionicons
            style={{ marginLeft: 13, marginRight: 10 }}
            name='arrow-back'
            size={32}
            color='black'
         />
      </Pressable>
   );
};

export default BackButton;
