// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJN6b9Yuj3Y072tOkVYuVe7VKMXupZgaI",
  authDomain: "sable-e9bc6.firebaseapp.com?firebase_debug=true",
  projectId: "sable-e9bc6",
  storageBucket: "sable-e9bc6.appspot.com",
  messagingSenderId: "217913163271",
  appId: "1:217913163271:web:dea3c92fbfb4d8b88eb4a2",
  measurementId: "G-3Z3N5Z7LMJ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Optional: Only initialize analytics if supported (for server-side rendering environments)
let analytics: ReturnType<typeof getAnalytics> | null = null;

isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(firebaseApp);
  }
});

export { analytics };