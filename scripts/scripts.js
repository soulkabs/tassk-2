function changeWeather(id) {
	var bedWeather = document.getElementsByClassName('bedWeather');
	var goodWeather = document.getElementsByClassName('goodWeather');
	var checkBox = document.getElementsByClassName("switch-btn");
	var weatherName = document.getElementsByClassName("weather__name");
	var img = document.getElementsByTagName('img');
	var weather = ['wind','rain','snow','blizzard','hail','ice','frost'];
	var index = weather.indexOf(id);

    if (checkBox[index].classList.contains('switch-on::after')){
        checkBox[index].classList.remove('switch-on::after');
        checkBox[index].classList.remove('switch-on');
        checkBox[index].classList.add('switch-btn::after');   
        weatherName[index].style.backgroundColor = "#7c7c7c";
        img[index*2+1].style.top = "-70px";
        img[index*2+1].style.position = "relative";
    }else if (checkBox[index].classList.contains('switch-btn')) {
        checkBox[index].classList.add('switch-on::after');
        checkBox[index].classList.add('switch-on');
        weatherName[index].style.backgroundColor = "#7c002f";
        img[index*2+1].style.top = "0px";
        img[index*2+1].style.position = "relative";
    }

	if (goodWeather[index*2].style.display === "none") {
		bedWeather[index*2].style.display = "none";
		bedWeather[index*2+1].style.display = "none";
		goodWeather[index*2].style.display = "block";
		goodWeather[index*2+1].style.display = "block";
	 }else {
		bedWeather[index*2].style.display = "block";
		bedWeather[index*2+1].style.display = "block";
		goodWeather[index*2].style.display = "none";
		goodWeather[index*2+1].style.display = "none";
	}	
}