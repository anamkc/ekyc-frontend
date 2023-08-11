import { httpClient } from "@/config/httpClient";
import type { LoginProps } from "@/app/login/page";

export const login = async (props: LoginProps) => {
  console.log(props);
  try {
    const res = await httpClient.post("/login", props);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};
