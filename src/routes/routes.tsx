import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home/view/Home";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
