export interface CarItem {
  codigo: string;
  nome: string;
}

export interface CarModelsInput {
  idBrand: number;
}

export interface CarModels {
  modelos: Array<CarItem>;
}

export interface CarYearsInput {
  idBrand: number;
  idModel: number;
}

export interface CarDetailsInput {
  idBrand: number;
  idModel: number;
  idYear: string;
}

export interface CarDetails {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}
