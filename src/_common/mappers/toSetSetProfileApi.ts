import { ISetProfileDto } from "_common/models/dtos";
// import { ISetProfile } from "_common/models/entities";

export const generateSetProfileDto = (values: any): ISetProfileDto => ({
  name: values.name,
  phone: values.phone,
  image: values.image ?? null,
  email: values.email ?? null,
  address: values.address ?? null,
  age: values.age,
  blood: values.blood ?? null,
  city: values.city,
  state: values.state,
  description: values.description ?? null,
  height: values.height,
  weight: values.weight,
  codemelli: values.codemelli,
});
