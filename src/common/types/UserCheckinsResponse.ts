export interface Checkins {
  checkins: CheckinsMeta;
}

export interface CheckinsMeta {
  count: number;
  items: CheckinItem[];
}

export interface CheckinItem {
  id: string;
  createdAt: number;
  type: string;
  entities?: any[];
  shout?: string;
  timeZoneOffset: number;
  venue: Venue;
  likes: Likes;
  like: boolean;
  isMayor: boolean;
  photos: Photos;
  posts: Posts;
  comments: Comments;
  source: Source2;
  sticker?: Sticker;
}

export interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  private?: boolean;
  createdAt: number;
  locked?: boolean;
}

export interface Location {
  isFuzzed?: boolean;
  lat: number;
  lng: number;
  cc: string;
  city?: string;
  state: string;
  country: string;
  formattedAddress: string[];
  address?: string;
  labeledLatLngs?: LabeledLatLng[];
  postalCode?: string;
  neighborhood?: string;
  crossStreet?: string;
}

export interface LabeledLatLng {
  label: string;
  lat: number;
  lng: number;
}

export interface Category {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}

export interface Icon {
  prefix: string;
  suffix: string;
}

export interface Likes {
  count: number;
  groups: Group[];
  summary?: string;
}

export interface Group {
  type: string;
  count: number;
  items: Item3[];
}

export interface Item3 {
  id: string;
  firstName: string;
  gender: string;
  address?: string;
  city?: string;
  state?: string;
  countryCode: string;
  relationship: string;
  photo: Photo;
  lastName?: string;
}

export interface Photo {
  prefix: string;
  suffix: string;
}

export interface Photos {
  count: number;
  items: Item4[];
  layout?: Layout;
}

export interface Item4 {
  id: string;
  createdAt: number;
  source: Source;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  demoted: boolean;
  user: User;
  visibility: string;
}

export interface Source {
  name: string;
  url: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  countryCode: string;
  relationship: string;
  photo: Photo2;
}

export interface Photo2 {
  prefix: string;
  suffix: string;
}

export interface Layout {
  name: string;
}

export interface Posts {
  count: number;
  textCount: number;
}

export interface Comments {
  count: number;
}

export interface Source2 {
  name: string;
  url: string;
}

export interface Sticker {
  id: string;
  name: string;
  image: Image;
  stickerType: string;
  group: Group2;
  pickerPosition: PickerPosition;
  teaseText: string;
  unlockText: string;
  bonusText?: string;
  points?: number;
  bonusStatus?: string;
}

export interface Image {
  prefix: string;
  sizes: number[];
  name: string;
}

export interface Group2 {
  name: string;
  index: number;
}

export interface PickerPosition {
  page: number;
  index: number;
}
