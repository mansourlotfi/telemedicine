import { IUser } from "_common/models/entities";
import { useAppSelector } from "_redux/hooks";

export const generateProfileValueToState = (data: any, profile: any): any => {
  return {
    id: data.id ?? (profile.user.id || null),
    name: data.name,
    phone: data.phone,
    smscode: profile.user.smscode || null,
    state: data.state,
    weight: data.weight,
    address: data.address,
    age: data.age,
    blood: data.blood,
    city: data.city,
    date: data.date ?? (profile.user.date || null),
    description: data.description,
    email: data.email,
    height: data.height,
    image: data.image,
  };
};
