import { httpClient } from "@/config/httpClient";
import { kycDetailProps } from "@/components/common/Kycform";
import axios from 'axios'; // Import axios for making API requests
import uploadToCloudinary from "@/utils/uploadImage";

export const addKyc = async (props: kycDetailProps) => {
  try {
    // 1. Upload images to Cloudinary
    const cloudinaryUrls = await Promise.all([
      uploadToCloudinary(props.citizenshipImage, "citizenship"),
      uploadToCloudinary(props.profilepic, "profile")
    ]);

    // 2. Create a new object with Cloudinary URLs
    const kycDataWithCloudinaryUrls = {
      ...props,
      citizenshipImage: cloudinaryUrls[0],
      profileImage: cloudinaryUrls[1]
    };

    // 3. Post the new object
    const response = await httpClient.post("/addkyc", kycDataWithCloudinaryUrls);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};