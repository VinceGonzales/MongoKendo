using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Rad.Web.Areas.Fortnite.Models
{
    public class HeroVM
    {
        public string imgurl { get; set; }
        public string name { get; set; }
        public int level { get; set; }
        public int stars { get; set; }
        public string description { get; set; }
        public string rarity { get; set; }
        public string heroclass { get; set; }
        public string commanderupgrade { get; set; }
        public string heroperk { get; set; }
        public string teamperk { get; set; }
    }
}