import { SafeAreaProvider } from 'react-native-safe-area-context';
import CompanyManagementDashboardScreen from './src/screens/CompanyManagementDashboardScreen';
function App() {
  return (
    <SafeAreaProvider>
      <CompanyManagementDashboardScreen />
    </SafeAreaProvider>
  );
}
export default App;
