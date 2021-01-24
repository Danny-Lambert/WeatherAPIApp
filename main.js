console.log("working");

fetch("http://api.openweathermap.org/data/2.5/weather?q=Leeds&appid=bc52d396a55ab51ee55d98516702facc&units=metric")
    .then((response) => {
        return response.json()
    })
    .then ((jsonResponse) => {
        console.log(jsonResponse)
        document.querySelector(".temperature").innerHTML = jsonResponse.main.temp;
        document.querySelector(".location").innerHTML = jsonResponse.name;
        document.querySelector(".feelsLike").innerHTML = jsonResponse.main.feels_like;
        document.querySelector(".windSpeed").innerHTML = jsonResponse.wind.speed;

    })
    .catch((error) => {
        print (error)
    });



