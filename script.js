/* ==================================================
   1. DATA REVISI BERDASARKAN JSON
   ================================================== */
const mapleData = [
  {
    "type": "wirawiri",
    "kode": { "level_1": "GARAMLTIO", "level_2": "AREMPUITS" },
    "images": {
      "level_1": "assets/images/wirawiri01.webp",
      "level_2": "assets/images/wirawiri02.webp"
    },
    "keterangan": {
      "level_2": {
        "hook": "Tau Gak Sih? Kebun Binatang Surabaya Ternyata Berawal dari Hobi Mengoleksi Hewan!",
        "content": {
          "pembuka": "Kebun Binatang Surabaya (KBS) yang sering kita kunjungi sekarang ternyata punya sejarah super unik! Semua berawal di tahun 1916 dari seorang jurnalis bernama H.F.K. Kommer.",
          "sorotan": "Berawal dari hobi mengoleksi hewan di halaman rumah daerah Kaliondo hingga menjadi tempat penampungan satwa!",
          "detail": [
            "Tahun 1918: Pindah ke Jalan Groedo & resmi dibuka untuk umum dengan tiket masuk.",
            "Tahun 1920: Pindah ke kawasan Darmo di atas lahan seluas 30.500 m².",
            "Saat Ini: Dikelola Pemkot Surabaya lewat PDTS KBS sebagai salah satu konservasi satwa tertua di Indonesia."
          ]
        }
      },
      "level_1": {
        "hook": "Gagah dan Energik! Yuk, Kenalan sama Tari Remo Khas Jawa Timur",
        "content": {
          "pembuka": "Pernah lihat tarian tradisional yang gerakan kakinya bikin panggung berguncang dan penuh bunyi gemerincing? Yup, itu dia Tari Remo!",
          "sorotan": "Berasal dari Desa Ceweng, Jombang & diciptakan oleh seniman jalanan bernama Cak Mo.",
          "subjudul": "Apa Sih yang Bikin Tari Remo Unik Banget?",
          "poin_unik": [
            { "judul": "Suara Gemerincing Kaki", "deskripsi": "Penari memakai lonceng kecil di pergelangan kaki yang berbunyi nyaring saat dihentakkan (rancak)." },
            { "judul": "Gerakan Khas", "deskripsi": "Menggabungkan kuda-kuda kokoh, kibasan selendang (sampur), dan tatapan mata tajam." },
            { "judul": "Makin Inklusif", "deskripsi": "Kini tidak hanya ditarikan pria, tetapi juga wanita dalam berbagai pembukaan festival!" }
          ]
        }
      }
    }
  },
  {
    "type": "transjatim",
    "kode": { "level_1": "EIFRKSNUE", "level_2": "LAKINRAGN" },
    "images": {
      "level_1": "assets/images/transjatim01.webp",
      "level_2": "assets/images/transjatim02.webp"
    },
    "keterangan": {
      "level_2": {
        "hook": "Megah Banget! Masjid Al-Akbar Surabaya, Masjid Terbesar Kedua di Indonesia",
        "content": {
          "pembuka": "Kubah hijau kebiruan yang megah ini adalah ikon wisata religi Surabaya. Masjid Nasional Al-Akbar berdiri di atas lahan 11,2 hektar dan mampu menampung hingga 40.000 jamaah!",
          "sorotan": "Digagas oleh Wali Kota Soenarto Soemoprawiro pada 1995 dan diresmikan oleh Presiden KH. Abdurrahman Wahid (Gus Dur) pada 10 November 2000.",
          "subjudul": "Fakta Keren & Ciri Khas:",
          "poin_unik": [
            { "judul": "Kubah Setengah Telur", "deskripsi": "Kubah utama unik setinggi 27 meter dikelilingi 4 kubah kecil." },
            { "judul": "Menara Asmaul Husna", "deskripsi": "Menara setinggi 99 meter yang melambangkan 99 nama baik Allah." },
            { "judul": "Fasilitas Edukasi & Wisata", "deskripsi": "Menara pandang kota, area taman, perpustakaan, hingga pusat edukasi." }
          ]
        }
      },
      "level_1": {
        "hook": "Masuk ke Dalam Kapal Perang Asli! Sensasi Jelajah Monumen Kapal Selam",
        "content": {
          "pembuka": "Ingin merasakan atmosfer kapal perang sungguhan? Monumen Kapal Selam (Monkasel) memajang kapal selam asli KRI Pasopati 410 bertipe Whiskey Class buatan Uni Soviet 1952.",
          "sorotan": "Pernah terjun dalam Operasi Trikora 1962! Kapal sepanjang 76,6 meter ini dipotong menjadi 16 bagian sebelum dirakit kembali jadi museum.",
          "subjudul": "Eksplorasi Seru di Dalam Monkasel:",
          "poin_unik": [
            { "judul": "Intip Periskop Asli", "deskripsi": "Rasakan jadi kapten memantau permukaan laut dari bawah air." },
            { "judul": "Ruang Peluncur Torpedo", "deskripsi": "Lihat langsung tempat senjata torpedo perang disiapkan." },
            { "judul": "Ruang Kemudi & Awak", "deskripsi": "Rasakan atmosfer ruang tidur dan kerja para prajurit marinir." }
          ]
        }
      }
    }
  },
  {
    "type": "suroboyo_bus",
    "kode": { "level_1": "MIANEPGAB", "level_2": "AAORLGTMI" },
    "images": {
      "level_1": "assets/images/suroboyo_bus01.webp",
      "level_2": "assets/images/suroboyo_bus02.webp"
    },
    "keterangan": {
      "level_1": {
        "hook": "Rahasia Kelenteng Hok An Kiong: Dibangun Tanpa Paku Logam!",
        "content": {
          "pembuka": "Klenteng Hok An Kiong (Klenteng Coklat) berdiri sejak 1820-1830. Memiliki arti 'Istana Kebahagiaan dan Kedamaian', tempat ini awalnya merupakan area istirahat awak kapal Tiongkok.",
          "sorotan": "Seluruh bangunan kayu dibuat TANPA paku logam, melainkan menggunakan pasak bambu tradisional!",
          "detail": [
            "Memuja Dewi Ma Zu (Ma Co Poh) sebagai pelindung para pelaut.",
            "Memiliki 22 altar dewa dengan nuansa interior merah dan emas.",
            "Aktif sebagai cagar budaya dan tempat ibadah umat Tridharma."
          ]
        }
      },
      "level_2": {
        "hook": "Simbol Keberanian Arek Suroboyo! Cerita Unik Patung Suro & Boyo",
        "content": {
          "pembuka": "Patung Suro dan Boyo melambangkan pertarungan Hiu (Suro) dan Buaya (Boyo). Sura berarti keberanian, Baya berarti bahaya—maknanya 'Berani Menghadapi Bahaya'!",
          "sorotan": "Semangat pantang menyerah khas Arek-Arek Suroboyo!",
          "subjudul": "3 Lokasi Patung Ikonik di Surabaya:",
          "poin_unik": [
            { "judul": "Depan KBS", "deskripsi": "Versi legendaris buatan Sutomo Kusnadi & Sigit Margono (1988)." },
            { "judul": "Taman Skate & BMX", "deskripsi": "Berdiri gagah setinggi 15 meter di pusat area olahraga anak muda." },
            { "judul": "Taman Suroboyo (Kenjeran)", "deskripsi": "Versi raksasa terbaru dengan tinggi mencapai 25,6 meter!" }
          ]
        }
      }
    }
  }
];

