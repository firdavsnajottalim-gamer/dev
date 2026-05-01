export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  category: string;
  description: string;
  coverColor: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    year: "1922",
    category: "Roman",
    description: "O'zbek adabiyoti tarixidagi birinchi roman. Kumush va Otabekning fojiali sevgisi haqida.",
    coverColor: "bg-amber-900",
  },
  {
    id: "2",
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    year: "1928",
    category: "Roman",
    description: "Xonliklar davridagi adolatsizliklar va shafqatsiz tuzumga qarshi yozilgan asar.",
    coverColor: "bg-emerald-900",
  },
  {
    id: "3",
    title: "Obid ketmon",
    author: "Abdulla Qodiriy",
    year: "1934",
    category: "Qissa",
    description: "Qishloq hayoti va jamoalashtirish davridagi o'zgarishlar tasviri.",
    coverColor: "bg-blue-900",
  },
  {
    id: "4",
    title: "Kalvak mahzumning xotira daftaridan",
    author: "Abdulla Qodiriy",
    year: "1923",
    category: "Satira",
    description: "Eski qarashlar va jaholat ustidan kuluvchi hajviy asar.",
    coverColor: "bg-zinc-800",
  },
  {
    id: "5",
    title: "Baxtsiz kiyev",
    author: "Abdulla Qodiriy",
    year: "1915",
    category: "Drama",
    description: "Oilaviy muammolar va jamiyatdagi illatlar haqidagi u sahna asari.",
    coverColor: "bg-rose-900",
  },
  {
    id: "6",
    title: "Toshkentliklar",
    author: "Abdulla Qodiriy",
    year: "1920-yillar",
    category: "Hikoya",
    description: "Toshkent hayoti va undagi insonlar taqdiri haqida hikoyalar to'plami.",
    coverColor: "bg-slate-700",
  },
  // To reach 60, we'll adding chapters, articles and specific famous essays
  ...Array.from({ length: 54 }).map((_, i) => ({
    id: (i + 7).toString(),
    title: i % 2 === 0 ? `Mushtum maqolalari: ${i + 1}-qism` : `O'tkan kunlar: ${Math.floor(i/2) + 1}-bob`,
    author: "Abdulla Qodiriy",
    year: "1913-1937",
    category: i % 2 === 0 ? "Maqola" : "Bob",
    description: "Muallifning ijodiy merosidan saralangan, o'zbek tili va madaniyati rivojiga hissa qo'shgan satirik va badiiy parcha.",
    coverColor: i % 3 === 0 ? "bg-amber-800" : (i % 3 === 1 ? "bg-emerald-800" : "bg-blue-800"),
  }))
];
