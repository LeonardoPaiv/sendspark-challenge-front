import { IPageSearch } from "../models/IPageSearch";
import { IUserSearchDTO } from "../models/IUserSearchDTO";
import { axiosInstance } from "./axiosInstance";

const baseURI = "users/";

export const searchUsers = async (search: IPageSearch<IUserSearchDTO>) => {
  const url = `${baseURI}search`;
  const { data } = await axiosInstance.post(url, search);
  return data;
};

export const deleteUser = async (id: number) => {
    const url = `${baseURI}${id}`;
  const {data} = await axiosInstance.delete(url);
  return data as {message: string};
}
