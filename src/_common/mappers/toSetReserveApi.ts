import { ISetReserveDto } from "_common/models/dtos";

export const generateSetReserveDto = (
  values: any,
  visitType: boolean
): ISetReserveDto => ({
  phone: values.phone,
  description: values.description,
  date: values.date,
  time: values.time,
  type: visitType ? "online" : "hozori",
});
