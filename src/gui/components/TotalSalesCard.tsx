import { COLORS } from "@/src/business/constants/style";
import { DashboardSalesCardModel } from "@/src/business/interfaces/common.interface";
import {
    addINRPrefixForValue,
    formatNumberWithComma,
} from "@/src/business/utils/common.util";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

type Props = {
  data: DashboardSalesCardModel;
};

const TotalSalesCard = ({ data }: Props) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.totalSalesHeaderContainer}>
        <Card style={{ borderRadius: 6 }}>
          <MaterialCommunityIcons
            name={data.icon}
            size={36}
            color={data.iconColor}
          />
        </Card>

        <View style={styles.titleAndOrderSummary}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.order}>
            {formatNumberWithComma(data.data?.totalOrders as string)} Orders
            this month
          </Text>
        </View>
      </View>

      <View style={styles.totaleSalesFooter}>
        <Text style={styles.netAmount}>
          {addINRPrefixForValue(data.data?.total as string)}
        </Text>
        <View style={styles.profitContainer}>
          <Ionicons style={styles.trendIcon} name="trending-up" size={26} />
          <Text style={styles.profitText}>{data.profitMessage}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%", // full width
    height: 200,
    padding: 16,
    justifyContent: "space-between",
  },
  totalSalesHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  titleAndOrderSummary: {
    gap: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Montserrat-bold",
    color: COLORS.textColorPrimary,
  },
  order: {
    fontSize: 10,
    fontFamily: "Montserrat",
    color: COLORS.textColorTertiary,
  },
  totaleSalesFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 16,
  },
  netAmount: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: "Montserrat-semibold",
    color: COLORS.textColorPrimary,
  },

  profitContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  profitText: {
    fontSize: 18,
    fontFamily: "Montserrat-semibold",
    color: COLORS.success,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },

  trendIcon: {
    color: COLORS.success,
  },
});

export default TotalSalesCard;
