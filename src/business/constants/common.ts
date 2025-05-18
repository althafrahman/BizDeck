import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Platform, PlatformOSType } from "react-native";
import { TabsScreenModel } from "../interfaces/common.interface";
import { COLORS } from "./style";

export const TAB_SCREENS: TabsScreenModel[] = [
    {
        title: 'Restaurants',
        component: 'Restaurants',
        icon: 'restaurant-outline',
        iconActive: 'restaurant',
        headerShown: false,
    },
    {
        title: 'Home',
        component: 'index',
        icon: 'home-outline',
        iconActive: 'home',
        headerShown: false,
    },
    {
        title: 'Profile',
        component: 'Profile',
        icon: 'person-outline',
        iconActive: 'person',
        headerShown: false,
    },
    
]

const TAB_ALLOWED_PLATFORMS: PlatformOSType[] = ['ios', 'android'];

export const TAB_SCREEN_OPTIONS: BottomTabNavigationOptions  ={
    tabBarActiveTintColor: COLORS.primary,
    tabBarStyle: !TAB_ALLOWED_PLATFORMS.includes(Platform.OS) ? { display: 'none' } : {
            height: 60,
    },
}