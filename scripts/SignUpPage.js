import LoginPage from "./loginPage.js";
import { appData } from "./appData.js";
const signUpPageTemplate = document.createElement("template");
signUpPageTemplate.innerHTML = ` 
    <header>
        <h1>Sign Up</h1>
    </header>
    <main>
        <form action="">
            <input id="name" type="text" type="name" name="name" placeholder="Name" class="form__login" >
            <input id="email" type="text" type="email" name="email" placeholder="Your email" class="form__login" >
            <input id="password" type="text" type="password" name="password" placeholder="Password" class="form__login" >
            <button class="primary-btn">Create Account <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.6967C10.4645 0.403807 9.98959 0.403807 9.6967 0.6967C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM-6.55671e-08 6.75L15 6.75L15 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="white"/>
                </svg>
                </button>
        </form>
    </main>
    <footer>
        <p>Already have an account? <a href="#" class="links login__link">Login</a></p>
    </footer>
`

export default class SignUpPage{
    constructor(){
        this.rootElement = signUpPageTemplate.content.cloneNode(true)
        this.body = document.querySelector("body")
        this.rootElement.querySelector(".login__link").addEventListener("click", (e) =>{
            e.preventDefault()
            const loginPage = new LoginPage()
            loginPage.render()
        })

        this.rootElement.querySelector(".primary-btn").addEventListener("click", (e) => {
            e.preventDefault()
            const userName = document.querySelector("#name").value;
            const email = document.querySelector("#email").value
            const password = document.querySelector("#password").value
            appData.createAccount(userName, email, password)
            alert("hello world")
        })
    }

    render(){
        this.body.innerHTML =  ""
        this.body.appendChild(this.rootElement)
        return this.rootElement
    }

}