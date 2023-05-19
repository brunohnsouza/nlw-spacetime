export class Moment extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        return this.createMoment();
    }

    createMoment(){
        const dateMoment = document.createElement("small");
        dateMoment.textContent = this.getAttribute("moment-date") || "Data do momento";

        const titleMoment = document.createElement("h2");
        titleMoment.textContent = this.getAttribute("moment-title") || "Titulo do momento";

        const imgMomentWrapper = document.createElement("div");

        const imgMoment = document.createElement("img");
        imgMoment.src = this.getAttribute("moment-photo") || "https://placehold.it/700";
        imgMoment.alt = this.getAttribute("moment-photo-description") || "Imagem relacionada ao momento no tempo.";

        imgMomentWrapper.appendChild(imgMoment);

        const descriptionMoment = document.createElement("p");
        descriptionMoment.textContent = this.getAttribute("moment-description") || "Descrição do momento";
        
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "moment");

        componentRoot.appendChild(dateMoment);
        componentRoot.appendChild(titleMoment);
        componentRoot.appendChild(imgMomentWrapper);
        componentRoot.appendChild(descriptionMoment);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");

        style.textContent = `
            .moment {
                display: flex;
                flex-direction: column;
                gap: .4rem;
            
                text-decoration: none;
            }
            
            .moment small {
                color: #bebebf;
                font-size: 1.2rem;
            }
            
            .moment h1 {
                font-size: 3.2rem;
                color: #eaeaea;
            }
        
            .moment img {
                width: 100%;
                height: 28.0rem;
                object-fit: cover;
                border-radius: .8rem;

                transition: transform .3s ease-in-out;
            }
            .moment div:hover img {
                transform: scale(1.1);
            }

            .moment div {
                width: 100%;
                height: 28.0rem;
                overflow: hidden;
                border-radius: .8rem;
            }

            .moment p {
                font-size: 1.8rem;
                color: #bebebf;
                line-height: 2.8rem;
            }
        `

        return style;
    }
}