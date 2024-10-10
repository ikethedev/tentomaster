import SubjectTopBar from "./topbarSubject.js"

import { appData } from "./appData.js";

const settingdModalTemplate = document.createElement('template');
settingdModalTemplate.innerHTML = `
    <section class="modal_overlay hidden"></section>
    <section id="settings__modal" class="hidden">
    <header class="modal_header">
        <svg
        id="exit__icon"
        class="icon"
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
        <h3>Edit Tracker</h3>
        <button id="save__icon">Save</button>
    </header>
    <form action="">
        <label for="subject">Name</label>
        <input type="text" placeholder="English" name="subject" id="subject__change"/>
        <span id="delete__container" class="delete__container flex"
        ><img
            id="delete__icon"
            class="icon"
            src="../images/assets/subjecttracker/delete.svg"
            alt=""
        />
        Delete Tracker
        </span>
    </form>
    </section>

<!-- Modal Ends -->
`

export default class SettingsModal {
    constructor(data) {
        this.rootElement = document.createElement("div");
        this.rootElement.appendChild(settingdModalTemplate.content.cloneNode(true));
        this.changeSubject = this.rootElement.querySelector("#subject__change");
        this.deleteIcon = this.rootElement.querySelector("#delete__container");
        this.exitIcon = this.rootElement.querySelector("#exit__icon");
        this.saveIcon = this.rootElement.querySelector("#save__icon");
        this.showModal = this.showModal.bind(this);
        console.log(data)
        this.exitIcon.addEventListener("click", () => {
            this.closeModal();
        })

        this.saveIcon.addEventListener("click", () => {
            this.saveChanges(data);
        })

        this.deleteIcon.addEventListener("click", () => {
            this.deleteTracker();
        })
    }

    render() {
        return this.rootElement;
    }

    showModal(){{
        this.body = document.querySelector("body");
        this.body.appendChild(this.rootElement);
        this.settingsModal = this.rootElement.querySelector("#settings__modal");
        this.settingsModal.classList.remove("hidden");
    }}

    closeModal(){
        this.rootElement.remove();
        this.settingsModal = this.rootElement.querySelector("#settings__modal");
        this.settingsModal.classList.remove("hidden");
    }

    saveChanges(data){
        const id = data.id
        appData.subject[id].name = this.changeSubject.value
        const topBarTitle = new SubjectTopBar()
        const subjects = JSON.parse(localStorage.getItem("subjects"))
        subjects.forEach(subject => {
          if(subject.id === id){
            subject.name = this.changeSubject.value
          }
        });
        localStorage.setItem('subjects', JSON.stringify(subjects));
        topBarTitle.setSubjectTitle(this.changeSubject.value)
        this.rootElement.remove();
    }

    deleteTracker(){
        this.rootElement.remove();
    }
}