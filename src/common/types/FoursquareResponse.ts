export interface FoursquareResponse<T> {
  meta: Meta;
  notifications: Notification[];
  response: T;
}

export interface Meta {
  code: number;
  requestId: string;
}

export interface Notification {
  type: string;
  item: Item;
}

export interface Item {
  unreadCount: number;
}
