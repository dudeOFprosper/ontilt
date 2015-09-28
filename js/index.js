function buildTable() {
    $.getJSON("./data/season8.json", function (data) {
        var i = 0;
        var row = $("<tr />");
        var tbody = $("<tbody />");

        $('#seasonTitle').html(data.season);
        data = data.matches;
        for (i = 0; i < data.length; i++) {
            tbody = $("<tbody />");
            row.html("<td>" + data[i].round + "</td>" +
                "<td>" + data[i].map + "</td>" +
                "<td>" + data[i].team + "</td>" +
                "<td>" + data[i].score + "</td>" +
                "<td>" + data[i].result + "</td>" +
                "<td>" + data[i].view + "</td>");
            row.appendTo(tbody);
        }
        var $matchesTable = $('#matches');
        tbody.appendTo($matchesTable);
    });
}

$(document).ready(function () {
    buildTable();
});