import { httpClient } from "@/config/httpClient";
import { kycDetailProps } from "@/components/common/Kycform";
export const addKyc = async (props: kycDetailProps) => {
  try {
    const response = await httpClient.post("/addkyc", props);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
