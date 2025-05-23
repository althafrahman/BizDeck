import { DashboardCardModel } from "@/src/business/interfaces/common.interface";
import { addINRPrefixForValue } from "@/src/business/utils/common.util";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

type Props = {
  data: DashboardCardModel[];
};

const OtherReportCards = ({ data }: Props) => {
  if (data.length === 0) {
    return <View></View>;
  }
  return (
    <View style={styles.container}>
      {data.map((card: DashboardCardModel, index: number) => (
        <Card key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons
              name={card.icon}
              size={30}
              color={card.iconColor}
            />
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={26}
              color={card.iconColor}
            />
          </View>
          <Text style={styles.cardContent}>
            {addINRPrefixForValue(card.data?.total as string)}
          </Text>
          <Text style={styles.cardTitle}>{card.title}</Text>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // gap: 16,
  },
  card: {
    flexBasis: Platform.OS === 'web' ? '30%' : "48%", // roughly 50% minus gap
    padding: 16,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  cardContent: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Montserrat-bold",
  },
});

export default OtherReportCards;
