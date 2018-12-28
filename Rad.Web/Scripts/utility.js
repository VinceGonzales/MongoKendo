var schematicTypes = ["Assault", "Axe", "Blunt", "Explosive", "Pistol", "Scythe", "Shotgun", "Sniper", "Spear", "Sword", "Trap"];
var schemSchematicDto = {
    imgurl: { type: "string" },
    name: { type: "string" },
    level: { type: "number" },
    stars: { type: "number" },
    description: { type: "string" },
    SchematicType: { type: "string" },
    DamageType: { type: "string" },
    AmmoType: { type: "string" }
}

function onChange(arg) {
    var selectedRows = this.select();
    var selectedDataItems = [];
    for (var i = 0; i < selectedRows.length; i++) {
        var dataItem = this.dataItem(selectedRows[i]);
        selectedDataItems.push(dataItem);
    }
    // selectedDataItems contains all selected data items
    $("#pnlDetail").kendoGrid({
        dataSource: {
            data: selectedDataItems[0].Materials,
            schema: {
                model: {
                    fields: { prefix: { type: "string" }, name: { type: "string" }, value: { type: "string" }, imgurl: { type: "string" } }
                }
            }
        },
        scrollable: false,
        sortable: false,
        columns: [
            { field: "imgurl", title: " ", width: 40, template: fn_ImgTemplate },
            { field: "name", title: "Material", width: "60px", template: "#: prefix # #: name #" },
            { field: "value", title: "Amount", width: "40px" }
        ]
    });
}

function detailInit(e) {
    $("<div/>").appendTo(e.detailCell).kendoGrid({
        dataSource: {
            data: e.data.stat,
            schema: {
                model: {
                    fields: { name: { type: "string" }, value: { type: "string" }, level: { type: "string" } }
                }
            }
        },
        scrollable: false,
        sortable: false,
        columns: [
            { field: "name", title: "Trait", width: "100px" },
            { field: "value", title: "Impact", width: "40px" }
        ]
    });
}

function fn_ImgTemplate(item) {
    var str = "";
    str += "<img src='" + item.imgurl + "' style='width:100px;' />";
    return str;
}

function StarLabel(data) {
    var result = '';
    for (var i = 0; i < data; i++) {
        result += "<span class='fas fa-star fa-lg'></span>";
    }
    return result;
}

function typeFilter(element) {
    element.kendoDropDownList({
        dataSource: schematicTypes,
        optionLabel: "--Select Value--"
    });
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
