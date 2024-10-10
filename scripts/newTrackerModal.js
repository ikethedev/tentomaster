const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
    <section class="modal_overlay" class=""></section>
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
`

class NewTrackerModal {
    constructor(){
        this.rootElement = modalTemplate.content.cloneNode(true);
    }

    render(){
        return this.rootElement;
    }

    close(){
        this.rootElement.remove();
    }
}