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
  codemelli: string;
}

interface IProfile {
  user: IUser;
}

interface ISetProfile {
  name: string;
  family: string;
  email: string;
  phone: string;
  biography: string | null;
  image: string | null;
}

interface IBlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
  type: string;
  description: string;
}
export type { IProfile, ISetProfile, IBlogPost, IUser };
