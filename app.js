const divContainer = document.querySelector(".container");
const searchButton = document.getElementById("button-addon2");
const searchArea = document.getElementById("search-input");
const cardContainer = document.querySelector(".cardContainer");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
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
  var city = searchArea.value;

  fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: { "X-Api-Key": "T6z75Z3C2s59SY6cTC1j7QKoIl6rKMcZbpAuPALQ" },
  })
    .then((response) => response.json())
    .then((data) => {
      const temp = data.temp;
      const maxTemp = data.max_temp;
      console.log(temp);
      newCard.innerHTML =
        "<h2 class='h5 pt-5 text-warning'>" + city.toUpperCase() + "<br>" + "<span class='h1'>" + temp + "°C" + "</span>" + "</h2>";
    })
    .catch((error) => console.log(error));
});
