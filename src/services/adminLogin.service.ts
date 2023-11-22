import {LoginProps } from "../app/login/page";
import { httpClientAdmin } from "@/config/httpClientAdmin";

export const signInAdmin = async (props: LoginProps ) => {
try{
    const res = await httpClientAdmin.post("/signIn" , props)
    return res.data
} catch (err) {
    return console.log(err);
  }
}