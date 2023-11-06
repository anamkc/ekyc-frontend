import { RegisterProps } from "@/app/(authLayout)/register/page";
import { httpClient } from "@/config/httpClient";

export const signUp = async (props: RegisterProps) => {
  try {
    const res = await httpClient
      .post("/signUp", props);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};
