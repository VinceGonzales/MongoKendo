var weaponDto = {
    Name: { type: "string" },
    WeaponType: { type: "string" },
    ImageUrl: { type: "string" },
    RoF: { type: "number" },
    Magazine: { type: "number" },
    ReloadTime: { type: "string" },
    Range: { type: "string" }
}
function onChange(arg) {
    var selectedRows = this.select();
    var selectedDataItems = [];
    for (var i = 0; i < selectedRows.length; i++) {
        var dataItem = this.dataItem(selectedRows[i]);
        selectedDataItems.push(dataItem);
    }
    // selectedDataItems contains all selected data items
    $("#pnlDetail img").attr("src", selectedDataItems[0].ImageUrl);
}
function detailInit(e) {
    $("<div/>").appendTo(e.detailCell).kendoGrid({
        dataSource: {
            data: e.data,
            schema: {
                model: {
                    fields: {
                        RoF: { type: "number" },
                        Magazine: { type: "number" },
                        Range: { type: "string" },
                        ReloadTime: { type: "string" }
                    }
                }
            }
        },
        scrollable: false,
        sortable: false,
        columns: [
            { field: "RoF", title: "RoF", width: "80px" },
            { field: "Magazine", title: "Mag", width: "80px" },
            { field: "Range", title: "Rng", width: "80px" },
            { field: "ReloadTime", title: "Rload", width: "80px" }
        ]
    });
}
function fn_GetAggregateData(weaponType, attribute) {
    var attrib = [];
    var sum = 0;
    var weaponList = dataSourceWeapons.data();
    $.each(weaponList, function (key, value) {
        if (value.WeaponType == weaponType) {
            var attribValue = parseInt(value[attribute]);
            attrib.push(attribValue);
            sum += attribValue;
        }
    });
    var avg = sum / attrib.length;
    var max = Math.max.apply(Math, attrib);
    var min = Math.min.apply(Math, attrib);
    var obj = {};
    obj["sum"] = sum;
    obj["avg"] = avg;
    obj["max"] = max;
    obj["min"] = min;
    return obj;
}
function fn_AvgChart(weaponType) {
    var filteredList = $.grep(dataSourceWeapons.data(), function (elem, indx) {
        return (elem.WeaponType == weaponType);
    });
    var rofAggregate = fn_GetAggregateData(weaponType, "RoF");
    $("#pnlChartA").kendoChart({
        dataSource: filteredList,
        title: { text: weaponType },
        legend: { position: "bottom" },
        seriesDefaults: { spacing: 0.1 },
        plotArea: { margin: { right:20 } },
        series: [
            { field: "RoF", categoryField: "Name", name: "RoF", color: "#3A506B" }
        ],
        categoryAxis: {
            majorGridLines: { visible: false },
            labels: {
                rotation: { angle: -45 }
            }
        },
        valueAxis: {
            majorUnit: 100,
            max: 1000,
            plotBands: [
                {
                    from: rofAggregate.avg - 4,
                    to: rofAggregate.avg + 4,
                    color: "#c00",
                    opacity: 0.5
                }
            ],
            line: { visible: false }
        }
    });
}
