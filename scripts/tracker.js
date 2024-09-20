const TrackerTemplate = document.createElement("template");
TrackerTemplate.innerHTML = `   
    <section class="tracker_container">
        <article class="subject_tracker">
            <div class="icon_container">
                <div class="background"></div>
                <img class="icon" src="../images/assets/homepage/nodata.svg" alt="no data for entry">
            </div>
            <div class="subect_review">
            
                <h3>English</h3>
                <p> No Data</p>
                <hr>
            </div>
        </article>
    </section>
`;

class Tracker {
  constructor() {
    //create a seperate DOM Fragment for each instance of the tracker
    this.rootElement = TrackerTemplate.content.cloneNode(true);
    this.body = document.querySelector("body")
    this.subjectElement = this.rootElement.querySelector(".subject_tracker h3");
    this.dataElement = this.rootElement.querySelector(".subject_tracker p");
    this.log = this.rootElement.querySelector(".tracker_container");

    this.log.addEventListener("click", (e) => {
      this.goToLog(e)
    })
  }

  // returns the root element of the tracker
  render() {
    return this.rootElement;
  }

  // update/sets the subject of the tracker
  setSubject(subject) {
    this.rootElement.querySelector(".subject_tracker h3").textContent = subject;
  }
  // update/sets the data of the tracker
  setData(data) {
    this.rootElement.querySelector(".subject_tracker p").textContent = data;
  }

  handleClick() {
    console.log("Navigated in review log")
  }

  goToLog(e){
    if(e.target.closest(".subject_tracker")){
      const trackerPage = new TrackerPage()
      this.body.appendChild(trackerPage.render())
      console.log('tracker page rendered')
    }
    }
  }




