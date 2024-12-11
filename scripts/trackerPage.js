import TopBarSubject from "./topbarSubject.js"
import DataReview from "./dataReview.js"
import ReviewLog from "./reviewLog.js"
const trackerReviewPage = document.createElement("template")
trackerReviewPage.innerHTML = `
    <div class="tracker__Review-page">
        <div class="tracker__Review-TopBar"></div>
        <div class="tracker__Average"></div>
        <div class="tracker__Review-Content"></div>
    </div>
`

export default class TrackerPage{
    constructor(data){
        console.log(data)
        console.log("TrackerPage data:", data); // Log data being passed to the TrackerPage

        this.rootElement = document.createElement("div");
        this.rootElement.appendChild(trackerReviewPage.content.cloneNode(true));
        this.render = this.render.bind(this);
        this.body = document.querySelector("body")
        this.subjectTopBar = new TopBarSubject(data);
        this.subjectTopBar.setSubjectTitle(data.name);
        this.average = new DataReview();
        this.average.setAverage("7");
        this.addReviewForSubject(data.reviews);   
    } 

    setData(data){
        console.log(data)
    }
   

    render(){

        this.body.innerHTML = '';
        this.rootElement.querySelector(".tracker__Review-TopBar").appendChild(this.subjectTopBar.render());
        this.rootElement.querySelector(".tracker__Average").appendChild(this.average.render());
        this.body.appendChild(this.rootElement);
        return this.rootElement;
    }

    addReviewForSubject(reviewLogs){
        reviewLogs.map(review => {
            const lessonReview = new ReviewLog();
            lessonReview.setLessonTopic(review.topic)
            lessonReview.setLessonDate(review.date);
            lessonReview.setLessonDescription(review.description);
            lessonReview.setLessonScore(review.score);
            this.rootElement.querySelector(".tracker__Review-Content").appendChild(lessonReview.render());
        });
      }      
}


