import TopbarHome from "./topbarHome.js";
import ModalOpener from "./modalOpener.js";
import Tracker from "./tracker.js"
import { appData } from "./appData.js";
const trackerHomePageTemplate = document.createElement("template");
trackerHomePageTemplate.innerHTML = ` 
<div class="trackerHomePage">
    <div class="trackerHomePage__topBar"></div>
    <div class="trackerHomePage__content"></div>
    <div class="trackerHomePage__content__addButton"></div>
</div>

`;

export default class HomePage{
    constructor(){
        this.rootElement = trackerHomePageTemplate.content.cloneNode(true);
        this.render = this.render.bind(this)
        this.renderTrackers = this.renderTrackers.bind(this)
        this.body = document.querySelector("body");
        this.topbar = new TopbarHome();
        this.topbar.setTitle("Progress");
        this.modalOpener = new ModalOpener();
    }

    render(){
        this.body.innerHTML = '';
        this.rootElement.querySelector(".trackerHomePage__topBar").appendChild(this.topbar.render());
        this.rootElement.querySelector(".trackerHomePage__content__addButton").appendChild(this.modalOpener.render());
        this.body.appendChild(this.rootElement);
        return this.rootElement;
    }

    renderTrackers(){
        const subjects = appData.getTrackers();
        document.querySelector('.trackerHomePage__content').innerHTML = "";
        subjects.forEach(subject => {
            const tracker = new Tracker()
            tracker.setSubject(subject.name)
            tracker.setId(subject.id)
            document.querySelector(".trackerHomePage__content").appendChild(tracker.render())
          })
    }
}



