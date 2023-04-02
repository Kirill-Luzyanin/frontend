const urlLocation = "https://get.geojs.io/v1/ip/geo.json";

const btnLocation = document.querySelector("#btn-geo");
const btnWeather = document.querySelector("#btn-weather");

const output1 = document.getElementById("resultgeo");
const output2 = document.getElementById("resultweather");


async function getLocation() {

    // 1 получение HTTP пакета 
    const response = await fetch(urlLocation);
    //console.log(response.status);

    // 2 Получаем объект из JSON
    const data = await response.json();
    //console.log(data);

    const res = {};
    res["city"] = data.city;
    res["latitude"] = data.latitude;
    res["longitude"] = data.longitude;
    //res.city = data.city;
    //res.latitude = data.latitude;
    //res.longitude = data.longitude;
    
    //res["city"]=output1;
    //data.city=output1;
    //console.log(output1);

    console.log(res);
    return res;

}

document.getElementById("resultgeo")=await getLocation().city;

function getWeatherByCode(code){
    switch(code){
        case 0: return "Clear sky";
        case 61: return "Rain, Slight, moderate and heavy intensity";
    }

}

async function getMetio(){
    const location = await getLocation();

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

    const response = await fetch(url);
    const weather = await response.json();
    const current_weather = weather.current_weather;
    
    const weatherData = {};
    weatherData["temperature"] = current_weather.temperature;
    weatherData["windspeed"] = current_weather.windspeed;
    weatherData["weathercode"] = current_weather.weathercode;

    console.log("Данные температуры");
    console.log(weatherData);
    console.log("Температура в " + location.city + " " + weatherData.temperature + " градусов");
    console.log("Описание " + getWeatherByCode(weatherData.weathercode));
    console.log("Ветер " + weatherData.windspeed + " метров в секудну");

}


btnLocation.addEventListener("click", getLocation);

btnWeather.addEventListener("click", getMetio);



/*
const promiseRes = getLocation();
promiseRes.then((data)=>{
    console.log(data);
});

const promiseMetio = getMetio();
promiseRes.then((data)=>{
    console.log(data);
});
*/
