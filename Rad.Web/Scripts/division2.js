var weaponDto = {
    Name: { type: "string" },
    WeaponType: { type: "string" }
}
function detailInit(e) {
    $("<div/>").appendTo(e.detailCell).kendoGrid({
        dataSource: {
            data: e.data.Attribute,
            schema: {
                model: {
                    fields: {
                        RoF: { type: "string" },
                        Magazine: { type: "string" },
                        Accuracy: { type: "string" },
                        Stability: { type: "string" },
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
