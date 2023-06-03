import { useRecoilValue } from 'recoil';
import useSWR from 'swr';

import { FOURSQUARE_API_VERSION, FOURSQUARE_BACKEND } from '@/common/constants';
import { fetcher } from '@/common/fetcher';
import { FoursquareResponse } from '@/common/types/FoursquareResponse';
import { Checkins } from '@/common/types/UserCheckinsResponse';
import { makeQueryString } from '@/common/utils';
import { accessTokenAtom } from '@/recoil/atoms';

const useFetchUserCheckins = () => {
  const accessToken = useRecoilValue(accessTokenAtom);
  const queryString = makeQueryString({ v: FOURSQUARE_API_VERSION, oauth_token: accessToken, limit: 250 });
  // TODO: ホストを切り替えたい
  const swr = useSWR<FoursquareResponse<Checkins>>(
    !accessToken ? null : `${FOURSQUARE_BACKEND}/v2/users/self/checkins?${queryString}`,
    fetcher,
  );
  return { ...swr, data: swr.data?.response.checkins, isLoading: swr.isLoading || swr.isValidating };
};

export default useFetchUserCheckins;

const mock = {
  meta: {
    code: 200,
    requestId: '647b5bd41d4f741b250fd080',
  },
  notifications: [
    {
      type: 'notificationTray',
      item: {
        unreadCount: 0,
      },
    },
  ],
  response: {
    checkins: {
      count: 28656,
      items: [
        {
          id: '647b5a6ce0681c603dbd5a93',
          createdAt: 1685805676,
          type: 'checkin',
          entities: [],
          shout: '開発進捗。直近20チェックインで訪れた都道府県を色塗りできた',
          timeZoneOffset: 540,
          editableUntil: 1685892076000,
          venue: {
            id: '6083fe1191710d12f77f8a89',
            name: '3代目どん家',
            location: {
              isFuzzed: true,
              lat: 35.75777596800539,
              lng: 140.00336767010552,
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['鎌ケ谷市, 千葉県', '273-0103'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d103941735',
                name: '自宅 (個人)',
                pluralName: '自宅 (個人)',
                shortName: '自宅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/building/home_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            private: true,
            createdAt: 1619262993,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: true,
          photos: {
            count: 1,
            items: [
              {
                id: '647b5a6df297487ff7efe4fb',
                createdAt: 1685805677,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_J042UhHvbCwEaoaS_g0CjBbaS1YfjYGVqNs-a38BwA4.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'friends',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6479a16ee54cf26374af8f67',
          createdAt: 1685692782,
          type: 'checkin',
          entities: [],
          shout: '写真じゃわかりにくいけどどえらい雨。レーダー的には紫',
          timeZoneOffset: 540,
          venue: {
            id: '6083fe1191710d12f77f8a89',
            name: '3代目どん家',
            location: {
              isFuzzed: true,
              lat: 35.75777596800539,
              lng: 140.00336767010552,
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['鎌ケ谷市, 千葉県', '273-0103'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d103941735',
                name: '自宅 (個人)',
                pluralName: '自宅 (個人)',
                shortName: '自宅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/building/home_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            private: true,
            createdAt: 1619262993,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '31314020',
                    firstName: '秀吉',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/31314020_btjNmUEO_5U4gIqq4aMhYMsdWulw-qWoMMC9QzeGLsv04eS5fXgPetQkLbdzODns_Zbt6SJs3.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '秀吉',
          },
          like: false,
          isMayor: true,
          photos: {
            count: 1,
            items: [
              {
                id: '6479a170f43e593daacfc8ca',
                createdAt: 1685692784,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_bVdigQYbU6WzULUEaESGphcQwb0oG20vej0nI39utZY.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'friends',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64797be3421c467ba00ffb70',
          createdAt: 1685683171,
          type: 'checkin',
          entities: [],
          shout: '帰ったらお仕事',
          timeZoneOffset: 540,
          venue: {
            id: '5358d404498e9a4660e8eea6',
            name: '千葉市',
            location: {
              lat: 35.60720795237453,
              lng: 140.1064968109131,
              cc: 'JP',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['千葉県'],
            },
            categories: [
              {
                id: '50aa9e094b90af0d42d5de0d',
                name: '市',
                pluralName: '市',
                shortName: '市区町村',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            locked: true,
            createdAt: 1398330372,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '20183023',
                    firstName: 'TT',
                    lastName: '_Taka',
                    gender: 'male',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/20183023_-RFgWs4e_BMX3CIbAnWmmHsUzNYaaVkG4CqXZ_p6uRgoMcFD5RxMYVzaRpvi9TERPL03dpQH4.jpg',
                    },
                  },
                ],
              },
            ],
            summary: 'TT _Taka',
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64797bba4a189375cb613b89',
          createdAt: 1685683130,
          type: 'checkin',
          entities: [],
          shout: '千葉は普通の雨って感じ。和歌山静岡あたりやばそう',
          timeZoneOffset: 540,
          venue: {
            id: '4b729334f964a520017f2de3',
            name: '京成千葉駅 (KS59)',
            location: {
              address: '中央区新町250-3',
              lat: 35.61172705145864,
              lng: 140.11423993197224,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.61172705145864,
                  lng: 140.11423993197224,
                },
              ],
              postalCode: '260-0028',
              cc: 'JP',
              neighborhood: '千葉市',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区新町250-3', '千葉市, 千葉県', '260-0028'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d129951735',
                name: '鉄道駅',
                pluralName: '鉄道駅',
                shortName: '鉄道駅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/trainstation_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1265799988,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '20183023',
                    firstName: 'TT',
                    lastName: '_Taka',
                    gender: 'male',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/20183023_-RFgWs4e_BMX3CIbAnWmmHsUzNYaaVkG4CqXZ_p6uRgoMcFD5RxMYVzaRpvi9TERPL03dpQH4.jpg',
                    },
                  },
                ],
              },
            ],
            summary: 'TT _Taka',
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64797430e8011b39de6b2cd2',
          createdAt: 1685681200,
          type: 'checkin',
          entities: [],
          shout: '辛味噌ラーメン(880円)',
          timeZoneOffset: 540,
          venue: {
            id: '4df21e74c65bf55ee5261417',
            name: 'らいもん 雷門 千葉店',
            location: {
              address: '中央区富士見2-24-1',
              crossStreet: 'C-one内',
              lat: 35.609697866268135,
              lng: 140.11690499802407,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.609697866268135,
                  lng: 140.11690499802407,
                },
              ],
              postalCode: '260-0015',
              cc: 'JP',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区富士見2-24-1 (C-one内)', '千葉市, 千葉県', '260-0015'],
            },
            categories: [
              {
                id: '55a59bace4b013909087cb24',
                name: 'ラーメン屋',
                pluralName: 'ラーメン屋',
                shortName: 'ラーメン',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/ramen_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1307713140,
          },
          likes: {
            count: 2,
            groups: [
              {
                type: 'friends',
                count: 2,
                items: [
                  {
                    id: '144078508',
                    firstName: '真夏',
                    gender: 'female',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/144078508_ccX1X1VV_JU5msOSL4Hwy28K5ctS5oNE9SfmSWe-ptdcCUb8pqyExIduD4aQ25R55y0Lt0bW9.jpg',
                    },
                  },
                  {
                    id: '348902271',
                    firstName: 'りな',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/348902271_beGwG0Ih_zUNFOOTPQeMEqbHgCdXZVugOGurH6bcu1-Zxt9A20giRLimfP44BWd0wYl3BogI0.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '真夏とりな',
          },
          like: false,
          sticker: {
            id: '554149287b28d289d6e8e7ea',
            name: 'General Tso',
            image: {
              prefix: 'https://fastly.4sqi.net/img/sticker/',
              sizes: [60, 94, 150, 300],
              name: '/chinesetakeout_189fdf.png',
            },
            stickerType: 'unlockable',
            group: {
              name: 'collectible',
              index: 71,
            },
            pickerPosition: {
              page: 2,
              index: 23,
            },
            teaseText: '中華料理店 にチェックインしてこのステッカーをアンロックしましょう。',
            unlockText: '中華料理店でこのステッカーを獲得しました',
            bonusText: '中華料理店で使ってボーナスを獲得する。',
            points: 2,
            bonusStatus: '1週間に1回使用できます。日曜日の深夜0時に再チャージされます。',
          },
          isMayor: false,
          photos: {
            count: 1,
            items: [
              {
                id: '6479743165fb613b8667f55b',
                createdAt: 1685681201,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_k4yXRvOn_mXr3elpMwDVJr1TAOwFhcT3p8Q26nms7L8.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'public',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64795c05c1db4b0bc726eaa7',
          createdAt: 1685675013,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '635b3f77bf3f87480f936cea',
            name: 'ビックカメラ 千葉駅前店',
            location: {
              address: '中央区富士見2-1-1',
              lat: 35.611977,
              lng: 140.11565,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.611977,
                  lng: 140.11565,
                },
              ],
              postalCode: '260-0015',
              cc: 'JP',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区富士見2-1-1', '千葉市, 千葉県', '260-0015'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d122951735',
                name: '電器店',
                pluralName: '電器店',
                shortName: '電器店',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/technology_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1666924408,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '209517866',
                    firstName: '🍑',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/209517866_8jetXr6a_G-ck2BMYNHmxWcbhDnnoCYmV8jcVpxjtjyH2WjFibBj_e1P5D7qMK6-IvsSImC5L.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '🍑',
          },
          like: false,
          sticker: {
            id: '5963b5dbbab2f604cf800474',
            name: 'Telly',
            image: {
              prefix: 'https://fastly.4sqi.net/img/sticker/',
              sizes: [60, 94, 150, 300],
              name: '/ElectronicsStores_870536.png',
            },
            stickerType: 'unlockable',
            group: {
              name: 'collectible',
              index: 208,
            },
            pickerPosition: {
              page: 8,
              index: 16,
            },
            teaseText: '電器店 にチェックインしてこのステッカーをアンロックしましょう。',
            unlockText: '電器店でこのステッカーを獲得しました',
          },
          isMayor: false,
          photos: {
            count: 1,
            items: [
              {
                id: '64795c07d9bf743a95340fdb',
                createdAt: 1685675015,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_VpMaFFVBLaVDqJYO0casf-UgPpqf_ihmCnaoVVO7qq0.jpg',
                width: 1080,
                height: 813,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'friends',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6479588ed04ada77bd15218e',
          createdAt: 1685674126,
          type: 'checkin',
          entities: [],
          shout: '18回目。もう数ヶ月剃らなくても平気。所要時間30分',
          timeZoneOffset: 540,
          venue: {
            id: '5f28d264e8a8df596bf5dcfd',
            name: 'ゴリラクリニック千葉院',
            location: {
              lat: 35.610306,
              lng: 140.1176,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.610306,
                  lng: 140.1176,
                },
              ],
              postalCode: '260-0015',
              cc: 'JP',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['千葉市, 千葉県', '260-0015'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d104941735',
                name: '医療センター',
                pluralName: '医療センター',
                shortName: '医療',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/building/medical_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1596510820,
          },
          likes: {
            count: 5,
            groups: [
              {
                type: 'friends',
                count: 5,
                items: [
                  {
                    id: '31314020',
                    firstName: '秀吉',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/31314020_btjNmUEO_5U4gIqq4aMhYMsdWulw-qWoMMC9QzeGLsv04eS5fXgPetQkLbdzODns_Zbt6SJs3.jpg',
                    },
                  },
                  {
                    id: '144078508',
                    firstName: '真夏',
                    gender: 'female',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/144078508_ccX1X1VV_JU5msOSL4Hwy28K5ctS5oNE9SfmSWe-ptdcCUb8pqyExIduD4aQ25R55y0Lt0bW9.jpg',
                    },
                  },
                  {
                    id: '3032246',
                    firstName: 'uni',
                    lastName: 'm',
                    gender: 'none',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/AV400IK2SLAPJROY.jpg',
                    },
                  },
                  {
                    id: '85449570',
                    firstName: 'だし',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/85449570-Y452MOAWEYR040RX.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '秀吉、真夏、uni m とその他 2 人',
          },
          like: false,
          isMayor: false,
          photos: {
            count: 1,
            items: [
              {
                id: '647958983d657f73522314ae',
                createdAt: 1685674136,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_t2vonuIFYeaM71vLfdzf8jS3f8-yFCgrPtKidEryL8c.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'friends',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 3,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64794f4ad2c6872f466755ae',
          createdAt: 1685671754,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '51ea9863498ebafeb953e399',
            name: '富士見2-14スクランブル交差点',
            location: {
              address: '中央区富士見2-5',
              lat: 35.610143,
              lng: 140.116808,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.610143,
                  lng: 140.116808,
                },
              ],
              postalCode: '260-0015',
              cc: 'JP',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区富士見2-5', '千葉市, 千葉県', '260-0015'],
            },
            categories: [
              {
                id: '52f2ab2ebcbc57f1066b8b4c',
                name: '交差点',
                pluralName: '交差点',
                shortName: '交差点',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/default_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1374328931,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64794f1ab80cf93e54e6aac5',
          createdAt: 1685671706,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '4c5286d2250dd13a9848fe7e',
            name: 'C・one',
            location: {
              address: '中央区富士見2-25-1',
              lat: 35.61031840177824,
              lng: 140.11645317077637,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.61031840177824,
                  lng: 140.11645317077637,
                },
              ],
              postalCode: '260-0015',
              cc: 'JP',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区富士見2-25-1', '千葉市, 千葉県', '260-0015'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d1fd941735',
                name: 'ショッピングモール',
                pluralName: 'ショッピングモール',
                shortName: 'モール',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/mall_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1280476882,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64794df5a398296ac8b67741',
          createdAt: 1685671413,
          type: 'checkin',
          entities: [],
          shout: '滞在時間2時間もないけどコンニチバ',
          timeZoneOffset: 540,
          venue: {
            id: '4c332ecd6f1fef3b9175ec3d',
            name: '千葉中央駅 (KS60)',
            location: {
              address: '中央区本千葉町15-1',
              lat: 35.60730390354596,
              lng: 140.11775135993958,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.60730390354596,
                  lng: 140.11775135993958,
                },
              ],
              postalCode: '260-0014',
              cc: 'JP',
              neighborhood: '千葉市',
              city: '千葉市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['中央区本千葉町15-1', '千葉市, 千葉県', '260-0014'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d129951735',
                name: '鉄道駅',
                pluralName: '鉄道駅',
                shortName: '鉄道駅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/trainstation_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1278422733,
          },
          likes: {
            count: 2,
            groups: [
              {
                type: 'friends',
                count: 2,
                items: [
                  {
                    id: '209517866',
                    firstName: '🍑',
                    gender: 'none',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/209517866_8jetXr6a_G-ck2BMYNHmxWcbhDnnoCYmV8jcVpxjtjyH2WjFibBj_e1P5D7qMK6-IvsSImC5L.jpg',
                    },
                  },
                  {
                    id: '170164004',
                    firstName: 'かたとも',
                    gender: 'male',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/170164004_du9eZWhg_NmLbbwqetLfiN6dtupbH70eKj2jwQRN965kREwtMbNYioZVCSuvG_h6uvbOq6vj7.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '🍑とかたとも',
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '647943bae8011b39de2470e7',
          createdAt: 1685668794,
          type: 'checkin',
          entities: [],
          shout: '千葉中央まで一本！',
          timeZoneOffset: 540,
          venue: {
            id: '4bdc15cb2a3a0f479a73b1b6',
            name: '鎌ヶ谷大仏駅 (SL13)',
            location: {
              address: '鎌ケ谷1-8-1',
              lat: 35.757774677877606,
              lng: 140.01416965210913,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.757774677877606,
                  lng: 140.01416965210913,
                },
              ],
              postalCode: '273-0105',
              cc: 'JP',
              neighborhood: '鎌ヶ谷1-8-1',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['鎌ケ谷1-8-1', '鎌ケ谷市, 千葉県', '273-0105'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d129951735',
                name: '鉄道駅',
                pluralName: '鉄道駅',
                shortName: '鉄道駅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/trainstation_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1272714699,
          },
          likes: {
            count: 2,
            groups: [
              {
                type: 'friends',
                count: 2,
                items: [
                  {
                    id: '170164004',
                    firstName: 'かたとも',
                    gender: 'male',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/170164004_du9eZWhg_NmLbbwqetLfiN6dtupbH70eKj2jwQRN965kREwtMbNYioZVCSuvG_h6uvbOq6vj7.jpg',
                    },
                  },
                  {
                    id: '20183023',
                    firstName: 'TT',
                    lastName: '_Taka',
                    gender: 'male',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix: '/20183023_-RFgWs4e_BMX3CIbAnWmmHsUzNYaaVkG4CqXZ_p6uRgoMcFD5RxMYVzaRpvi9TERPL03dpQH4.jpg',
                    },
                  },
                ],
              },
            ],
            summary: 'かたともとTT _Taka',
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6479426d60ea584140a9eed5',
          createdAt: 1685668461,
          type: 'checkin',
          entities: [],
          shout: '雨やばすぎグチャグチャ',
          timeZoneOffset: 540,
          venue: {
            id: '607a796dd1fac3229ae11042',
            name: '鎌ヶ谷一丁目 ふれあいの森',
            location: {
              address: '鎌ケ谷1-3-6',
              lat: 35.759756,
              lng: 140.010863,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.759756,
                  lng: 140.010863,
                },
              ],
              postalCode: '273-0105',
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['鎌ケ谷1-3-6', '鎌ケ谷市, 千葉県', '273-0105'],
            },
            categories: [
              {
                id: '52e81612bcbc57f1066b7a23',
                name: '森林',
                pluralName: '森林',
                shortName: '森林',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1618639213,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: true,
          photos: {
            count: 1,
            items: [
              {
                id: '6479427faa891a5b46da39e0',
                createdAt: 1685668479,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_fWAcAvsEe2Jp9xLKE492nmBJTlu3nK57CVLsUlbHaZk.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'public',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '647876ecf7088409bc0351ef',
          createdAt: 1685616364,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '4dad843693a070582bb07e84',
            name: 'Big-A 鎌ヶ谷丸山店',
            location: {
              address: '丸山1-2-10',
              lat: 35.76299679964991,
              lng: 140.00972333414097,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.76299679964991,
                  lng: 140.00972333414097,
                },
              ],
              postalCode: '273-0103',
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['丸山1-2-10', '鎌ケ谷市, 千葉県', '273-0103'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d118951735',
                name: '食料品店',
                pluralName: '食料品店',
                shortName: '食料品店',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1303217206,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          sticker: {
            id: '55563bd52beaa0fbc4d1dc3f',
            name: 'Baggs',
            image: {
              prefix: 'https://fastly.4sqi.net/img/sticker/',
              sizes: [60, 94, 150, 300],
              name: '/groceries_2a2425.png',
            },
            stickerType: 'unlockable',
            group: {
              name: 'collectible',
              index: 85,
            },
            pickerPosition: {
              page: 3,
              index: 13,
            },
            teaseText: '食料品 & 飲料品店 にチェックインしてこのステッカーをアンロックしましょう。',
            unlockText: '食料品 & 飲料品店でこのステッカーを獲得しました',
            bonusText: '食料品 & 飲料品店で使ってボーナスを獲得する。',
            points: 2,
            bonusStatus: '1週間に1回使用できます。日曜日の深夜0時に再チャージされます。',
          },
          isMayor: true,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64787604964f4c545ca32464',
          createdAt: 1685616132,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '5f626df008766f2161ac5de6',
            name: '丸山一丁目交差点',
            location: {
              address: '丸山1/右京塚/東初富4',
              crossStreet: '県道57号',
              lat: 35.765175,
              lng: 140.00714,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.765175,
                  lng: 140.00714,
                },
              ],
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['丸山1/右京塚/東初富4 (県道57号)', '鎌ケ谷市, 千葉県'],
            },
            categories: [
              {
                id: '52f2ab2ebcbc57f1066b8b4c',
                name: '交差点',
                pluralName: '交差点',
                shortName: '交差点',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/default_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1600286192,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '647874138ad9c9302b5444db',
          createdAt: 1685615635,
          type: 'checkin',
          entities: [],
          shout: '天気が怪しくなってきた',
          timeZoneOffset: 540,
          venue: {
            id: '600f6e05c303b431ee062c2c',
            name: '業務スーパー 東初富店',
            location: {
              address: '東初富4-2-48',
              lat: 35.76561,
              lng: 140.006854,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.76561,
                  lng: 140.006854,
                },
              ],
              postalCode: '273-0122',
              cc: 'JP',
              neighborhood: '鎌ヶ谷市',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['東初富4-2-48', '鎌ケ谷市, 千葉県', '273-0122'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d118951735',
                name: '食料品店',
                pluralName: '食料品店',
                shortName: '食料品店',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1611623941,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          sticker: {
            id: '55563bd52beaa0fbc4d1dc3f',
            name: 'Baggs',
            image: {
              prefix: 'https://fastly.4sqi.net/img/sticker/',
              sizes: [60, 94, 150, 300],
              name: '/groceries_2a2425.png',
            },
            stickerType: 'unlockable',
            group: {
              name: 'collectible',
              index: 85,
            },
            pickerPosition: {
              page: 3,
              index: 13,
            },
            teaseText: '食料品 & 飲料品店 にチェックインしてこのステッカーをアンロックしましょう。',
            unlockText: '食料品 & 飲料品店でこのステッカーを獲得しました',
            bonusText: '食料品 & 飲料品店で使ってボーナスを獲得する。',
            points: 2,
            bonusStatus: '1週間に1回使用できます。日曜日の深夜0時に再チャージされます。',
          },
          isMayor: true,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '64787343f9bd87398af7daf7',
          createdAt: 1685615427,
          type: 'checkin',
          entities: [],
          shout: 'LINEPayチャージ',
          timeZoneOffset: 540,
          venue: {
            id: '5f464552113e720d7fcf1594',
            name: 'セブンイレブン 鎌ケ谷東初富4丁目店',
            location: {
              address: '東初富4-1-38',
              lat: 35.766337,
              lng: 140.005972,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.766337,
                  lng: 140.005972,
                },
              ],
              postalCode: '273-0122',
              cc: 'JP',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['東初富4-1-38', '鎌ケ谷市, 千葉県', '273-0122'],
            },
            categories: [
              {
                id: '4d954b0ea243a5684a65b473',
                name: 'コンビニ',
                pluralName: 'コンビニエンスストア',
                shortName: 'コンビニ',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/conveniencestore_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1598440786,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: true,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6478245271f41867bb7bcba9',
          createdAt: 1685595218,
          type: 'checkin',
          entities: [],
          shout: '位置ずれてる',
          timeZoneOffset: 540,
          venue: {
            id: '574d9a9a498e361e3551d3b0',
            name: '初富3号踏切',
            location: {
              lat: 35.76566237845218,
              lng: 140.00410348176956,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.76566237845218,
                  lng: 140.00410348176956,
                },
              ],
              postalCode: '273-0102',
              cc: 'JP',
              neighborhood: '鎌ヶ谷市',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['鎌ケ谷市, 千葉県', '273-0102'],
            },
            categories: [
              {
                id: '52f2ab2ebcbc57f1066b8b4c',
                name: '交差点',
                pluralName: '交差点',
                shortName: '交差点',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/default_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1464703642,
          },
          likes: {
            count: 2,
            groups: [
              {
                type: 'friends',
                count: 2,
                items: [
                  {
                    id: '144078508',
                    firstName: '真夏',
                    gender: 'female',
                    address: '',
                    city: '',
                    state: '',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/144078508_ccX1X1VV_JU5msOSL4Hwy28K5ctS5oNE9SfmSWe-ptdcCUb8pqyExIduD4aQ25R55y0Lt0bW9.jpg',
                    },
                  },
                  {
                    id: '170164004',
                    firstName: 'かたとも',
                    gender: 'male',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/170164004_du9eZWhg_NmLbbwqetLfiN6dtupbH70eKj2jwQRN965kREwtMbNYioZVCSuvG_h6uvbOq6vj7.jpg',
                    },
                  },
                ],
              },
            ],
            summary: '真夏とかたとも',
          },
          like: false,
          isMayor: true,
          photos: {
            count: 1,
            items: [
              {
                id: '64782454fc5daf59169f99fe',
                createdAt: 1685595220,
                source: {
                  name: 'Swarm for Android',
                  url: 'https://www.swarmapp.com',
                },
                prefix: 'https://fastly.4sqi.net/img/general/',
                suffix: '/126782695_6OBMhfGX9aavGEOTWEKigdw1LhlIDUPiGPPChN_28fk.jpg',
                width: 1080,
                height: 1434,
                demoted: false,
                user: {
                  id: '126782695',
                  firstName: 'どん',
                  lastName: 'ちゃん',
                  gender: 'male',
                  address: '',
                  city: '',
                  state: '',
                  countryCode: 'JP',
                  relationship: 'self',
                  photo: {
                    prefix: 'https://fastly.4sqi.net/img/user/',
                    suffix: '/126782695_f6YVYW6B_u0oXtEd5Sr-WQV1YEDPx6xuBv76LuD9naYVgGMcxd3HmETLvEg1dofIjq9oDkqLY.jpg',
                  },
                },
                visibility: 'public',
              },
            ],
            layout: {
              name: 'single',
            },
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 1,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '647822827605e9008f65d3d8',
          createdAt: 1685594754,
          type: 'checkin',
          entities: [],
          shout: '半セルフレジ化してた',
          timeZoneOffset: 540,
          venue: {
            id: '4b7646c7f964a52043462ee3',
            name: 'くすりの福太郎 鎌ケ谷店',
            location: {
              address: '道野辺本町2-10-25',
              lat: 35.762458309338854,
              lng: 139.99994984077844,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.762458309338854,
                  lng: 139.99994984077844,
                },
              ],
              postalCode: '273-0137',
              cc: 'JP',
              neighborhood: '鎌ヶ谷市',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['道野辺本町2-10-25', '鎌ケ谷市, 千葉県', '273-0137'],
            },
            categories: [
              {
                id: '5745c2e4498e11e7bccabdbd',
                name: 'ドラッグストア',
                pluralName: 'ドラッグストア',
                shortName: 'ドラッグストア',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/pharmacy_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1266042567,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '170164004',
                    firstName: 'かたとも',
                    gender: 'male',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/170164004_du9eZWhg_NmLbbwqetLfiN6dtupbH70eKj2jwQRN965kREwtMbNYioZVCSuvG_h6uvbOq6vj7.jpg',
                    },
                  },
                ],
              },
            ],
            summary: 'かたとも',
          },
          like: false,
          isMayor: true,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6474b18d092b1a6bfd929479',
          createdAt: 1685369229,
          type: 'checkin',
          entities: [],
          shout: 'ねみい',
          timeZoneOffset: 540,
          venue: {
            id: '4b8b06e9f964a520028f32e3',
            name: '鎌ケ谷駅 (TD31)',
            location: {
              address: '道野辺中央2-1-10',
              lat: 35.7638817665028,
              lng: 139.9973305413534,
              labeledLatLngs: [
                {
                  label: 'display',
                  lat: 35.7638817665028,
                  lng: 139.9973305413534,
                },
              ],
              postalCode: '273-0113',
              cc: 'JP',
              neighborhood: '鎌ケ谷',
              city: '鎌ケ谷市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['道野辺中央2-1-10', '鎌ケ谷市, 千葉県', '273-0113'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d129951735',
                name: '鉄道駅',
                pluralName: '鉄道駅',
                shortName: '鉄道駅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/trainstation_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            createdAt: 1267402473,
          },
          likes: {
            count: 1,
            groups: [
              {
                type: 'friends',
                count: 1,
                items: [
                  {
                    id: '170164004',
                    firstName: 'かたとも',
                    gender: 'male',
                    countryCode: 'JP',
                    relationship: 'friend',
                    photo: {
                      prefix: 'https://fastly.4sqi.net/img/user/',
                      suffix:
                        '/170164004_du9eZWhg_NmLbbwqetLfiN6dtupbH70eKj2jwQRN965kREwtMbNYioZVCSuvG_h6uvbOq6vj7.jpg',
                    },
                  },
                ],
              },
            ],
            summary: 'かたとも',
          },
          like: false,
          isMayor: true,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
        {
          id: '6474ac8867fbc9561f6c9051',
          createdAt: 1685367944,
          type: 'checkin',
          timeZoneOffset: 540,
          venue: {
            id: '4b3695a2f964a5207f3825e3',
            name: '船橋駅',
            location: {
              address: '本町7-1',
              lat: 35.701681364919274,
              lng: 139.98524085555886,
              postalCode: '273-0005',
              cc: 'JP',
              city: '船橋市',
              state: '千葉県',
              country: '日本',
              formattedAddress: ['本町7-1', '船橋市, 千葉県', '273-0005'],
            },
            categories: [
              {
                id: '4bf58dd8d48988d129951735',
                name: '鉄道駅',
                pluralName: '鉄道駅',
                shortName: '鉄道駅',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/travel/trainstation_',
                  suffix: '.png',
                },
                primary: true,
              },
            ],
            locked: true,
            createdAt: 1261868450,
          },
          likes: {
            count: 0,
            groups: [],
          },
          like: false,
          isMayor: false,
          photos: {
            count: 0,
            items: [],
          },
          posts: {
            count: 0,
            textCount: 0,
          },
          comments: {
            count: 0,
          },
          source: {
            name: 'Swarm for Android',
            url: 'https://www.swarmapp.com',
          },
        },
      ],
    },
  },
};
