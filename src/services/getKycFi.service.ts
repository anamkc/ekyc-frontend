import { httpClientFi } from "@/config/httpClientFinance";

export const getKycFi = async (hash: string) => {
  try {
    const res = await httpClientFi.post("/getKyc", { hash });

    return res.data;
  } catch (err: any) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
