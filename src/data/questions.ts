import { MathQuestion, CarColorConfig } from '../types/game';

export const CAR_COLORS: CarColorConfig[] = [
  { id: 'cyan', name: 'Cyber Cyan', hex: '#06b6d4', threeColor: 0x06b6d4, glowHex: '#22d3ee' },
  { id: 'red', name: 'Inferno Red', hex: '#ef4444', threeColor: 0xef4444, glowHex: '#f87171' },
  { id: 'lime', name: 'Neon Lime', hex: '#84cc16', threeColor: 0x84cc16, glowHex: '#a3e635' },
  { id: 'gold', name: 'Solar Gold', hex: '#f59e0b', threeColor: 0xf59e0b, glowHex: '#fbbf24' },
  { id: 'purple', name: 'Apex Purple', hex: '#a855f7', threeColor: 0xa855f7, glowHex: '#c084fc' },
];

export const FORM1_QUESTIONS: MathQuestion[] = [
  {
    id: 'soalan-1',
    topic: 'Ratios',
    topicMalay: 'Nisbah',
    question: 'Sebuah bakul mengandungi 4 biji epal dan 8 biji oren. Apakah nisbah epal kepada oren dalam bentuk termudah?',
    options: ['1 : 2', '2 : 1', '1 : 3'],
    correctIndex: 0, // A
    difficulty: 1,
    explanation: 'Nisbah epal kepada oren ialah 4 : 8. Bahagikan kedua-dua nombor dengan 4: 4 ÷ 4 = 1 dan 8 ÷ 4 = 2. Maka bentuk termudah ialah 1 : 2.',
  },
  {
    id: 'soalan-2',
    topic: 'Ratios',
    topicMalay: 'Nisbah',
    question: 'Nisbah bilangan murid lelaki kepada murid perempuan ialah 2 : 3. Jika terdapat 10 orang murid lelaki, berapakah bilangan murid perempuan?',
    options: ['12 orang', '15 orang', '18 orang'],
    correctIndex: 1, // B
    difficulty: 1,
    explanation: 'Murid lelaki = 2 bahagian = 10 orang, maka 1 bahagian = 10 ÷ 2 = 5 orang. Bilangan murid perempuan = 3 bahagian = 3 × 5 = 15 orang.',
  },
  {
    id: 'soalan-3',
    topic: 'Ratios',
    topicMalay: 'Nisbah Setara',
    question: 'Antara berikut, yang manakah merupakan nisbah setara dengan 3 : 4?',
    options: ['6 : 10', '12 : 20', '9 : 12'],
    correctIndex: 2, // C
    difficulty: 1,
    explanation: 'Darabkan kedua-dua sebutan dalam 3 : 4 dengan 3: (3 × 3) : (4 × 3) = 9 : 12.',
  },
  {
    id: 'soalan-4',
    topic: 'Ratios',
    topicMalay: 'Nisbah',
    question: 'Nisbah bilangan bola merah kepada bola biru ialah 3 : 5. Jika jumlah bola ialah 40 biji, berapakah bilangan bola merah?',
    options: ['10 biji', '15 biji', '20 biji'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Jumlah bahagian = 3 + 5 = 8 bahagian = 40 biji. 1 bahagian = 40 ÷ 8 = 5 biji. Bilangan bola merah = 3 × 5 = 15 biji.',
  },
  {
    id: 'soalan-5',
    topic: 'Ratios',
    topicMalay: 'Nisbah Tiga Kuantiti',
    question: 'Diberi nisbah A : B = 2 : 3 dan B : C = 3 : 4. Tentukan nisbah A : B : C.',
    options: ['2 : 4 : 3', '3 : 2 : 4', '2 : 3 : 4'],
    correctIndex: 2, // C
    difficulty: 2,
    explanation: 'Oleh kerana nilai B sudah sama pada kedua-dua nisbah iaitu 3, maka nisbah A : B : C boleh digabungkan terus menjadi 2 : 3 : 4.',
  },
  {
    id: 'soalan-6',
    topic: 'Ratios & Proportions',
    topicMalay: 'Nisbah & Kadaran',
    question: 'Nisbah wang Amir kepada wang Badrul ialah 4 : 7. Jika wang Amir ialah RM20, berapakah jumlah wang mereka?',
    options: ['RM55', 'RM45', 'RM50'],
    correctIndex: 0, // A
    difficulty: 2,
    explanation: 'Wang Amir = 4 bahagian = RM20, maka 1 bahagian = RM20 ÷ 4 = RM5. Jumlah bahagian = 4 + 7 = 11 bahagian = 11 × RM5 = RM55.',
  },
  {
    id: 'soalan-7',
    topic: 'Rates',
    topicMalay: 'Kadar',
    question: 'Sebuah kereta bergerak sejauh 100 km dalam masa 2 jam. Berapakah kadar purata kereta tersebut?',
    options: ['40 km/j', '50 km/j', '60 km/j'],
    correctIndex: 1, // B
    difficulty: 1,
    explanation: 'Kadar purata = Jarak ÷ Masa = 100 km ÷ 2 jam = 50 km/j.',
  },
  {
    id: 'soalan-8',
    topic: 'Rates',
    topicMalay: 'Kadar',
    question: 'Sebuah mesin menghasilkan 30 batang pensel dalam masa 3 minit. Berapakah kadar penghasilan pensel bagi setiap minit?',
    options: ['15 batang/minit', '5 batang/minit', '10 batang/minit'],
    correctIndex: 2, // C
    difficulty: 1,
    explanation: 'Kadar penghasilan seminit = 30 batang ÷ 3 minit = 10 batang/minit.',
  },
  {
    id: 'soalan-9',
    topic: 'Rates',
    topicMalay: 'Kadar',
    question: 'Harga 4 kg gula ialah RM16. Berapakah harga bagi 1 kg gula?',
    options: ['RM4', 'RM3', 'RM5'],
    correctIndex: 0, // A
    difficulty: 1,
    explanation: 'Harga bagi 1 kg gula = RM16 ÷ 4 kg = RM4.',
  },
  {
    id: 'soalan-10',
    topic: 'Proportions',
    topicMalay: 'Kadaran',
    question: 'Sebuah paip mengalirkan 20 liter air dalam masa 5 minit. Berapakah isi padu air yang mengalir dalam masa 8 minit pada kadar yang sama?',
    options: ['24 liter', '32 liter', '28 liter'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Kadar aliran air seminit = 20 liter ÷ 5 minit = 4 liter/minit. Untuk 8 minit = 8 × 4 liter = 32 liter.',
  },
  {
    id: 'soalan-11',
    topic: 'Rates & Proportions',
    topicMalay: 'Kadar & Kadaran',
    question: 'Sebuah motosikal bergerak sejauh 60 km dalam masa 1 jam. Jika motosikal bergerak pada kadar yang sama selama 3 jam, berapakah jarak yang dilalui?',
    options: ['150 km', '180 km', '200 km'],
    correctIndex: 1, // B
    difficulty: 2,
    explanation: 'Jarak dalam 1 jam ialah 60 km. Dalam 3 jam = 3 × 60 km = 180 km.',
  },
  {
    id: 'soalan-12',
    topic: 'Proportions',
    topicMalay: 'Kadaran',
    question: 'Sebuah kedai menjual 5 kotak air dengan harga RM25. Berapakah harga bagi 8 kotak air pada kadar harga yang sama?',
    options: ['RM40', 'RM35', 'RM30'],
    correctIndex: 0, // A
    difficulty: 2,
    explanation: 'Harga 1 kotak air = RM25 ÷ 5 = RM5. Harga bagi 8 kotak air = 8 × RM5 = RM40.',
  },
];
