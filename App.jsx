import { SafeAreaProvider } from 'react-native-safe-area-context';
import OperatorsPlayground from './src/screens/OperatorsPlayground';
function App() {
  return (
    <SafeAreaProvider>
      <OperatorsPlayground />
    </SafeAreaProvider>
  );
}
export default App;
