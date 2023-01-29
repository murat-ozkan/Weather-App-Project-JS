const divContainer = document.querySelector(".container");
const searchButton = document.getElementById("button-addon2");
const searchArea = document.getElementById("search-input");
const cardContainer = document.querySelector(".cardContainer");
let cityList = [];
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  var city = searchArea.value;
  if (cityList.includes(city)) {
    alert(
      "You already know the weather for " +
        city +
        ". Please search another city"
    );
  } else {
    cityList.push(city);
    const newCard = document.createElement("div");
    newCard.classList.add(
      "cards",
      "col-2",
      "bg-warning-subtle",
      "border",
      "rounded-pill",
      "text=bobo"
    );
    cardContainer.append(newCard);

    fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      headers: { "X-Api-Key": "T6z75Z3C2s59SY6cTC1j7QKoIl6rKMcZbpAuPALQ" },
    })
      .then((response) => response.json())
      .then((data) => {
        const temp = data.temp;
        const maxTemp = data.max_temp;
        const minTemp = data.min_temp;
        const humidity = data.humidity;
        console.log(data);
        newCard.innerHTML =
          "<h2 class='h5 pt-4 text-warning'>" +
          city.toUpperCase() +
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
      .catch((error) => console.log(error));
  }
});

//! Proje Nasıl Geliştirilebilir?
//* Try-Catch yapısı ile hata yakalama.
//* Veri gelmediğinde Kart açılmaması için düzenleme.
//* En son aranan şehri ilk başa tutturma.
//* İlk açılışta input focus.
//* Arama sonrası input reset.
//* Kartlara hava durmuna uygun iconlar yerleştir