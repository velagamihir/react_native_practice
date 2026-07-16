import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentDashboardScreen() {
  //States
  //useState
  //Attendance percentage
  const [attendance, setAttendance] = useState(82);
  //Functions
  //Attendance
  //Increase attendance
  const handleIncreaseAttendance = () => {
    setAttendance(prev => Math.min(100,prev+1));
  };
  //Decrease Attendance
  const handleDecreaseAttendance = () => {
    setAttendance(prev => Math.max(0,prev-1));
  };
  //Data
  //JSON
  //Student Details
  const studentDetails = {
    name: 'Mihir Velaga',
    age: 20,
    branch: 'CSE',
    semester: 4,
  };
  return (
    <SafeAreaView>
      <StudentProfileComponent studentDetails={studentDetails} />
      <AttendanceComponent
        attendance={attendance}
        increaseAttendance={handleIncreaseAttendance}
        decreaseAttendance={handleDecreaseAttendance}
      />
    </SafeAreaView>
  );
}
//Presentational Component to display the Student Profile
const StudentProfileComponent = ({ studentDetails }) => {
  return (
    <View>
      <Text>Name: {studentDetails.name}</Text>
      <Text>Age: {studentDetails.age}</Text>
      <Text>Branch: {studentDetails.branch}</Text>
      <Text>Semester: {studentDetails.semester}</Text>
    </View>
  );
};
//Functional component to present the attendance and change it.
const AttendanceComponent = ({
  attendance,
  increaseAttendance,
  decreaseAttendance,
}) => {
  return (
    <View>
      <Text>Attendance: {attendance}%</Text>
      <Button onPress={increaseAttendance} title="Increase Attendance" />
      <Button onPress={decreaseAttendance} title="Decrease Attendance" />
    </View>
  );
};
