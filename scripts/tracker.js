import TopBarSubject from "./topbarSubject.js";
import TrackerPage from "./trackerPage.js"
import { appData } from "./appData.js"
const TrackerTemplate = document.createElement("template");
TrackerTemplate.innerHTML = `   
    <section class="tracker">
        <article class="subject">
            <div class="icon_container">
                <div class="background"></div>
                <img class="icon" src="../images/assets/homepage/nodata.svg" alt="no data for entry">
            </div>
            <div class="subject__review">
              <div claass>
                <h3 class="subject__name">English</h3>
                <p> No Data</p>
                <hr>
                </div>
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
    this.subjectElement = this.rootElement.querySelector(".subject h3");
    this.dataElement = this.rootElement.querySelector(".subject p");
    this.delete = this.rootElement.querySelector(".delete__button");
    this.log = this.rootElement.querySelector(".subject");
    // this.handleClick = this.handleClick.bind(this);

    // this.initData();

    this.log.addEventListener("click",(e) => {this.handleClick(e)});

    this.delete.addEventListener("click",this.handleClick);
  }

  // initData() {
  //   if (this.data) {
  //       console.log("Initializing Tracker with data:", this.data);
  //       this.setSubject(this.data.name || "No Name");
  //       this.setData(this.data.extraData || "No Extra Data");
  //   }
  // }

getData(data){ 
  this.data = data
  console.log("Data set in Tracker:", this.data);

  if (this.subjectElement && this.data?.name) {
      this.setSubject(this.data.name);
  }

  if (this.dataElement && this.data?.extraData) {
      this.setData(this.data.extraData);
  }
}

  render() {
    return this.rootElement;
  }

  setId(id) {
    this.id = id;
    this.rootElement.querySelector(".tracker").id = this.id;
  }

  setSubject(subject) {
    this.rootElement.querySelector(".subject h3").textContent = subject;
    this.subject = subject;
  }



  handleClick(e) {
    console.log("Clicked element:", e.target);
 
    console.log("Tracker instance:", this); // Log the tracker instance
    console.log("Tracker data in event handler:", this.data);

    if (e.target.parentElement.classList.contains("delete__button")) {
        console.log("Deleting tracker:", this.data);
        this.deleteTracker(e);
        return;
    } else {
        console.log("Navigating to log for tracker:", this.data);
        this.goToLog(e);
    }
}


  goToLog(e) {
    console.log(this)
    console.log("Hello")
    console.log(e.target.closest(".tracker"))
    console.log(this.data)
    // if (e.target.closest(".tracker").id === this.id) {
    //   const topBarSubject = new TopBarSubject();
    //   topBarSubject.setSubjectTitle(this.subject);
    //   const subject = appData.getSubject(this.id);
    //   console.log(subject)
    //   const trackerPage = new TrackerPage(subject);
    //   this.body.appendChild(trackerPage.render());
    // }
  }

  async deleteTracker(e) {
    // const deletedItem =  trackers2.filter(item => e.target.closest(".tracker").id === item.id)
    appData.deleteSubject(e.target.closest(".tracker").id)
    e.target.closest(".tracker").remove();
    console.log(deletedItem)
    const trackers = await appData.getTrackers()
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
     
    }
  }
}

const tracker = new Tracker();
export { tracker }

