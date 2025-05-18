import { Ionicons } from "@expo/vector-icons";

export interface TabsScreenModel{
    component: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconActive: keyof typeof Ionicons.glyphMap;
    title: string;
    headerShown: boolean
}