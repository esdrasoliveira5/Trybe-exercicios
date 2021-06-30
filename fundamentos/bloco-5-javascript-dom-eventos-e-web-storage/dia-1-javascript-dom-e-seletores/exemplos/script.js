document.getElementById("header-container").style.backgroundColor = "darkgreen";
document.querySelector("#container").style.backgroundColor = "GhostWhite"
document.querySelector("#footer-container").style.backgroundColor = "DarkSlateGrey";

let emergency = document.querySelectorAll(".emergency-tasks div h3");
for (let i = 0; i < emergency.length; i += 1) {
    emergency[i].style.backgroundColor = "DarkViolet";
}
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "lightsalmon";

let important = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i = 0; i < important.length; i += 1) {
    important[i].style.backgroundColor = "black"
}

document.getElementsByTagName("section")[1].style.backgroundColor = "lightyellow"

