import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <StackRoutes />
    </NavigationContainer>
  );
}
