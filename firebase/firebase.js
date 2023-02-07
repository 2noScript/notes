import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	// databaseURL: 'https://markdown-edittor-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
export const dbRealTime = getDatabase(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
