var heroesDto = {
    name: { type: "string" },
    description: { type: "string" },
    rarity: { type: "string" },
    level: { type: "number" },
    stars: { type: "number" },
    imgurl: { type: "string" },
    heroclass: { type: "string" },
    commanderupgrade: { type: "string" },
    heroperk: { type: "string" },
    teamperk: { type: "string" }
}

function StarLabel(data) {
    var result = '';
    for (var i = 0; i < data; i++) {
        result += "<span class='fas fa-star fa-sm'></span>";
    }
    return result;
}

function fn_FilterConstructor() {
    dataSourceHeroes.filter([
        { "field": "stars", "operator": "gt", "value": 2 },
        { "field": "heroclass", "operator": "eq", "value": "Constructor" }
    ]);
}

function fn_SortByName() {
    dataSourceHeroes.sort([{ "field": "name", "dir": "asc" }]);
}

function StarColor(data) {
    var result = '';
    switch (data) {
        case "epic":
            result = "star-epic";
            break;
        case "legendary":
            result = "star-legendary";
            break;
        case "mythic":
            result = "star-mythic";
            break;
        case "rare":
            result = "star-rare";
            break;
        default:
    }
    return result;
}