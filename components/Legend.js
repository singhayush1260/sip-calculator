import { View, Text, StyleSheet } from "react-native";

const Legend = ({ data, isHorizontal }) => {
  return (
    <View
      style={[styles.legendContainer, isHorizontal && { flexDirection: "row" }]}
    >
      {data.map((legend) => {
        return (
          <View style={styles.legend} key={legend.name}>
            <View
              style={[styles.legendColor, { backgroundColor: legend.color }]}
            />
            <Text style={{color:legend.legendFontColor}}>{legend.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default Legend;

const styles = StyleSheet.create({
  legendContainer: {
    padding: 8,
    justifyContent: "center",
    gap: 20,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendLabel: {
    color: "#7F7F7F",
  },
});
