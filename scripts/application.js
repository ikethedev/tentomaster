// This is the entry point for the application.
export default class Application {
	constructor() {
		console.log('Application initialized');
		this.rootElement = document.createElement('div');
	}
	render(el) {
		el.replaceChildren(this.rootElement);
		return this.rootElement;
	}
	
	setRootView(view) {
		this.rootElement.replaceChildren(view.render());
		this.rootView = view;
	}
}
