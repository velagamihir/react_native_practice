import { SafeAreaProvider } from 'react-native-safe-area-context';
import JsxPlayground from './src/screens/JSXPlayground';
function App() {
  return (
    <SafeAreaProvider>
      <JsxPlayground />
    </SafeAreaProvider>
  );
}
export default App;
