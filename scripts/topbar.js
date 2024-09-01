
const TopbarTemplate = document.createElement('template');
TopbarTemplate.innerHTML = `
<header class="topbar">
    <h1 class="topbar__title">My App</h1>
    <div class="topbar__actions"></div>
</header>
`

class Topbar {
    constructor() {
        // This creates an element to place elements in.
        // It is based on the template we defined above.
        this.rootElement = TopbarTemplate.content.cloneNode(true);
    }

    // This method returns the root element of the component.
    render() {
        return this.rootElement;
    }

    // This method sets the title of the topbar.
    setTitle(title) {
        this.rootElement.querySelector('.topbar__title').textContent = title;
    }

    // This method adds an action component to the topbar.
    addAction(action) {
        this.rootElement.querySelector('.topbar__actions').appendChild(action.render());
    }
}
