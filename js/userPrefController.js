'use strict';

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function onSubmitUserRef(ev) {
    
    ev.preventDefault()

    var name = $('#name').val();
    var age = $('#age').val();
    var email = $('#email').val();
    var dob = $('#dob').val();
    var txtColor = $('#txt-color').val();
    var bcgColor = $('#bcg-color').val();
    
    createUser(name,age,email,dob,bcgColor,txtColor)
}
