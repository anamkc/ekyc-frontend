import React from 'react';
import { httpClientAdmin } from "@/config/httpClientAdmin";

const singleUser = async (id: string) => {
  try {
    const res = await httpClientAdmin.post("/getUserKyc", { id });
    return res.data;
  } catch (err) {
    console.error(err);
    // Handle the error appropriately (e.g., throw it, log it, etc.)
    throw err;
  }
};

export default singleUser;
