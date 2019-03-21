using System;
using System.Collections.Generic;

namespace Rad.Web.Areas.Division2.Models
{
    public class WeaponVM
    {
        public string Name { get; set; }
        public string WeaponType { get; set; }
        public Attribute Attribute { get; set; }
    }
    public class Attribute
    {
        public string RoF { get; set; }
        public string Magazine { get; set; }
        public string Accuracy { get; set; }
        public string Stability { get; set; }
        public string Range { get; set; }
        public string FireMode { get; set; }
        public string ReloadTime { get; set; }
    }
}