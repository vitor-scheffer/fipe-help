export interface CarItem {
  codigo: string;
  nome: string;
}

export interface CarModels {
  modelos: Array<CarItem>;
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
