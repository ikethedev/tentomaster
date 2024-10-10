const dataReviewTemplate = document.createElement("template");

dataReviewTemplate.innerHTML = `   
    <section class="weekly_review">
        <p>
        <span class="uppercase lighter_text">This week </span> <br />
        <strong id="average__score">7</strong> <br />
        <span class="lighter_text"> out of 10 </span>
        </p>
    </section>
`;


export default class DataReview {
    constructor() {
        this.rootElement = dataReviewTemplate.content.cloneNode(true);
    }

    render() {
        return this.rootElement;
    }

    setAverage(average) {
        this.rootElement.querySelector("strong").textContent = average;
    }
}
