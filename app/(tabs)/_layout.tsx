import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

import { TAB_SCREEN_OPTIONS, TAB_SCREENS } from "@/src/business/constants/common";
import { TabsScreenModel } from "@/src/business/interfaces/common.interface";
const TabsLayout = () => {
  return (
    <Tabs screenOptions={TAB_SCREEN_OPTIONS}>
        {TAB_SCREENS.map((tab: TabsScreenModel) => (
             <Tabs.Screen key={tab.component} name={tab.component} options={{ headerShown: tab.headerShown, tabBarIcon: ({focused, color}) => (<Ionicons name={focused ? tab.iconActive : tab.icon} color={color} />) }} />
        ))}
    </Tabs>
  )
}

export default TabsLayout