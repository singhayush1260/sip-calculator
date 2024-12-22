import { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { InputContext } from "../context/input-context";

const Input = ({ label, minValue, maxValue,step }) => {
  const { values, updateValue } = useContext(InputContext);
  const [localValue, setLocalValue] = useState(values[label]);

  const unit =
    label === "Monthly Investment"
      ? "Rs"
      : label === "Expected Return Rate"
      ? "%"
      : "years";

  const key =
    label === "Monthly Investment"
      ? "principal"
      : label === "Expected Return Rate"
      ? "annualRate"
      : "time";

  useEffect(() => {
    // Synchronize local value with context whenever context value changes
    setLocalValue(values[key]);
  }, [values[key]]);

  // Debounce mechanism
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localValue !== values[key]) {
        updateValue(key, localValue);
      }
    }, 300); // Adjust debounce delay (in ms) as needed

    return () => clearTimeout(timeoutId);
  }, [localValue]);

  const handleTextInputChange = (text) => {
    const numericValue = parseInt(text,10);
    console.log("numeric value",numericValue)
    if (!isNaN(numericValue) && numericValue >= minValue && numericValue <= maxValue) {
      setLocalValue(Math.floor(numericValue));
    }
  };

  const handleSliderChange = (value) => {
    setLocalValue(value);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.topSubWrapper}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.textInputWrapper,
           
          ]}
        >
          <TextInput
            keyboardType="numeric"
            value={localValue?.toString()}
            onChangeText={handleTextInputChange}
            style={styles.textInput}
          />
          <Text />
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
      <View style={styles.bottomSubWrapper}>
        <Slider
          style={{ height: 40 }}
          step={step}
          minimumValue={minValue}
          maximumValue={maxValue}
          minimumTrackTintColor="#4335A7"
          maximumTrackTintColor="#0766AD"
          value={localValue}
          onValueChange={handleSliderChange}
        />
      </View>
    </View>
  );
};

export default Input;


const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    padding: 4,
  },
  label: {
    width: "50%",
    fontSize: 16,
    paddingLeft: 6,
  },
  topSubWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputWrapper: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width: "45%",
    padding: 4,
    backgroundColor: "#F2F9FF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textInput: {
    width:"75%",
    paddingVertical: 8,
    fontSize: 16,
    textAlign:"right",
  },
  unit:{
width:"25%",
paddingVertical:8,
fontWeight:"bold",
  },
  bottomSubWrapper: {
    marginTop: 8,
  },
});
