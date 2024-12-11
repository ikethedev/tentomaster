import Application from "./application.js";
import HomePage from "./homePage.js";
import LoginInPage from "./loginPage.js";

/* 
FIREBASE LOGIC STARTS
*/

 // Import the functions you need from the SDKs you need
 import { initializeApp, } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
 import {
  getAuth, 
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBZ9fv4fTznijklpF4wK3zMYiibPoxqNFA",
   authDomain: "tentomaster-d074a.firebaseapp.com",
   projectId: "tentomaster-d074a",
   storageBucket: "tentomaster-d074a.firebasestorage.app",
   messagingSenderId: "347288893387",
   appId: "1:347288893387:web:27cf3da60614cdf413e84e",
   measurementId: "G-8XJWVEL1B9"
 };

 // Initialize Firebase
  const fireApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(fireApp);

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const signIn = document.querySelector("#sign-in");
  const creataAccount = document.querySelector("#create-account");
/* 


FIREBASE LOGIC ENDS
*/

const basePageTemplate = document.createElement("template");

class BasePage {
  constructor() {
    this.rootElement = document.createElement("div");
    this.rootElement.appendChild(basePageTemplate.content.cloneNode(true));
    this.body = document.querySelector("body");
  }

  render() {
    this.body.innerHTML = ''
    const loginPage = new LoginInPage()
    const homePage = new HomePage();
    //this.rootElement.appendChild(homePage.render())
    this.rootElement.appendChild(loginPage.render())
   
    //homePage.renderTrackers()
    return this.rootElement
   
  }
}

const app = new Application();

const homePage = new BasePage();
app.setRootView(homePage);

