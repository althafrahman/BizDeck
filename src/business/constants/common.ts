import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Platform, PlatformOSType } from "react-native";
import { DashboardCardModel, DashboardSalesCardModel, ShopsDetailsModel, TabsScreenModel } from "../interfaces/common.interface";
import { COLORS } from "./style";

export const TAB_SCREENS: TabsScreenModel[] = [
    {
        title: 'Restaurants',
        component: 'Restaurants',
        icon: 'restaurant',
        iconActive: 'restaurant',
        headerShown: false,
    },
    {
        title: 'Home',
        component: 'index',
        icon: 'home',
        iconActive: 'home',
        headerShown: false,
    },
    {
        title: 'Profile',
        component: 'Profile',
        icon: 'person',
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

export const SHOP_LIST: ShopsDetailsModel[] = [
    { label: 'Al-saj', value: 'alsaj', icon: 'restaurant' },
    { label: 'Al-Reem', value: 'alreem', icon: 'restaurant' },
    { label: 'Royal Foods', value: 'RoyalFoods', icon: 'restaurant' },
  ]

  export enum API_KEYS {
    TOTAL_SALES = 'totalSales',
    COMMISSIONAL_VALUE= 'commissionableValue',
    ADDITIONAL_AMOUNT= 'additionalAmount',
    NET_DEDUCTIONS= 'netDeduction',
    DISCOUNTS_GIVEN_BY_RESTAURANT= 'discountGivenByRestaurant',
    OTHER_ORDER_LEVEL_DEDUCTIONS= 'orderLevelDeductions',
    ACTUAL_PAYOUT= 'actualPayout',
    NET_PAYOUT= 'netPayout',
    GST_PAID_BY_SOURCE_APP= 'gstPaidBySourceApp',
}

export const DASHBOARD_SALES_CARD: DashboardSalesCardModel = {
    title: 'Total Sales',
    icon: 'chart-box',
    apiKey: API_KEYS.TOTAL_SALES,
    iconColor: COLORS.primary,
    lossMessage: 'Loss',
    profitMessage: "Profit",
  }

export const DASHBOARD_CARDS:DashboardCardModel[] = [
    {
        title: 'Commissionable Value',
        icon: 'cash',
        apiKey: API_KEYS.COMMISSIONAL_VALUE,
        iconColor: COLORS.primary,
    },
    {
        title: 'Additional Amount',
        icon: 'plus-minus',
        apiKey: API_KEYS.ADDITIONAL_AMOUNT,
        iconColor: COLORS.primary,
    },
    {
        title: 'Net Deductions',
        icon: 'chart-line',
        apiKey: API_KEYS.NET_DEDUCTIONS,
        iconColor: COLORS.primary,
    },
    {
        title: 'Discounts Given By restaurant',
        icon: 'offer',
        apiKey: API_KEYS.DISCOUNTS_GIVEN_BY_RESTAURANT,
        iconColor: COLORS.primary,
    },
    {
        title: 'Other Order Level deductions',
        icon: 'cloud-print',
        apiKey: API_KEYS.OTHER_ORDER_LEVEL_DEDUCTIONS,
        iconColor: COLORS.primary,
    },
    {
        title: 'Actual Payout from the sales done in the respective month',
        icon: 'calendar-sync',
        apiKey: API_KEYS.ACTUAL_PAYOUT,
        iconColor: COLORS.primary,
    },
    {
        title: 'Net Payout ',
        icon: 'cash-check',
        apiKey: API_KEYS.NET_PAYOUT,
        iconColor: COLORS.primary,
    },
    {
        title: 'GST paid by Zomato on behalf of restaurant ',
        icon: 'text-account',
        apiKey: API_KEYS.GST_PAID_BY_SOURCE_APP,
        iconColor: COLORS.primary,
    }
]

export const SOURCE_TAB_ITEMS = [
    {
        title: 'Swiggy',
        icon: 'swiggy',
        value: 'swiggy',
    },
    {
        title: 'Zomato',
        icon: 'zomato',
        value: 'zomato',
    }
]


