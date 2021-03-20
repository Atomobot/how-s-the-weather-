"use strict"


//const url  = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&APPID=9bd200a599d1cd115440b9b41e57c07a';



/*
$.ajax ({
	//url : url,
	success: function (result){
		console.log(result);
		console.log(result.name);
		//output location
		let displayCity = `Current weather in ${result.name}`
		$("#location").html(displayCity);
		//output temp
		let C = Math.round(result.main.temp -273.15);
		//let Celsius = C.toString();
		let displayTemp = `Temperature: ${C}&#176;C`;
		$("#temperature").html(displayTemp);
		//output wind speed
		let windSpeed = Math.round(result.wind.speed)
		let Ms = `Wind Speed: ${windSpeed} M/s`;
		$("#wind-speed").html(Ms);
		//output sky condition
		let skyCondition = `The sky condition ${result.weather[0].description}`
		$("#sky").html(skyCondition);
	}
})
	})
})*/
const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const speed = document.querySelector('.speed');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=9bd200a599d1cd115440b9b41e57c07a')
.then(response => response.json())
.then(data => {
  let tempValue = Math.round(data.main.temp -273.15);
  let nameValue = (data.name);
  let descValue = (data.weather[0].description);
  let windSpeed = Math.round(data.wind.speed);

  main.innerHTML = nameValue;
  desc.innerHTML = "Sky Description : "+descValue;
  temp.innerHTML = "Temp : "+tempValue+ "&#176;C";
  speed.innerHTML = "Wind Speed : " +windSpeed+ "M/s";
  input.value ="";

})

.catch(err => alert("OOP's wrong name!"));
})
