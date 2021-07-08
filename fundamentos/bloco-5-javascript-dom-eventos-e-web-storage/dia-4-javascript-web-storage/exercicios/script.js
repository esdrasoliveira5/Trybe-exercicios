window.onload = function() {
    console.log("Funcionando");
    
    let backgroundColor = document.getElementById("backgroundColor");
    backgroundColor.addEventListener("change", changeBackgroudColor);
    function changeBackgroudColor () {
        document.body.style.backgroundColor = backgroundColor.value;
    };

    let fontColor = document.getElementById("fontColor");
    fontColor.addEventListener("change", changeFontColor);
    function changeFontColor () {
        document.body.style.color = fontColor.value;
    };


    let fontSize = document.querySelector("#fontSize");
    fontSize.addEventListener("change", changeFontSize);
    function changeFontSize () {
       let p = document.querySelector("p");
       p.style.fontSize = fontSize.value + "px";
    };


};






