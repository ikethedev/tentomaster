const settingdModalTemplate = document.createElement('template');
settingdModalTemplate.innerHTML = `
    <section class="modal_overlay hidden"></section>
    <section id="modal" class="hidden">
    <header class="modal_header">
        <svg
        id="exit"
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
        <button id="save">Save</button>
    </header>
    <form action="">
        <label for="subject">Name</label>
        <input type="text" placeholder="English" name="subject" />
        <span class="delete_container flex"
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
        this.rootElement = settingdModalTemplate.content.cloneNode(true)
        this.deleteIcon = this.rootElement.querySelector("#delete__icon")

        this.deleteIcon.addEventListener("click", this.deleteTracker)
    }

    render() {
        return this.rootElement
    }

    deleteTracker(){
        console.log("Deleted")
    }
}