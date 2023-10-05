// getAllBlocks.service.js
import { httpClientAdmin } from "@/config/httpClientAdmin";

export const getAllBlocks = async () => {
  try {
    const res = await httpClientAdmin.get("/getallblocks");
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
