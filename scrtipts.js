const convertButton = document.querySelector(".convert-button")
//variável criada para quando ouver um clique no botão pelo usuário//

const currencySelect = document.querySelector(".currency-select")
//variavel criada para a troca da moeda a ser convertida//

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value//valor digitado pelo usuário//
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real//
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas//



    const dolarToday = 5.20//variável criada para dar o valor ao dolar//
    const euroToday = 6.20//variável criada para dar o valor ao euro//



    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado na função dolar entre aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {
        //se o select estiver selecionado na função euro entre aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    //essa variável foi criada para quando houver uma troca de moeda pelo usuário//

    const currencyName = document.getElementById("currency-name")//essa variável foi criada para trocar o nome da moeda//
    const currencyImage = document.querySelector(".currency-img")//essa variável foi criada para trocar a imagem do país//

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        //aqui trocamos o nome da moeda para "Dólar Americano" quando o dolar estiver selecionado//

        currencyImage.src = "./assets/dollar.png"
        //aqui trocamos apenas a imagem quando o dolar estiver selecionado//
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        //aqui trocamos o nome da moeda para "Euro" quando o euro estiver selecionado//

        currencyImage.src = "./assets/euro.png"
        //aqui trocamos apenas a imagem quando o euro estiver selecionado//
    }

    convertValues()//essa função foi chamada novamente para converter os valores//

}

currencySelect.addEventListener("change", changeCurrency)//essa função foi criada para ficar de olho quando houver uma troca no select para trocar o tipo de moeda//
convertButton.addEventListener("click", convertValues)//essa função foi criada para ficar de olho quando houver um clique no meu botão de converter//

