import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const age = 20;
export default function JsxPlayground() {
  return (
    <SafeAreaView>
      <VariablesComponent />
      <ExpressionsComponent />
      <FunctionComponent />
    </SafeAreaView>
  );
}
//Functional component for the variables
const VariablesComponent = () => {
  const name = 'Mihir';
  const collegeName = 'VVITU';
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>College Name: {collegeName}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};
//Functional component for expressions.
const ExpressionsComponent = () => {
  const expressionResults = [
    { expression: '10+20', value: 10 + 20 },
    {
      expression: '50/5',
      value: 50 / 5,
    },
    {
      expression: 'age*2',
      value: age * 2,
    },
  ];
  return (
    <View>
      {expressionResults.map(item => (
        <Text>
          {item.expression}: {item.value}
        </Text>
      ))}
    </View>
  );
};
//Function component for the function
const FunctionComponent = () => {
  const greet = () => {
    return 'Welcome to React Native';
  };
  return (
    <View>
      <Text>{greet()}</Text>
    </View>
  );
};
