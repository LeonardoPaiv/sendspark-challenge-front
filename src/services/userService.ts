import { IUserRegisterDTO } from "../models/IUserRegisterDTO";
import { axiosInstance } from "./axiosInstance";

const baseURI = 'users/'

export const signup = async (userRegisterDTO: IUserRegisterDTO) => {
    const url = `${baseURI}register`
    const {data} = await axiosInstance.post(url, userRegisterDTO)
    return data
}