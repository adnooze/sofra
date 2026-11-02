// Podaci preuzeti s Instagram profila @sofra.ketering
export const site = {
  name: 'Sofra',
  tagline: 'Ketering & Bakery',
  description:
    'Sofra – ketering i bakery iz Zenice. Radimo sve vrste keteringa po vašoj želji: mix plate, slani zalogaji, kolači, slatki stolovi i prirodni sokovi.',
  phone: '062 938 467',
  phoneHref: 'tel:+38762938467',
  email: 'bakery.sofra1@gmail.com',
  address: 'Crkvice 3, Lamela C1, Zenica',
  mapsUrl: 'https://maps.app.goo.gl/CTN7SxLZxaVrWBeB7',
  instagram: 'https://www.instagram.com/sofra.ketering/',
  instagramHandle: '@sofra.ketering',
  tiktok: 'https://www.tiktok.com/@sofra.ketering',
  hours: [
    { days: 'Ponedjeljak – Petak', time: '07:00 – 15:00' },
    { days: 'Subota', time: '07:00 – 13:00' },
    { days: 'Nedjelja', time: 'Zatvoreno' },
  ],
};

// Cjenovnik – prema službenom cjenovniku Sofre; mix plate iz kataloga "Freshly Baked Edition"
export const priceList = [
  {
    title: 'Specijalitet kuće',
    items: [{ name: 'Heljdina lepina s kajmakom i suhim mesom', price: '7 KM' }],
  },
  {
    title: 'Slana jela',
    items: [
      { name: 'Classic sendvič', price: '4 KM' },
      { name: 'Bosanski sendvič', price: '5 KM' },
      { name: 'Dječiji sendvič', price: '3 KM' },
      { name: 'Pileći sendvič', price: '7 KM' },
      { name: 'Heljdini uštipci + prilog', price: '7 KM' },
      { name: 'Tortilja', price: '6 KM' },
      { name: 'Lepina s nutellom', price: '5 KM' },
      { name: 'Lepina s kajmakom i medom', price: '5 KM' },
      { name: 'Sofra lepina', price: '10 KM' },
      { name: 'Sofra pizza', price: '12 KM' },
      { name: 'Domaća kiflica', price: '1 KM' },
      { name: 'Gluten free sendvič', price: '5,5 KM' },
      { name: 'Gluten free lepina s kajmakom i suhim mesom', price: '7 KM' },
      { name: 'Puter kroasan s punjenjem', price: '2,5 KM' },
    ],
  },
  {
    title: 'Deserti',
    items: [
      { name: 'Medena torta (komad)', price: '4 KM' },
      { name: 'Brownie', price: '2,5 KM' },
      { name: 'Ahmedija', price: '2 KM' },
      { name: 'Domaći medenjak', price: '2 KM' },
      { name: 'Šaum rolnica', price: '2,5 KM' },
      { name: 'Tulumbe', price: '1,5 KM' },
      { name: 'Pekmezne hurmašice', price: '2 KM' },
      { name: 'Lješnjak gnijezda', price: '1 KM' },
      { name: 'Desert u čaši', price: '3,5 KM' },
      { name: 'Slatki kroasan', price: '3 KM' },
      { name: 'Suhi kolač (1 kg)', price: '35 KM' },
    ],
  },
  {
    title: 'Torte po narudžbi',
    items: [
      { name: 'Medena torta (mala)', price: '35 KM' },
      { name: 'Medena torta (velika)', price: '60 KM' },
      { name: 'Cheesecake pistacija', price: '50 KM' },
      { name: 'Cheesecake voćni', price: '40 KM' },
      { name: 'Mileram torta', price: '50 KM' },
    ],
  },
  {
    title: 'Zdrave opcije',
    items: [
      { name: 'Pileća salata', price: '10 KM' },
      { name: 'Zobena kaša', price: '6 KM' },
      { name: 'Cijeđeni sok', price: '5 KM' },
      { name: 'Hurma kuglice', price: '1 KM' },
      { name: 'Zdravi kolač', price: '2,5 KM' },
    ],
  },
  {
    title: 'Pića',
    items: [
      { name: 'Gazirani sok', price: '2,5 KM' },
      { name: 'Prirodni sok', price: '2,5 KM' },
      { name: 'Voda', price: '1,5 KM' },
    ],
  },
  {
    title: 'Plate',
    items: [
      { name: 'Mix plata 1', price: '55 KM' },
      { name: 'Mix plata 2', price: '55 KM' },
      { name: 'Plata s američkim palačinkama', price: 'po dogovoru' },
    ],
  },
];

const highlight = (id: string) => `https://www.instagram.com/stories/highlights/${id}/`;

export const highlights = {
  recenzije: highlight('17953259753998729'),
  pizza: highlight('17878256802413523'),
  plate: highlight('18034358678804236'),
  cjenovnik: highlight('17946632849895900'),
  kolaci: highlight('18076361849219061'),
  ponuda: highlight('18157916455396672'),
  sokovi: highlight('17894316834400479'),
  ketering: highlight('18082888213920686'),
  lokacija: highlight('18081199883281493'),
};

const post = (path: string) => `https://www.instagram.com/${path}/`;

export const posts = {
  otvorenje: post('sofra.ketering/p/DNdvd1StgLy'),
  zeda: post('sofra.ketering/p/DPjy9TvDRav'),
  slatkiKetering: post('sofra.ketering/reel/DeKgrzWt5fA'),
  medicinski: post('sofra.ketering/p/DeC2nKSDaWu'),
  gulsah: post('gulsah.design/reel/Dd4bdAmxIR5'),
  villaAida: post('villa__aida/p/DdzVi1TkQcI'),
  svadba: post('sofra.ketering/reel/DdO4c0Htt8U'),
  fingerfood: post('sofra.ketering/reel/DdKYk0ENlMy'),
  palacinke: post('sofra.ketering/reel/DdKIQTONKh9'),
  katalog: post('sofra.ketering/p/DdBlJQeDVST'),
};
