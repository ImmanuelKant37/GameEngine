const light = document.getElementsByClassName("light")
console.log(light)



function showCoords(evt) {
    const box = document.getElementsByClassName("box")
    const center=light[0].style.width/2
    light[0].style.left = evt.clientX + "px";
    light[0].style.top = evt.clientY + "px";

    console.log(
      "clientX value: " + evt.clientX + "\n" +
      "clientY value: " + evt.clientY + "\n"
    );
  }