interface IUserDetail {
  phone: number;
}

interface ISetProfile {
  name: string;
  phone: number;
  image: string | null;
  email: string | null;
  address: string | null;
  age: number;
  blood: string | null;
  city: string;
  state: string;
  description: string | null;
  height: string;
  weight: string;
}

export type { IUserDetail as IUserDetailDto, ISetProfile as ISetProfileDto };
