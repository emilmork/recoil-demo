       public long MatrikkelId { get; set; }
        public string Kommunenummer { get; set; }
        public int? Gårdsnummer { get; set; }
        public int? Bruksnummer { get; set; }
        public int? Festenummer { get; set; }
        public int? Seksjonsnummer { get; set; }
        public EiendomType EiendomType { get; set; }
        public List<EierViewModel> Eiere { get; set; }