document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");


    switcher.addEventListener("click", ()  => {
        let head = document.head;

        //agregando el link de modo oscuro
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "dark-mode";

        let darkMode = document.querySelector("#dark-mode");

        //activar modo oscuro
        if(darkMode){
            head.removeChild(darkMode);
            light.style.display = "block";
            dark.style.display = "none";

        // desactovar modo oscuro
        }else{
            head.appendChild(link);
            light.style.display = "none";
            dark.style.display = "block";
        }

    })
})