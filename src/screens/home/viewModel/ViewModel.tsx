import { useEffect, useState } from "react";
import {
  CarDetails,
  CarDetailsInput,
  CarItem,
  CarModels,
  CarModelsInput,
  CarYearsInput
} from "../../../data/models/car";
import {
  getBrands,
  getModels,
  getYears,
  getCarDetails
} from "../../../data/repositories/car";

export const useHomeViewModel = () => {
  const [listCarBrands, setListCarBrands] = useState<Array<CarItem>>();
  const [listCarModels, setListCarModels] = useState<CarModels>();
  const [listCarYears, setListCarYears] = useState<Array<CarItem>>();
  const [carDetails, setCarDetails] = useState<CarDetails>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [showDetails, setShowDetails] = useState<boolean>();

  const [idBrand, setIdBrand] = useState<number | undefined>(undefined);
  const [idModel, setIdModel] = useState<number | undefined>(undefined);
  const [idYear, setIdYear] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (idBrand !== undefined) {
      getCarModels({ idBrand });
    }
  }, [idBrand]);

  useEffect(() => {
    if (!idBrand) return;
    if (idModel !== undefined) {
      getCarYears({ idBrand, idModel });
    }
  }, [idModel]);

  useEffect(() => {
    if (!idBrand) return;
    if (!idModel) return;
    if (idYear !== undefined) {
      getCarDetail({ idBrand, idModel, idYear})
    }
  }, [idYear]);

  const getCarBrands = async () => {
    try {
      setIsLoading(true);
      const response = await getBrands();
      setListCarBrands(response);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const getCarModels = async (input: CarModelsInput) => {
    try {
      setIsLoading(true);
      const response = await getModels(input);
      setListCarModels(response);
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
      setListCarYears(response);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const getCarDetail = async (input: CarDetailsInput) => {
    try {
      setIsLoading(true);
      const response = await getCarDetails(input);
      setCarDetails(response);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const clearFilters = (isBrand?: boolean) => {
    if (!isBrand) setIdBrand(undefined);
    setIdModel(undefined);
    setIdYear(undefined);
    setCarDetails(undefined);
  }

  return {
    listCarBrands,
    listCarModels,
    listCarYears,
    isLoading,
    getCarBrands,
    getCarModels,
    getCarYears,
    getCarDetail,
    idBrand,
    setIdBrand,
    idModel,
    setIdModel,
    idYear,
    setIdYear,
    carDetails,
    showDetails,
    setShowDetails,
    clearFilters
  };
};
