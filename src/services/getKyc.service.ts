import { httpClient } from "@/config/httpClient";

export const getKyc = async () => {
  try {
    const res = await httpClient.get("/getKyc");
    console.log("Kyc" + res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
