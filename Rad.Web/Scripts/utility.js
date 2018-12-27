var schematicTypes = ["Assault", "Axe", "Blunt", "Explosive", "Pistol", "Scythe", "Shotgun", "Sniper", "Spear", "Sword", "Trap"];
var schemSchematicDto = {
    imgurl: { type: "string" },
    name: { type: "string" },
    level: { type: "number" },
    stars: { type: "number" },
    description: { type: "string" },
    SchematicType: { type: "string" },
    DamageType: { type: "string" }
}

function onChange(arg) {
    var selectedRows = this.select();
    var selectedDataItems = [];
    for (var i = 0; i < selectedRows.length; i++) {
        var dataItem = this.dataItem(selectedRows[i]);
        selectedDataItems.push(dataItem);
    }
    // selectedDataItems contains all selected data items
    console.log(selectedDataItems);
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
    var color = "";
    switch (item.DamageType) {
        case "Fire":
            color = "background-color:#E88B99;";
            break;
        case "Nature":
            color = "background-color:#DDBE99;";
            break;
        case "Water":
            color = "background-color:#B7C9FF;";
            break;
        case "Energy":
            color = "";
            break;
        default:
            color = "background-color:#C0C5C1;";
    }
    str += "<img src='" + item.imgurl + "' style='width:100px;" + color + ";' />";
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
