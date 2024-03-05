import { useEffect } from "react";
import { View, Text } from "react-native";
import { getBrands, getCarDetails, getModels, getYears } from "../../../data/repositories/car";

export function Home() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCarDetails(59, 5082, "2014-1");
        console.log(response.Valor);
      } catch (error) {
        alert(error)
      }
    }

    getData();
  }, []);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
