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