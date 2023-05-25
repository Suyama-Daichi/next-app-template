import { useLayoutEffect } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { StaticProps } from '@/components/Home/type';

export const CityMap = ({ jpCities, jpPrefectures }: Pick<StaticProps, 'jpCities' | 'jpPrefectures'>) => {
  useLayoutEffect(() => {
    // 描画領域の要素を取得
    const root = am5.Root.new('chartdiv');
    // テーマを設定
    root.setThemes([am5themes_Animated.new(root)]);

    // 地図の設定
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        projection: am5map.geoMercator(),
      }),
    );
    // ポリゴンの描画
    const continentSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: jpPrefectures,
      }),
    );
    continentSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
    });
    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));
    return () => {
      root.dispose();
    };
  }, []);
  return <div id="chartdiv" style={{ width: '100%', height: '750px' }}></div>;
};
