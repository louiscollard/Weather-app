"use strict";

// npm install dotenv and create .env
// require("dotenv").config();
// const apiKey = process.env.API_KEY;

const main = document.querySelector("main");
const cities = document.querySelector(".cities");
const form = document.querySelector(".form");
main.appendChild(form);
main.appendChild(cities);

const btn = document.getElementById("button");
const input = document.getElementById("input");
const p = document.querySelector("p");
const ul = document.querySelector("ul");
cities.appendChild("ul");

async function getCityWeather() {
	const city = "Liège";
	let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5`);
	let data = await response.json();

	// const {
	// 	city: { name, country },
	// 	list: {
	// 		0: {
	// 			main: { temp },
	// 		},
	// 		1: {
	// 			main: { temp2 },
	// 		},
	// 		2: {
	// 			main: { temp3 },
	// 		},
	// 		3: {
	// 			main: { temp4 },
	// 		},
	// 		4: {
	// 			main: { temp5 },
	// 		},
	// 	},
	// } = data;
}
getCityWeather();
