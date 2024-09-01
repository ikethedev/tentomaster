// This is the entry point for the application.
// You can use components here to build the application.
class Application {
  constructor() {
    console.log('Application initialized');
    // This creates a blank div to place elements in.
    this.rootElement = document.createElement('div');
  }
  // This accepts an HTML element. This element will be the element that we render
  // the application into.
  render(el) {
    el.replaceChildren(this.rootElement);
    return this.rootElement;
  }

  // This method sets the root view of the application.
  // It accepts a component that follows the structure we've been using.
  // The component should have a render method that returns an HTML element.
  setRootView(view) {
    this.rootElement.replaceChildren(view.render());
    this.rootView = view;
  }
}
