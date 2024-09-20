
const reviewTemplate = document.createElement('template');
reviewTemplate.innerHTML = `
    <section>
            <h2 class="uppercase">Math</h2>
            <article class="class_review flex">
            <p class="date light_text">October 21, 2024</p>
            <p class="task_description">
                I learned about the difference between adjectives and verbs
            </p>
            <p class="sudent_rating">
                <span class="lighter_text">Rate</span>
                <span class="light_text student__rating">7</span>
                <span class="lighter_text">out of </span>
                <span class="light_text">10</span>
            </p>
            </article>
            <div class="spacer"></div>
    </section>
`

class ReviewLog{
    constructor(){
        this.rootElement = reviewTemplate.content.cloneNode(true);
    }

    render(){
        return this.rootElement;
    }

    setLessonTopic(topic){
        this.rootElement.querySelector('h2').textContent = topic;
    }

    setLessonDate(date){
        this.rootElement.querySelector(".date").textContent = date;
    }

    setLessonDescription(description){
        this.rootElement.querySelector(".task_description").textContent = description;
    }

    setStudentRating(rating){
        this.rootElement.querySelector(".student__rating").textContent = rating;
    }
}

