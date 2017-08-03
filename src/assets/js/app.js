$.getJSON("http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Mexico City",function (response) {
	var data = response.results;
	console.log(data);
	// crearData(data);
});
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
			var datas = response.results;
			// var squads = JSON.parse(this.response);	
			 // crearData(datas);
		}
		
	}
};

// xhr.open("GET", "http://api.apixu.com/v1/forecast.json?key=b9a104b67a13490fae6233332170208&q=Mexico City");

// xhr.send();

 
// function crearData(datas) {
// 	var ul = document.getElementById("lista-data");
// 	var nombre= info.location.name;
// 	var temperatura= info.current.temp_c;
// 	var humedad=info.current.humidity;
// 	var viento=info.current.wind_mph;
// 	var pressure= info.current.pressure_mb;

// 	var cargarData= function(info){
// 	datas.forEach(function (data) {
// 		var li = document.createElement("li");
// 		li.textContent = data.location.name;

// 		ul.appendChild(li);
// 	});
// }


   
