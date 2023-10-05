import { httpClient } from "../config/httpClient";
import {LoginProps } from "../app/login/page";

export const signinAdmin = async (props: LoginProps ) => {
try{
    const res = await httpClient.post("/adminsign" , props)
    return res.data
} catch (err) {
    return console.log(err);
  }
}