import HomePage from "./homePage.js";
import SubjectAddModal from "./subjectTrackerAddModal.js";
import SettingsModal from "./settingsModal.js";
import{ appData } from './appData.js'
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
      </header>
`;

export default class TopBarSubject{
    constructor(data){
        this.data = data;
        this.rootElement = topbarSubjectTemplate.content.cloneNode(true);
        this.addIcon = this.rootElement.querySelector(".add__icon");
        this.backIcon = this.rootElement.querySelector(".back__icon");
        this.settingsIcon = this.rootElement.querySelector(".settings__icon");
        this.body = document.querySelector("body");
        this.openModal = this.openModal.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.backIcon.addEventListener("click", this.goToHome);
        this.addIcon.addEventListener("click", this.openModal);
        this.settingsIcon.addEventListener("click", this.changeSettings);
    }

    render(){
        return this.rootElement;
    }

    setSubjectTitle(title){
        this.rootElement.querySelector("h1").textContent = title;
      
    }

    changeSettings(){
      const modal = new SettingsModal(this.data);
      modal.showModal(this.data)
    }

    goToHome(){
      const homepage = new HomePage();
      this.body.appendChild(homepage.render())
      homepage.renderTrackers()
    }

    openModal(){
      const subjectAddModal = new SubjectAddModal(this.data)
      subjectAddModal.openModal(this.data)
    }

    openSettingModal(){
      const settingsModal = new SettingsModal(this.data)
      settingsModal.openModal(this.data)
    }

    closeModal(e){
      const closeModal = new SubjectAddModal()
      closeModal.closeModal()
    }

    setSubjectIcon(icon){
      this.handleClick()
    }
}