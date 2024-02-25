
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDN8FS8Lz_NrK-B9VqyJF2PlYP53chesqo",
    authDomain: "rcms-5648e.firebaseapp.com",
    projectId: "rcms-5648e",
    storageBucket: "rcms-5648e.appspot.com",
    messagingSenderId: "113814343286",
    appId: "1:113814343286:web:ce14aeec00041bc44ad957"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);