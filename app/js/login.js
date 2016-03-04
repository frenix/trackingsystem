function setCookie(cname,cvalue,exdays) {

    console.log("<< setCookie");
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;

        console.log("cookie name: " +  cname+"="+cvalue+"; "+expires);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    console.log("checkCookie()");


    var user=getCookie("username");
    var password="";
    console.log("user: " + user);

    if (user != "") {
        alert("Welcome again " + user);
    } else {
       //user = prompt("Please enter your name:","");
       console.log("Enter username");
        user = $("#userName").val();

        console.log("username is " + user);

       if (user != "" && user != null && user=="qwer") {
            console.log(">> setCookie");
           setCookie("username", user+password, 30);
       }
    }
}

$(document).ready(checkCookie());