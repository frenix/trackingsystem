function log(header, details)
{
    //alert(header + ": " + details);
}

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
    var user;
    var title = document.title;
    var userName = $('#userName').val();
    var passWord = $('#passPhrase').val();

    var currentuser = getCookie("curuser");
    log("curuser ", currentuser);
    if (currentuser != "" && currentuser != null && userName == "" && userName == null) {
        //if there is already user who successfully login
        userName = currentuser;
    }
    //use username
    log("Username", userName);
    
    user=getCookie(userName);
    var password="";
    log("user",  user);

    if (user != "" || userName == "admin") {
        alert("Welcome again " + userName);
        //set also to a currentuser cookie
        setCookie("curuser", userName, 30);
        return true;
    } else {
       if (user == "" && userName != "" && title == "Add User") {
            setCookie(userName, passWord, 30);
            alert("User successfully saved!");
       } else if (title != "Login") {
            // check if page is not Login page
            // getcookie and route to login page if cookie not found
            if(currentuser == "") {
                window.location = "login.html";
            }
       } else if (title == "Login" || title == "Home") {
            if(currentuser != "") {
                //set curuser to empty
                //imitates logout
                alert("Goodbye " + userName);
                setCookie("curuser", "", 30);
            }
       } else if ((userName !="" && passWord !="") || user =="") {
            alert("User not found!");
       }
       return false;
    }

}

$(document).ready(checkCookie());