document.addEventListener("DOMContentLoaded", function () {
  const apikey = "8632cf357e6093d9a4df19a4b";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

  const searchbox = document.querySelector(".search input");
  const searchbtn = document.querySelector(".search button");
  const weathericon = document.querySelector(".weather-icon");

  async function checkweather(city) {
    const response = await fetch(url + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed = "km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "Drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "Mist.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "clear.png";
    }

    document.querySelector(".weather").style.display = "block";
  }

  searchbtn.addEventListener("click", () => {
    console.log("Button was pressed");
    document.querySelector(".weather").style.display = "block";
    checkweather(searchbox.value.trim());
  });
});
