// Chartjs extension, https://github.com/GiovanniSalmeri/yellow-chartjs

"use strict";
window.addEventListener("DOMContentLoaded", function() {
    var charts = document.querySelectorAll("pre.chartjs");
    charts.forEach(function(chart, i) {
        try {
            var chartDefinition = JSON.parse(chart.firstChild.textContent);
            var description = document.createElement("div");
            description.style.display = "none";
            description.textContent = chart.firstChild.textContent;
            description.id = "chart"+i;
            chart.appendChild(description);
            chart.setAttribute("aria-describedby", description.id);
            var canvas = document.createElement("canvas");
            canvas.style.display = "inline-block"; // https://github.com/chartjs/Chart.js/issues/11224
            if (Array.isArray(chartDefinition.options.canvasDimensions)) {
                canvas.width = chartDefinition.options.canvasDimensions[0];
                canvas.height = chartDefinition.options.canvasDimensions[1];
            }
            new Chart(canvas.getContext("2d"), chartDefinition);
            chart.firstChild.replaceWith(canvas);
        } catch (error) {
            chart.firstChild.textContent = error;
        }
        chart.style.display = "block";
    })
});
