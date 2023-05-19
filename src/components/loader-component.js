export class Loader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        return this.createLoader();
    }

    createLoader() {
        const loaderWrapper = document.createElement("div");
        loaderWrapper.setAttribute("class", "nlw-loading");

        const loaderImg = document.createElement("img");
        loaderImg.src = this.getAttribute("loader-photo") || "./src/assets/img/logo.svg";
        loaderImg.alt = this.getAttribute("loader-description") || "Imagem relacionada ao logotipo do evento da NLW Spacetime.";

        loaderWrapper.appendChild(loaderImg);

        return loaderWrapper;
    }

    style() {
        const style = document.createElement("style");

        style.textContent = `
        .nlw-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #121215;
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .nlw-loading img {
            animation: pulse .4s alternate infinite ease-in-out;
        }

        @keyframes pulse {
            to {
            opacity: 0.8;
            }
        }
        `

        return style;
    }
}