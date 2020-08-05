'use strict';

function saveUserPrefToStorage(key,val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

function loadUserPrefToStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}

function getRandInt(min = 0, max = 2){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
