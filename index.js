// let todayEle = document.querySelector('.today')
let getValue = document.getElementById('cityName')
let search = document.getElementById('search')
let tempEle = document.getElementById('temp')
let locationEle = document.getElementById('location')
let weatherDescEle = document.getElementById('weather_des')
let maxTempEle = document.getElementById('maxTemp')
let windEle = document.getElementById('wind')
let apiKey = `appid=8a84178714ffdc2e33c6ddeb3120067c`
let apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&`


// Start Weather Set Using Weather APIs
weatherFound('Sherpur')

search.addEventListener('click',function(e){
    weatherFound(getValue.value)
})
getValue.addEventListener('change',function(e){
    weatherFound(e.target.value)
})


async function weatherFound(value){

       let fatchURL =await fetch(`${apiURL}q=${value ? value : 'sherpur'}&${apiKey}`)
       let data = fatchURL.json();
       data.then(async (data)=>{
           let name = await data.name;
           let temp = await data.main.temp;
           let max_temp = await data.main.temp_max;
           let wind = await data.wind.speed;
           let desc = await data.weather[0].description;
           console.log(data)
           tempEle.innerText = temp;
           locationEle.innerText = name;
           weatherDescEle.innerText = desc;
           maxTempEle.innerHTML = `${max_temp} <span>Max Temp</span>`;
           windEle.innerHTML = `${wind} <span>Wind Speed</span>`;
       })

}