/* ==================================================
   2. ELEMENT SELECTION
   ================================================== */
const ui = {
    transportType: document.getElementById("transportType"),
    level: document.getElementById("level"),
    secretCode: document.getElementById("secretCode"),
    unlockButton: document.getElementById("unlockButton"),
    message: document.getElementById("message"),
    result: document.getElementById("result"),
    title: document.getElementById("title"),
    content: document.getElementById("content"),
    image: document.getElementById("image"),
    nextButton: document.getElementById("nextButton")
};

/* ==================================================
   3. INITIALIZATION
   ================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initializeMAPLE();
});

function initializeMAPLE() {
    hideResult();
    ui.secretCode.value = "";
    clearMessage();
    updateNextButton();
}

/* ==================================================
   4. EVENT LISTENERS
   ================================================== */
ui.transportType.addEventListener("change", resetState);
ui.level.addEventListener("change", resetState);

function resetState() {
    ui.secretCode.value = "";
    clearMessage();
    hideResult();
    updateNextButton();
}

ui.secretCode.addEventListener("input", () => {
    ui.secretCode.value = ui.secretCode.value.toUpperCase();
});

ui.unlockButton.addEventListener("click", validateCode);

ui.secretCode.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        validateCode();
    }
});

/* ==================================================
   5. VALIDATION LOGIC
   ================================================== */
