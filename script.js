
const attempts = document.getElementById("attempts-left");
const progressBar = document.querySelector(".progress-bar span");
const guessInput = document.getElementById("guess-input");
const checkButton = document.getElementById("check-btn");
const feedbackMessage = document.getElementById("feedback");
const historyList = document.getElementById("history-list");
const resetButton = document.getElementById("restart-btn");


const maxAttempts = 7;
let leftAttempts = 7;
const maxNumber = 100;
const minNumber = 1;
 let randomNumber = Math.floor(Math.random() * 100) + 1;
let myNumero = 0;

let history = [];


checkButton.addEventListener("click", (e) => {
  e.preventDefault();
   myNumero = guessInput.value.trim();
  validarNumero(myNumero);
  cargarHistory()

})




function validarNumero(numero) {

    if (numero === "") {
          feedbackMessage.textContent = "El campo esta vacio";
    } else {
      numero = Number(numero)
    }  

    if (!Number.isInteger(numero)) {
      feedbackMessage.textContent = "Numeros Enteros";

      return
    }  


  if (numero > maxNumber || numero < minNumber) {
    feedbackMessage.textContent = "Introduce Un Numero dentro del 1 al 100";
    return
  } else if (!numero) {

  }


  validarIntentos()
  history.push(numero);

  if (numero > randomNumber) {
    feedbackMessage.textContent = "Mi numero Es Menor";
  } else if (numero < randomNumber) {
    feedbackMessage.textContent = "Mi numero Es Mayor";
  } else if (numero == randomNumber) {
    feedbackMessage.textContent = "Felicidades Encontraste Mi numero";
    checkButton.disabled = true;
  }


}


function validarIntentos() {
  if (leftAttempts > 0) {
    leftAttempts--

    const porcentaje = (leftAttempts / maxAttempts) * 100;
    attempts.textContent =`${leftAttempts} ${"/"} ${maxAttempts}`
    progressBar.style.width = `${porcentaje}%`;

  }

  if (leftAttempts == 0) {
    checkButton.disabled = true;
          feedbackMessage.textContent = "Mi numero Es Menor";
  }

}


function cargarHistory() {

  historyList.innerHTML = "";

  for (let number of history) {
    let listItem = document.createElement("li");
    listItem.textContent = number;
    historyList.appendChild(listItem)
  }

}

console.log(randomNumber)



resetButton.addEventListener("click", () => {
  resetInformation()
})


function resetInformation() {
  leftAttempts = 7;
  history.length = 0;
  checkButton.disabled = false;
  historyList.innerHTML = "";
  let listItem = document.createElement("li");
  listItem.textContent = "  Todavía no has intentado ningún número.";
  historyList.appendChild(listItem)
  progressBar.style.width = "100%";
  attempts.textContent = `${leftAttempts} ${"/"} ${maxAttempts}`
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber)
}
