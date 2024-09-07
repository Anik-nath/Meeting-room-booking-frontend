export type TUserResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TuserData[];
};
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
  isDeleted: boolean;
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
  isDeleted: boolean;
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
  isPayment: boolean;
  transactionId: string;
};

export type TBookingResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TBooking[];
};

export type TGroupedSlot = {
  room: string;
  date: string;
  slots: TSlot[];
};

export type GroupedSlots = {
  [key: string]: TGroupedSlot;
};

export type TAvailableSlotsParams = {
  date: string;
  roomId: string;
};
export type TAvailableSlotsResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TSlot[];
};

export type TslotSummary = {
  _id: string;
  startTime: string;
  endTime: string;
};
export type TCheckout = {
  date: string;
  user: string;
  room: string;
  slots: string[];
  totalCost: number;
};

export type TConfirmModal = {
  isOpen: boolean;
  onClose: (confirm: boolean) => void;
  onConfirm: (confirm: boolean) => void;
};

export type TReview = {
  _id: string;
  reviewerName: string;
  reviewerBio: string;
  review: string;
  companyName: string;
};
export type TReviewResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TReview[];
};
export type TSignUp = {
  _id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  address: string;
};
export type TSignUpResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TSignUp[];
};

export type TContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};