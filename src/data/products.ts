import { Product } from '../types';

export const OFFICIAL_WHATSAPP_NUMBER = '081266515635';
export const OFFICIAL_WHATSAPP_LINK = 'https://wa.me/6281266515635';

export const PRODUCTS: Product[] = [
  {
    id: 'pupuk-cair-organik',
    name: 'Pupuk Cair Organik (POC)',
    category: 'pupuk',
    categoryLabel: 'Pupuk Organik',
    price: 15000,
    unit: 'Botol 500 ml',
    image: '/src/assets/images/pupuk_cair_organik_poc_1790505125970.jpg',
    tag: 'Terlaris',
    shortDesc: 'Konsentrat nutrisi tanaman hasil bio-fermentasi limbah organik dapur & buah segar Rest Area KM 164B.',
    description: 'Pupuk Organik Cair (POC) premium hasil formulasi dekomposisi ramah lingkungan limbah organik segar di TPS Rest Area KM 164B Tol Cipali. Mengandung mikroorganisme baik, fitohormon alami (auksin & sitokinin), serta unsur hara makro-mikro seimbang yang langsung diserap daun dan akar tanaman.',
    benefits: [
      'Mempercepat pertumbuhan tunas, daun baru, dan pembungaan',
      'Meningkatkan daya tahan tanaman terhadap hama & penyakit jamur',
      'Aman untuk sayuran organik konsumsi, tanaman hias, dan hidroponik',
      '100% ramah lingkungan tanpa residu bahan kimia sintetis'
    ],
    howToUse: 'Larutkan 5–10 ml POC ke dalam 1 liter air bersih. Semprotkan ke daun atau siramkan ke perakaran seminggu 1–2 kali pada pagi atau sore hari.',
    specs: [
      { label: 'Volume Kemasan', value: '500 ml' },
      { label: 'Bahan Baku', value: 'Limbah buah & sayur tenant Rest Area KM 164' },
      { label: 'Kandungan', value: 'N, P, K organik + Asam Humat + Eco-Enzyme' },
      { label: 'Bentuk', value: 'Cairan pekat aroma fermentasi manis' }
    ],
    rating: 4.9,
    soldCount: 342,
    inStock: true
  },
  {
    id: 'pupuk-padat-organik',
    name: 'Pupuk Padat Organik',
    category: 'pupuk',
    categoryLabel: 'Pupuk Organik',
    price: 15000,
    unit: 'Kemasan 3 Kg',
    image: '/src/assets/images/pupuk_padat_organik_1790505143168.jpg',
    tag: 'Tanah Subur',
    shortDesc: 'Kompos organik matang sempurna, gembur, bebas bau tajam, kaya humus pemulih struktur tanah.',
    description: 'Pupuk Kompos Padat Organik olahan sistem aerasi terkontrol TPS KM 164B. Melewati tahap fermentasi matang sempurna sehingga tidak berbau menyengat, tidak panas pada akar, dan langsung siap dicampurkan ke media tanam pot, polybag, maupun bedengan perkebunan.',
    benefits: [
      'Menggemburkan tanah liat padat dan meningkatkan retensi air tanah',
      'Menyediakan cadangan hara slow-release tahan lama',
      'Mengaktifkan jutaan koloni mikoriza dan bakteri pengurai tanah',
      'Bebas dari biji gulma liar dan parasit patogen'
    ],
    howToUse: 'Campurkan pupuk padat dengan tanah kebun atau sekam dengan perbandingan 1:2 atau taburkan 2–3 sendok makan di sekeliling piringan pohon.',
    specs: [
      { label: 'Berat Bersih', value: '3 Kilogram' },
      { label: 'Tekstur', value: 'Gembur, remah kehitaman, aroma tanah segar' },
      { label: 'C/N Rasio', value: '< 15 (Matang Sempurna)' },
      { label: 'Kadar Air', value: '18% - 25%' }
    ],
    rating: 4.8,
    soldCount: 285,
    inStock: true
  },
  {
    id: 'pupuk-organik-kasgot',
    name: 'Pupuk Organik Kasgot (Frass BSF)',
    category: 'pupuk',
    categoryLabel: 'Pupuk Organik',
    price: 10000,
    unit: 'Kemasan 1 Kg',
    image: '/src/assets/images/pupuk_kasgot_bsf_1790505156850.jpg',
    tag: 'Super Hara',
    shortDesc: 'Kasgot (bekas maggot) murni kaya hara N-P-K & zat kitin alami untuk imunitas tanaman.',
    description: 'Kasgot (Frass / sisa media dekomposisi Maggot Black Soldier Fly) merupakan "emas hitam" pertanian modern. Mengandung kotoran maggot yang telah terurai secara enzimatis, kaya akan nitrogen organik, fosfor terlarut, kalium, dan unsur mikro lengkap serta mengandung kitin alami pelindung tanaman.',
    benefits: [
      'Kandungan hara lebih pekat dibanding kompos konvensional',
      'Kitin dari cangkang larva merangsang sistem kekebalan tanaman',
      'Membantu menekan pertumbuhan nematoda perusak akar',
      'Hasil panen sayur lebih renyah dan bunga lebih cerah'
    ],
    howToUse: 'Gunakan 1–2 sendok makan kasgot untuk pot diameter 20 cm, atau tabur merata di atas perakaran tanaman buah dan sayur.',
    specs: [
      { label: 'Berat Bersih', value: '1 Kilogram' },
      { label: 'Asal Bahan', value: 'Sisa media biopond Maggot BSF KM 164' },
      { label: 'Karakteristik', value: 'Granular halus, kering, tidak berbau' },
      { label: 'Unsur Hara', value: 'N: 2.8%, P2O5: 3.1%, K2O: 2.4% + Trace Elements' }
    ],
    rating: 5.0,
    soldCount: 512,
    inStock: true
  },
  {
    id: 'maggot-kering',
    name: 'Maggot Kering (High-Protein Feed)',
    category: 'pakan',
    categoryLabel: 'Pakan Ternak & Ikan',
    price: 13000,
    unit: 'Pouch 100 Gram',
    image: '/src/assets/images/maggot_kering_protein_1790505168920.jpg',
    tag: 'Protein 45%+',
    shortDesc: 'Larva BSF kering oven higienis, pakan super lele, koi, arwana, burung kicau, dan unggas.',
    description: 'Maggot kering (Black Soldier Fly Larvae) olahan biokonversi sampah organik Rest Area KM 164B Tol Cipali. Dikeringkan dengan oven pengering bersuhu stabil untuk menjaga keutuhan 45%+ protein murni, asam amino esensial, kalsium, dan asam laurat penangkal infeksi.',
    benefits: [
      'Kadar protein murni 45%+ untuk pacu bobot lele & ikan hias',
      'Kandungan asam laurat alami meningkatkan imunitas ternak',
      'FCR (Feed Conversion Ratio) lebih hemat hingga 30% dibanding pelet',
      'Mencerahkan warna sisik ikan koi/arwana & kicauan burung lebih gacor'
    ],
    howToUse: 'Berikan langsung ke ikan lele, koi, atau reptil 1–2 kali sehari. Untuk burung kicau atau ayam, berikan 5–10 butir sebagai extra fooding (EF) harian.',
    specs: [
      { label: 'Berat Bersih', value: '100 Gram' },
      { label: 'Kandungan Protein', value: '45% - 48% Crudes Protein' },
      { label: 'Kandungan Lemak', value: '25% - 28% Sehat' },
      { label: 'Kadar Air', value: '< 8% (Renyah, Tahan Simpan 12 Bulan)' }
    ],
    rating: 4.9,
    soldCount: 789,
    inStock: true
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'H. Sudrajat',
    role: 'Pembudidaya Ikan Lele Bioflok',
    location: 'Majalengka (Dekat Tol Cipali)',
    text: 'Sejak campur pakan lele dengan Maggot Kering dari TPS KM 164B, ikan lebih lincah dan angka kematian turun drastis. FCR jauh lebih hemat, panen jadi lebih untung!',
    rating: 5,
    productBought: 'Maggot Kering (High-Protein)'
  },
  {
    id: 't-2',
    author: 'Ibu Ratna Dewi',
    role: 'Pecinta Aglonema & Sayur Pekarangan',
    location: 'Cirebon',
    text: 'Kasgot dan POC-nya luar biasa! Tanaman cabai dan monstera saya subur sekali tanpa pupuk kimia. Tiap lewat Rest Area KM 164B saya selalu sempatkan beli langsung.',
    rating: 5,
    productBought: 'Pupuk Kasgot & POC'
  },
  {
    id: 't-3',
    author: 'Kang Budi Santoso',
    role: 'Pengelola Tenant Kuliner Rest Area',
    location: 'Rest Area KM 164B Cipali',
    text: 'Limbah sisa dapur kami sekarang tidak terbuang sia-sia dan tidak ada bau lalat lagi di sekitar tenant. Sangat bangga jadi bagian dari ekosistem zero waste ini.',
    rating: 5,
    productBought: 'Mitra Pengolah Sisa Organik'
  }
];
