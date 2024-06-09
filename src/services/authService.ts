import { ILoginDTO } from "../models/ILoginDTO";
import { IUserRegisterDTO } from "../models/IUserRegisterDTO";
import { axiosInstance } from "./axiosInstance";

const baseURI = 'auth/'

export const signup = async (userRegisterDTO: IUserRegisterDTO) => {
    const url = `${baseURI}register`
    const {data} = await axiosInstance.post(url, userRegisterDTO)
    return data
}

export const login = async (login: ILoginDTO) => {
    const url = `${baseURI}login`
    const {data} = await axiosInstance.post(url, login)
    return data
}