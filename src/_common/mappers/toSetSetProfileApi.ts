import { ISetProfileDto } from "_common/models/dtos";
// import { ISetProfile } from "_common/models/entities";

export const generateSetProfileDto = (values: any): ISetProfileDto => ({
  name: values.name,
  phone: values.phone,
  image: values.image ?? null,
  email: values.email ?? null,
  address: "کرج گلشهر",
  age: values.age.toString(),
  blood: "bplus",
  city: "کرج",
  state: "البرز",
  description: values.description ?? null,
  height: values.height,
  weight: values.weight,
  codemelli: values.codemelli,
});
