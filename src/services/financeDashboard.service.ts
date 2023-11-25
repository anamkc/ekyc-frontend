import { httpClientFi } from "@/config/httpClientFinance";

export const getFIBlocks = async () => {
  try {
    const res = await httpClientFi.get("/getAllBlocks");
    console.log(res.data);
    return res.data;
    
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
