// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change what's on the page.
//  Put photos in the "images" folder and list them under photos.
//  Any field can be left out (except name).
// ─────────────────────────────────────────────────────────────

const SHOP = {
  title: "Board Games for Sale",
  intro:
    "A small collection of well-loved games looking for a new table. " +
    "Message me if something catches your eye.",
  // Your phone number in international format, e.g. "+44 7700 900123".
  // It shows on the page and opens a WhatsApp chat when tapped.
  whatsapp: "",
  currency: "£",
};

const GAMES = [
  // price = what you're asking. rrp = typical UK retail price new (shown crossed out).
  // Leave price out and the card says "Price on request".
  {
    name: "Etherfields",
    price: 50,
    rrp: 100,
    condition: "Kickstarter core pledge: core box + stretch goals",
    players: "1–4",
    time: "90–180 min",
    link: "https://boardgamegeek.com/boardgame/280794/etherfields",
    description: "",
    photos: ["images/etherfields-1.jpg"],
  },
  {
    name: "Gloomhaven",
    price: 50,
    rrp: 140,
    condition: "4th printing",
    players: "1–4",
    time: "60–120 min",
    link: "https://boardgamegeek.com/boardgame/174430/gloomhaven",
    description: "",
    photos: ["images/gloomhaven-1.jpg"],
  },
  {
    name: "Folklore: The Affliction",
    price: 30,
    rrp: 50,
    condition: "",
    players: "1–5",
    time: "60–180 min",
    link: "https://boardgamegeek.com/boardgame/159504/folklore-the-affliction",
    description: "",
    photos: ["images/folklore-1.jpg"],
  },
  {
    name: "Zombicide: Black Plague",
    price: 50,
    rrp: 110,
    players: "1–6",
    time: "60–180 min",
    link: "https://boardgamegeek.com/boardgame/176189/zombicide-black-plague",
    photos: ["images/zombicide-1.jpg", "images/zombicide-2.jpg"],
  },
  {
    name: "Undaunted: Normandy",
    price: 20,
    rrp: 35,
    players: "2",
    time: "45–60 min",
    link: "https://boardgamegeek.com/boardgame/268864/undaunted-normandy",
    photos: ["images/undaunted-1.jpg", "images/undaunted-2.jpg"],
  },
  {
    name: "Scythe",
    price: 50,
    rrp: 80,
    players: "1–5",
    time: "90–115 min",
    link: "https://boardgamegeek.com/boardgame/169786/scythe",
    photos: ["images/scythe-1.jpg", "images/scythe-2.jpg"],
  },
  {
    name: "Watergate",
    price: 20,
    rrp: 35,
    players: "2",
    time: "30–60 min",
    link: "https://boardgamegeek.com/boardgame/274364/watergate",
    photos: ["images/watergate-1.jpg", "images/watergate-2.jpg"],
  },
  {
    name: "Mansions of Madness (2nd edition)",
    price: 55,
    rrp: 110,
    players: "1–5",
    time: "120–180 min",
    link: "https://boardgamegeek.com/boardgame/205059/mansions-of-madness-second-edition",
    photos: ["images/mansions-1.jpg", "images/mansions-2.jpg"],
  },
  {
    name: "Pandemic",
    price: 15,
    rrp: 35,
    players: "2–4",
    time: "45 min",
    link: "https://boardgamegeek.com/boardgame/30549/pandemic",
    photos: ["images/pandemic-1.jpg", "images/pandemic-2.jpg"],
  },
];
