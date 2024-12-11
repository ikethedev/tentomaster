import TopbarHome from "./topbarHome.js";
import ModalOpener from "./modalOpener.js";
import Tracker, { tracker } from "./tracker.js"
import LoginPage from "./loginPage.js";
import { appData } from "./appData.js";
import TrackerPage from "./trackerPage.js";
const trackerHomePageTemplate = document.createElement("template");
trackerHomePageTemplate.innerHTML = ` 
<div class="trackerHomePage">
    <div class="trackerHomePage__topBar"></div>
    <div class="trackerHomePage__content"></div>
    <div class="trackerHomePage__content__addButton"></div>
</div>

`;

export default class HomePage{
    constructor(data = null){
        this.data = data
        console.log(this.data)
        console.log(this.data)
        this.rootElement = trackerHomePageTemplate.content.cloneNode(true);
        this.render = this.render.bind(this)
        this.renderTrackers = this.renderTrackers.bind(this)
        this.body = document.querySelector("body");
        this.topbar = new TopbarHome();
         this.topbar.setTitle("Hello User");
        const currentUser = appData.getCurrentUser(); // Access the current user

        if (currentUser !== null) {
            console.log(true)
            console.log(currentUser.displayName)
            this.topbar.setTitle(`Hello, ${currentUser.displayName}`); // Display user's name in the topbar
        }

        this.modalOpener = new ModalOpener();
        // this.rootElement.querySelector(".primary-btn").addEventListener("click", (e) => {
        //     e.preventDefault()
        //     this.body.innerHTML = ""
        //     const login = new LoginPage()
        //     login.render()
        // })
    }

   async setData(data){
    console.log(this.data)
        const subjects = await appData.getTrackers(this.data);
        const trackers = new Tracker()
       

        console.log(appData)
          
        if (this.data?.displayName) {
            this.topbar.setTitle(`Hello, ${this.data.displayName}`);
        } else {
            this.topbar.setTitle("Hello User");
        }
    }
   

    render(){
        this.body.innerHTML = '';
        this.renderTrackers()
        this.rootElement.querySelector(".trackerHomePage__topBar").appendChild(this.topbar.render());
        this.rootElement.querySelector(".trackerHomePage__content__addButton").appendChild(this.modalOpener.render());
        this.body.appendChild(this.rootElement);
        return this.rootElement;
    }

    async renderTrackers(){
        const subjects = await appData.getTrackers(this.data);
        this.data = subjects
        document.querySelector('.trackerHomePage__content').innerHTML = "";
        subjects.forEach(subject => {
            const tracker = new Tracker()
            tracker.setSubject(subject.name)
            tracker.setId(subject.id)
            document.querySelector(".trackerHomePage__content").appendChild(tracker.render())
          })
    }
}



