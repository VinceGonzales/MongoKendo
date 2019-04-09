//www.rockpapershotgun.com/2019/03/18/the-division-2-weapons-exotic-weapons-list-stats-the-division-2-best-weapons/
//www.rockpapershotgun.com/2019/03/25/the-division-2-weapons-guns-exotic-weapons-list-damage-stats-the-division-2-best-weapons/
var weapons = [];
$("table#tablepress-388 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Assault Rifle";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "5.56";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-389 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Marksman Rifle";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "7.62";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-390 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Rifle";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "7.62";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-391 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Submachine Gun";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = ".45";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-393 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Light Machine Gun";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "5.56";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-392 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Shotgun";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "shells";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
$("table#tablepress-394 tbody tr").each(function ($indx, $elem) {
    var weapon = {};
    weapon.WeaponType = "Sidearm";
    weapon.Name = $(this).find("td.column-1").text();
	weapon.DPS = parseInt($(this).find("td.column-2").text());
	weapon.Damage = parseInt($(this).find("td.column-3").text());
    weapon.RoF = parseInt($(this).find("td.column-4").text());
    weapon.Magazine = parseInt($(this).find("td.column-5").text());
    weapon.ReloadTime = $(this).find("td.column-6").text();
    weapon.Ammunition = "9mm";
    weapon.Range = "";
	weapon.ImageUrl = "";
    weapons.push(weapon);
});
console.log(JSON.stringify(weapons));

//gamerdiscovery.com/the-division-2-weapon-and-gear-talents-list/
var WeaponTalents = [];
$("table#tablepress-7 tbody tr").each(function ($indx, $elem) {
	var talent = {};
	talent.Name = $(this).find("td.column-1").text();
	talent.Description = $(this).find("td.column-2").text();
	talent.Stacks = $(this).find("td.column-3").text();
	talent.Requirements = $(this).find("td.column-5").text();
	WeaponTalents.push(talent);
});
console.log(JSON.stringify(WeaponTalents));

