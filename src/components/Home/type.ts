import { GeoJsonDataCity } from '@/components/CityMap/city.type';
import { GeoJsonDataPrefecture } from '@/components/CityMap/prefecture.type';

export type StaticProps = {
  jpCities: GeoJsonDataCity;
  jpPrefectures: GeoJsonDataPrefecture;
};
