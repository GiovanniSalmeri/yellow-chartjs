"use strict";
window.addEventListener("load", function() {
    var charts = document.querySelectorAll("pre.chartjs");
    for (var i = 0; i < charts.length; i++) {
        var canvas = document.createElement("canvas");
        canvas.id = "chartjs"+i;
	var dims = charts[i].firstChild.textContent.match(/^\/\/\s*(\d+)\s+(\d+)/);
        canvas.width = dims[1];
        canvas.height = dims[2];
        var script = document.createElement("script");
        script.text = "var ctx = document.getElementById('"+canvas.id+"').getContext('2d');\n"
        script.text += "var myChart = new Chart(ctx, "+charts[i].firstChild.textContent+");";
        charts[i].insertAdjacentElement("beforebegin", canvas);
        charts[i].replaceWith(script);
    }
});
