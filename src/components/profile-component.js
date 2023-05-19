export class Profile extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.createProfile());
        shadow.appendChild(this.animation());
        shadow.appendChild(this.style());
        shadow.appendChild(this.responsive());
    }

    createProfile() {
        return this.createContent();
    }

    createContent() {
        const imgLogo = document.createElement("img");
        imgLogo.src = this.getAttribute("logo-photo") || "./src/assets/img/logo.svg";
        imgLogo.alt = this.getAttribute("logo-description") || "Imagem relacionada ao logotipo do evento da NLW Spacetime.";

        const imgProfile = document.createElement("img");
        imgProfile.src = this.getAttribute("profile-photo") || "https://placehold.it/160";
        imgProfile.alt = this.getAttribute("profile-description") || "Imagem do usuário.";
        
        const author = document.createElement("strong");
        author.innerText = this.getAttribute("author") || "nome do usuário";
        
        const projectDescription = document.createElement("p");
        const brElement = document.createElement("br");
        
        projectDescription.innerText = "Cápsula do tempo de"
        projectDescription.appendChild(brElement);
        projectDescription.appendChild(author);

        const footer = document.createElement("span");
        footer.innerText = "Feito com 💜 no NLW da Rocketseat";

        const contentWrapper = document.createElement("aside");
        contentWrapper.appendChild(imgLogo);
        contentWrapper.appendChild(imgProfile);
        contentWrapper.appendChild(projectDescription);
        contentWrapper.appendChild(footer);

        return contentWrapper;
    }

    style() {
        const style = document.createElement("style");

        style.textContent = `
            aside {
                grid-area: profile;
            
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2.0rem;
                height: 100%;
            
                border-right: .1rem solid;
                border-image: linear-gradient(#727275, #2c2c31) 1;
            
                background-image: url("./src/assets/img/background.svg");
                background-position: top right;
                background-repeat: no-repeat;
                background-size: auto 100%;
            }

            aside * {
                animation: entering 0.7s ease-in-out;
            }
            
            aside img:nth-child(2) {
                width: 16.0rem;
                height: 16.0rem;
                border-radius: 50%;
            
                border: .4rem solid transparent;
                background: linear-gradient(#d39e33, #ed5636, #633bbc) padding-box,
                linear-gradient(260deg, #d39e33, #ed5636, #633bbc) border-box;
            }
            
            aside p {
                font-size: 3.2rem;
                text-align: center;
                margin: 0;
            }
            
            aside span {
                font-size: 1.2rem;
                color: #9e9ea0;
            }
        
        `

        return style;
    }

    responsive() {
        const responsive = document.createElement("style");

        responsive.textContent = `
        @media (max-width: 768px){
            aside {
              border-right: none;
              padding: 3.2rem 1.2rem;
            }
          }
        `   

        return responsive;
    }

    animation() {
        const animation = document.createElement("style");

        animation.textContent = `
        @keyframes entering {
            from { 
              opacity: 0;
              transform: translateY(-200px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
        }
        `   

        return animation;
    }
}