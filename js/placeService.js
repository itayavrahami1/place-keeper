'use strict';

const USER_KEY = 'user'

var gHoroscope = ['cancer', 'leo', 'taurus'];
// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });
// }

function getUser() {
    var user = loadUserPrefToStorage(USER_KEY);
    if (!user) return;

    return user;
}


function getZodiac() {
    return gHoroscope[getRandInt()];
}