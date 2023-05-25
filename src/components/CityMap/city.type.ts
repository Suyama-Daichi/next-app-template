export interface GeoJsonData {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  id: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  N03_001: string;
  N03_002?: string;
  N03_003?: string;
  N03_004: string;
  N03_007: any;
  id: string;
}

export interface Geometry {
  type: string;
  coordinates: number[][][][];
}
