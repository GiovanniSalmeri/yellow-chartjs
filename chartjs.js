"use strict";
window.addEventListener("load", function() {
    var charts = document.querySelectorAll("pre.chartjs");
    for (var i = 0; i < charts.length; i++) {
	try {
		var chartDef = JSON.parse(charts[i].firstChild.textContent.replace(/\/\/.*/gm, ""));
	} catch (e) {
		charts[i].firstChild.textContent = "Invalid JSON";
		charts[i].style.display = "block";
		return;
	}
        var canvas = document.createElement("canvas");
        canvas.id = "chartjs"+i;
	var dims = charts[i].firstChild.textContent.match(/^\/\/\s*(\d+)\s+(\d+)/);
	if (dims) {
		canvas.width = dims[1];
		canvas.height = dims[2];
	}
        charts[i].replaceWith(canvas);
        var myChart = new Chart(canvas.getContext('2d'), chartDef);
    }
});
