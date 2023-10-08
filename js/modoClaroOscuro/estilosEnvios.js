const switchTema = document.getElementById("switch");

const HIPERVINCULOS = document.querySelectorAll("a");
const NAVBAR = document.querySelectorAll("nav");
const PARRAFOS = document.querySelectorAll("p");
const BODY = document.querySelectorAll("body");
const H1 = document.querySelectorAll("h1");
const BTN = document.querySelectorAll("button")
const FOOTER = document.querySelectorAll("footer");
const LI = document.querySelectorAll("li");
const HAMBURGUESA = document.getElementById("hamburguesa");
const CODCONT = document.getElementById("codigo-container")
const LUPA = document.getElementById("lupa")
const txtVariado = document.getElementsByClassName("textoVariado")

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

    H1.forEach(h=>{
        h.style.color = colorFuenteTemaClaro;
    })

    Array.from(txtVariado).forEach(element => {
        element.style.color = backgroundTemaClaro;
    });


    FOOTER.forEach(foot =>{
        foot.style.backgroundColor = backgroundTemaClaro;
    })

   
    CODCONT.style.backgroundColor = backgroundTemaClaro;

    LUPA.src = "./img/lupaBlanca.png"

    BTN.forEach(btn =>{
        btn.style.color = backgroundTemaClaro;
    })

    LI.forEach(l=>{
        l.style.color = colorFuenteTemaClaro;
    })

    HAMBURGUESA.style.backgroundColor = colorFuenteTemaClaro;

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

    H1.forEach(h=>{
        h.style.color = "var(--color-fuente)";
    })

    CODCONT.style.backgroundColor = "var(--color-principal)";

    LUPA.src = "./img/lupaVioleta.png"

    BTN.forEach(btn =>{
        btn.style.color = "var(--color-fuente)";
    })

    FOOTER.forEach(foot =>{
        foot.style.backgroundColor = "var(--color-principal)";
    })

    LI.forEach(l=>{
        l.style.color = "var(--color-fuente)";
    })

    HAMBURGUESA.style.backgroundColor = "var(--color-fuente)";

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