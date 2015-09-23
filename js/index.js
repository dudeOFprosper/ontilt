$(document).ready(function(){ 
    buildTable();
});

function buildTable(){
    $.getJSON( "/data/season8.json", function( data ) {
        var tbody = $("<tbody />"); 
        for(var i = 0; i < data.length; i++) {
            var row = $("<tr />");
            row.html("<td>"+data[i].round+"</td>"+
                "<td>"+data[i].map+"</td>"+
                "<td>"+data[i].team+"</td>"+
                "<td>"+data[i].score+"</td>"+
                "<td>"+data[i].result+"</td>"+
                "<td>"+data[i].view+"</td>"); 
            row.appendTo(tbody);
        }
        var $matchesTable = $('#matches');
        tbody.appendTo($matchesTable);
    });  
}