$(document).ready(function() {
// write your code here

$.getJSON("data.json", function (data) {
    var topSpots = '';
    $.each(data, function(key, value){
        const a = '<a href="https://www.google.com/maps?q='+ value.location +  '">Show in Google maps</a></td>';
        
        topSpots += '<tr>';
        topSpots += '<td>'+value.name+'</td>';
        topSpots += '<td>'+value.description+'</td>';
        topSpots += '<td>'+ a;
        topSpots += '</tr>';
    });

    $('#tbl').append(topSpots);


});

})