import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = {email, displayName: name};
        setUser(newUser);
        // save user to the database
        saveUser(email, name, 'POST')
        
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/')
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(()=>{
      fetch(`https://powerful-forest-52418.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  },[user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch('https://powerful-forest-52418.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
}
  return {
    user,
    error,
    isLoading,
    admin,
    setError,
    setIsLoading,
    signInUsingGoogle,
    logOut,
    registerUser,
    loginUser
  };
};

export default useFirebase;
