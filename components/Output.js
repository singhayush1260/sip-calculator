import { View, Text, StyleSheet } from "react-native";

const Output = ({ label, amount }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{amount?.toLocaleString()}</Text>
    </View>
  );
};
export default Output;

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  label: {
    fontSize: 16,
    color: "#607274",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3D3B40",
  },
});