function validateCode() {
    const selectedTransport = ui.transportType.value;
    const selectedLevel = ui.level.value;
    const enteredCode = ui.secretCode.value.trim().toUpperCase();

    const transportGroup = mapleData.find(item => item.type === selectedTransport);

    if (!transportGroup) {
        showMessage("Kategori transportasi tidak ditemukan.", "error");
        return;
    }

    if (!enteredCode) {
        showMessage("Masukkan Secret Code terlebih dahulu.", "error");
        ui.secretCode.focus();
        return;
    }

    const correctCode = transportGroup.kode[selectedLevel];

    if (enteredCode === correctCode) {
        showMessage("Kode benar!", "success");
        
        const payload = {
            hook: transportGroup.keterangan[selectedLevel].hook,
            content: transportGroup.keterangan[selectedLevel].content,
            image: transportGroup.images[selectedLevel]
        };
        
        showResult(payload);
    } else {
        showMessage("Secret Code salah. Silakan coba lagi.", "error");
        ui.secretCode.focus();
    }
}

/* ==================================================
   6. DISPLAY RESULTS
   ================================================== */
function showResult(data, levelKey) {
    ui.title.textContent = data.hook;

    if (data.image) {
        ui.image.src = data.image;
        ui.image.style.display = "block";
    } else {
        ui.image.style.display = "none";
    }

    const container = document.getElementById("dynamicContent");
    container.innerHTML = ""; // Clean-up

    const content = data.content;

    // 1. Paragraf Pembuka
    if (content.pembuka) {
        const p = document.createElement("p");
        p.className = "text-pembuka";
        p.textContent = content.pembuka;
        container.appendChild(p);
    }

    // 2. Highlighting Callout Box
    if (content.sorotan) {
        const quote = document.createElement("div");
        quote.className = "highlight-box";
        quote.innerHTML = `💡 <strong>Fun Fact:</strong> ${content.sorotan}`;
        container.appendChild(quote);
    }

    // 3. Subjudul Section
    if (content.subjudul) {
        const h3 = document.createElement("h3");
        h3.className = "section-subtitle";
        h3.textContent = content.subjudul;
        container.appendChild(h3);
    }

    // 4. Feature Cards / Poin Unik Grid
    if (content.poin_unik && content.poin_unik.length > 0) {
        const grid = document.createElement("div");
        grid.className = "features-grid";
        
        content.poin_unik.forEach(item => {
            const card = document.createElement("div");
            card.className = "feature-card";
            card.innerHTML = `
                <h4>✨ ${item.judul}</h4>
                <p>${item.deskripsi}</p>
            `;
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }

    // 5. Timeline / Checklist Detail
    if (content.detail && content.detail.length > 0) {
        const ul = document.createElement("ul");
        ul.className = "custom-list";
        
        content.detail.forEach(text => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="icon">📌</span> <span>${text}</span>`;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }

    updateNextButton();

    ui.result.style.display = "flex";
    ui.result.classList.add("show");
}
function hideResult() {
    ui.result.classList.remove("show");
    ui.result.style.display = "none";
}

/* ==================================================
   7. NAVIGATION & NEXT LEVEL
   ================================================== */
ui.nextButton.addEventListener("click", () => {
    if (ui.level.value === "level_1") {
        ui.level.value = "level_2";
        ui.secretCode.value = "";
        clearMessage();
        hideResult();
        updateNextButton();
        ui.secretCode.focus();
    } else {
        hideResult();
        showMessage("🎉 Semua level pada kategori ini telah selesai!", "success");
    }
});

function updateNextButton() {
    if (ui.level.value === "level_1") {
        ui.nextButton.textContent = "➡ NEXT LEVEL";
    } else {
        ui.nextButton.textContent = "🏆 SELESAI";
    }
}

/* ==================================================
   8. UTILITIES
   ================================================== */
function showMessage(text, type = "") {
    ui.message.textContent = text;
    ui.message.className = type;
}

function clearMessage() {
    ui.message.textContent = "";
    ui.message.className = "";
}
