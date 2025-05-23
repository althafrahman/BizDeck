import Dashboard from "@/src/gui/screens/Dashboard";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const styles = StyleSheet.create({
    container: {flex: 1, height: "100%", top: 0, paddingTop: 20},
  });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Dashboard />
    </SafeAreaView>
  );
}
