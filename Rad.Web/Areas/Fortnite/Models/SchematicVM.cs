using System.Collections.Generic;

namespace Rad.Web.Areas.Fortnite.Models
{
    public class SchematicVM
    {
        public string imgurl { get; set; }
        public string name { get; set; }
        public int level { get; set; }
        public int stars { get; set; }
        public string description { get; set; }
        public List<TraitVM> stat { get; set; }

        public string SchematicType { get; set; }

        public SchematicVM()
        {
            stat = new List<TraitVM>();
        }
    }
    public enum SchemType
    {
        Assault, Axe, Blunt, Explosive, Pistol, Scythe, Shotgun, Sniper, Spear, Sword, Trap
    }
}