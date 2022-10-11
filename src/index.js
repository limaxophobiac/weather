import "./style.css";

import i01d from "./icons/01d@2x.png";
import i01n from "./icons/01n@2x.png";
import i02d from "./icons/02d@2x.png";
import i02n from "./icons/02n@2x.png";
import i03d from "./icons/03d@2x.png";
import i03n from "./icons/03n@2x.png";
import i04d from "./icons/04d@2x.png";
import i04n from "./icons/04n@2x.png";
import i09d from "./icons/09d@2x.png";
import i09n from "./icons/09n@2x.png";
import i10d from "./icons/10d@2x.png";
import i10n from "./icons/10n@2x.png";
import i11d from "./icons/11d@2x.png";
import i11n from "./icons/11n@2x.png";
import i13d from "./icons/13d@2x.png";
import i13n from "./icons/13n@2x.png";
import i50d from "./icons/50d@2x.png";
import i50n from "./icons/50n@2x.png";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const iconMap = {i01d, i01n, i02d, i02n, i03d, i03n, i04d, i04n, i09d, i09n, i10d, i10n, i11d, i11n, i13d, i13n, i50d, i50n};

const weatherButton = document.getElementById("weatherButton");
const weatherSearch = document.getElementById("weatherSearch");

const forecastDiv = document.getElementById("forecastDiv");
const dayDisplay = document.getElementById("dayDisplay");
const detailsDiv = document.getElementById("detailsDiv");
const timeText = document.getElementById("timeText");

const humidityText = document.querySelector("#humidity .detailInfo");
const windText = document.querySelector("#wind .detailInfo");
const feelText = document.querySelector("#feel .detailInfo");
const pressureText = document.querySelector("#pressure .detailInfo");
const bigIcon = document.getElementById("bigIcon");
const iconDescription = document.getElementById("iconDescription");


let weatherArray = null;

weatherButton.addEventListener("click", searchWeather);
weatherSearch.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        searchWeather();
    }
});

async function searchWeather() {
    await getWeatherData(weatherSearch.value);
    console.log(weatherArray);
    if (weatherArray){
        updateLocation();
        updateDay(0);
        updateForecast();
    }
}

async function getWeatherData(location){
    const dailyData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=01496932e9997ddfecef9cdbf287e42d`
        ).then((data) => data.json())
        .catch((err) => console.log(err));

    const forecastData = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${dailyData.coord.lat}&lon=${dailyData.coord.lon}&APPID=01496932e9997ddfecef9cdbf287e42d`
        ).then((data) => data.json())
        .catch((err) => console.log(err));

    weatherArray = [dailyData, ...forecastData.list];
}

const updateLocation = () => document.getElementById("locationText").textContent = weatherArray[0].name;



function updateDay(weatherIndex){
    dayDisplay.style.display = "block";
    detailsDiv.style.display = "grid";
    let offset = weatherArray[0].timezone/3600;
    while (dayDisplay.hasChildNodes()) dayDisplay.removeChild(dayDisplay.lastChild);
    let day;
    if (weatherIndex == 0) day = new Date(Date(weatherArray[0].dt));
    else day = new Date(weatherArray[weatherIndex].dt_txt);

    
    let newTime;
    if (weatherIndex != 0){
        newTime = new Date(weatherArray[weatherIndex].dt_txt);
        newTime.setHours(newTime.getHours() + offset);
        day.setHours(day.getHours() + offset);
    } else {
        newTime = new Date(Date(weatherArray[0]));
        newTime.setHours(newTime.getUTCHours() + offset -24);
        day.setHours(day.getUTCHours() + offset);
    }
    day = day.getDay();
    updateDetails(weatherArray[weatherIndex], newTime);

    let startIndex, newDay;
    for (startIndex = weatherIndex; startIndex > 1; startIndex--){
        newDay = new Date(weatherArray[startIndex].dt_txt);
        newDay.setHours(newDay.getHours() + offset);
        if (day != newDay.getDay()){
            startIndex++;
            break;
        }
    }

    for (startIndex; startIndex <= 40; startIndex++){
        
        if (startIndex != 0){
            newTime = new Date(weatherArray[startIndex].dt_txt);
            newTime.setHours(newTime.getHours() + offset);
        } else {
            newTime = new Date(Date(weatherArray[0]));
            newTime.setHours(newTime.getUTCHours() + offset -24);
        }
        if (newTime.getDay() != day && weatherIndex != 0) break;
        if (weatherIndex == 0 && startIndex == 9) break;

        updateDayPeriod(weatherArray[startIndex], newTime)

    }
    dayDisplay.scrollTo(0,0);
}

