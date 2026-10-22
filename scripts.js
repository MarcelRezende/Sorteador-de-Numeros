const buttonNoRepeat = document.getElementById('norepeat');
const quantityInput = document.getElementById('number');
const minInput = document.getElementById('number1');
const maxInput = document.getElementById('number2');
const drawButton = document.getElementById('draw-button')
const resultsSection = document.getElementById('number-choiced');
const sortNumbers = document.querySelector('.sort-numbers');
const randomizeSection = document.querySelector('.randomize-section');
const drawAgainButton = document.getElementById('draw-again')



console.log(buttonNoRepeat.checked);
console.log(Math.random());


buttonNoRepeat.addEventListener('change', () => {

if(buttonNoRepeat.checked) {
  console.log("O usuário ATIVOU o botão. Não vamos repetir números.")
} else {
  console.log("O usuário DESATIVOU o botão. Vamos repetir números.")
}
});

function animateNumbers(finalNumbers) {
  sortNumbers.innerHTML = "";

  finalNumbers.forEach(() => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "00";
    sortNumbers.appendChild(paragraph);
  });

  const numberElements = sortNumbers.querySelectorAll("p");

  const animation = setInterval(() => {
    numberElements.forEach((element) => {
        element.textContent = Math.floor(Math.random() * 100);
    });
}, 80);

setTimeout(() => {
    clearInterval(animation);
    
  numberElements.forEach((element, index) => {
        element.textContent = finalNumbers[index];
    });


}, 2000);

}




drawButton.addEventListener("click", () => {
console.log("Quantidade:", quantityInput.value);
console.log("Mínimo:", minInput.value);
console.log("Máximo:", maxInput.value);

const quantity = Number(quantityInput.value);
const minimum = Number(minInput.value);
const maximum = Number(maxInput.value);


if (
!Number.isInteger(quantity) || 
!Number.isInteger(minimum) || 
!Number.isInteger(maximum) ||
  quantity <= 0 ||
   minimum > maximum
  ) {
    alert("Confira se os números foram informados corretamente. Utilize apenas números inteiros acima ou igual a 0.");
    return;
}


const totalAvailable = maximum - minimum +1;


console.log("Números disponíveis: ", totalAvailable);

if(buttonNoRepeat.checked && quantity > totalAvailable) {
  alert("Não há numeros suficientes no intervalo.");
  return;
}

console.log(typeof quantity, quantity);

const numbers = [];

for (let i = 0; i < quantity; i++) {
let randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


while (buttonNoRepeat.checked && numbers.includes(randomNumber)) {
  randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

numbers.push(randomNumber);
console.log("Sorteio número: ", i + 1);

}

console.log("Todos os números: ", numbers)

sortNumbers.innerHTML = "";

numbers.forEach((number) => {
  sortNumbers.innerHTML += `<p>${number}</p>`;
});

resultsSection.style.display = "block";
randomizeSection.style.display = "none";
});

drawAgainButton.addEventListener("click", () => {
  resultsSection.style.display = "none";
  randomizeSection.style.display = "block"; 
})









