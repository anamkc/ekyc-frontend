import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9XC6y_NMiW_v-sDD8EMZ_1BaU1W08T5g",
    authDomain: "ekyc-store.firebaseapp.com",
    projectId: "ekyc-store",
    storageBucket: "ekyc-store.appspot.com",
    messagingSenderId: "528462616410",
    appId: "1:528462616410:web:54aa37351f30d333880563",
    measurementId: "G-RRV79KL31X"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export const uploadFileToFirebase = async (file: File): Promise<string | null> => {
    console.log(file.name);
  try {
    
    const storageRef = ref(storage, "ekyc-pictures/" + file.name);

    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);

    return downloadUrl;
  } catch (error) {
    console.error('Error uploading file to Firebase:', error);
    return null;
  }
};