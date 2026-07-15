import { SafeAreaProvider } from 'react-native-safe-area-context';
import JsxPlayground from './src/screens/JSXPlayground';
import StudentProfileApp from './src/screens/StudentProfileApp';
function App() {
  return (
    <SafeAreaProvider>
      <JsxPlayground />
      <StudentProfileApp />
    </SafeAreaProvider>
  );
}
export default App;
