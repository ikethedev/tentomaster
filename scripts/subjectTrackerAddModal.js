const topbarSubjectAddModalTemplate = document.createElement("template");
topbarSubjectAddModalTemplate.innerHTML = `
    <section id="add_modal" class="hidden">
        <header class="modal_header">
            <svg
            class="exit__icon icon"
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
            <h3>New Progress</h3>
            <button id="save__icon">Save</button>
        </header>
        <form action="">
        <label>Rating: 5 of of 10</label>
        <div class="slider__container">
            <input
            type="range"
            min="0"
            max="10"
            value="5"
            class="slider"
            id="rating-slider"
            />
            <div class="slider-handle ten"></div>
            <div class="slider-handle twenty"></div>
            <div class="slider-handle thirty"></div>
            <div class="slider-handle forty"></div>
            <div class="slider-handle fifty"></div>
            <div class="slider-handle sixty"></div>
            <div class="slider-handle seventy"></div>
            <div class="slider-handle eighty"></div>
            <div class="slider-handle ninty"></div>
        </div>
        <label for="comment">Comment (optional)</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </form>
    </section>
`

class SubjectAddModal{
    constructor(){
        this.rootElement = document.createElement("div")
        this.rootElement.appendChild(topbarSubjectAddModalTemplate.content.cloneNode(true))
        this.openModal = this.openModal.bind(this)
        this.saveIcon = this.rootElement.querySelector("#save__icon");
        this.exitIcon = this.rootElement.querySelector(".exit__icon");
        this.exitIcon.addEventListener("click", () => {
            this.closeModal()
        });

        this.saveIcon.addEventListener("click", () => {
            this.saveLog()
        })
    }

  
    openModal(){
        this.body = document.querySelector("body");
        this.body.appendChild(this.rootElement)
        console.log(this.rootElement)
        this.add = this.rootElement.querySelector("#add_modal")
        this.add.classList.remove("hidden")
  
    }

    saveLog(){
        alert("Log Saved")
        this.rootElement.remove()
    }

    closeModal(){
        this.rootElement.remove()
    
    }
}