import { SlideItem } from '../types';

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    title: 'EKOSISTEM ZERO WASTE',
    subtitle: 'Smart Waste Management @ Rest Area KM 164 Tol Cipali',
    tagline: 'Solusi Lingkungan Berkelanjutan Berbasis Bioteknologi Maggot BSF',
    badge: 'Slide 01 · Visi & Pondasi',
    summary: 'Rest Area KM 164B Tol Cipali memelopori pengolahan sampah mandiri, alami, dan bernilai ekonomis tinggi melalui integrasi tiga pilar utama.',
    keyPoints: [
      {
        title: 'Pengolahan Alami',
        desc: 'Memanfaatkan biokonversi larva Black Soldier Fly (BSF) untuk mencerna sisa organik tanpa bahan kimia sintetis.',
        icon: 'Leaf'
      },
      {
        title: 'Sirkular Ekonomi',
        desc: 'Sampah bukan akhir, melainkan awal mata rantai baru yang menghasilkan pupuk organik berharga dan pakan ternak berprotein tinggi.',
        icon: 'Repeat'
      },
      {
        title: 'Eco-Tech Mandiri',
        desc: 'Penerapan biopond terkontrol, pencacahan efisien, komposter, dan eco-enzyme terintegrasi di dalam kawasan rest area.',
        icon: 'Cpu'
      }
    ],
    metrics: [
      { value: '100%', label: 'Alami & Sirkular', note: 'Tanpa insinerasi / pembakaran liar' },
      { value: 'Zero', label: 'Waste Target', note: 'Menuju kawasan tol bebas residu' }
    ]
  },
  {
    id: 2,
    title: 'Penumpukan Sampah: Beban Lingkungan & Biaya',
    subtitle: 'Tantangan Riil Pengelolaan Sampah Kawasan Tol & Rest Area',
    tagline: 'Kritisnya Dampak Volume Sampah Jika Dibiarkan Tanpa Pengolahan Sumber',
    badge: 'Slide 02 · Masalah & Urgensi',
    summary: 'Aktivitas ratusan tenant kuliner dan ribuan pengendara setiap hari menciptakan tantangan volume sampah organik yang masif jika hanya dibuang ke TPA.',
    keyPoints: [
      {
        title: 'Volume Sampah Meningkat',
        desc: 'Aktivitas harian tenant restoran, warung makan, dan pemudik menghasilkan sisa makanan dan limbah dapur dalam jumlah masif setiap harinya.',
        icon: 'TrendingUp',
        highlight: '65% Sampah Organik'
      },
      {
        title: 'Dampak Polusi & Higienitas',
        desc: 'Sampah organik basah yang tidak terkelola menimbulkan bau menyengat, mengundang lalat rumah/vektor kuman, serta mencemari sanitasi lingkungan pengunjung.',
        icon: 'AlertTriangle',
        highlight: 'Risiko Kesehatan'
      },
      {
        title: 'Beban Biaya Retribusi TPA',
        desc: 'Tingginya biaya armada angkut sampah dan tarif retribusi TPA kabupaten menjadi beban pengeluaran operasional yang terus membengkak.',
        icon: 'DollarSign',
        highlight: 'Beban Finansial'
      }
    ],
    metrics: [
      { value: '65%', label: 'Sisa Makanan & Organik', note: 'Bahan baku berharga biokonversi' },
      { value: '25%', label: 'Anorganik (Plastik/Kertas)', note: 'Bisa didaur ulang & dimonetisasi' },
      { value: '10%', label: 'Residu Akhir', note: 'Residu minim ke TPA DLH' }
    ],
    quote: 'Jika sampah organik diselesaikan langsung di sumbernya, 65% beban sampah rest area langsung tuntas!'
  },
  {
    id: 3,
    title: 'Pemilahan Sampah: Kunci Efisiensi Utama',
    subtitle: 'Edukasi Tenant & Pemilahan Presisi Sejak dari Hulu',
    tagline: 'Memilah Sejak dari Sumber Menjamin Keberhasilan Ekosistem Sirkular',
    badge: 'Slide 03 · Strategi Pemilahan',
    summary: 'Kunci efisiensi operasional TPS KM 164B adalah kolaborasi aktif dengan seluruh tenant kuliner untuk memisahkan sampah sejak di dapur.',
    keyPoints: [
      {
        title: 'Sampah Organik (Bahan Pakan Maggot)',
        desc: 'Meliputi sisa makanan, nasi, kulit buah & sayuran, sisa sayur sop, sisa dapur organik, serta ampas kopi dan kantong teh.',
        icon: 'Apple',
        highlight: 'Bahan Baku Emas'
      },
      {
        title: 'Sampah Anorganik (Jalur Daur Ulang)',
        desc: 'Meliputi botol & kemasan plastik PET, kardus packaging, kaleng minuman, logam, dan botol kaca/beling yang disalurkan ke bank daur ulang.',
        icon: 'Package',
        highlight: 'Monetisasi Tim'
      },
      {
        title: 'Edukasi Tenant Berkelanjutan',
        desc: 'Memberikan wadah pemilahan terpisah bagi setiap mitra restoran di rest area, dibarengi edukasi kesadaran kebersihan lingkungan.',
        icon: 'Users',
        highlight: 'Gotong Royong'
      }
    ],
    metrics: [
      { value: '2 Kategori', label: 'Pemisahan Utama', note: 'Organik vs Anorganik' },
      { value: '90%+', label: 'Akurasi Pilah', note: 'Memaksimalkan nafsu makan larva BSF' }
    ]
  },
  {
    id: 4,
    title: 'MAGGOT BSF: DAUR ULANG ALAMI',
    subtitle: 'Bioteknologi Lalat Tentara Hitam (Hermetia illucens)',
    tagline: 'Mengubah Masalah Limbah Menjadi Berkah Pakan Ternak dan Pupuk Kaya Hara',
    badge: 'Slide 04 · Teknologi Maggot',
    summary: 'Larva Maggot BSF adalah "mesin pengurai alami" tercanggih ciptaan Tuhan. Tidak membawa penyakit, rakus mengurai limbah, dan menghasilkan output bernilai tinggi.',
    keyPoints: [
      {
        title: 'Akselerasi Dekomposisi',
        desc: 'Larva BSF mampu mencerna dan mengurai sampah organik 3x lebih cepat dibanding metode pengomposan konvensional.',
        icon: 'Zap',
        highlight: '3x Lebih Cepat'
      },
      {
        title: 'Sanitasi Otomatis Alami',
        desc: 'Aktivitas larva menekan populasi bakteri patogen (Salmonella, E. coli) dan secara alami mengusir lalat rumah pengganggu.',
        icon: 'ShieldCheck',
        highlight: 'Bebas Bau & Hama'
      },
      {
        title: 'High-Protein Feed (Pakan Lele)',
        desc: 'Kandungan protein murni mencapai 45%+ lengkap dengan profil asam amino dan asam laurat peningkat imunitas lele/unggas.',
        icon: 'Fish',
        highlight: 'Protein 45%+'
      },
      {
        title: 'Frass (Kasgot) Organik',
        desc: 'Sisa media bekas pakan menjadi pupuk organik padat (Kasgot) yang super kaya unsur hara N-P-K makro dan mikro untuk tanaman.',
        icon: 'Sprout',
        highlight: 'Pupuk Kasgot'
      }
    ],
    metrics: [
      { value: 'Zero', label: 'Waste', note: 'Seluruh bagian terutilisasi' },
      { value: '60%', label: 'Savings', note: 'Hemat biaya retribusi & pakan lele' }
    ]
  },
  {
    id: 5,
    title: 'PROSES DAUR ULANG ALAMI MAGGOT',
    subtitle: '4 Tahap Transformasi Biologis Sampah Menjadi Komoditas',
    tagline: 'SOP Higienis dan Terukur di Fasilitas TPS Rest Area KM 164B',
    badge: 'Slide 05 · Alur Operasional',
    summary: 'Setiap kilogram sampah organik melewati empat tahapan SOP terkontrol untuk memastikan hasil panen pakan dan pupuk berkualitas tinggi.',
    keyPoints: [
      {
        title: '1. PREPARASI',
        desc: 'Sampah organik Rest Area KM 164 dicacah halus dengan mesin perajang bio-waste untuk mengoptimalkan luas permukaan dan kemudahan konsumsi larva.',
        icon: 'Scissors',
        highlight: 'Tahap 1'
      },
      {
        title: '2. FEEDING',
        desc: 'Pemberian pakan pada larva BSF usia 5-7 hari di dalam biopond bersuhu dan berkelembaban terkontrol secara berkala.',
        icon: 'Utensils',
        highlight: 'Tahap 2'
      },
      {
        title: '3. GROWTH',
        desc: 'Larva tumbuh pesat dengan mengonsumsi limbah organik secara masif hingga mencapai bobot maksimal dalam waktu 10-14 hari.',
        icon: 'TrendingUp',
        highlight: 'Tahap 3'
      },
      {
        title: '4. HARVEST',
        desc: 'Pemisahan mekanis antara maggot dewasa (untuk pakan lele basah/kering) dan sisa media kotoran (Kasgot) untuk pupuk tanaman unggul.',
        icon: 'CheckCircle',
        highlight: 'Tahap 4'
      }
    ],
    metrics: [
      { value: '10-14 Hari', label: 'Siklus Pembesaran', note: 'Sangat cepat dan berkesinambungan' },
      { value: '4 Tahap', label: 'Transformasi Biologis', note: 'Preparasi → Feeding → Growth → Harvest' }
    ]
  },
  {
    id: 6,
    title: 'OUTPUT: PAKAN LELE PREMIUM',
    subtitle: 'Nutrisi Super Tinggi untuk Budidaya Perikanan dan Ternak',
    tagline: '45% Protein Murni dengan Profil Asam Amino Lengkap',
    badge: 'Slide 06 · Kualitas Produk Pakan',
    summary: 'Maggot BSF hasil budidaya TPS KM 164B menjadi solusi substitusi pelet pabrikan yang mahal bagi para peternak lele dan ikan air tawar di Jawa Barat.',
    keyPoints: [
      {
        title: 'FCR Lebih Efisien',
        desc: 'Feed Conversion Ratio (FCR) yang lebih rendah, menghasilkan bobot daging lele lebih banyak dengan konsumsi pakan yang lebih hemat.',
        icon: 'BarChart2',
        highlight: 'Daging Padat Cepat Panen'
      },
      {
        title: 'Imunitas Tinggi (Asam Laurat)',
        desc: 'Kandungan asam laurat alami dalam lemak larva memperkuat sistem kekebalan tubuh ikan lele terhadap serangan bakteri Aeromonas dan jamur.',
        icon: 'Shield',
        highlight: 'Survival Rate Tinggi'
      },
      {
        title: 'Efisiensi Biaya Signifikan',
        desc: 'Mengurangi ketergantungan peternak pada pelet pabrikan yang harganya terus melambung, memangkas ongkos produksi hingga puluhan persen.',
        icon: 'TrendingDown',
        highlight: 'Hemat Biaya Pelet'
      }
    ],
    metrics: [
      { value: '45%+', label: 'Protein Murni', note: 'Nutrisi Maggot KM 164' },
      { value: 'Anti-Bakteri', label: 'Asam Laurat', note: 'Booster kekebalan ikan alami' }
    ]
  },
  {
    id: 7,
    title: 'EKOSISTEM SIRKULAR KM 164',
    subtitle: 'Strategi Zero Waste Masa Depan di Rest Area Jalan Tol',
    tagline: '5 Mata Rantai Menuju Zero Waste Tol Cipali',
    badge: 'Slide 07 · Peta Sirkular Lengkap',
    summary: 'Model sirkular komprehensif yang mengintegrasikan tenant, pengunjung, TPS 3R, dan dinas lingkungan hidup dalam satu siklus tertutup.',
    keyPoints: [
      {
        title: '1. INPUT',
        desc: 'Pengumpulan limbah organik dari puluhan tenant restoran dan limbah anorganik dari kendaraan pengunjung rest area.',
        icon: 'LogIn',
        highlight: 'Hulu'
      },
      {
        title: '2. PILAH',
        desc: 'Pemisahan presisi di fasilitas TPS Rest Area KM 164B antara fraksi basah organik dan fraksi kering.',
        icon: 'Filter',
        highlight: 'Pemilahan'
      },
      {
        title: '3. RECOVERY',
        desc: 'Monetisasi anorganik (plastik/kardus) ke industri daur ulang untuk menopang biaya operasional para pekerja tim TPS.',
        icon: 'RefreshCw',
        highlight: 'Kemandirian Finansial'
      },
      {
        title: '4. PROCESS',
        desc: 'Integrasi biopond Maggot BSF, lubang biopori resapan, komposter aerobik, dan pembuatan Eco-Enzyme serbaguna.',
        icon: 'Layers',
        highlight: 'Bio-Konversi'
      },
      {
        title: '5. RESIDU',
        desc: 'Sisa residu yang tidak bisa diurai hanya berkisar <10%, diangkut terjadwal oleh DLH Kabupaten secara higienis.',
        icon: 'Truck',
        highlight: 'Hilir Minimalis'
      }
    ],
    metrics: [
      { value: '5 Tahap', label: 'Rantai Sirkular', note: 'Input → Pilah → Recovery → Process → Residu' },
      { value: '< 10%', label: 'Residu TPA', note: 'Penurunan drastis volume buangan' }
    ]
  },
  {
    id: 8,
    title: 'ZERO WASTE MANAGEMENT KM 164',
    subtitle: 'Tiga Pilar Dampak: Eco-System · Economy · Social',
    tagline: 'Mewujudkan Rest Area Ramah Lingkungan Terbaik di Indonesia',
    badge: 'Slide 08 · Tiga Nilai Keberlanjutan',
    summary: 'Inisiatif TPS KM 164B Tol Cipali memberikan dampak nyata secara ekologis, ekonomis, dan sosial kemasyarakatan.',
    keyPoints: [
      {
        title: 'ECO-SYSTEM',
        desc: 'Reduksi nyata beban timbunan TPA, infiltrasi air tanah melalui biopori, dan pencegahan emisi gas metana pencetus pemanasan global.',
        icon: 'Globe',
        highlight: 'Kelestarian Bumi'
      },
      {
        title: 'ECONOMY',
        desc: 'Kemandirian operasional tim TPS melalui penjualan pupuk POC, kasgot, maggot kering, serta efisiensi biaya retribusi sampah kawasan.',
        icon: 'Coins',
        highlight: 'Nilai Ekonomi Baru'
      },
      {
        title: 'SOCIAL',
        desc: 'Pemberdayaan tenaga kerja lokal sekitar tol, ruang riset bioteknologi ramah lingkungan, serta sarana edukasi bagi ribuan pengunjung jalan tol.',
        icon: 'HeartHandshake',
        highlight: 'Pemberdayaan Masyarakat'
      }
    ],
    metrics: [
      { value: '3 Nilai', label: 'Pilar Dampak', note: 'Ekologi, Ekonomi, Sosial' },
      { value: 'Terima Kasih', label: 'Komitmen Bersama', note: 'Mari dukung produk lokal KM 164B' }
    ]
  }
];
