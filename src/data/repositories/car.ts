import {
  CarDetails,
  CarDetailsInput,
  CarItem,
  CarModels,
  CarModelsInput,
  CarYearsInput,
} from "../models";
import { api } from "../api";

export const getBrands = async () => {
  const { data } = await api.get<Array<CarItem>>("/v1/carros/marcas");
  return data;
};

export const getModels = async (input: CarModelsInput) => {
  const { data } = await api.get<CarModels>(
    `/v1/carros/marcas/${input.idBrand}/modelos`
  );
  return data;
};

export const getYears = async (input: CarYearsInput) => {
  const { data } = await api.get<Array<CarItem>>(
    `/v1/carros/marcas/${input.idBrand}/modelos/${input.idModel}/anos`
  );
  return data;
};

export const getCarDetails = async (input: CarDetailsInput) => {
  const { data } = await api.get<CarDetails>(
    `/v1/carros/marcas/${input.idBrand}/modelos/${input.idModel}/anos/${input.idYear}`
  );
  return data;
};
