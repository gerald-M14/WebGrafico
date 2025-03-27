document.addEventListener("DOMContentLoaded", (event) => {

    // capturar el clic a la hamburguesa
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu = document.querySelector(".menu-mobile");

    // funcion mostrar y ocultar menu
    const showMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobileMenu.classList.remove("menu-mobile--show");
        }else{
            mobileMenu.classList.add("menu-mobile--show");

        }
    }


    // al dar clic al boton de menu mostrar el menu
    mobileBtn.addEventListener("click", showMenu);

    // al redimensionar la pantalla, hacer que se oculte el menu
    window.addEventListener("resize", () => {
        let windowWidth = parseInt(document.body.clientWidth);
        if(windowWidth > 768){
            mobileMenu.classList.remove("menu-mobile--show");
        }
        });

        // cerrar el menu con el boton x
    let btnClose = document.querySelector(".menu-mobile__close");

    btnClose.addEventListener("click", showMenu);

    //desplegando submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {

        // console.log(item);
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

                if(submenu.className === "menu-mobile__submenu-mobile"){

                    if(submenu.style.display === "block"){
                        submenu.style.display = "none";
                    }else{
                    submenu.style.display = "block";
            }
            }
        });
    })


});