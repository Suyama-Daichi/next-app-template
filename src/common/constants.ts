export const APP_META_DATA = {
  siteName: 'JCBL公式サイト',
  siteDescription: ['日本カラーボール野球リーグ(JCBL)の公式ホームページです'],
  owner: 'owner-name',
};
export const COLOR = {
  background: '#333333',
  background_2: '#F9F9F9',
  white: '#FFFFFF',
  blue: '#1A3B87',
  green: '#6FCF97',
  orange: '#FFA361',
  red: '#FF6A61',
  yellow: '#FFC961',
  gray_1: '#9C9C9C',
  gray_2: '#D9D9D9',
  gray_3: '#EDEDED',
  blue_1: '#6C97FA',
  blue_2: '#A2BCFA',
  blue_3: '#E6EEFF',
  blue_bg: '#F5F9FE',
  black: '#333333',
} as const satisfies { [key: string]: `#${string}` };

export const FORM_ERROR_MESSAGE = {
  INVALID_EMAIL: 'メールの形式で入力してください',
  INVALID_PASSWORD: 'パスワードは半角英数大文字小文字を含む8文字以上で入力してください',
  REQUIRED: '入力してください',
};
