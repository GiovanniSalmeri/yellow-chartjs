"use strict";
window.addEventListener("load", function() {
    var charts = document.querySelectorAll("pre.chartjs");
    for (var i = 0; i < charts.length; i++) {
        try {
            var chartDef = JSON.parse(charts[i].firstChild.textContent.replace(/\/\/.*/gm, ""));
        } catch (error) {
            charts[i].firstChild.textContent = error;
            charts[i].style.display = "block";
            continue;
        }
        var canvas = document.createElement("canvas");
        if (Array.isArray(chartDef.options.canvasDimensions)) {
            canvas.width = chartDef.options.canvasDimensions[0];
            canvas.height = chartDef.options.canvasDimensions[1];
        }
        charts[i].replaceWith(canvas);
        var myChart = new Chart(canvas.getContext('2d'), chartDef);
    }
});
