import { httpClient } from "@/config/httpClient";
import type { LoginProps } from "@/app/login/page";

export const login = (props: LoginProps) => {
  return httpClient
    .post("/login", props)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
