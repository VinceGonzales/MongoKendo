
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

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
