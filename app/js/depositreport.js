//dummy data
/*var montharr = [[1, "<tr><td>1/29/2016</td><td>Jackson, Florida</td><td>001</td><td>Just nothing</td><td>9, 400</td><td>000-1111-222</td></tr>"],
                [2,"<tr><td>2/29/2016</td><td>Tong, Go</td><td>002</td><td>Just nothing</td><td>10,000</td><td>000-2222-333</td></tr>"],
                [2, "<tr><td>2/29/2016</td><td>Me, Haw</td><td>003</td><td>Just nothing</td><td>94,000</td><td>000-3333-444</td></tr>"],
                [3,"<tr><td>3/29/2016</td><td>Duran, Efren</td><td>004</td><td>Just nothing</td><td>4,000</td><td>000-1111-222</td></tr>"],
                [4,"<tr><td>4/29/2016</td><td>Suratos, Don</td><td>005</td><td>Just nothing</td><td>65,400</td><td>111-2222-333</td></tr>"]
                ];
*/

var montharr = [];


//http://stackoverflow.com/questions/1416908/how-can-i-populate-a-javascript-array-with-values-from-a-database-using-php
 /*   $.ajax({
    type: 'POST',
    url: '../php/view.php',
    success: function(result) {
        montharr = JSON.parse(result);
        // do something with the jsonData
        console.log("Ola!");
        }
    });
*/

function populateTable(mnth) 
{
    console.log("populateTable!->" + mnth);

    $.ajax({ /* THEN THE AJAX CALL */
            type: "POST", /* TYPE OF METHOD TO USE TO PASS THE DATA */
            url: "bll/view.php", /* PAGE WHERE WE WILL PASS THE DATA */
            data: {monthOption: mnth}, /* THE DATA WE WILL BE PASSING */
            success: function(result){ /* GET THE TO BE RETURNED DATA */
               // alert(result);
                
              $("#depositTable").append(result); /* THE RETURNED DATA WILL BE SHOWN IN THIS DIV */
            }
    });
};

var main = function() {
    console.log("ready!");
    //initialize data
    populateTable(0);
    
    $('.select').change(function() {
        
        //clear table every change of option
        $('#depositTable tbody > tr').empty();
        
        //var option = $( ".select option:selected" ).text();
        var mnth = $( ".select option:selected" ).val();

        populateTable(mnth);

    });
};

$(document).ready(main);