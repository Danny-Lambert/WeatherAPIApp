console.log("working");

const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
// const name = document.querySelector('.name');
// const desc = document.querySelector('.desc');
// const temperatureAPI = document.querySelector('.temperatureAPI');


button.addEventListener('click', function(){
fetch("http://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=368552d4a7380198ebe4799c1cb1a179&units=metric")
.then((response) => {

    return response.json()
})
.then ((jsonResponse) => {
            console.log(jsonResponse)

    document.querySelector(".temperatureAPI").innerHTML = jsonResponse.main.temp;
    document.querySelector(".locationAPI").innerHTML = jsonResponse.name;
    // weather.iconId = jsonResponse.weather[0].icon;    
    document.querySelector(".icon").innerHTML = jsonResponse.weather[0].icon;

    // <img src='http://openweathermap.org/img/wn/"+jsonResponse.weather[0].icon+".png' class="icon"></img>;
    document.querySelector(".feelsLikeAPI").innerHTML = jsonResponse.main.feels_like;
    // document.querySelector(".windSpeedAPI").innerHTML = jsonResponse.wind.speed;
})
    

        .catch(err => alert("Incorrect city entered")) 
})