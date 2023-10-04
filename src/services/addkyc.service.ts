import { httpClient } from "@/config/httpClient";
import { KycDetailProps } from "@/components/common/Kycform";
import { uploadFileToFirebase } from "../utils/uploadImage"; // You'll need a separate function for Firebase upload

export const addKyc = async (props: KycDetailProps) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phonenumber,
      dob,
      address,
      citizenshipImage,
      profilepic,
    } = props;

    let profilePictureUrl: string | null = null;
    let citizenshipImageUrl: string | null = null;

    if (profilepic) {
      const uploadedProfilePicUrl = await uploadFileToFirebase(profilepic);
      if (uploadedProfilePicUrl) {
        profilePictureUrl = uploadedProfilePicUrl;
      } else {
        // Handle the error or provide a default URL for profile picture
        // Example:
        // profilePictureUrl = 'https://example.com/default-profile-pic.jpg';
      }
    }

    if (citizenshipImage) {
      const uploadedCitizenshipImageUrl = await uploadFileToFirebase(
        citizenshipImage
      );
      if (uploadedCitizenshipImageUrl) {
        citizenshipImageUrl = uploadedCitizenshipImageUrl;
      } else {
        // Handle the error or provide a default URL for citizenship image
        // Example:
        // citizenshipImageUrl = 'https://example.com/default-citizenship-image.jpg';
      }
    }

    const kycData = {
      firstname,
      lastname,
      email,
      phonenumber,
      dob,
      address,
      profilePictureUrl,
      citizenshipImageUrl,
    };

    const response = await httpClient.post("/addkyc", kycData);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
