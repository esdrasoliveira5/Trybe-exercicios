function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.querySelector("#days");

for (let i = 0; i < dezDaysList.length; i += 1) {

  let liDays = document.createElement("li");
  
  if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
    liDays.innerText = dezDaysList[i];
    days.appendChild(liDays);
    liDays.className = "day holiday";
  } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 ||dezDaysList[i] === 18) {
    liDays.innerText = dezDaysList[i];
    days.appendChild(liDays);
    liDays.className = "day friday";
  } else if (dezDaysList[i] === 25 ) {
    liDays.innerText = dezDaysList[i];
    days.appendChild(liDays);
    liDays.className = "day holiday friday";
  } else {
    liDays.innerText = dezDaysList[i];
    days.appendChild(liDays);
    liDays.className = "day";
  };
};
//Exercicio 2

let buttonContainer = document.querySelector(".buttons-container");
let buttonHoliday = document.createElement("button");
function createButtonHoliday(string) {
  buttonContainer.appendChild(buttonHoliday);
  buttonHoliday.innerText = string;
  buttonHoliday.id = "btn-holiday";
};

createButtonHoliday("Feriados")
//Exercicio 3
let buttonHolidays = document.getElementById("btn-holiday");
let dayHoliday = document.querySelectorAll(".holiday");

buttonHolidays.addEventListener("click", clickButtonHoliday);
function clickButtonHoliday () {
  
  for (let i = 0; i < dayHoliday.length; i += 1) {
    if (dayHoliday[i].style.backgroundColor === "green") {
      dayHoliday[i].style.backgroundColor = "rgb(238,238,238)";
    } else {
      dayHoliday[i].style.backgroundColor = "green";
    };
  };
};

//Exercicio 4
let buttonFriday = document.createElement("button");
function createButtonFriday(string) {
  buttonContainer.appendChild(buttonFriday);
  buttonFriday.innerText = string;
  buttonFriday.id = "btn-friday";
};

createButtonFriday("Sexta-Feira");

//Exercicio 5;
let buttonFridays = document.getElementById("btn-friday");
let dayFriday = document.querySelectorAll(".friday");

buttonFridays.addEventListener("click", clickButtonFriday);
function clickButtonFriday () {
  
  for (let i = 0; i < dayFriday.length; i += 1) {
    if (dayFriday[i].style.backgroundColor === "green") {
      dayFriday[i].style.backgroundColor = "rgb(238,238,238)";
    } else {
      dayFriday[i].style.backgroundColor = "green";
    };
  };
};

//Exercicio 6 


days.addEventListener("mouseover", mouseZoom);

function mouseZoom(event) {
  event.target.style.fontSize = "30px";
};

days.addEventListener("mouseout", mouseZoomOut);

function mouseZoomOut(event) {
 event.target.style.fontSize = "20px"
}




