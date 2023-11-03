import { httpClient } from "@/config/httpClient";
import { KycDetailProps } from "@/components/common/KycForm";
import { uploadFileToFirebase } from "../utils/uploadImage"; // You'll need a separate function for Firebase upload

export const addKyc = async (props: KycDetailProps) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dob,
      address,
      citizenshipImage,
      profilePicture,
    } = props;

    let profilePictureUrl: string | null = null;
    let citizenshipImageUrl: string | null = null;

    if (profilePicture) {
      const uploadedProfilePicUrl = await uploadFileToFirebase(profilePicture);
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
      firstName,
      lastName,
      email,
      phoneNumber,
      dob,
      address,
      profilePictureUrl,
      citizenshipImageUrl,
    };

    const response = await httpClient.post("/addKyc", kycData);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
