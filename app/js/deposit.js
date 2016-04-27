// regular expression to match only characters and spaces
var reg = /^[a-zA-Z ]+$/;
// regular expression to match only alphanumeric characters and spaces
var regalphanum = /^[\w ]+$/;
// regular expression to match only numbers
var regnum =  /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;

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

  if(form.Description.value.trim() =="") {
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
    if (validateDepositEmptyInput(form) == false) {
        return false;
    }
     // validation fails if the input doesn't match our regular expression
    if(!reg.test(form.empName.value)) {
      alert("Error: Please input characters only!");
      form.empName.focus();
      return false;
    }
  /*  if(!regalphanum.test(form.voucherNum.value)) {
      alert("Error: Please input characters only!");
      form.voucherNum.focus();
      return false;
    }*/

    if(!regnum.test(form.Amount.value)) {
      alert("Error: Please input characters only!");
      form.Amount.focus();
      return false;
    }

    if(!regalphanum.test(form.Description.value.trim())) {
      alert("Error: Please input alphanumeric characters only!");
      form.Description.focus();
      return false;
    }


    if(!regnum.test(form.BankAcct.value)) {
      alert("Error: Please input characters only!");
      form.BankAcct.focus();
      return false;
    }

    // validation was successful
    return true;
  }

function Insert(form) 
{
    console.log("Insert!");

    //get data from adduser.html 
    if (checkDepositForm(form) == false) {
      console.log("Insert->FALSE!");
      return false;
    }


    var empName = form.empName.value;
    var voucherNum = form.voucherNum.value;
    var Description = form.Description.value;
    var Amount = form.Amount.value;
    var depositDate = form.depositDate.value;
    var BankAcct = form.BankAcct.value;

    console.log(empName);
    console.log(voucherNum);
    console.log(Description);
    console.log(Amount);
    console.log(depositDate);
    console.log(BankAcct);

    $.ajax({ /* THEN THE AJAX CALL */
            type: "POST", /* TYPE OF METHOD TO USE TO PASS THE DATA */
            url: "bll/deposit.php", /* PAGE WHERE WE WILL PASS THE DATA */
            data: {
              empName: empName,
              voucherNum: voucherNum,
              Description: Description,
              Amount: Amount,
              depositDate: depositDate,
              BankAcct: BankAcct
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

