// przepisy.codingwithdawid.com — dane przepisów
// generowane przez Andrzej pipeline (TikTok/IG → macros → Willys)
// każdy obiekt: pełne macrosy z Willys (na całość), per 100g liczy apka

window.RECIPES = [
  {
    id: "eddedaily-protein-cheesecake",
    title: "Protein Cheesecake Kladdkaka",
    subtitle: "Keso + Philadelphia Light + whey, pieczony",
    author: "@eddedaily",
    platform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@eddedaily/video/7673987519033150742",
    addedAt: "2026-09-12",
    image: "img/eddedaily-cheesecake.jpg",
    servings: 12,
    totalWeightG: 1119,
    totals: { kcal: 1389, protein: 156, carbs: 39, fat: 64 },
    claim: {
      text: "ca 230 kcal & 30 g protein per bit",
      kcal: 230,
      protein: 30,
      verdict: "inflated",
      note: "Liczby nie spINają się przy żadnym podziale: 30g P wymaga 5 bitar → 278 kcal; 230 kcal wymaga 6 bitar → 26g P. Realnie przy 12 bitar: 116 kcal / 13g P."
    },
    ingredients: [
      { name: "Keso Mini Naturell 1,5%", brand: "Keso", amount: "500 g", kcal: 365, protein: 60.0, carbs: 15.5, fat: 7.5,
        willys: "https://www.willys.se/produkt/keso-mini-naturell-100050882_ST", price: 28.90, priceNote: "całe opak. 500g" },
      { name: "Philadelphia Light 11%", brand: "Philadelphia", amount: "300 g", kcal: 435, protein: 21.6, carbs: 15.3, fat: 30.0,
        willys: "https://www.willys.se/sok?q=philadelphia%20light", price: 27.90, priceNote: "całe opak. 300g (kod 100173900)" },
      { name: "Ägg frigående (4 st)", brand: "Garant", amount: "4 st (~220 g)", kcal: 308, protein: 26.4, carbs: 1.1, fat: 21.3,
        willys: "https://www.willys.se/sok?q=%C3%A4gg%2010p%20frig%C3%A5ende", price: 11.96, priceNote: "4/10 z opak. 29,90 kr" },
      { name: "Kakao", brand: "Garant", amount: "3 msk (~15 g)", kcal: 55, protein: 3.2, carbs: 4.5, fat: 2.1,
        willys: "https://www.willys.se/sok?q=kakao", price: 2.83, priceNote: "15g z 200g (37,76 kr)" },
      { name: "Whey-80 kladdkaka", brand: "Star Nutrition", amount: "2 skopor (~60 g)", kcal: 226, protein: 45.0, carbs: 3.0, fat: 3.0,
        willys: null, price: 5.40, priceNote: "własny zapas ~90 kr/kg" },
      { name: "Sötningsströ", brand: "—", amount: "3 msk", kcal: 0, protein: 0, carbs: 0, fat: 0,
        willys: null, price: 1.50, priceNote: "szacunek" },
      { name: "Salt", brand: "—", amount: "1 tsk", kcal: 0, protein: 0, carbs: 0, fat: 0,
        willys: null, price: 0, priceNote: "" }
    ],
    steps: [
      "Wszystko do jednej miski",
      "Miksować na gładką masę",
      "Wylać do formy, piec 160°C 30–40 min",
      "Studzić, potem min. 1h do lodówki"
    ],
    notes: [
      "Philadelphia Light zamiast Original = −243 kcal na całość, ratio rośnie z 9,3 → 11,3 g P/100 kcal",
      "Realny bit przy 12 kawałkach: 116 kcal / 13 g P — uczciwy protein deser, ale nie 30g P",
      "Boost: +20g whey do ciasta → 8 bitów ≈ 230 kcal / 22 g P i claim autora prawie się spina"
    ],
    tags: ["dessert", "cheesecake", "high-protein", "poddawany"]
  }
  ,
  {
    id: "sergiofittt-3ing-cheesecake",
    title: "Protein Cheesecake 3 Składniki",
    subtitle: "kvarg + jajka + kondenserad mjölk, pieczony",
    author: "@sergiofittt",
    platform: "tiktok",
    sourceUrl: "https://www.tiktok.com/@sergiofittt/video/7672068547631254807",
    addedAt: "2026-09-12",
    image: "img/sergiofittt-cheesecake.jpg",
    servings: 12,
    totalWeightG: 840,
    totals: { kcal: 1002, protein: 90, carbs: 89, fat: 32 },
    claim: {
      text: "cała forma ~950 kcal & ~95 g protein",
      kcal: 950,
      protein: 95,
      verdict: "close",
      note: "Nasze liczby z Willys: 1002 kcal / 90 g P — kcal +5%, białko −5%. W granicach rozsądnego błędu (zależnie od marki kvargu). Autor policzył uczciwie."
    },
    ingredients: [
      { name: "Kvarg Naturell 0,2%", brand: "Garant", amount: "500 g", kcal: 300, protein: 55.0, carbs: 20.0, fat: 1.0,
        willys: "https://www.willys.se/sok?q=kvarg%20naturell", price: 16.06, priceNote: "5/9 z opak. 900g (28,90 kr)" },
      { name: "Ägg frigående (4 st)", brand: "Garant", amount: "4 st (~220 g)", kcal: 308, protein: 26.4, carbs: 1.1, fat: 21.3,
        willys: "https://www.willys.se/sok?q=%C3%A4gg%2010p%20frig%C3%A5ende", price: 11.96, priceNote: "4/10 z opak. 29,90 kr" },
      { name: "Kondenserad Mjölk (sötad)", brand: "Markomilk", amount: "120 g", kcal: 394, protein: 8.6, carbs: 67.8, fat: 9.7,
        willys: "https://www.willys.se/sok?q=kondenserad%20mj%C3%B6lk", price: 5.69, priceNote: "120g z puszki 397g (18,83 kr) — mjölk 55% + socker 45%, dokładnie sweetened condensed milk" }
    ],
    steps: [
      "Wszystko zmiksować na gładką masę",
      "Wylać do wyłożonej formy (springform)",
      "Piec 160°C ~50 min — brzegi ścięte, środek lekko drży",
      "Studzić, potem min. 4h w lodówce (najlepiej całą noc)"
    ],
    notes: [
      "Claim autora się broni: 950/95 vs nasze 1002/90 (±5%) — rzadkość na TikToku 👏",
      "Ratio 9,0 g P/100 kcal — niżej niż sernik keso+whey, bo kondenserad wnosi 68 g cukru",
      "Per 100 g: 119 kcal / 10,7 g P · 12 bitar = 84 kcal / 7,5 g P",
      "Całość ~34 kr — najtańszy deser w kolekcji"
    ],
    tags: ["dessert", "cheesecake", "high-protein", "3-składnikowe", "budget"]
  }
];
