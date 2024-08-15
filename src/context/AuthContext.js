import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { ref, set, onValue} from 'firebase/database'
import Profile from '../Assets/profile.jpg'


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user);

  function writeUserData(userId, username, email, imageURL={Profile}) {
    const reference = ref(db, "users/" + userId);

    set(reference, {
      username: username,
      email: email,
      profilePicture: imageURL
    });
  }

  function writeUserBookData(userId, books=[]){
    const reference = ref(db, "libraries/" + userId);

    set(reference, {
      userId: userId,
      books: books,
      visiblePublic: false
    })
  }

  function addBooksToLibrary(userId, bookData) {
    const reference = ref(db, 'libraries/' + userId + '/books');
    onValue(reference, (snapshot) => {
      let books = snapshot.val();
      books.push(bookData);
    })
  }

  function signUp(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password);
    
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        writeUserData(currentUser.uid, username, email);
        writeUserBookData(currentUser.uid)
      }
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, addBooksToLibrary, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}