//dummy data
var montharr = [[1, "<tr><td>1/29/2016</td><td>Jackson, Florida</td><td>94</td><td>Just nothing</td><td>9400</td><td>000-1111-222</td></tr>"],
                [2,"<tr><td>2/29/2016</td><td>Tong, Go</td><td>94</td><td>Just nothing</td><td>9400</td><td>000-1111-222</td></tr>"],
                [2, "<tr><td>2/29/2016</td><td>Me, Haw</td><td>94</td><td>Just nothing</td><td>9400</td><td>000-1111-222</td></tr>"],
                [3,"<tr><td>3/29/2016</td><td>Duran, Efren</td><td>94</td><td>Just nothing</td><td>9400</td><td>000-1111-222</td></tr>"],
                [4,"<tr><td>4/29/2016</td><td>Suratos, Don</td><td>94</td><td>Just nothing</td><td>9400</td><td>000-1111-222</td></tr>"]
                ];

function populateTable() {
    console.log("populateTable!");
    var index;
    for (index = 0; index < montharr.length; index++) {
        $('.table').append(montharr[index][1]); 
    } 
};

var main = function() {
    console.log("ready!");
    //initialize
    populateTable();
    
    $('.select').change(function() {
        //clear table
        $('#depositTable tbody > tr').empty();

        var option = $( ".select option:selected" ).text();
        var optval = $( ".select option:selected" ).val();
        console.log(option);
        console.log(optval);

        if(optval == "0") {
            populateTable();
        } else {
            var index;
            for (index = 0; index < montharr.length; index++) {
                if(montharr[index][0]==optval) {
                    //display only the 2nd element
                    $('.table').append(montharr[index][1]); 
                } 
            }
        }
    });
};

$(document).ready(main);