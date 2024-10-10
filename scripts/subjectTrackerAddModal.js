import ReviewLog from "./reviewLog.js";
import { appData } from "./appData.js";

const topbarSubjectAddModalTemplate = document.createElement("template");
topbarSubjectAddModalTemplate.innerHTML = `
    <section id="add_modal" class="hidden">
        <header class="modal_header">
            <svg
            class="exit__icon icon"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
            <h3>New Progress</h3>
            <button id="save__icon">Save</button>
        </header>
        <form action="">
        <label>Lesson Objective</label>
        <input type="text" name="" id="objective" />
        <label>Rating: 5 of of 10</label>
        <div class="slider__container">
            <input
            type="range"
            min="0"
            max="10"
            value="5"
            class="slider"
            id="rating__slider"
            />
            <div class="slider-handle ten"></div>
            <div class="slider-handle twenty"></div>
            <div class="slider-handle thirty"></div>
            <div class="slider-handle forty"></div>
            <div class="slider-handle fifty"></div>
            <div class="slider-handle sixty"></div>
            <div class="slider-handle seventy"></div>
            <div class="slider-handle eighty"></div>
            <div class="slider-handle ninty"></div>
        </div>
        <label for="comment"> Comment </label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </form>
    </section>
`


export default class SubjectAddModal{
    constructor(data){
        this.data = data;
        this.rootElement = document.createElement("div");
        this.rootElement.appendChild(topbarSubjectAddModalTemplate.content.cloneNode(true));
        this.objective = this.rootElement.querySelector("#objective");
        this.score = this.rootElement.querySelector("#rating__slider");
        this.comment = this.rootElement.querySelector("#comment");
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveIcon = this.rootElement.querySelector("#save__icon");
        this.exitIcon = this.rootElement.querySelector(".exit__icon"); 
        this.saveIcon.addEventListener("click", () => {
            this.saveLog();
        });
        this.exitIcon.addEventListener("click", () => {
            this.closeModal();
        });     

    };

  
    openModal(){
        this.body = document.querySelector("body");
        this.body.appendChild(this.rootElement);
        this.add = this.rootElement.querySelector("#add_modal");
        this.add.classList.remove("hidden");
    };

    saveLog(){
        document.querySelector(".tracker__Review-Content").innerHTML = '';
        appData.addReviewForSubject(this.data.id, this.objective.value, this.comment.value, this.score.value);
        const subjectReviews = this.data.reviews;
        subjectReviews.forEach(review => {
                  const reviewLog = new ReviewLog();
                    reviewLog.setLessonTopic(review.description);
                    reviewLog.setLessonDescription(review.comment);
                    reviewLog.setLessonScore(review.score);
                    reviewLog.setLessonDate(review.date);
                    document.querySelector(".tracker__Review-Content").appendChild(reviewLog.render());
                    
                })
                
                this.closeModal();
    };

    closeModal(){
        this.rootElement.remove();
    }
};