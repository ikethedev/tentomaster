const topbarSubjectTemplate = document.createElement("template");
topbarSubjectTemplate.innerHTML = ` 
    <header class="container main_header">
      <div class="subject_tracker_container">
        <img
          class="icon"
          src="../images/assets/subjecttracker/backarrow.svg"
          alt="navigate back to the homepages"
        />
        <div class="flex subject">
          <h1>English</h1>
          <div class="flex options_container">
            <img class="icon" src="../images/assets/general/add.svg" alt="" />
            <img
              class="icon"
              src="../images/assets/subjecttracker/setting.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
`;


class TopBarSubject{
    constructor(){
        this.rootElement = topbarSubjectTemplate.content.cloneNode(true);
    }

    render(){
        return this.rootElement;
    }

    setSubjectTitle(title){
        this.rootElement.querySelector("h1").textContent = title;
    }
}