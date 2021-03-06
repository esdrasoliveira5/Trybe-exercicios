const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

myWebpage.addEventListener("dblclick", openWebPage);

function openWebPage() {
    window.open("https://esdrasoliveira5.github.io/", "_blank");
};

myWebpage.addEventListener("mouseover", colorChange);


//Usando o EVENT.Target
// function colorChange (event) {
//     event.target.style.color = "green";
//  }

 function colorChange () {
          if (myWebpage.style.color == "green") {
        myWebpage.style.color = "white";
    } else {
        myWebpage.style.color = "green";
    };
};

// firstDiv.addEventListener("click", receberClick);
// secondDiv.addEventListener("click", receberClick);
// thirdDiv.addEventListener("click", receberClick);

//Usando o Target
// function receberClick (event) {
//     if (event.target.classList == "tech") {
//         event.target.classList.remove("tech");
//     } else {
//         event.target.classList.add("tech");
//     };
// };

firstDiv.addEventListener("click", firstReceberClick);

 function firstReceberClick() {
     if (firstDiv.classList == "tech") {
         firstDiv.classList.remove("tech");
     } else {
         thirdDiv.classList.remove("tech");
         secondDiv.classList.remove("tech");
         firstDiv.className = "tech";
     };
    

 };

 secondDiv.addEventListener("click", secondReceberClick);

 function secondReceberClick() {
     if (secondDiv.classList == "tech") {
         secondDiv.classList.remove("tech");
     } else {
         thirdDiv.classList.remove("tech");
         firstDiv.classList.remove("tech");
         secondDiv.className = "tech";
     };

 };

 thirdDiv.addEventListener("click", thirdReceberClick);

 function thirdReceberClick() {
     if (thirdDiv.classList == "tech") {
         thirdDiv.classList.remove("tech");
     } else {
         firstDiv.classList.remove("tech");
         secondDiv.classList.remove("tech");
         thirdDiv.className = "tech";
     };
 };

input.addEventListener("keyup", changeTech);
function changeTech() {
    document.querySelector(".tech").innerText = input.value;
};


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.