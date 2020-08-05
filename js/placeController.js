'use strict';

$(document).ready(init())

function init(){
    var user = getUser();

    if (user){
        renderHoroscope();
        $('body').css("background-color", user.bcgColor);
        $('body').css("color", user.txtColor);
        var strGreetHTML = `${user.name}, Welcom To Your Places`;
        $('h1').text(strGreetHTML)
    }
}

function renderHoroscope(){
    var zodiac = getZodiac();
    var strHTML = `<img class="horoscope-img" src="img/${zodiac}.jpg" alt="">`
    var elImgSection = document.querySelector('.horoscope');
    elImgSection.innerHTML = strHTML;
}