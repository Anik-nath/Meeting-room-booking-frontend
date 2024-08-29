export type TuserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};
export type TSignInResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  token: string;
  data: TuserData;
};

export type TSignInRequest = {
  email: string;
  password: string;
};

export type TAuth = {
  token: string | null;
  userData: TuserData | null;
};

export type TResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TRoom[];
};
export type TResponseByID = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TRoom;
};

export type TRoom = {
  _id:string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
};
