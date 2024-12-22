import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Legend from "./Legend";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 4, // optional, default 3
  barPercentage: 0.5,
};
const screenWidth = Dimensions.get("window").width;
const Chart = ({ totalAmountInvested, totalReturns }) => {
  const data = [
    {
      name: "Total Investment",
      value: totalAmountInvested,
      color: "#80C4E9",
      legendFontColor: "#7F7F7F",
    },
    {
      name: "Total Returns",
      value: totalReturns,
      color: "#4379F2",
      legendFontColor: "#7F7F7F",
    },
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={230}
        chartConfig={chartConfig}
        accessor={"value"}
        backgroundColor={"transparent"}
        hasLegend={false}
        paddingLeft={"10"}
        center={[90, -10]}
        absolute
      />
      <Legend data={data} isHorizontal />
    </View>
  );
};
export default Chart;
