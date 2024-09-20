const addTrackerModalTemplate =  document.createElement('template')
addTrackerModalTemplate.innerHTML = ` 
    <!-- Modal Starts -->
    <section class="modal_overlay" class="hidden"></section>
    <section id="add__modal" class="hidden">
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
        this.rootElement = document.createElement('div')
        this.rootElement.appendChild(addTrackerModalTemplate.content.cloneNode(true))
        this.exitIcon = this.rootElement.querySelector('#exit__icon')
        this.createTracker = this.rootElement.querySelector('#create')
        this.addModal = this.rootElement.querySelector('#add__modal')
        // this.closeModal = this.closeModal.bind(this)
        // this.addTracker = this.addTracker.bind(this)

        this.exitIcon.addEventListener('click', () => {
            this.closeModal()
        })
        this.createTracker.addEventListener('click', () => {
            this.addTracker()
        })
        
    }

    render(){{
        return this.rootElement
    }}

    addTracker(){
        alert("Tracker Added")
        this.rootElement.remove()  
    }


    closeModal(){
        this.body = document.querySelector('body')
        this.rootElement.remove()
    }

    openModal(){
        this.body = document.querySelector('body')
        this.body.appendChild(this.rootElement)
        this.addModal.classList.remove('hidden')
        console.log('tracker added')
    }
    
}



console.log('addTrackerModal.js loaded');
