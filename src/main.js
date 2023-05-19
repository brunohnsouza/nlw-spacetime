import { Loader } from "./components/loader-component.js";
import { Profile } from "./components/profile-component.js";
import { Moment } from "./components/moment-component.js";

customElements.define("nlw-loader", Loader);
customElements.define("my-profile", Profile);
customElements.define("moment-in-time", Moment);

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector("nlw-loader");

        document.body.removeChild(loader)

        const myProfile = document.querySelector("my-profile");
        const nav = document.querySelector("nav");
    
        myProfile.classList = "animation";
        nav.classList = "animation";
    }, 4000);
})
