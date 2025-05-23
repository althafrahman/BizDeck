import {
    DashboardCardModel,
    DashboardSalesCardModel,
} from "@/src/business/interfaces/common.interface";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import OtherReportCards from "./OtherReportCards";
import TotalSalesCard from "./TotalSalesCard";

type Props = {
  data: {
    salesData: DashboardSalesCardModel;
    otherCardsData: DashboardCardModel[];
  };
};

const DashboardReportslayout = ({ data }: Props) => {
  const { salesData, otherCardsData } = data;
  return (
    <ScrollView
      scrollEnabled
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <SafeAreaView style={styles.layout}>
        {/* Rendering Total Sales card */}
        <TotalSalesCard data={salesData} />

        {/* Rendering other cards */}
        <OtherReportCards data={otherCardsData} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 10,
  },
});

export default DashboardReportslayout;
