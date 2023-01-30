const divContainer = document.querySelector(".container");
const searchButton = document.getElementById("button-addon2");
const searchArea = document.getElementById("search-input");
const cardContainer = document.querySelector(".cardContainer");
let cityList = [];

window.onload = function () {
  document.getElementById("search-input").focus(); //* Focus the text area
};
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  var city = searchArea.value;
  city = city.toUpperCase();
  console.log(city);
  if (cityList.includes(city)) {
    alert(
      "You already know the weather for " +
        city +
        ". Please search another city"
    );
  } else if (city == "") {
    alert("Please enter a valid city name.");
  } else {
    try{
      const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
        headers: { "X-Api-Key": "T6z75Z3C2s59SY6cTC1j7QKoIl6rKMcZbpAuPALQ" },
      })
       
    }



    
      .then((response) => response.json())
      .then((data) => {
        //! veri gelirse çalışacak kısım
        console.log(data);
        cityList.push(city);
        const newCard = document.createElement("div");
        newCard.classList.add(
          "cards",
          "col-3",
          "bg-light",
          "rounded-5",
          "p-4",
          "shadow-lg"
        );
        if (cardContainer.firstChild) {
          cardContainer.insertBefore(newCard, cardContainer.firstChild);
        } else {
          cardContainer.append(newCard);
        } //! Buraya kadar cart ekleme
        const temp = data.temp; //! Veri işleme burada başlar
        const maxTemp = data.max_temp;
        const minTemp = data.min_temp;
        const humidity = data.humidity;
        newCard.innerHTML =
          "<h2 class='h5 pt-4 text-warning'>" +
          city +
          "<br>" +
          "<span class='h1'>" +
          temp +
          "°C" +
          "</span>" +
          "</h2><hr><h2 class='h5 pt-1 text-warning'>min/max " +
          "<br>" +
          minTemp +
          "/" +
          maxTemp +
          " °C" +
          "</h2><hr><h2 class='h5 pt-1 text-warning'>Humidity: " +
          humidity +
          "%</h2>";
      })
      .catch((error) => {
        console.log(error.name);
        console.log(error.message);
        console.log("selam");
      });
  }
  searchArea.value = "";
});

//! Proje Nasıl Geliştirilebilir?
//* Try-Catch yapısı ile hata yakalama. OK
//* Veri gelmediğinde Kart açılmaması için düzenleme. OK
//* En son aranan şehri ilk başa tutturma. OK
//* İlk açılışta input focus. OK
//* Arama sonrası input reset. OK
//* Kartlara hava durmuna uygun iconlar yerleştir
