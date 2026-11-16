import {initializeApp} from "firebase/app";
import {initializeAuth,indexedDBLocalPersistence,browserLocalPersistence,onAuthStateChanged,signInAnonymously,GoogleAuthProvider,signInWithCredential,linkWithCredential,signInWithPopup,linkWithPopup,signOut,deleteUser} from "firebase/auth";
import {initializeFirestore,doc,getDoc,getDocs,setDoc,updateDoc,deleteDoc,collection,onSnapshot,runTransaction,serverTimestamp,query,where,limit,writeBatch} from "firebase/firestore";
window.RRFB={initializeApp,initializeAuth,indexedDBLocalPersistence,browserLocalPersistence,onAuthStateChanged,signInAnonymously,GoogleAuthProvider,signInWithCredential,linkWithCredential,signInWithPopup,linkWithPopup,signOut,deleteUser,
 initializeFirestore,doc,getDoc,getDocs,setDoc,updateDoc,deleteDoc,collection,onSnapshot,runTransaction,serverTimestamp,query,where,limit,writeBatch};
