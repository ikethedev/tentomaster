import HomePage from "./homePage.js";
import SignUpPage from "./SignUpPage.js";
import { appData } from "./appData.js";

const loginPageTempalate = document.createElement("template")
loginPageTempalate.innerHTML = `
    <header>
        <h1>Log In</h1>
    </header>
    <main>
        <form action="">
            <input type="text" id="email" type="email" name="email" placeholder="Your email" class="form__login" id="form__email" >
            <input type="text" id="password" type="password" name="password" placeholder="Password" class="form__login" >
            <button class="primary-btn">Continue <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.6967C10.4645 0.403807 9.98959 0.403807 9.6967 0.6967C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM-6.55671e-08 6.75L15 6.75L15 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" fill="white"/>
                </svg>
                </button>
        </form>
    </main>
    <footer>
        <a href="#" class="links footer__password">Forgot password</a>
        <p>No account yet? <a href="#" class="links form__sign-up">Sign up</a></p>
    </footer>
`

export default class LoginPage{
    constructor(){
        this.setData = this.setData.bind(this)
        this.rootElement = loginPageTempalate.content.cloneNode(true)
        this.body = document.querySelector("body");
        this.render = this.render.bind(this)
        let loggedIn = false
    
        this.rootElement.querySelector(".primary-btn").addEventListener("click", (e) => {
            e.preventDefault()
            const email = document.querySelector("#email") 
            const password = document.querySelector("#password")
            if(email.value === "" || password.value === ""){
                console.log("email or password is empty")
                return
            }
            else {
                appData.signIn(email.value, password.value)
                loggedIn = !loggedIn
            }
            
            if(loggedIn === false){
                return
            } else {
                this.body.innerHTML = ""
                const homepage = new HomePage()
                homepage.render()
            }
        })
        
       
        this.rootElement.querySelector(".footer__password").addEventListener("click", (e) => {
            e.preventDefault()
            alert("Password link has been sent to an email") 
        })

        this.rootElement.querySelector(".form__sign-up").addEventListener("click", (e) => {
            e.preventDefault()
            this.body.innerHTML = ""
            const signUpPage = new SignUpPage(e)
            signUpPage.render(e)
        })
    }

    setData(data){
        this.data = data
        console.log(this.data)
    }

     handleClick(e){
        e.preventDefault();

        loggedIn = !loggedIn;
   
    }

    render(){
        this.body.innerHTML = ""
        this.body.appendChild(this.rootElement)
        const button = this.rootElement.querySelector(".primary-btn")
        if(button){
            button.addEventListener("click",  this.handleClick); 
        }
        return this.rootElement
    }
}