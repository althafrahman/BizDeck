import {
  DASHBOARD_CARDS,
  DASHBOARD_SALES_CARD,
  SHOP_LIST,
} from "@/src/business/constants/common";
import {
  DashboardCardModel,
  DashboardSalesCardModel,
  ShopsDetailsModel,
} from "@/src/business/interfaces/common.interface";
import { StatementApiResponseModel } from "@/src/business/interfaces/response.interface";
import { DashboardService } from "@/src/business/services/dashboard.service";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardReportslayout from "../components/DashboardReportslayout";
import SelectBox from "../components/Selectbox";
const Dashboard = () => {
  const [selectedShop, setSelectedShop] = useState(SHOP_LIST[0]);
  const [dashboardCards, setDashboardCards] = useState<DashboardCardModel[]>([]);
  const [dashboardSalesCard, setDashboardSalesCard] = useState<DashboardSalesCardModel>({} as DashboardSalesCardModel);
  const [loading, setLoading] = useState(false);
  const onChange = (value: ShopsDetailsModel) => {
    setSelectedShop(value);
  };

  const setDashboardData = (response: StatementApiResponseModel) => {
    // Setting Total sales card data
    const totalSalesCard = { ...DASHBOARD_SALES_CARD };
    totalSalesCard.data = response[totalSalesCard.apiKey];
    setDashboardSalesCard(totalSalesCard);

    // Setting other cards data
    const cards: DashboardCardModel[] = [...DASHBOARD_CARDS];
    cards.forEach((card) => {
      card.data = response[card.apiKey];
    });
    setDashboardCards(cards);
  };

  const getDashboardData = async () => {
    setLoading(true);
    const payload = {
      month: "01",
      year: "2025",
      restaurantId: selectedShop.value,
      source: "Swiggy",
    };

    const response: StatementApiResponseModel = await DashboardService.getMonthStatement(payload);
    setDashboardData(response);
    setLoading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SelectBox
          options={SHOP_LIST}
          onChange={onChange}
          selectedOption={SHOP_LIST[0]}
        />
      </SafeAreaView>
      {/* <SafeAreaView>
        <SourceAppTab />
      </SafeAreaView> */}
      
      <SafeAreaView>
        <DashboardReportslayout data={{salesData: dashboardSalesCard, otherCardsData: dashboardCards}} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },


});

export default Dashboard;
