// getAllBlocks.service.js
import { httpClientAdmin } from "@/config/httpClientAdmin";

export const getAllBlocks = async () => {
  try {
    const res = await httpClientAdmin.get("/getallblocks");
    console.log("response from getall blocks" + res.data);
    return res.data;
    
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
