const TopbarTemplate = document.createElement('template');
TopbarTemplate.innerHTML = `
<header class="main_header">
	<h1 class="topbar__title">My App</h1>
	<div class="topbar__actions"></div>
</header>
`

 export default class TopbarHome {
	constructor() {
		this.rootElement = TopbarTemplate.content.cloneNode(true);
	}

	render() {
		return this.rootElement;
	}

	setTitle(title) {
		this.rootElement.querySelector('.topbar__title').textContent = title;
	}

	addAction(action) {
		this.rootElement.querySelector('.topbar__actions').appendChild(action.render());
	}
}
