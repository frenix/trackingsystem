// regular expression to match only characters and spaces
var reg = /^[a-zA-Z ]+$/;
// regular expression to match only alphanumeric characters and spaces
var regalphanum = /^[\w ]+$/;
// regular expression to match only numbers
var regnum =  /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;

/* 
 * Check if input fields are empty for AddUser page 
 */
function validateUserEmptyInput(form) 
{
  console.log("validateEmptyInput");

	if(form.fName.value =="") {
        alert("Error: Input cannot be empty!");
        form.fName.focus();
        return false;
    }

    if(form.mInitial.value =="") {
        alert("Error: Input cannot be empty!");
        form.mInitial.focus();
        return false;
    }

    if(form.lName.value =="") {
        alert("Error: Input cannot be empty!");
        form.lName.focus();
        return false;
    }

    if(form.userName.value =="") {
        alert("Error: Input cannot be empty!");
        form.userName.focus();
        return false;
    }

    if(form.passPhrase.value =="") {
        alert("Error: Input cannot be empty!");
        form.passPhrase.focus();
        return false;
    }

    // no empty strings
    return true;
}

/*
 * Validates input fields for AddUser page
 */
function checkUserForm(form)
  {
    console.log("checkuserForm");
    //check empty fields
    if (validateUserEmptyInput(form) == false) {
        return false;
    }
   

    // validation fails if the input doesn't match our regular expression
    if(!reg.test(form.fName.value)) {
      alert("Error: Please input characters only!");
      form.fName.focus();
      return false;
    }

    if(!reg.test(form.mInitial.value)) {
      alert("Error: Please input characters only!");
      form.mInitial.focus();
      return false;
    }
    if(!reg.test(form.lName.value)) {
      alert("Error: Please input characters only!");
      form.lName.focus();
      return false;
    }

    if(!reg.test(form.userName.value)) {
      alert("Error: Please input characters only!");
      form.userName.focus();
      return false;
    }

    if(form.passPhrase.value.length < 6) {
      alert("Error: Please input more than 6 characters!");
      form.passPhrase.focus();
      return false;   
    }
    // regular expression to match only alphanumeric characters for password
    var passreg = /^[\w]+$/;
    if(!passreg.test(form.passPhrase.value)) {
      alert("Error: Please input alphanumeric characters without spaces!");
      form.passPhrase.focus();
      return false;
    }

    // validation was successful
    return true;
  }

function Insert(form) 
{
    console.log("Insert!");

    //get data from adduser.html 
    if (checkUserForm(form) == false) {
      console.log("Insert->FALSE!");
      return false;
    }

    var empNo = form.empNo.value;
    var fName = form.fName.value;
    var mInitial = form.mInitial.value;
    var lName = form.lName.value;
    var userName = form.userName.value;
    var passPhrase = form.passPhrase.value;
/*
    console.log(empNo);
    console.log(fName);
    console.log(mInitial);
    console.log(lName);
    console.log(userName);
    console.log(passPhrase);
*/
    $.ajax({ /* THEN THE AJAX CALL */
            type: "POST", /* TYPE OF METHOD TO USE TO PASS THE DATA */
            url: "bll/employee.php", /* PAGE WHERE WE WILL PASS THE DATA */
            data: {
              empNo: empNo,
              fName: fName,
              mInitial: mInitial,
              lName: lName,
              userName: userName,
              passPhrase: passPhrase
            }, /* THE DATA WE WILL BE PASSING */
            success: function(result){ /* GET THE TO BE RETURNED DATA */
               alert(result);
            },
             error: function(jqXHR, exception){
               alert("An error occured while processing this request!");
            }

      });

    return true;
};

