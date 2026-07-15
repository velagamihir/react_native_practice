import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentProfileApp() {
  //Array of JSON representing the student information with label and value.
  const studentInformation = [
    {
      label: 'Name',
      value: 'Mihir Velaga',
    },
    {
      label: 'Age',
      value: 20,
    },
    {
      label: 'Branch',
      value: 'CSE',
    },
  ];
  //Array of strings for the skills
  const skillsArray = ['JS', 'Java', 'Python', 'PSQL', 'React Native'];
  return (
    <SafeAreaView>
      <HeaderComponent studentDetails={studentInformation} />
      <SkillsComponent skillsArray={skillsArray} />
    </SafeAreaView>
  );
}
//Header Component
const HeaderComponent = ({ studentDetails }) => {
  return (
    <View>
      <Text>Student Information</Text>
      {studentDetails.map((item, index) => (
        <View key={index}>
          <Text>
            {item.label}: {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};
//Presentational Component to display the skills
const SkillsComponent = ({ skillsArray }) => {
  return (
    <View>
      {skillsArray.map(item => (
        <View key={item}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};
