import type { IUser } from "./IUser";

export interface IUserListResponse {
  total: number;
  userList: IUser[];
}
