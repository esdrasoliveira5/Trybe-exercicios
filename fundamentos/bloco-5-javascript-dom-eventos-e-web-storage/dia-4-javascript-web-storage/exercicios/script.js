window.onload = function() {
    console.log("Funcionando");
    
    let backgroundColor = document.getElementById("backgroundColor");
    
    backgroundColor.addEventListener("change", changeBackgroudColor )

    function changeBackgroudColor () {
        document.body.style.backgroundColor = backgroundColor.value;
    };



};






