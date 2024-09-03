const modalOpenerTemplate = document.createElement('template');
modalOpenerTemplate.innerHTML = ` 
    <section class="add_progress_container container">
        <svg id="add_tracker" class="icon" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <h2>New Progress Tracker</h2>
    </section>
`

class ModalOpener{
    constructor(){
        this.rootElement = modalOpenerTemplate.content.cloneNode(true);
    }

    render(){
        return this.rootElement;
    }

}