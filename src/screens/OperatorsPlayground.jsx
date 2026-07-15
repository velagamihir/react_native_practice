import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OperatorsPlayGround() {
  return (
    <View>
      <ArithmeticOperators />
      <ComparisionOperator />
      <LogicalOperator />
    </View>
  );
}
//Functional component for the arithmetic operators
const ArithmeticOperators = () => {
  const number1 = 25;
  const number2 = 7;
  const sum = number1 + number2;
  const diff = number1 - number2;
  const product = number1 * number2;
  const quotient = number1 / number2;
  const remainder = number1 % number2;
  const exponent = number1 ** number2;
  const result = [
    { label: 'Sum', value: sum },
    { label: 'Diff', value: diff },
    { label: 'Product', value: product },
    { label: 'Quotient', value: quotient },
    { label: 'Remainder', value: remainder },
    { label: 'Exponent', value: exponent },
  ];
  return (
    <SafeAreaView>
      {result.map((item, index) => (
        <View key={item.label}>
          <Text>
            {item.label} {item.value}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};
//Function component for the comparision operators
const ComparisionOperator = () => {
  const resultArray = [
    (10 == '10').toString(),
    (10 === '10').toString(),
    (10 != '10').toString(),
    (10 !== '10').toString(),
    (20 > 15).toString(),
    (15 <= 10).toString(),
  ];
  return (
    <View>
      {resultArray.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
//Function component for the logical operators
const LogicalOperator = () => {
  const isLoggedIn = true;
  const isAdmin = false;
  const resultantArray = [
    (isLoggedIn && isAdmin).toString(),
    (isLoggedIn || isAdmin).toString(),
    (!isLoggedIn).toString(),
  ];
  return (
    <View>
      {resultantArray.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
