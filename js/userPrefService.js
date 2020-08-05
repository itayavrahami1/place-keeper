'use strict';

//TODO save and load pref

function createUser(name,age,email,dob,bcgColor,txtColor) {

    var userPref = {
        name,
        age,
        email,
        dob,
        bcgColor,
        txtColor
    }

    saveUserPrefToStorage(USER_KEY,userPref)
}