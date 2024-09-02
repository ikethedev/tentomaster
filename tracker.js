const TrackerTemplate = document.createElement("template");
TrackerTemplate.innerHTML = `   
    <section class="tracker">
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
    this.rootElement = TrackerTemplate.content.cloneNode(true);
  }

  render() {
    return this.rootElement;
  }

  setSubject(subject){
    this.rootElement.querySelector(".subject_tracker h3").textContent = subject;
  }

  setData(data){
    // console.log(data);
    this.rootElement.querySelector(".subject_tracker p").textContent = data;
  }

  
}
