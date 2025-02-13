let weather = {
  //api key
  apiKey: "756053e632227770ce1ffaa8ec3e8bf0",

  //fetch
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey
         )
      .then((response)=>{
        if(!response.ok){
          alert("No weather")
          throw new Error("No weather");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  //display weather
  displayWeather: function (data) {
    var { name } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="images/weather" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
   
  },
  //get weather from API provider
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Athlone");

