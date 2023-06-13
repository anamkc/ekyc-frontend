import { RegisterProps } from "@/app/register/page";
import { httpClient } from "@/config/httpClient";

export const signup = (props: RegisterProps) => {
  return httpClient
    .post("/signup", props)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