function updateDayPeriod(weather, newTime){
    let weatherIcon = new Image();
    let hour = document.createElement("div");
    let tempDiv = document.createElement("div");
    weatherIcon.src = iconMap["i" + weather.weather[0].icon];
    if ((newTime.getHours())%24 >= 10) hour.textContent = (newTime.getHours())%24 + ":00";
    else hour.textContent = "0" + (newTime.getHours())%24 + ":00";
    tempDiv.textContent = Math.round((weather.main.temp -273)*10)/10 + " °C";
    hour.classList.add("hourlyDisplayTime");
    weatherIcon.classList.add("hourlyDisplayIcon");
    tempDiv.classList.add("hourlyDisplayTemp");


    let hourlyDisplay = document.createElement("div");
    hourlyDisplay.classList.add("hourlyDisplay");

    hourlyDisplay.appendChild(hour);
    hourlyDisplay.appendChild(weatherIcon);
    hourlyDisplay.appendChild(tempDiv);

    dayDisplay.appendChild(hourlyDisplay);
    hourlyDisplay.addEventListener("click", () => updateDetails(weather, newTime));
}

function updateForecast() {
    let offset = weatherArray[0].timezone/3600;
    let newDate = new Date(Date(weatherArray[0].dt));
    newDate.setHours(newDate.getUTCHours() + offset -24);
    let oldDay = newDate.getDay();
    
    updateForecastDay(forecastDiv.children[0], newDate, weatherArray[0], 0);
    
    for (let i = 1, k = 0; i < 5; i++){     
        while ((newDate.getDay() == oldDay || newDate.getHours() < 12) && k < 40){
            newDate = new Date(weatherArray[++k].dt_txt);
            newDate.setHours(newDate.getHours() + offset);
        }
        let coldest = 1000;
        for (let j = k-4; j < k+4; j++){
            if (j < 0) j = 0;
            if (j > 40) break;
            if (weatherArray[j].main.temp < coldest) coldest = weatherArray[j].main.temp;
        }
        updateForecastDay(forecastDiv.children[i], newDate, weatherArray[k], k, coldest);
        oldDay = (oldDay +1 )%7;
    }

    for (let elem of forecastDiv.children){
        elem.addEventListener("click", function(){
            updateDay(elem.timeindex);
        });
    }
}


function updateForecastDay(dayDiv, timeStamp, weather, index, coldest){
    while (dayDiv.hasChildNodes()) dayDiv.removeChild(dayDiv.lastChild);
    dayDiv.timeindex = index;
    
    let weatherIcon = new Image();
    let weekDay = document.createElement("div");
    let tempDiv = document.createElement("div");
    let coldDiv = document.createElement("div");

    weatherIcon.src = iconMap["i" + weather.weather[0].icon];
    weekDay.textContent = coldest == null ? "Now" : weekdays[timeStamp.getDay()];
    tempDiv.textContent = Math.round(10*(weather.main.temp - 273))/10 + " °C";
    if (coldest) coldDiv.textContent = Math.round((coldest -273)*10)/10 + " °C";

    dayDiv.appendChild(weekDay);
    dayDiv.appendChild(weatherIcon);
    dayDiv.appendChild(tempDiv);
    dayDiv.appendChild(coldDiv);
}

function updateDetails(weather, time){
    let timeHours = time.getHours() >= 10 ? time.getHours() : "0" + time.getHours();
    timeText.textContent =  weekdays[time.getDay()] + " " + timeHours + ":00";
    humidityText.textContent = " " + weather.main.humidity + "%";
    pressureText.textContent = " " + weather.main.pressure;
    windText.textContent = " " + weather.wind.speed + " m/s";
    feelText.textContent = " " + Math.round((weather.main.feels_like -273)*10)/10 +" °C";
    bigIcon.src = iconMap["i" + weather.weather[0].icon];
    iconDescription.textContent = weather.weather[0].description;

}