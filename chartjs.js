"use strict";
window.addEventListener("load", function() {
    var charts = document.querySelectorAll("pre.chartjs");
    for (var i = 0; i < charts.length; i++) {
        try {
            var chartDefinition = JSON.parse(charts[i].firstChild.textContent);
        } catch (error) {
            charts[i].firstChild.textContent = error;
            charts[i].style.display = "block";
            continue;
        }
        var canvas = document.createElement("canvas");
        if (Array.isArray(chartDefinition.options.canvasDimensions)) {
            canvas.width = chartDefinition.options.canvasDimensions[0];
            canvas.height = chartDefinition.options.canvasDimensions[1];
        }
        charts[i].replaceWith(canvas);
        new Chart(canvas.getContext('2d'), chartDefinition);
    }
});
