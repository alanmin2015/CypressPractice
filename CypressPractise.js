window.onload = function () {
	"use strict";
    var formHandle = document.forms.formLog;
    formHandle.onsubmit = checkForm;
    function checkForm() {
        var name = formHandle.login__Name;
        var pwd = formHandle.login__Pwd;

        var outName = document.getElementsByClassName("outMessage__Name");
        var outPwd = document.getElementsByClassName("outMessage__Pwd");
        var outMessage = document.getElementsByClassName("outMessage");

        outName[0].innerHTML = "User Name: " + name.value;
        outPwd[0].innerHTML = "Password: " + pwd.value;

        if (name.value === "") {
            name.classList.add("style");
            name.focus();
            return false;
        }

        if (pwd.value === "") {
            pwd.classList.add("style");
            pwd.focus();
            return false;

        }

        outMessage[0].style.display = "block";

        return false;

    }
};