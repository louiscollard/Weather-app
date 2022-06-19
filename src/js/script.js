"use strict";

// npm install dotenv and create .env
// require("dotenv").config();
// const apiKey = process.env.API_KEY;

const btnSubmit = document.getElementById("button");

const getDay = (dayIndex) => {
	let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysArray[dayIndex];
};

btnSubmit.addEventListener("click", () => {
	const inputCity = document.getElementById("city").value;
	async function getCityWeather() {
		let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric&cnt=5`);
		let data = await response.json();
		console.log(data);
		console.log(getDay(data.list[0].dt_txt));
		const cityDisplay = document.querySelector(".city");
		const countryDisplay = document.querySelector(".country");
		const day0neTempDisplay = document.querySelector(".day-one-temp");
		const day0neSkyDisplay = document.querySelector(".day-one-sky");
		const dayTwoTempDisplay = document.querySelector(".day-two-temp");
		const dayTwoSkyDisplay = document.querySelector(".day-two-sky");
		const dayThreeTempDisplay = document.querySelector(".day-three-temp");
		const dayThreeSkyDisplay = document.querySelector(".day-three-sky");
		const dayFourTempDisplay = document.querySelector(".day-four-temp");
		const dayFourSkyDisplay = document.querySelector(".day-four-sky");
		const dayFiveTempDisplay = document.querySelector(".day-five-temp");
		const dayFiveSkyDisplay = document.querySelector(".day-five-sky");
		cityDisplay.textContent = data.city.name;
		countryDisplay.textContent = data.city.country;
		day0neTempDisplay.textContent = data.list[0].main.temp;
		day0neSkyDisplay.textContent = data.list[0].weather[0].main;
		dayTwoTempDisplay.textContent = data.list[1].main.temp;
		dayTwoSkyDisplay.textContent = data.list[1].weather[0].main;
		dayThreeTempDisplay.textContent = data.list[2].main.temp;
		dayThreeSkyDisplay.textContent = data.list[2].weather[0].main;
		dayFourTempDisplay.textContent = data.list[3].main.temp;
		dayFourSkyDisplay.textContent = data.list[3].weather[0].main;
		dayFiveTempDisplay.textContent = data.list[4].main.temp;
		dayFiveSkyDisplay.textContent = data.list[4].weather[0].main;
	}
	getCityWeather();
});
