"use strict"
const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const speed = document.querySelector('.speed');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');
const icon= document.querySelector('#wicon')
const box= document.querySelector('main');


button.addEventListener('click', weather);
async function weather() {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=9bd200a599d1cd115440b9b41e57c07a')
	.then(response => response.json())
	.then(data => {
	let tempValue = Math.round(data.main.temp -273.15);
  	let nameValue = (data.name);
  	let descValue = (data.weather[0].description);
  	let iconCode = (data.weather[0].icon);
  	let windSpeed = Math.round(data.wind.speed);

 	main.innerHTML = nameValue;
  	desc.innerHTML = "Weather : "+descValue;
  	temp.innerHTML = "Temp : "+tempValue+ "&#176;C";
  	speed.innerHTML = "Wind Speed : " +windSpeed+ "M/s";
	icon.src='/icons/'+iconCode+'.png';  
  	input.value ="";
	  console.log(data)
	  console.log(tempValue);
	  console.log(data.weather[0].description)
	  console.log(data.weather[0].icon)
	  
  	if (tempValue <= 5) {
		  box.setAttribute("style", "background-image: url('https://media.giphy.com/media/bPDzcb6OADZ9m/giphy.gif')");
		} else 
		if (tempValue <= 10) {
			box.setAttribute("style", "background-image: url('https://media.giphy.com/media/9pffrT1fatfOg/giphy.gif')");
		} else 
		if  (tempValue <= 15) {
			box.setAttribute("style", "background-image: url('https://media.giphy.com/media/nWF3AYzIGCrg4/giphy.gif')");
		} else
		 if(tempValue <= 20) {
			box.setAttribute("style", "background-image: url('https://media.giphy.com/media/l0Iy2x1FicLn45JGE/giphy.gif')");
		} else
		 if (tempValue <= 30) {
			box.setAttribute("style", "background-image: url('https://media.giphy.com/media/12G7BxUHSMM2TC/giphy.gif')");
		} else
		 if (tempValue <= 42) {
			box.setAttribute("style", "background-image: url('https://media.giphy.com/media/l41Ysfch1nhX392b6/giphy.gif')");
		}
	})

.catch(err => alert("UH OH!! wrong name!"));

}
