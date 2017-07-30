function drawWorldDataChart(){
    var opt = {
      "actions": false,
      "mode": "vega-lite"
    }
    var spec = {    
        "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
        "data": {"url": "data/SummaryData.csv"},
        "mark": "bar",
        "width" : "400",
        "height" : "400",
        "encoding": {
            "x": {"aggregate": "sum", "field": "VictimsCount", "type": "quantitative"},
            "y": {"field": "Region", "type": "nominal"},
            "color": {"field": "Victims", "type": "nominal"},
        }
    };
    
    vega.embed("#worldSummarybarChar", spec, opt, function(error, result) {
    var tooltipOption = {
        showAllFields: false,
        fields: [
        {
            field: "Victims",
            title: "Type",
            formatType : "string"
        },
        {
            field: "VictimsCount",
            title: "Count",
            formatType : "number"
        }
        ],
        delay: 50
    };
    vegaTooltip.vegaLite(result.view, spec,tooltipOption);
  });
}