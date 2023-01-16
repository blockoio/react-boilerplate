export type shopsDataType = {
  content: mallItemType[];
};
export type mallItemType = {
  createdTime: string;
  domain: string;
  mallId: string;
  shopId: number | null;
};
