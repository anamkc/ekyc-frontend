import { httpClient } from "@/config/httpClient";

export const getKyc = async () => {
  try {
    const res = await httpClient.get("/getKyc");
    // console.log(res.data);
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 404) {
      return "404";
    } else {
      console.error("Error fetching data:", err);
    }
    throw err;
  }
};
