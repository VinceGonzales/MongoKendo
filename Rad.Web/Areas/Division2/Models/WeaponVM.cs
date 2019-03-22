using System;
using System.Collections.Generic;

namespace Rad.Web.Areas.Division2.Models
{
    public class WeaponVM
    {
        public string Name { get; set; }
        public string WeaponType { get; set; }
        public string ImageUrl { get; set; }
        public int RoF { get; set; }
        public int Magazine { get; set; }
        public string ReloadTime { get; set; }
        public string Range { get; set; }
    }
}