//Creacion del puntero estilizado
const puntero = document.createElement("div");
document.body.appendChild(puntero);
puntero.className   = "puntero";
const mouse = document.querySelector('.puntero');
mouse.style.height ="100%";
mouse.style.width ="100%";
mouse.style.top ="0px";
mouse.style.left ="0px";
mouse.style.position ="absolute";
mouse.style.zIndex ="99999";
//Mouse Position X Debugger
const debugTextMousePositionX = document.createElement("div");
document.body.appendChild(debugTextMousePositionX);
debugTextMousePositionX.className   = "debugTextMousePositionX";
debugTextMousePositionX.style.position = "relative";
debugTextMousePositionX.style.left = "0px";
debugTextMousePositionX.style.top = "0px";

// Mouse Position Y Debugger
const debugTextMousePositionY = document.createElement("div");
document.body.appendChild(debugTextMousePositionY);
debugTextMousePositionY.className   = "debugTextMousePositionY";
debugTextMousePositionY.style.position = "relative";
debugTextMousePositionY.style.left = "0px";
debugTextMousePositionY.style.top = "0px";

function setMousePosition(x, y) {
    localStorage.setItem("mouseX", x);
    localStorage.setItem("mouseY", y);
}
//Obtener posicion X del mouse
function getMousePositionX(e) {
    const rect = mouse.getBoundingClientRect();
    return e.clientX - rect.left
}
//Obtener posicion Y del mouse
function getMousePositionY(e) {
    const rect = mouse.getBoundingClientRect();
    return e.clientY - rect.top
    
}
mouse.style.cursor = "none"
//Captura de eventos y debug de posicion del mouse
mouse.addEventListener('mousemove', (e) => {
    //Captura de posicion del mouse
    const x = e.clientX
    const y = e.clientY
    //Estilo
   
    mouse.style.background = `radial-gradient(circle at ${x}px ${y}px,rgba(202,127,251,1) 0%, rgba(255,255,255,1) 0%, rgba(119,36,77,1) 1%, rgba(200,92,218,0) 3%, rgba(226,153,255,0) 4%, transparent 0%)`
    //Debug
    debugMouseMove(e, true);
    //Set local storage pocision del cursor
    setMousePosition(getMousePositionX(e), getMousePositionY(e));
})
//Debug de mouse en pantalla
function debugMouseMove(e, onDebug) {
    if (onDebug){
        debugTextMousePositionX.textContent="Mouse X:"+(getMousePositionX(e)-8)
        debugTextMousePositionY.textContent="Mouse Y:"+(getMousePositionY(e)-8)
    }
}

