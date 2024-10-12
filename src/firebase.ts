import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { firebaseConfig } from "../firebaseAuth";



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name: string, email: string, password: string): Promise<void> => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })

    } catch (error) {
        console.log('Error in userAuth', error);

        if (typeof error === 'object' && error !== null && 'code' in error) {
            // Handle Firebase errors specifically
            toast.error((error as { code: string }).code.split('/')[1].split('-').join(' '));
        } else {
            toast.error('An unknown error occurred');
        }
    }
}

const login = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log('Error in userAuth', error);

        // Assert the error type to provide type-safety
        if (typeof error === 'object' && error !== null && 'code' in error) {
            // Handle Firebase errors specifically
            toast.error((error as { code: string }).code.split('/')[1].split('-').join(' '));

        } else {
            toast.error('An unknown error occurred');
        }
    }
}

const logOut = () => {
    signOut(auth)
}

export { auth, db, login, signUp, logOut }