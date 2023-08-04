import { httpClient } from "@/config/httpClient";
import { kycDetailProps } from "@/components/common/Kycform";

export const addKyc = (props: kycDetailProps) => {
  return httpClient
    .post("/addkyc", props)
    .then((res:any) => res.data)
    .catch((err:any) => console.log(err));
};
