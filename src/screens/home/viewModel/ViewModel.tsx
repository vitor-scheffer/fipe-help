import { useState } from "react";
import {
  CarDetailsInput,
  CarItem,
  CarModels,
  CarModelsInput,
  CarYearsInput,
} from "../../../data/models/car";
import {
  getBrands,
  getModels,
  getYears,
  getCarDetails,
} from "../../../data/repositories/car";

export const useHomeViewModel = () => {
  const [listCarBrands, setListCarBrands] = useState<Array<CarItem>>();
  const [listCarModels, setListCarModels] = useState<CarModels>();
  const [listCarYears, setListCarYears] = useState<Array<CarItem>>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const getCarBrands = async () => {
    try {
      setIsLoading(true);
      const response = await getBrands();
      setIsLoading(false);
      setListCarBrands(response);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const getCarModels = async (input: CarModelsInput) => {
    try {
      setIsLoading(true);
      const response = await getModels(input);
      setIsLoading(false);
      return response;
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const getCarYears = async (input: CarYearsInput) => {
    try {
      setIsLoading(true);
      const response = await getYears(input);
      setIsLoading(false);
      return response;
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const getCarDetail = async (input: CarDetailsInput) => {
    try {
      const response = await getCarDetails(input);
      setIsLoading(false);
      return response;
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  return {
    listCarBrands,
    listCarModels,
    listCarYears,
    isLoading,
    getCarBrands,
    getCarModels,
    getCarYears,
    getCarDetail,
  };
};
