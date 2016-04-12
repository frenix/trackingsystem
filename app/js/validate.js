
 // regular expression to match only characters and spaces
var reg = /^[a-zA-Z ]+$/;

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
      form.lName.focus();
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

/*****************************************************************/
/* 
 * Check if input fields are empty for AddDeposit page 
 */
function validateDepositEmptyInput(form) 
{
  if(form.empName.value =="") {
        alert("Error: Input cannot be empty!");
        form.empName.focus();
        return false;
  } 

  if(form.voucherNum.value =="") {
    alert("Error: Input cannot be empty!");
    form.voucherNum.focus();
    return false;
  } 

  if(form.Description.value =="") {
    alert("Error: Input cannot be empty!");
    form.Description.focus();
    return false;
  } 

  if(form.Amount.value =="") {
    alert("Error: Input cannot be empty!");
    form.Amount.focus();
    return false;
  } 

  if(form.depositDate.value =="") {
    alert("Error: Input cannot be empty!");
    form.depositDate.focus();
    return false;
  } 
  if(form.BankAcct.value =="") {
    alert("Error: Input cannot be empty!");
    form.BankAcct.focus();
    return false;
  } 
    
  // no empty strings
  return true;
}

/*
 * Validates input fields for AddDeposit page
 */
  function checkDepositForm(form) 
  {
    console.log("checkDepositForm");
     //check empty fields
    if (validateUserEmptyInput(form) == false) {
        return false;
    }
     // validation fails if the input doesn't match our regular expression
    if(!reg.test(form.empName.value)) {
      alert("Error: Please input characters only!");
      form.empName.focus();
      return false;
    }
    if(!reg.test(form.voucherNum.value)) {
      alert("Error: Please input characters only!");
      form.voucherNum.focus();
      return false;
    }
    if(!reg.test(form.Description.value)) {
      alert("Error: Please input characters only!");
      form.Description.focus();
      return false;
    }
    if(!reg.test(form.Amount.value)) {
      alert("Error: Please input characters only!");
      form.Amount.focus();
      return false;
    }
    if(!reg.test(form.depositDate.value)) {
      alert("Error: Please input characters only!");
      form.depositDate.focus();
      return false;
    }
    if(!reg.test(form.BankAcct.value)) {
      alert("Error: Please input characters only!");
      form.BankAcct.focus();
      return false;
    }

    // validation was successful
    return true;
  }