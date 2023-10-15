const switchTema = document.getElementById("switch");

const HIPERVINCULOS = document.querySelectorAll("a");
const NAVBAR = document.querySelectorAll("nav");
const PARRAFOS = document.querySelectorAll("p");
const BODY = document.querySelectorAll("body");
const H2 = document.querySelectorAll("h2");
const H1 = document.querySelectorAll("h1");
const FOOTER = document.getElementById("footer");
const LI = document.querySelectorAll("li");
const HAMBURGUESA = document.getElementById("hamburguesa");
const INPUT = document.querySelectorAll("input")
const IDIOMA = document.getElementById("idioma")
const BTN = document.getElementById("loginBtn")

///variables color tema claro////

let colorFuenteTemaClaro = "#FFF"
let backgroundTemaClaro = "#007bff"
let colorBody = "#FFF"

function estilosTemaClaro(){

    HIPERVINCULOS.forEach(hiper =>{
        hiper.classList.add("link-con-after")
    })

    BODY.forEach(body =>{
        body.style.backgroundColor = colorBody;
    })

    HIPERVINCULOS.forEach(hiper =>{
        hiper.style.color = colorFuenteTemaClaro;
    })
    
    NAVBAR.forEach(nav =>{
        nav.style.backgroundColor = backgroundTemaClaro;
    })

    PARRAFOS.forEach(p=>{
        p.style.color = colorFuenteTemaClaro;
    })

    H2.forEach(h=>{
        h.style.color = colorFuenteTemaClaro;
    })

    H1.forEach(h=>{
        h.style.color = colorFuenteTemaClaro;
    })

    INPUT.forEach(i=>{
        i.setAttribute("class", "placeHolderClaro")
    })

    FOOTER.style.backgroundColor = backgroundTemaClaro;

    LI.forEach(l=>{
        l.style.color = colorFuenteTemaClaro;
    })

    HAMBURGUESA.style.backgroundColor = colorFuenteTemaClaro;

    IDIOMA.style.color = "#FFF"

    BTN.style.color = colorFuenteTemaClaro
    BTN.style.backgroundColor = backgroundTemaClaro

}

function estilosTemaOscuro(){

    HIPERVINCULOS.forEach(hiper =>{
        hiper.classList.remove("link-con-after")
    })

    BODY.forEach(body =>{
        body.style.backgroundColor = "var(--background)";
    })

    HIPERVINCULOS.forEach(hiper =>{
        hiper.style.color = "var(--color-fuente)";
    })


    NAVBAR.forEach(nav =>{
        nav.style.backgroundColor = "var(--color-principal)";
    })

    PARRAFOS.forEach(p=>{
        p.style.color = "var(--color-fuente)";
    })

    H2.forEach(h=>{
        h.style.color = "var(--color-fuente)";
    })

    H1.forEach(h=>{
        h.style.color = colorFuenteTemaClaro;
    })

    INPUT.forEach(i=>{
        i.classList.remove("placeHolderClaro")
    })

    FOOTER.style.backgroundColor = "var(--color-principal)";

    LI.forEach(l=>{
        l.style.color = "var(--color-fuente)";
    })

    HAMBURGUESA.style.backgroundColor = "var(--color-fuente)";

    IDIOMA.style.color = "var(--color-fuente)"

    BTN.style.color = "var(--color-fuente)";
    BTN.style.backgroundColor = "var(--background)";
}

tema = localStorage.getItem("tema")

if(tema === "claro"){
    estilosTemaClaro()
    switchTema.checked = true
}else{
    estilosTemaOscuro()
    switchTema.checked = false
}


switchTema.addEventListener("change", function(){

    if(switchTema.checked){
        localStorage.setItem("tema", "claro")
        //estilos para el tema claro
        estilosTemaClaro()
    }else{
        localStorage.setItem("tema", "oscuro")
        estilosTemaOscuro()
    }

})