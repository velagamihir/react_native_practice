import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const name = 'Mihir';
  const [age, setAge] = useState(20);
  const myselfObject = {
    name: 'Mihir',
    age: 20,
    skills: ['JS', 'React Native'],
  };
  const num = 10;
  const str = 'Mihir';
  const bool = true;
  const nullVariable = null;
  const undefinedVariable = undefined;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Name: {name}</Text>
          <Text>Age: {age}</Text>
          <Button
            onPress={() => {
              setAge(prev => prev + 1);
            }}
            title="Age Increment"
          />
        </View>
        <View>
          <Text> {myselfObject.name} </Text>
          <Text> {myselfObject.age} </Text>
          {myselfObject.skills.map((item, index) => (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text>{num}</Text>
          <Text>{str}</Text>
          <Text>{typeof bool}</Text>
          <Text>{typeof nullVariable}</Text>
          <Text>{typeof undefinedVariable}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
