const topbarSubjectTemplate = document.createElement("template");
topbarSubjectTemplate.innerHTML = ` 
    <header class="container main_header">
      <div class="subject_tracker_container">
        <img
          class="back__icon icon"
          src="../images/assets/subjecttracker/backarrow.svg"
          alt="navigate back to the homepages"
        />
        <div class="flex subject">
          <h1>English</h1>
          <div class="flex options_container">
            <img class="add__icon icon" src="../images/assets/general/add.svg" alt="" />
            <img
              class="settings__icon icon"
              src="../images/assets/subjecttracker/setting.svg"
              alt=""
            />
          </div>
        </div>
      </div>
     <!-- Add Modal -->
      <section id="add_modal" class="hidden">
      <header class="modal_header">
        <svg
          id="icon"
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
        <button id="save">Save</button>
      </header>
      <form action="">
      <label>Rating: 5 of of 10</label>
      <div class="slider__container">
        <input
          type="range"
          min="0"
          max="10"
          value="5"
          class="slider"
          id="rating-slider"
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
      <label for="comment">Comment (optional)</label>
      <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
    </form>
`;


class TopBarSubject{
    constructor(){
        this.rootElement = topbarSubjectTemplate.content.cloneNode(true);
        this.addIcon = this.rootElement.querySelector(".add__icon");
        this.backIcon = this.rootElement.querySelector(".back__icon");
        this.settingsIcon = this.rootElement.querySelector(".settings__icon");
        this.exitIcon = this.rootElement.querySelector(".exit__icon");

        this.addReview = this.addReview.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.backIcon.addEventListener("click", this.goToHome);
        this.addIcon.addEventListener("click", this.addReview);
        this.settingsIcon.addEventListener("click", this.changeSettings);
        this.exitIcon.addEventListener("click", this.closeModal);
    }

    render(){
        return this.rootElement;
    }

    setSubjectTitle(title){
        this.rootElement.querySelector("h1").textContent = title;
    }

    changeSettings(){
      console.log("change settings")
    }

    goToHome(){
      console.log("go to home")
    }

    addReview(){
      document.querySelector("#add_modal").classList.toggle("hidden")
      console.log("add review")
    }

    closeModal(){
      document.querySelector("#add_modal").classList.toggle("hidden")
    }

   

    setSubjectIcon(icon){
      this.handleClick()
    }
}