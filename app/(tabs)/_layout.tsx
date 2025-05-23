import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

import { TAB_SCREEN_OPTIONS, TAB_SCREENS } from "@/src/business/constants/common";
import { TabsScreenModel } from "@/src/business/interfaces/common.interface";
const TabsLayout = () => {
  return (
    <Tabs screenOptions={TAB_SCREEN_OPTIONS}>
        {TAB_SCREENS.map((tab: TabsScreenModel) => (
             <Tabs.Screen key={tab.component} name={tab.component} options={{ headerShown: tab.headerShown, tabBarIcon: ({focused, color}) => (<MaterialIcons name={focused ? tab.iconActive : tab.icon} color={color} size={20} />) }} />
        ))}
    </Tabs>
  )
}

export default TabsLayout