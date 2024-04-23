// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationtitle = document.querySelector("#multiplication-title span")

const multiplicateTable = document.querySelector("#multiplication-operation");

// Funções
const creatTable = (number, multiplicatorNumber) => {
    
    multiplicateTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber;i++){

        const result = number * i;

        const template = 
        `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result"> ${result} </div>
        </div>
        `;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicateTable.appendChild(row);

        
    }
    multiplicationtitle.innerText = number;
};


// Eventos
multiplicationForm.addEventListener("submit", (e) => {
   e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    creatTable(multiplicationNumber, multiplicatorNumber);

});