# Chartjs 0.9.2

Animated and responsive charts.

<p align="center"><img src="SCREENSHOT.png" alt="Screenshot"></p>

## How to install an extension

[Download ZIP file](https://github.com/GiovanniSalmeri/yellow-chartjs/archive/refs/heads/main.zip) and copy it into your `system/extensions` folder. [Learn more about extensions](https://github.com/annaesvensson/yellow-update).

## How to show a chart

[Chart.js](https://www.chartjs.org/) is a graphic engine that allows to define a chart in JavaScript Object Literal notation. In this extension you must use JSON, which is a stricter subset of JavaScript Object Literal notation.

Insert the data with a code block. Wrap the data in \`\`\` and add the language identifier `chartjs`.

Add to the `options` a setting `"canvasDimensions": [width, height]` and set `"responsive": false` if you want to assign a fixed dimension to the chart.

## Differences between JavaScript Object Literal notation and JSON

Unlike in JavaScript Object Literal notation, in JSON:

+ there are only double quotes `"`
+ keys must be always quoted
+ comments (`//` or `/* */`) are not allowed.

If needed, online services (for example [ConvertOnline](https://www.convertonline.io/convert/js-to-json)) transform JavaScript Object Literal notation into JSON.

## Examples

Showing a bar chart:

    ``` chartjs
    {
        "type": "bar",
        "data": {
            "labels": ["Red", "Blue", "Green", "Purple", "Yellow", "Orange"],
            "datasets": [{
                "label": "# of Votes",
                "data": [12, 3, 5, 2, 19, 3],
                "backgroundColor": [
                    "#ff638433",
                    "#36a2eb33",
                    "#4bc0c033",
                    "#9966ff33",
                    "#ffce5633",
                    "#ff9f4033"
                ],
                "borderColor": [
                    "#ff6384",
                    "#36a2eb",
                    "#4bc0c0",
                    "#9966ff",
                    "#ffce56",
                    "#ff9f40"
                ],
                "borderWidth": 1
            }]
        },
        "options": {
            "animation": true,
            "scales": {
                "y": {
                    "beginAtZero": true
                }
            }
        }
    }
    ```

Showing a pie chart:

``` chartjs
    {
        "type": "pie",
        "data": {
            "labels": ["Red", "Blue", "Green", "Purple", "Yellow", "Orange"],
            "datasets": [{
                "label": "# of Votes",
                "data": [12, 3, 5, 2, 19, 3],
                "backgroundColor": [
                    "#ff6384",
                    "#36a2eb",
                    "#4bc0c0",
                    "#9966ff",
                    "#ffce56",
                    "#ff9f40"
                ]
            }]
        },
        "options": {
            "canvasDimensions": [800, 300],
            "responsive": false
        }
    }
```

## Acknowledgements

This extension includes [Chartjs 4.4.4](https://www.chartjs.org/). Thank you for the good work.

## Developer

Giovanni Salmeri. [Get help](https://datenstrom.se/yellow/help/).
