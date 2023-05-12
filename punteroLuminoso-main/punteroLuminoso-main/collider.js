//Creacion de estilo de collider rectangular
const collider =  document.createElement("div");
collider.className="collider";
document.body.appendChild(collider);
collider.style.width="300px";
collider.style.height="50px";
collider.style.border="1px solid";
collider.style.position="relative";
collider.style.left="200px";
collider.style.top="0px";
collider.style.background="transparent";
collider.style.zIndex="0";
//Segundo collider de ejemplo

//Creacion de estilo de collider rectangular
const collider2 =  document.createElement("div");
collider2.className="collider2";
document.body.appendChild(collider2);
collider2.style.width="100px";
collider2.style.height="50px";
collider2.style.border="1px solid";
collider2.style.position="relative";
collider2.style.left="200px";
collider2.style.top="0px";
collider2.style.background="transparent";
collider2.style.zIndex="0";

//Collider Position X Debugger
const debugTextColliderX = document.createElement("div");
document.body.appendChild(debugTextColliderX);
debugTextColliderX.className   = "debugTextColliderX";
debugTextColliderX.style.position = "absolute";
debugTextColliderX.style.left = "0px";
debugTextColliderX.style.top = "0px";

// Collider Position Y Debugger
const debugTextColliderY = document.createElement("div");
document.body.appendChild(debugTextColliderY);
debugTextColliderY.className   = "debugTextColliderY";
debugTextColliderY.style.position = "absolute";
debugTextColliderY.style.left = "0px";
debugTextColliderY.style.top = "25px";

//Setear posicion en local storage
function setColliderPosition(x, y) {
    localStorage.setItem("mouseX", x);
    localStorage.setItem("mouseY", y);
}

const colliderRect = document.querySelector('.collider');

function mouseHoverCollider(collider,activated){
    this.addEventListener("mousemove",()=>{
        const mouseX = localStorage.getItem("mouseX")
        const mouseY = localStorage.getItem("mouseY")  
        if(onMouseCollision(collider,mouseX, mouseY)){
            debugOnCollision(collider,true);
        }
        else{
            debugOnCollision(collider,false);
        }
    })
}
function mouseClickCollider(collideractivated){
    this.addEventListener("click",()=>{
        const mouseX = localStorage.getItem("mouseX")
        const mouseY = localStorage.getItem("mouseY")  
        if(onMouseCollision(collider,mouseX, mouseY)){
            debugOnCollision(collider,true);
        }
        else{
            debugOnCollision(collider,false);
        }
    })
}

function getArea(collider){
   x1= collider.offsetLeft-8;
   x2= collider.offsetLeft+collider.clientWidth-8;
   y1= collider.offsetTop-8;
   y2= collider.offsetTop+collider.clientHeight-8;
   return {x1,x2,y1,y2}
}

function debugColliderArea(onDebug,collider,nameObject="box") {
    if (onDebug){
        debugTextColliderX.textContent+=nameObject+" = x1: "+getArea(collider).x1 +", x2: "+ getArea(collider).x2 +" || "
        debugTextColliderY.textContent+=nameObject+" = y1: "+getArea(collider).y1+" , y2: " + getArea(collider).y2 +" || "
        
    }
}
function debugOnCollision(collider,onDebug){
    if (onDebug){
        collider.style.background="black"
        }
    else{
        collider.style.background="white";

    }
}
function onMouseCollision(collider, mouseX, mouseY) {
    const {x1,x2,y1,y2} = getArea(collider);
    if (mouseX>=x1+8 && mouseX<=x2+8 && mouseY>=y1+8 && mouseY<=y2+8){
      return true;
    }
    
}
//TODO PARA CORREGIR
function comparePosition(collider,collider2){
    const {x1,x2,y1,y2} = getArea(collider);
    const {x1:xa1,x2:xa2,y1:ya1,y2:ya2} = getArea(collider2);
    if ((x1-xa1 <=0 || x2-xa2 <=0) && (y1-ya1 <=0 || y2-ya2 <=0)){
        return true;
    }

    else{
       
        return false;
    }
}


debugColliderArea(true,collider, "Box 1")
debugColliderArea(true,collider2, "Box 2")
mouseClickCollider(colliderRect,true)
mouseHoverCollider(collider2,true)

function inColision(collider1, collider2){
    if(comparePosition(collider1,collider2)||comparePosition(collider2,collider1)){
       
        console.log("Objetos en colision")
        return true;
    }
    else {
        console.log("Los objetos no estan en colision")
        return false
    }
}
inColision(collider,collider2)
  


console.log(comparePosition(collider,collider2))
