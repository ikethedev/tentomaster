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
        <input type="text" placeholder="English" name="subject" />
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

class settingsModal {
    constructor() {
        this.rootElement = document.createElement("div")
        this.rootElement.appendChild(settingdModalTemplate.content.cloneNode(true))
        this.deleteIcon = this.rootElement.querySelector("#delete__container")
        this.exitIcon = this.rootElement.querySelector("#exit__icon")
        this.saveIcon = this.rootElement.querySelector("#save__icon")
        this.showModal = this.showModal.bind(this);

        this.exitIcon.addEventListener("click", () => {
            this.closeModal()
        })

        this.saveIcon.addEventListener("click", () => {
            this.saveChanges()
        })

        this.deleteIcon.addEventListener("click", () => {
            this.deleteTracker()
        })
    }

    render() {
        return this.rootElement
    }

    showModal(){{
        console.log("show modal")
        this.body = document.querySelector("body")
        this.body.appendChild(this.rootElement)
        this.settingsModal = this.rootElement.querySelector("#settings__modal")
        this.settingsModal.classList.remove("hidden")
       
    }}

    closeModal(){
        this.rootElement.remove()
        this.settingsModal = this.rootElement.querySelector("#settings__modal")
        this.settingsModal.classList.remove("hidden")
    }

    saveChanges(){
        alert("Changes Saved")
        this.rootElement.remove()
    }

    deleteTracker(){
        alert("Tracker Deleted")
        this.rootElement.remove()
    }
}