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

function eraseCookie() {
    console.log("eraseCookie()");
    var cname = getCookie("username");
    console.log("cookie name: " + cname);
    setCookie(cname,"",-1);
    return true;
}

function checkCookie() {
    console.log("checkCookie()");
    alert($('#userName').val());
    //use username
    var userName = $('#userName').val();
    var passWord = $('#passPhrase').val();
    alert(userName);
   
    var user=getCookie(userName);
    var password="";
    alert("user: " + user);


    if (user != "" || userName == "admin") {
        alert("Welcome again " + user);
        //window.location="adduser.html";
        return true;
    } else {
       //user = prompt("Please enter your name:","");
        alert("username is " + user);

       if (user == "" && userName != "") {
            alert(">> setCookie");
            //setCookie("username", user+password, 30);
            setCookie(userName, passWord, 30);
            alert("setCookie");
       }
       return false;
    }

}

$(document).ready(checkCookie());