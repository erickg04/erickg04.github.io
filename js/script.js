let slides = document.querySelectorAll(".slides img");
let boton = document.getElementById("btnContacto");
let textoSlider = document.querySelector(".slider-text");

let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

    // Ocultar texto siempre primero
    textoSlider.style.display = "none";
    boton.style.display = "none";

    // IMAGEN 2 → EXTINTORES
    if(index === 1){
        textoSlider.style.display = "block";
        boton.style.display = "inline-block";

        titulo.textContent = "Extintores del Guadiana";
        descripcion.textContent =
        "Venta, recarga y mantenimiento de extintores";

        boton.href = "extintores.html";
    }

    // IMAGEN 3 → OXÍGENO
    if(index === 2){
        textoSlider.style.display = "block";
        boton.style.display = "inline-block";

        titulo.textContent = "Oxígeno Medicinal";
        descripcion.textContent =
        "Suministro disponible las 24 horas";

        boton.href = "oxigenomedicinal.html";
    }

}, 3000);



function buscar() {
    let texto = document.getElementById("buscarInput").value.toLowerCase().trim();

    if (texto === "") return;

   const productos = {
    // SOLDADURA
    "soldadura 6010": "soldadura.html#soldadura6010",
    "soldadura 6011": "soldadura.html#soldadura6011",
    "soldadura 7018": "soldadura.html#soldadura7018",
    "soldadura aluminio": "soldadura.html#aluminio-18",
    "soldadura": "soldadura.html",

    // ALAMBRE
    "alambre tubular 5kg": "soldadura.html#alambre-5kg",
    "alambre tubular": "soldadura.html#alambre035",
    "alambre": "soldadura.html#alambre-5kg",

    // UTP
    "utp65 1/8": "soldadura.html#utp65-18",
    "utp65 3/32": "soldadura.html#utp65-332",
    "utp65": "soldadura.html#utp65-18", 

    // VARILLAS
    "varilla aluminio": "soldadura.html#varilla-aluminio",
    "varilla": "soldadura.html", 

    // METALES
    "acero inoxidable": "soldadura.html#acero-inoxidable",
    "bronce confundente": "soldadura.html#bronce-confundente",
    "bronce desnudo": "soldadura.html#bronce-desnudo",
    "fierro vaciado": "soldadura.html#fierro-vaciado",

    // OTROS
    "durmatic 5/32": "soldadura.html#durmatic-532",


    // MATERIAL PARA SOLDADURA
    "piedra montada rt18r": "materialparasoldadura.html#piedramontadart18r",
    "disco desbaste 4 1/2": "materialparasoldadura.html#discodesbaste412",
    "rueda flap": "materialparasoldadura.html#ruedaflap",
    "marcador de jaboncillo": "materialparasoldadura.html#marcadordejaboncillo",
    "disco de corte 7": "materialparasoldadura.html#discodecorte7",
    "marcador pintura solida": "materialparasoldadura.html#marcadorpinturasolida",
    "careta termoplastica": "materialparasoldadura.html#caretatermoplastica",
    "cristal obscuro careta": "materialparasoldadura.html#cristalobscurocareta",
    "cristal claro careta": "materialparasoldadura.html#cristalclarocareta",
    "pinza tierra 500 amps": "materialparasoldadura.html#pinzatierra500amps",
    "cinta barricada peligro": "materialparasoldadura.html#cintabarricadapeligro",
    "cinta barricada precaucion": "materialparasoldadura.html#cintabarricadaprecaucion",
    "capucha para soldar": "materialparasoldadura.html#capuchaparasoldar",
    "mandil de tela": "materialparasoldadura.html#mandildetela",
    "mandil de carnaza": "materialparasoldadura.html#mandildecarnaza",
    "antisalpicaduras": "materialparasoldadura.html#antisalpicaduras",
    "portaelectrodos 250": "materialparasoldadura.html#portaelectrodos250",
    "portaelectrodos 300": "materialparasoldadura.html#portaelectrodos300",
    "pieza de tierra": "materialparasoldadura.html#piezadetierra",
    "encendedor de cazuela": "materialparasoldadura.html#encendedordecazuela",
    "flexometro 8m naranja": "materialparasoldadura.html#flexometro8mnaranja",
    "flexometro 8m azul": "materialparasoldadura.html#flexometro8mazul",
    "flexometro 5.5m": "materialparasoldadura.html#flexometro55m",
    "flexometro 5m": "materialparasoldadura.html#flexometro5m",
    "lentes de seguridad oscuro": "materialparasoldadura.html#lentesdeseguridadoscuro",
    "lentes de seguridad claro": "materialparasoldadura.html#lentesdeseguridadclaro",
    "lentes protectores oscuros": "materialparasoldadura.html#lentesprotectoresoscuros",
    "lentes protectores claros": "materialparasoldadura.html#lentesprotectoresclaros",
    "cepillo de alambre": "materialparasoldadura.html#cepillodealambre",
    "casco": "materialparasoldadura.html#casco",
    "cinta teflon": "materialparasoldadura.html#cintaparasellarteflon",
    "cinta para sellar teflon": "materialparasoldadura.html#cintaparasellarteflon",
    "hoja de segueta hecort": "materialparasoldadura.html#hojadeseguetahecort",

    // GUANTES
    "guantes para soldador azul": "guantes.html#guantesazul",
    "guantes de tela 9": "guantes.html#guantestela9",
    "guantes carnaza": "guantes.html#guantescarnaza",
    "guantes piel gris": "guantes.html#guantespielgris",
    "guantes de tela 8": "guantes.html#guantestela8",
    "guantes piel amarillo": "guantes.html#guantespielamarillo",
    "guantes soldadura azul": "guantes.html#guantessoldaduraazul",
    "guantes negros para soldar": "guantes.html#guantesnegrossoldar",


    // GASES
    "argon industrial": "oxigenos.html#argonindustrial",
    "oxigeno industrial": "oxigenos.html#oxigenoindustrial",
    "acetileno": "oxigenos.html#acetileno",
    "dioxido de carbono": "oxigenos.html#dioxidodecarbono",
    "mezcla": "oxigenos.html#mezcla",
    "oxigeno medicinal": "oxigenos.html#oxigenomedicinal",
    "nitrogeno": "oxigenos.html#nitrogeno",

    // MATERIALES
    "regulador para oxigeno": "oxigenos.html#reguladoroxigeno",
    "regulador de yugo": "oxigenos.html#reguladoryugo",
    "regulador oxigeno industrial": "oxigenos.html#reguladoroxigenoindustrial",
    "mascarilla de oxigeno": "oxigenos.html#mascarillaoxigeno",
    "boquilla para acetileno": "oxigenos.html#boquillaacetileno",

    //EXTINTORES
    "extintores k": "extintores.html#extintores-k",
    "extintores co2": "extintores.html#extintores-co2",
    "extintores agua": "extintores.html#extintores-agua",
    "extintores polvo quimico": "extintores.html#extintores-polvo-quimico",
    "materiales": "extintores.html#materiales-extintores",
};

    for (let clave in productos) {
        if (texto.includes(clave)) {
            window.location.href = productos[clave];
            return;
        }
    }

    alert("Producto no encontrado");
}


// ENTER para buscar
document.getElementById("buscarInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        buscar();
    }

});


