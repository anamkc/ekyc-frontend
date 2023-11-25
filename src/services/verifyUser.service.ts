import { httpClientAdmin } from "@/config/httpClientAdmin";

const verifyUser = async (id: string) => {
    try {
      const res = await httpClientAdmin.post("/verifyBlock", { id });
      console.log(res)
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  export default verifyUser;