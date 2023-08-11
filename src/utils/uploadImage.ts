import axios from 'axios';

export default async function uploadToCloudinary(image: File, upload_preset: string): Promise<string> {
  const cloudinaryUploadUrl = 'https://api.cloudinary.com/v1_1/dr5if5lnh/image/upload'; // Replace with your Cloudinary upload URL
  const cloudinaryApiKey = '476491869562222'; // Replace with your Cloudinary API key

  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', upload_preset); // Replace with your Cloudinary upload preset

  try {
    const response = await axios.post(cloudinaryUploadUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${cloudinaryApiKey}`
      }
    });

    return response.data.secure_url; // Return the Cloudinary URL
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
}
