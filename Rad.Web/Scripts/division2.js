var weapTypes = ["Assault Rifle", "Marksman Rifle", "Rifle", "Submachine Gun", "Light Machine Gun", "Shotgun", "Sidearm"];
var weaponDto = {
    Name: { type: "string" },
    WeaponType: { type: "string" },
    ImageUrl: { type: "string" },
    DPS: { type: "number" },
    Damage: { type: "number" },
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
                        Damage: { type: "number" },
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
            { field: "Damage", title: "Dmg", format: "{0:n0}", width: "80px" },
            { field: "RoF", title: "RoF", width: "80px" },
            { field: "Magazine", title: "Mag", width: "80px" },
            { field: "Range", title: "Rng", width: "80px" },
            { field: "ReloadTime", title: "Rload", width: "80px" }
        ]
    });
}
function fn_GetAggregateData(dataList) {
    var sum = 0;
    $.each(dataList, function (key, value) {
        sum += value;
    });
    
    var avg = sum / dataList.length;
    var max = Math.max.apply(Math, dataList);
    var min = Math.min.apply(Math, dataList);
    var obj = {};
    obj["sum"] = sum;
    obj["avg"] = avg;
    obj["max"] = max;
    obj["min"] = min;
    return obj;
}
function fn_GetAttribData(weaponList, attribute) {
    var attrib = [];
    $.each(weaponList, function (key, value) {
        var attribValue = parseInt(value[attribute]);
        attrib.push(attribValue);
    });
    return attrib;
}
function fn_GetNamebData(weaponList, attribute) {
    var attrib = [];
    $.each(weaponList, function (key, value) {
        attrib.push(value[attribute]);
    });
    return attrib;
}
function fn_AvgChart(weaponType) {
    var filteredList = $.grep(dataSourceWeapons.data(), function (elem, indx) {
        return (elem.WeaponType == weaponType);
    });
    
    var nameData = fn_GetNamebData(filteredList, "Name");
    var rofData = fn_GetAttribData(filteredList, "RoF");
    var dpsData = fn_GetAttribData(filteredList, "DPS");
    var dmgData = fn_GetAttribData(filteredList, "Damage");
    var rofAggregate = fn_GetAggregateData(rofData);
    var dpsAggregate = fn_GetAggregateData(dpsData);
    var dmgAggregate = fn_GetAggregateData(dmgData);

    $("#pnlChartA").kendoChart({
        dataSource: filteredList,
        title: { text: weaponType },
        legend: { position: "bottom" },
        seriesDefaults: { spacing: 0.1 },
        plotArea: { margin: { right:20 } },
        series: [
            { field: "RoF", categoryField: "Name", name: "Rate of Fire", color: "#a0b0c0" }
        ],
        categoryAxis: {
            majorGridLines: { visible: false },
            labels: {
                rotation: { angle: -45 }
            }
        },
        valueAxis: {
            majorUnit: 100,
            max: rofAggregate.max + 100,
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

    $("#pnlChartB").kendoChart({
        dataSource: filteredList,
        title: { text: weaponType },
        legend: { position: "bottom" },
        seriesDefaults: { spacing: 0.1 },
        plotArea: { margin: { right: 50 } },
        series: [
            { data: dpsData, axis: "DPS", name: "DPS", color: "#884885" },
            { data: dmgData, axis: "Dmg", name: "Dmg", color: "#F5C0A9" }
        ],
        valueAxis: [
            {
                name: "DPS",
                majorGridLines: { visible: false },
                plotBands: [
                    {
                        from: dpsAggregate.avg - 50,
                        to: dpsAggregate.avg + 50,
                        color: "#884885",
                        opacity: 0.5
                    }
                ]
            },
            {
                name: "Dmg",
                majorGridLines: { visible: false },
                plotBands: [
                    {
                        from: dmgAggregate.avg - 50,
                        to: dmgAggregate.avg + 50,
                        color: "#F5C0A9",
                        opacity: 0.5
                    }
                ]
            }
        ],
        categoryAxis: {
            categories: nameData,
            majorGridLines: { visible: false },
            axisCrossingValues: [0, 999],
            labels: {
                rotation: { angle: -45 }
            }
        },
        tooltip: {
            visible: true, format: "{0:n0}"
        }
    });
}

function fn_ddlChart() {
    $("#weapType").kendoDropDownList({
        dataSource: weapTypes,
        optionLabel: "- Select -",
        change: onDdlChange
    });
}

function onDdlChange() {
    var value = $("#weapType").val();
    fn_AvgChart(value);
}
