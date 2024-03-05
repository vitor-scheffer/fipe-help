import { CarDetails, CarItem, CarModels } from "../models/Car";
import { api } from "../api";

export const getBrands = async () => {
  const { data } = await api.get<Array<CarItem>>("/v1/carros/marcas");
  return data;
};

export const getModels = async (id: number) => {
  const { data } = await api.get<CarModels>(`/v1/carros/marcas/${id}/modelos`);
  return data;
};

export const getYears = async (idBrand: number, idModel: number) => {
  const { data } = await api.get<Array<CarItem>>(
    `/v1/carros/marcas/${idBrand}/modelos/${idModel}/anos`
  );
  return data;
};

export const getCarDetails = async (
  idBrand: number,
  idModel: number,
  year: string
) => {
  const { data } = await api.get<CarDetails>(
    `/v1/carros/marcas/${idBrand}/modelos/${idModel}/anos/${year}`
  );
  return data;
};
