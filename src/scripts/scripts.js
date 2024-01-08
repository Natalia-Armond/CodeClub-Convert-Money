// Seleciona o botão de conversão e o menu suspenso de moedas
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

// Função para converter os valores e atualizar a exibição
function covertValues() {
  // Obtém o valor inicial da entrada, o elemento de exibição do valor a converter e o elemento de exibição do valor convertido
  const inputInitialValue = document.querySelector(".input-initial-value").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  console.log(currencySelect.value); // Exibe o valor da moeda selecionada no console

  // Taxas de conversão de moeda
  const dolarToDay = 5.05
  const euroToDay = 6.35
  const bitcoinToDay = 14000; // Taxa de conversão do Bitcoin (exemplo)
  const libraToDay = 6.14; // Taxa de conversão da Libra Esterlina (exemplo)

  // Verifica qual moeda foi selecionada e atualiza a exibição de acordo com a taxa de conversão
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputInitialValue / dolarToDay)
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputInitialValue / euroToDay)
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputInitialValue / bitcoinToDay);
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputInitialValue / libraToDay);
  }

  // Atualiza a exibição do valor a ser convertido
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputInitialValue)
}

// Função para atualizar o nome e a imagem da moeda selecionada
function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./src/assets/estados-unidos.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./src/assets/Euro.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./src/assets/Biticon.png";
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./src/assets/Libra.png";
  }


  // Chama a função de conversão para atualizar os valores
  covertValues()
}

// Adiciona um ouvinte de evento para detectar alterações no menu suspenso de moedas
currencySelect.addEventListener("change", changeCurrency)

// Adiciona um ouvinte de evento para detectar o clique no botão de conversão
convertButton.addEventListener("click", covertValues)
