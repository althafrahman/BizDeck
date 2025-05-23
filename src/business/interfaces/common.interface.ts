import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { API_KEYS } from "../constants/common";
import { IndividualStatementModel } from "./response.interface";

export interface TabsScreenModel{
    component: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    iconActive: keyof typeof MaterialIcons.glyphMap;
    title: string;
    headerShown: boolean
}

export interface ShopsDetailsModel{
    label: string;
    value: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export type API_KEYS_TYPE = `${API_KEYS}`;

export interface DashboardCardModel{
    title: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    iconColor: string
    apiKey: API_KEYS_TYPE
    data?: IndividualStatementModel
}

export interface DashboardSalesCardModel extends DashboardCardModel{
    profitMessage: string;
    lossMessage: string;
}

export interface HttpHeaders {
    [header: string]: string;
  }