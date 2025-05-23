import * as Font from 'expo-font';
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
      'Poppins-italic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
      // Montserrat Font
      'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-thin': require('../assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-italic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
    }).then(() => setFontsLoaded(true));

    return () => (global as any).server ? (global as any).server.shutdown() : null;
  }, []);

  useEffect(() => {console.log("Fonts Loaded", fontsLoaded)}, [fontsLoaded]);

  if (!fontsLoaded) return null;
  
  return <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
}
