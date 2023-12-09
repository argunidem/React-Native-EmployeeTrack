import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ input, setInput }) => {
   return (
      <>
         <AntDesign
            name='search1'
            size={20}
            color='black'
         />
         <TextInput
            placeholder='Search'
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{
               flex: 1,
            }}
         />
      </>
   );
};
export default Search;
