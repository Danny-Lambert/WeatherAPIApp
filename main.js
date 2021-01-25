console.log("working");



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

