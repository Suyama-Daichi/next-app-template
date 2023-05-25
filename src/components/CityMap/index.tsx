import { useLayoutEffect, useRef } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { GeoJsonDataPrefecture } from '@/components/CityMap/prefecture.type';
import { StaticProps } from '@/components/Home/type';

export const CityMap = ({ jpCities, jpPrefectures }: Pick<StaticProps, 'jpCities' | 'jpPrefectures'>) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current) return;
    // 描画領域の要素を取得
    const root = am5.Root.new(ref.current);
    // テーマを設定
    const colors = am5.ColorSet.new(root, {});
    root.setThemes([am5themes_Animated.new(root)]);

    // 地図の設定
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        projection: am5map.geoMercator(),
      }),
    );
    // 都道府県レベルマップ
    const jpPrefectureSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: jpPrefectures,
      }),
    );
    jpPrefectureSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
      fill: am5.color(0xaaaaaa),
      templateField: 'polygonSettings',
    });
    jpPrefectureSeries.mapPolygons.template.states.create('hover', {
      fill: colors.getIndex(9),
    });
    jpPrefectureSeries.mapPolygons.template.events.on('click', async function (ev) {
      const dataItem = ev.target.dataItem;
      const data = dataItem?.dataContext as GeoJsonDataPrefecture['features'][0]['properties'];
      const zoomAnimation = jpPrefectureSeries.zoomToDataItem(dataItem);
      await zoomAnimation?.waitForStop();
      const citiesInSelectedPrefecture = jpCities.features.filter((feature) => feature.properties.KEN === data.name);
      const jpCityGeoJSON = { ...jpCities, features: citiesInSelectedPrefecture };
      jpCitySeries.setAll({
        geoJSON: jpCityGeoJSON,
        fill: am5.color(0xaaaaaa),
      });

      jpPrefectureSeries.hide(150);
      jpCitySeries.show();
      backContainer.show();
    });
    // 都道府県レベルマップ
    const jpCitySeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        visible: false,
      }),
    );
    jpCitySeries.mapPolygons.template.setAll({
      tooltipText: '{SEIREI}{SIKUCHOSON}',
      interactive: true,
      fill: am5.color(0xaaaaaa),
    });
    jpCitySeries.mapPolygons.template.states.create('hover', {
      fill: colors.getIndex(9),
    });
    // 拡大率リセットボタン
    const backContainer = chart.children.push(
      am5.Container.new(root, {
        x: am5.p100,
        centerX: am5.p100,
        dx: -10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        y: 30,
        interactiveChildren: false,
        layout: root.horizontalLayout,
        cursorOverStyle: 'pointer',
        background: am5.RoundedRectangle.new(root, {
          fill: am5.color(0xffffff),
          fillOpacity: 0.2,
        }),
        visible: false,
      }),
    );
    backContainer.children.push(
      am5.Label.new(root, {
        text: '戻る',
        centerY: am5.p50,
      }),
    );
    backContainer.events.on('click', function () {
      chart.goHome();
      jpPrefectureSeries.show();
      jpCitySeries.hide();
      backContainer.hide();
    });
    // ズームコントロール
    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));
    return () => {
      root.dispose();
    };
  }, [jpCities, jpPrefectures]);

  return <div ref={ref} style={{ width: '100%', height: '750px' }}></div>;
};
