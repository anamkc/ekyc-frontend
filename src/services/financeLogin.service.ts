import {LoginProps } from "../app/login/page";
import { httpClientFi } from "@/config/httpClientFinance";

export const signInFi = async (props: LoginProps ) => {
try{
    const res = await httpClientFi.post("/login" , props)
    return res.data
} catch (err) {
    return console.log(err);
  }
}