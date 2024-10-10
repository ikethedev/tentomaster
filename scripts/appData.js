import { generateCustomId, generateDate } from "./utilis.js";
// Firebase setup begins

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
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
const analytics = getAnalytics(app);


// Firebase setup ends



 const subjects = []
export default class AppData{
    constructor(){
      this.subject = {}
      this.getTrackers = this.getTrackers.bind(this);
      this.setLessonReviewLocal = this.setLessonReviewLocal.bind(this)
      const storedSubjects = JSON.parse(localStorage.getItem("subjects"));
      if (storedSubjects) {
        storedSubjects.forEach(subject => {
          this.subject[subject.id] = subject;
          subjects.push(subject);
        });
      }
    }
  
    addSubject(subject){
      const id = generateCustomId()
      this.subject[id] = {
        id: id,
        name: subject.subject,
        reviews: []
      } 
      subjects.push(this.subject[id])
      localStorage.setItem("subjects", JSON.stringify(subjects))
    }
  
    getSubject(id){
      return this.subject[id]
    }
  
    getTrackers(){
        return subjects
    }
    
      addReviewForSubject(id,topic, description, comment, score){
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