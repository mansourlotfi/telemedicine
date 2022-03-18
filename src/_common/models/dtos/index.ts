interface IUserDetail {
  phone: number;
}

interface IUserPayments {
  userphone: string;
}

interface IPayment {
  reservation: number;
}

interface ISetProfile {
  name: string;
  phone: number;
  image: string | null;
  email: string | null;
  address: string | null;
  age: string;
  blood: string | null;
  city: string;
  state: string;
  description: string | null;
  height: string;
  weight: string;
  codemelli: string;
}

interface ISetReserve {
  phone: number;
  description: string;
  date: string;
  time: string;
  type: "hozori" | "online" | "moshavere";
}

export type {
  IUserDetail as IUserDetailDto,
  ISetProfile as ISetProfileDto,
  ISetReserve as ISetReserveDto,
  IUserPayments as IUserPaymentsDto,
  IPayment as IPaymentDto,
};
