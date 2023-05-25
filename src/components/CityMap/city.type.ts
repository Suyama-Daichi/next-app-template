export interface GeoJsonDataCity {
  type: string;
  name: string;
  crs: Crs;
  features: Feature[];
}

export interface Crs {
  type: string;
  properties: Properties;
}

export interface Properties {
  name: string;
}

export interface Feature {
  type: string;
  properties: Properties2;
  geometry: Geometry;
}

export interface Properties2 {
  JCODE?: string;
  KEN: string;
  SICHO?: string;
  GUN?: string;
  SEIREI?: string;
  SIKUCHOSON: string;
  CITY_ENG?: string;
  P_NUM: number;
  H_NUM: number;
  Shape_Leng: number;
  Shape_Area: number;
}

export interface Geometry {
  type: string;
  coordinates: number[][][][];
}
