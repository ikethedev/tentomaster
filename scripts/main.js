import Application from "./application.js";
import HomePage from "./homePage.js";

const basePageTemplate = document.createElement("template");

class BasePage {
  constructor() {
    this.rootElement = document.createElement("div");
    this.rootElement.appendChild(basePageTemplate.content.cloneNode(true));
    this.body = document.querySelector("body");
  }

  render() {
    const homePage = new HomePage();
    window.homePage = homePage
    this.rootElement.appendChild(homePage.render())
    homePage.renderTrackers()
    return this.rootElement
   
  }
}

const app = new Application();

const homePage = new BasePage();
app.setRootView(homePage);

