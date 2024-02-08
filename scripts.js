// chama meu butão
const button = document.getElementById("convert-button");

// chama meu select
const select = document.getElementById("currency-select");

// criando a função de transformar valor do real em valor em dolar
const convertValues = async () => {

  const inputReais = document.getElementById("input-real").value; // Chamei o input pelo id ('input-real') e declarei que quero só o valor digitado (value)
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("dolar-value-text");

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  
  // cria meus valores de dolar e euro
  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high

  console.log(data);

  // realValueText.innerHTML = inputReais; formatando a moeda para real
  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  // dolarValueText.innerHTML = inputReais / dolar  transformar o valor digitado pelo valor da moeda desejada

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
};

// criando a função da mudança da moeda Dolar para a moeda Euro
changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  // trocar as bandeiras e moedas
  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "/assets/estados-unidos .png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/Euro.png";
  }
  convertValues()
};

button.addEventListener("click", convertValues); // quando o button for clicado chama a função
select.addEventListener("change", changeCurrency); // quando trocar a moeda dolar para euro chama a função
