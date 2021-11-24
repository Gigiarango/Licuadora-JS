let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let botonLicuadora = document.getElementById("blender-button-sound")
let sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerBrr();
        licuadora.classList.add("active");
        // console.log("Me encendiste");
    } else {
        estadoLicuadora = "apagada"
        hacerBrr();
        licuadora.classList.remove("active");
        // console.log("Me apagaste")
    }
}

function hacerBrr(){
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;

    }
}