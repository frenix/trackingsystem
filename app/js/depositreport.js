//dummy data
var montharr = [[1, "<tr><td>1/29/2016</td><td>Jackson, Florida</td><td>001</td><td>Just nothing</td><td>9, 400</td><td>000-1111-222</td></tr>"],
                [2,"<tr><td>2/29/2016</td><td>Tong, Go</td><td>002</td><td>Just nothing</td><td>10,000</td><td>000-2222-333</td></tr>"],
                [2, "<tr><td>2/29/2016</td><td>Me, Haw</td><td>003</td><td>Just nothing</td><td>94,000</td><td>000-3333-444</td></tr>"],
                [3,"<tr><td>3/29/2016</td><td>Duran, Efren</td><td>004</td><td>Just nothing</td><td>4,000</td><td>000-1111-222</td></tr>"],
                [4,"<tr><td>4/29/2016</td><td>Suratos, Don</td><td>005</td><td>Just nothing</td><td>65,400</td><td>111-2222-333</td></tr>"]
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
        //clear table every change of option
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