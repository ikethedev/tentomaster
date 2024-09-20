const topbar = new Topbar();
console.log(topbar);
topbar.setTitle("Progress");

const tracker = new Tracker();
tracker.setSubject("math");
tracker.setData("6 out of 10");

const modalOpener = new ModalOpener();

const trackerHomePageTemplate = document.createElement("template");
trackerHomePageTemplate.innerHTML = ` 
<div class="trackerHomePage"></div>
`;

class HomePage{
    constructor(){
        this.rootElement = trackerHomePageTemplate.content.cloneNode(true);
        this.render = this.render.bind(this)
        this.addModal = this.addModal.bind(this)
        this.rootElement.addEventListener("click", this.addModal)
        this.body = document.querySelector("body");
    }

    render(){
        this.body.innerHTML = ''; // Clear before appending
        this.rootElement.appendChild(topbar.render())
        this.rootElement.appendChild(tracker.render())
        this.rootElement.appendChild(modalOpener.render());
        this.body.appendChild(this.rootElement)
        return this.rootElement
    }

    addModal(){
        console.log("hello")
    }
}

const page = new HomePage()

