import { View, StyleSheet } from "react-native";
import Input from "./Input";
import Output from "./Output";
import Chart from "./Chart";
import { useContext } from "react";
import { InputContext } from "../context/input-context";
import { calculateSip,calculateLumpsum,calculateFd,calculateRd } from "../utils/math";

const Calculator = ({type}) => {  

let fun;

switch(type){
    case "sip": fun=calculateSip
    break;
    case "lumpsum":fun=calculateLumpsum
    break;
    case "fd":fun=calculateFd
    break;
    case "rd":fun=calculateRd
    break;
}

console.log(type,fun)

const{values}=useContext(InputContext);


const{maturityAmount,totalInvestedAmount,totalReturns}=fun(values.principal,values.annualRate,values.time);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputWrapper}>
        <Input label="Monthly Investment" minValue={500} maxValue={10000000} value={values.principal} step={500}  />
        <Input label="Expected Return Rate" minValue={1} maxValue={30} value={values.annualRate} step={0.5} />
        <Input label="Time Period" minValue={1} maxValue={40} value={values.time} step={1} />
      </View>
      <View style={styles.outputWrapper}>
        <Output label="Invested Amount" amount={totalInvestedAmount} />
        <Output label="Est. Return" amount={totalReturns} />
        <Output label="Total Value" amount={maturityAmount} />
      </View>
      <Chart totalAmountInvested={totalInvestedAmount} totalReturns={totalReturns}/>
    </View>
  );
};
export default Calculator;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    backgroundColor: "white",
  },
  inputWrapper: {
    marginTop: 30,
  },
  outputWrapper: {
    marginTop: 10,
  },
});
