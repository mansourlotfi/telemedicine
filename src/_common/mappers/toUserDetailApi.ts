import { IUserDetailDto } from "_common/models/dtos";
// import { IProfile } from "_common/models/entities";

export const generateUserDetailDto = (profile: any): IUserDetailDto => ({
  phone: profile.user.phone,
});
