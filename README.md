Chartjs 0.8.16
=================
Animated and responsive charts.

<p align="center"><img src="chartjs-screenshot.png?raw=true" width="795" height="836" alt="Screenshot"></p>

## How to add a chart

This extension uses the graphic engine [Chartjs](https://www.chartjs.org/). Insert the data for the chart in a codeblock with the class `chartjs`.

Add to the `options` a setting `"canvasDimensions": [width, height]` and set `"responsive": false` if you want to assign a fixed dimension to the chart.

## Examples

Adding a chart:

    ```chartjs
    {
        "type": "bar",
        "data": {
            "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            "datasets": [{
                "label": "# of Votes",
                "data": [12, 19, 3, 5, 2, 3],
                "backgroundColor": [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                "borderColor": [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                "borderWidth": 1
            }]
        },
        "options": {
            "canvasDimensions": [800, 400], // add here the dimensions of the chart
            "responsive": true, // set responsive to false for the canvas dimensions to be respected
            "scales": {
                "yAxes": [{
                    "ticks": {
                        "beginAtZero": true
                    }
                }]
            }
        }
    }
    ```

## Installation

[Download extension](https://github.com/GiovanniSalmeri/yellow-chartjs/archive/master.zip) and copy zip file into your `system/extensions` folder. Right click if you use Safari.

## Developer

Example. [Get help](https://github.com/GiovanniSalmeri/yellow-chartjs/issues).
