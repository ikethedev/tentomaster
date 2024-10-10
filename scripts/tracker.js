import TopBarSubject from "./topbarSubject.js";
import TrackerPage from "./trackerPage.js"
import { appData } from "./appData.js"
const TrackerTemplate = document.createElement("template");
TrackerTemplate.innerHTML = `   
    <section class="tracker">
        <article class="subject_tracker">
            <div class="icon_container">
                <div class="background"></div>
                <img class="icon" src="../images/assets/homepage/nodata.svg" alt="no data for entry">
            </div>
            <div class="subect_review">
                <h3 class="subject__name">English</h3>
                <p> No Data</p>
                <hr>
                <div class="delete__button"> 
                  <img class="icon" src="../images/assets/general/exit.svg" alt="delete">
                </div>
            </div>
        </article>
    </section>
`;

 export default class Tracker {
  constructor(data) {
    this.rootElement = TrackerTemplate.content.cloneNode(true);
    this.body = document.querySelector("body");
    this.subjectElement = this.rootElement.querySelector(".subject_tracker h3");
    this.dataElement = this.rootElement.querySelector(".subject_tracker p");
    this.delete = this.rootElement.querySelector(".delete__button");
    this.log = this.rootElement.querySelector(".subject_tracker");
    this.handleClick = this.handleClick.bind(this);
    this.log.addEventListener("click", (e) => {
      this.handleClick(e);
    });
    this.delete.addEventListener("click", (e) => {
      this.handleClick(e);
    });
  }

  render() {
    return this.rootElement;
  }

  setId(id) {
    this.id = id;
    this.rootElement.querySelector(".tracker").id = this.id;
  }

  setSubject(subject) {
    this.rootElement.querySelector(".subject_tracker h3").textContent = subject;
    this.subject = subject;
  }

  setData(data) {
    this.rootElement.querySelector(".subject_tracker p").textContent = data;
  }

  handleClick(e) {
    if (e.target.parentElement.classList.contains("delete__button")) {
      this.deleteTracker(e);
      return;
    } else {
      this.goToLog(e);
    }
  }

  goToLog(e) {
    if (e.target.closest(".tracker").id === this.id) {
      const topBarSubject = new TopBarSubject();
      topBarSubject.setSubjectTitle(this.subject);
      const subject = appData.getSubject(this.id);
      const trackerPage = new TrackerPage(subject);
      this.body.appendChild(trackerPage.render());
    }
  }

  deleteTracker(e) {
    const trackers = appData.getTrackers()
    if (e.target.parentElement.classList.contains("delete__button")){
      let storedArray = JSON.parse(localStorage.getItem("subjects"));
      let itemToRemoveIndex = null;
      trackers.forEach((element, index) => {
        if (element.id === e.target.closest(".tracker").id) {
          itemToRemoveIndex = index;
        }
        if (itemToRemoveIndex !== null) {
          trackers.splice(itemToRemoveIndex, 1);
          storedArray.splice(itemToRemoveIndex, 1);
          localStorage.setItem("subjects", JSON.stringify(storedArray));
          e.target.closest(".tracker").remove();
        }
      });
      e.target.closest(".tracker").remove();
    }
  }
}

const tracker = new Tracker();
export { tracker }

