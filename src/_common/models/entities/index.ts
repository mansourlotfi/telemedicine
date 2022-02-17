interface IUser {
  id: number;
  name: string;
  phone: string;
  smscode: string;
  state: string;
  weight: string;
  address: string;
  age: string;
  blood: string;
  city: string;
  date: string;
  description: string;
  email: string;
  height: string;
  image: string;
}

interface IProfile {
  user: IUser;
}
export type { IProfile };
