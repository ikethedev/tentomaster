import { generateCustomId, generateDate } from "./utilis.js";
import HomePage from "./homePage.js";
import LoginPage from "./loginPage.js";
// Firebase setup begins

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword  } from  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {  getFirestore, collection, addDoc, setDoc, getDocs,  doc, deleteDoc, getDoc  } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { tracker } from "./tracker.js";
import TrackerPage from "./trackerPage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ9fv4fTznijklpF4wK3zMYiibPoxqNFA",
  authDomain: "tentomaster-d074a.firebaseapp.com",
  projectId: "tentomaster-d074a",
  storageBucket: "tentomaster-d074a.appspot.com",
  messagingSenderId: "347288893387",
  appId: "1:347288893387:web:27cf3da60614cdf413e84e",
  measurementId: "G-8XJWVEL1B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Firebase setup ends
const subjects = []
export default class AppData{
    constructor(){
      this.currentUser = null
      this.subject = null
      this.trackers = null
      this.getTrackers = this.getTrackers.bind(this);
      this.setLessonReviewLocal = this.setLessonReviewLocal.bind(this)
      this.signIn = this.signIn.bind(this);
      this.getUserData = this.getUserData.bind(this);
      this.handleSignInAndFetchData = this.handleSignInAndFetchData.bind(this);
    
      const storedSubjects = JSON.parse(localStorage.getItem("subjects"));
      if (storedSubjects) {
        storedSubjects.forEach(subject => {
          this.subject[subject.id] = subject;
          subjects.push(subject);
        });
      }
    }
  
    async setCurrentUser(userPromise) {
      try {
          this.currentUser = await userPromise; // Resolve the promise
          const homePage = new HomePage(this.currentUser)
          console.log(this.currentUser.trackers)
          homePage.render()
          console.log("HELLO USER::::: " + this.currentUser.displayName || "No Display Name");
      } catch (error) {
          console.error("Error resolving user:", error);
          this.currentUser = null; // Handle errors gracefully
      }
  }

  async setTrackers(userId){
    const docRef = doc(db, "tracker", userId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }

    getCurrentUser(){
      return this.currentUser
    }

    signIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              this.setCurrentUser(user)
              console.log("User signed in:", user);
              return user; 
          })
          .catch((error) => {
              console.error("Error during sign-in:", error.code, error.message);
              throw error;
          });
  }

  getUserData(userId) {
    const userDocRef = doc(db, "users", userId);
    console.log(userDocRef)
}


async handleSignInAndFetchData(email, password) {
  try{
    const user = await this.signIn(email, password)
    const userData = this.getUserData(user.uid)
    console.log(user)
    return { user, userData }
  } catch {
    console.error("Error during sign-in and data retrieval:", error.message);
    throw error
  }
}


  createAccount(name ,email, password){
    console.log(name, email, password)
      console.log("Hello from the data ")
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("User logged in successfully:", user);

          updateProfile(user, {
            displayName: name,         
          })

          const userDocRef = doc(db, "users", user.uid);
          setDoc(userDocRef, {
              trackers: [],
              reviews: []
          } ).then(() => {
              console.log("User data initialized in Firestore.");
          }).catch((error) => {
              console.error("Error initializing user data:", error.message);
          });
          // ...
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            console.error("Invalid email address.");
        } else {
            console.error(error.message);
        }
          // ..
        });
    }

   async addSubject(subject){
    const user = auth.currentUser
    if(user){
      try{
        const userTrackersRef = collection(db, "users", user.uid, "trackers");
        const docRef = await addDoc(userTrackersRef, {
          name: subject.subject,
          createAt: new Date()
        });
        console.log("Tracker added with ID: ", docRef.id);
      } catch {
        console.error("Error adding tracker: ", e);
      }
    } else {
      console.error("No user signed in. Cannot add tracker.");

    }
   

      // const newSubject = {
      //   name: subject.subject,
      //   reviews: []
      // }
    
      // try {
      //   const docRef = await addDoc(collection(db, "subjects"), newSubject);
      //   this.subject[docRef.id] = newSubject
      //   subjects.push(newSubject)
      //   localStorage.setItem("subjects", JSON.stringify(subjects))
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    }

    async deleteSubject(docId){
      try{
        const docRef = doc(db, "subjects", docId)
        await deleteDoc(docRef)
        console.log(docRef)
      } catch (e){
        console.error("Error delete document: ", e)
      }
    }
  
    getSubject(id){
      console.log(this.subject, id)
       const subject = this.subject.find(subject => subject.id === id)
      return subject
    }
  
    async getTrackers(data){
      const userId = data.uid
      const trackersRef = collection(db, `users/${userId}/trackers`);
      const snapShot = await getDocs(trackersRef)

      if (snapShot.empty) {
        console.log("No trackers found.");
        return [];
    }
        const trackers = snapShot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }; // Map document data
      });

      console.log("Fetched trackers:", trackers); // Log fetched trackers
      tracker.getData(trackers)
        const querySnapshot = await getDocs(collection(db, "subjects"));
        const subjects = querySnapshot.docs.map(subject => {
          const formattedSubject = subject.data()
          formattedSubject.id = subject.id
          return formattedSubject
        })

        this.subject = subjects
      return trackers
    }
    
      addReviewForSubject(id, topic, description, comment, score){
        this.subject[id].reviews.push({
          date: generateDate(),
          topic: topic,
          description: description,
          comment: comment,
          score: score
        })
        
        this.setLessonReviewLocal(id, topic, description, comment, score)
      }

      setLessonReviewLocal(id, topic, description, comment, score){
        let subjects = JSON.parse(localStorage.getItem('subjects'));
        let subject = subjects.find(subject => subject.id === id);
        if (subject) {
            subject.reviews.push({
                date: generateDate(), 
                description: description,
                comment: comment,
                score: score
            });

            localStorage.setItem('subjects', JSON.stringify(subjects));
        }
      }

      updateReviewAverage(data){
        document.querySelector(".tracker__Average").innerHTML = "";
        const dataAverage = new DataReview()
        let findAverage = data.reviews.reduce((acc, cur) => acc + cur.score, 0) / data.reviews.length 
        dataAverage.setAverage(findAverage)
         document.querySelector(".tracker__Average").appendChild(dataAverage.render())
      }
    }
  
  const appData = new AppData()
  export {appData}