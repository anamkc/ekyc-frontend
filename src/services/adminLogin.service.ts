import {LoginProps } from "../app/login/page";
import { httpClientAdmin } from "@/config/httpClientAdmin";

export const signinAdmin = async (props: LoginProps ) => {
try{
    const res = await httpClientAdmin.post("/signin" , props)
    return res.data
} catch (err) {
    return console.log(err);
  }
}