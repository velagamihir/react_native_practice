import { SafeAreaProvider } from 'react-native-safe-area-context';
import CompanyManagementDashboardScreen from './src/screens/CompanyManagementDashboardScreen';
import StudentDashboardScreen from './src/screens/StudentDashboardScreen';
function App() {
  return (
    <SafeAreaProvider>
      <CompanyManagementDashboardScreen />
      <StudentDashboardScreen />
    </SafeAreaProvider>
  );
}
export default App;
