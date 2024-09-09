const addTrackerModalTemplate =  document.createElement('template')
addTrackerModal.innerHTML = ` 
    <!-- Modal Starts -->
    <section class="modal_overlay" class="hidden"></section>
    <section id="modal" class="hidden">
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
        <h3>New Tracker</h3>
        <button id="create">Create</button>
    </header>
    <form action="">
        <label for="subject">Name</label>
        <input
        type="text"
        placeholder="Which subject would you like to track"
        name="subject"
        />
    </form>
    </section>

    <!-- Modal Ends -->
`

class AddTrackerModal {
    constructor(){
        this.rootElement = addTrackerModalTemplate.content.cloneNode(true)
        this.exitIcon = document.querySelector('#exit__icon')
        this.createTracker = document.querySelector('#create')

        this.closeModal = this.closeModal.bind(this)
        this.addTracker = this.addTracker.bind(this)

        this.exitIcon.addEventListener('click', this.closeModal)
        this.createTracker.addEventListener('click', this.addTracker)
        
    }

    render(){{
        return this.rootElement
    }}

    closeModal(){
        this.rootElement.querySelector('#modal').classList.add('hidden')
    }

    addTracker(){
        console.log('tracker added')
    }
}