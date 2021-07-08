window.onload = function() {
    console.log("Funcionando");
    
    let backgroundColor = document.getElementById("backgroundColor");
    backgroundColor.addEventListener("change", changeBackgroudColor);
    function changeBackgroudColor () {
        document.body.style.backgroundColor = backgroundColor.value;
        localStorage.setItem("backgroundColor", backgroundColor.value);
    };

    let fontColor = document.getElementById("fontColor");
    fontColor.addEventListener("change", changeFontColor);
    function changeFontColor () {
        document.body.style.color = fontColor.value;
        localStorage.setItem("fontColor", fontColor.value);
    };


    let fontSize = document.querySelector("#fontSize");
    fontSize.addEventListener("change", changeFontSize);
    function changeFontSize () {
       let p = document.body;
       p.style.fontSize = fontSize.value + "px";
       localStorage.setItem("fontSize", fontSize.value + "px");
    };


    let lineHeight = document.querySelector("#line-height");
    lineHeight.addEventListener("change", changeLineHeight);
    function changeLineHeight () {
        let p = document.body;
        p.style.lineHeight = lineHeight.value + "px";
        localStorage.setItem("line-height", lineHeight.value + "px");
    };

    let fontFamily = document.querySelector("#font-family");
    fontFamily.addEventListener("change", changeFontFamily);
    function changeFontFamily () {
        let body = document.body;
        body.style.fontFamily = fontFamily.value;
        localStorage.setItem("font-family", fontFamily.value);
    };

    let savedBackgroundColor = localStorage.getItem("backgroundColor");
    document.body.style.backgroundColor = savedBackgroundColor;

    let savedFontColor = localStorage.getItem("fontColor");
    document.body.style.color = savedFontColor;

    let savedFontSize = localStorage.getItem("fontSize");
    document.body.style.fontSize = savedFontSize;

    let savedLineHeight = localStorage.getItem("line-height");
    document.body.style.lineHeight = savedLineHeight;

    let savedFontFamily = localStorage.getItem("font-family");
    document.body.style.fontFamily = savedFontFamily;
};






