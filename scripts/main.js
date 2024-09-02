// This is the main entry point for the application.
// Were going to abstract away the DOM to make maintaing the application easier.

// First, I check to see that the script is being loaded.
console.log('Hello, from Main!');

// Next, I use the Application class to render the application.
const app = new Application();
// I pass the root element to the render method. This will cause the 
// application to be rendered to the root element.
app.render(document.getElementById('root'));

const topbar = new Topbar();
topbar.setTitle('English 101');
app.setRootView(topbar);
