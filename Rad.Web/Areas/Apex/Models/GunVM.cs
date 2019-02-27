using System;

namespace Rad.Web.Areas.Apex.Models
{
    public class GunVM
    {
        public string Name { get; set; }
        public string WeaponType { get; set; }
        public string Ammo { get; set; }
        public string Description { get; set; }
        public int BodyDamage { get; set; }
        public int HeadshotDamage { get; set; }
        public int DPSBody { get; set; }
        public int DPSHeadshot { get; set; }
        public decimal ReloadAmmo { get; set; }
        public decimal ReloadEmpty { get; set; }
        public int MagazineCapacity { get; set; }
        public string Image { get; set; }
    }
}