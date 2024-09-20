const trackerHomePage = new HomePage()

const subjectTopBar = new TopBarSubject();
subjectTopBar.setSubjectTitle("math");

const average = new DataReview();
average.setAverage("93");

const lessonReview = new ReviewLog();
lessonReview.setLessonDate("Sept 3, 2024")
lessonReview.setLessonDescription("This is a description of the lesson.");
lessonReview.setStudentRating("8");

const trackerReviewPage = document.createElement("template")
trackerReviewPage.innerHTML = `

`

class TrackerPage{
    constructor(){
        this.rootElement = trackerReviewPage.content.cloneNode(true)
        this.render = this.render.bind(this)
        this.body = document.querySelector("body")
    }

    render(){
        this.body.innerHTML = '';
        this.rootElement.appendChild(subjectTopBar.render())
        this.rootElement.appendChild(average.render())
        this.rootElement.appendChild(lessonReview.render())
        this.body.appendChild(this.rootElement);
        return this.rootElement
    }

}


