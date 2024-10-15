type prices = {
  normal: number;
  bronze: number;
  silver: number;
  gold: number;
  osmium: number;
};
type seasons = "primavera" | "verão" | "outono" | "inverno";
type rarities = "comum" | "incomum" | "raro" | "lendário";
type weathers =
  | "ensolarado"
  | "ventania"
  | "chuva"
  | "tempestade"
  | "qualquer"
  | "neve"
  | "nevasca"
  | "qualquer (mina)";
type times =
  | "08:00 - 12:00"
  | "12:00 - 16:00"
  | "16:00 - 18:00"
  | "18:00 - 02:00"
  | "qualquer (mina)"
  | "qualquer";

type locationsPerSeason = {
  spring?: location[];
  summer?: location[];
  fall?: location[];
  winter?: location[];
  all?: location[];
};

type location =
  | "lago"
  | "doca"
  | "praia"
  | "mirante"
  | "estuário"
  | "lagoa"
  | "oceano (floresta)"
  | "campo de arroz"
  | "rio (fazenda)"
  | "rio (floresta)"
  | "rio (cidade)"
  | "caverna (entrada)"
  | "gruta da terra"
  | "gruta da água"
  | "gruta do vento"
  | "gruta do fogo";

export interface ItemGameProps {
  order: number;
  name: string;
  needForAltar?: boolean;
  nameImage: string;
  details: FishDetailsProps;
}

export interface FishDetailsProps {
  price: prices;
  location: locationsPerSeason;
  time: times[];
  weather: weathers[];
  season: seasons[];
  rarity: rarities;
  days?: string;
}
