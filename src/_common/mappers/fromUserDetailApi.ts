import { AxiosResponse } from "axios";
import { IProfile } from "_common/models/entities";
export const generateProfile = (data: AxiosResponse): IProfile => ({
  user: {
    id: data.data[0].id,
    name: data.data[0].name,
    phone: data.data[0].phone,
    smscode: data.data[0].smscode,
    state: data.data[0].state,
    weight: data.data[0].weight,
    address: data.data[0].address,
    age: data.data[0].age,
    blood: data.data[0].blood,
    city: data.data[0].city,
    date: data.data[0].date,
    description: data.data[0].description,
    email: data.data[0].email,
    height: data.data[0].height,
    image: data.data[0].image,
  },
});

// export const genFinalizedList = (data: any) => ({
//   data: data?.data
//     ? data.data.map((item: any) => generateFinalizedList(item))
//     : [],
// });
