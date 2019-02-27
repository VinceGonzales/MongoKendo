var weaponDto = {
    Name: { type: "string" },
    WeaponType: { type: "string" },
    Ammo: { type: "string" },
    Description: { type: "string" },
    BodyDamage: { type: "number" },
    HeadshotDamage: { type: "number" },
    DPSBody: { type: "number" },
    DPSHeadshot: { type: "number" },
    ReloadAmmo: { type: "number" },
    ReloadEmpty: { type: "number" },
    MagazineCapacity: { type: "number" },
    Image: { type: "string" }
}

function fn_ImgTemplate(item) {
    var str = "";
    str += "<img src='" + item.Image + "' style='width:180px;' />";
    return str;
}