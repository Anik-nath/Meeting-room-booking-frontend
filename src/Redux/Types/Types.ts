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
  _id: string | undefined;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
};

export type TSlotResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TSlot[];
};
export type TcreateSlot = {
  room: string;
  date: string;
  startTime: string;
  endTime: string;
};
export type TSlot = {
  _id: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
};
export type TBooking = {
  _id: string;
  date: string;
  slots: TSlot[];
  room: TRoom;
  user: TuserData;
  totalAmount: number;
  isConfirmed: string;
  isDeleted: boolean;
};

export type TBookingResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TBooking[];
};
