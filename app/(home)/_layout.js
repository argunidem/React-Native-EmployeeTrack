import { Stack } from "expo-router";

export default function Layout() {
   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name='index' />
         <Stack.Screen name='employees' />
         <Stack.Screen name='add-details' />
         <Stack.Screen name='mark-attendance' />
         <Stack.Screen name='[user]' />
      </Stack>
   );
}
