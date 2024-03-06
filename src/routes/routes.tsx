import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

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
