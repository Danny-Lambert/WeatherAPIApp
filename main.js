console.log("working");



fetch("http://api.openweathermap.org/data/2.5/weather?q=Leeds&appid=bc52d396a55ab51ee55d98516702facc&units=metric")
.then((response) => {
    return response.json()
})
.then ((jsonResponse) => {
    console.log(jsonResponse)
    document.querySelector(".temperatureAPI").innerHTML = jsonResponse.main.temp;
    document.querySelector(".locationAPI").innerHTML = jsonResponse.name;
    document.querySelector(".feelsLikeAPI").innerHTML = jsonResponse.main.feels_like;
    document.querySelector(".windSpeedAPI").innerHTML = jsonResponse.wind.speed;
    
    })
    .catch((error) => {
        print (error)
    });
    
    fetch("http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=bc52d396a55ab51ee55d98516702facc&units=metric")
    .then((response) => {
        return response.json()
    })
    .then ((jsonResponse) => {
        console.log(jsonResponse)
        document.querySelector(".BarcatemperatureAPI").innerHTML = jsonResponse.main.temp;
        document.querySelector(".BarcalocationAPI").innerHTML = jsonResponse.name;
        document.querySelector(".BarcafeelsLikeAPI").innerHTML = jsonResponse.main.feels_like;
        document.querySelector(".BarcawindSpeedAPI").innerHTML = jsonResponse.wind.speed;

    })
