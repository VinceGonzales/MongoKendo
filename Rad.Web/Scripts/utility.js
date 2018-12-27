var schematicTypes = ["Assault", "Axe", "Blunt", "Explosive", "Pistol", "Scythe", "Shotgun", "Sniper", "Spear", "Sword", "Trap"];
var schemSchematicDto = {
    imgurl: { type: "string" },
    name: { type: "string" },
    level: { type: "number" },
    stars: { type: "number" },
    description: { type: "string" },
    SchematicType: { type: "string" }
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
