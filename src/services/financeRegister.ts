import { httpClientFi } from "@/config/httpClientFinance";
import { uploadFileToFirebase } from "@/utils/uploadImage";

export const signUp = async (props: any) => {
  try {
    const { name, email, password, profilePicture, registrationNumber } = props;

    let profilePictureUrl: string | null = null;
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

    const registerData = {
      name,
      email,
      password,
      profilePictureUrl,
      registrationNumber
    };
    const res = await httpClientFi.post("/signup", registerData);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};
