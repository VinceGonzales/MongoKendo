var weaponDto = {
    Name: { type: "string" },
    WeaponType: { type: "string" },
    ImageUrl: { type: "string" }
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
            data: e.data.Attribute,
            schema: {
                model: {
                    fields: {
                        RoF: { type: "number" },
                        Magazine: { type: "number" },
                        Accuracy: { type: "number" },
                        Stability: { type: "number" },
                        Range: { type: "string" },
                        FireMode: { type: "string" },
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
            { field: "Accuracy", title: "Acc", width: "80px" },
            { field: "Stability", title: "Stab", width: "80px" },
            { field: "Range", title: "Rng", width: "80px" },
            { field: "FireMode", title: "Mode", width: "80px" },
            { field: "ReloadTime", title: "Rload", width: "80px" }
        ]
    });
}
function fn_GetAggregateData() {
    var rof = [];
    var sum = 0;
    var weaponList = dataSourceWeapons.data();
    $.each(weaponList, function (key, value) {
        if (value.Attribute.RoF.length) {
            var rofValue = parseInt(value.Attribute.RoF);
            rof.push(rofValue);
            sum += rofValue;
        }
    });
    var avg = sum / rof.length;
    var max = Math.max.apply(Math, rof);
    var min = Math.min.apply(Math, rof);
    console.log("Sum RoF: ", sum);
    console.log("Avg RoF: ", avg);
    console.log("Max RoF: ", max);
    console.log("Min RoF: ", min);
}
