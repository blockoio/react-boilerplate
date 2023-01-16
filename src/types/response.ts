import { mallItemType } from "types/mall";

export type CommonResponse = {
  data: CommonData;
  status: number;
};

export type CommonData = {
  code: string;
  message: string;
  data: {
    content: mallItemType[];
  };
};
