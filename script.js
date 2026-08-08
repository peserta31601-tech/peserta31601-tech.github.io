/* ==================================================
   MAPLE - JAVASCRIPT
   Math Puzzle Learning Experience
   ================================================== */


/* ==================================================
   1. DATA LEVEL
   ================================================== */

const levels = {

    1: {
        code: "MAPLE01",

        title: "Level 1 Berhasil!",

        subtitle:
            "Selamat! Kamu berhasil membuka Level 1.",

        image: "",

        next: 2
    },


    2: {
        code: "MAPLE02",

        title: "Level 2 Berhasil!",

        subtitle:
            "Selamat! Kamu berhasil membuka Level 2.",

        image: "",

        next: null
    }

};


/* ==================================================
   2. AMBIL ELEMENT HTML
   ================================================== */

const ui = {

    level:
        document.getElementById("level"),

    secretCode:
        document.getElementById("secretCode"),

    unlockButton:
        document.getElementById("unlockButton"),

    message:
        document.getElementById("message"),

    result:
        document.getElementById("result"),

    title:
        document.getElementById("title"),

    subtitle:
        document.getElementById("subtitle"),

    image:
        document.getElementById("image"),

    nextButton:
        document.getElementById("nextButton")

};


/* ==================================================
   3. INITIALIZATION
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMAPLE();

});


function initializeMAPLE() {

    // Pastikan result tersembunyi
    ui.result.classList.remove("show");

    ui.result.style.display = "none";

    // Bersihkan input
    ui.secretCode.value = "";

    // Bersihkan pesan
    clearMessage();

    // Atur tombol NEXT sesuai level
    updateNextButton();

}


/* ==================================================
   4. LEVEL DROPDOWN
   ================================================== */

ui.level.addEventListener("change", () => {

    // Reset input ketika level berubah
    ui.secretCode.value = "";

    // Bersihkan pesan
    clearMessage();

    // Sembunyikan result jika sebelumnya terbuka
    hideResult();

    // Update tombol next
    updateNextButton();

});


/* ==================================================
   5. SECRET CODE INPUT
   ================================================== */

ui.secretCode.addEventListener("input", () => {

    // Selalu gunakan huruf kapital
    ui.secretCode.value =
        ui.secretCode.value.toUpperCase();

});


/* ==================================================
   6. UNLOCK BUTTON
   ================================================== */

ui.unlockButton.addEventListener("click", () => {

    validateCode();

});


/* ==================================================
   7. ENTER KEY
   ================================================== */

ui.secretCode.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        event.preventDefault();

        validateCode();

    }

});


/* ==================================================
   8. VALIDATE SECRET CODE
   ================================================== */

function validateCode() {

    const selectedLevel =
        ui.level.value;

    const enteredCode =
        ui.secretCode.value.trim().toUpperCase();


    /* ----------------------------------------------
       Cek apakah level tersedia
       ---------------------------------------------- */

    const levelData =
        levels[selectedLevel];


    if (!levelData) {

        showMessage(
            "Level tidak ditemukan.",
            "error"
        );

        return;

    }


    /* ----------------------------------------------
       Cek apakah kode kosong
       ---------------------------------------------- */

    if (!enteredCode) {

        showMessage(
            "Masukkan Secret Code terlebih dahulu.",
            "error"
        );

        ui.secretCode.focus();

        return;

    }


    /* ----------------------------------------------
       Validasi kode
       ---------------------------------------------- */

    if (enteredCode === levelData.code) {

        showMessage(
            "Kode benar!",
            "success"
        );

        showResult(levelData);

    } else {

        showMessage(
            "Secret Code salah. Silakan coba lagi.",
            "error"
        );

        ui.secretCode.focus();

    }

}


/* ==================================================
   9. SHOW RESULT
   ================================================== */

function showResult(levelData) {

    /*
     * Isi informasi result
     */

    ui.title.textContent =
        levelData.title;

    ui.subtitle.textContent =
        levelData.subtitle;


    /*
     * Tampilkan gambar jika tersedia
     */

    if (levelData.image) {

        ui.image.src =
            levelData.image;

        ui.image.style.display =
            "block";

    } else {

        ui.image.removeAttribute("src");

        ui.image.style.display =
            "none";

    }


    /*
     * Atur tombol NEXT LEVEL
     */

    updateNextButton();


    /*
     * Tampilkan result fullscreen
     */

    ui.result.style.display =
        "block";

    ui.result.classList.add("show");

}


/* ==================================================
   10. HIDE RESULT
   ================================================== */

function hideResult() {

    ui.result.classList.remove("show");

    ui.result.style.display =
        "none";

}


/* ==================================================
   11. NEXT LEVEL
   ================================================== */

ui.nextButton.addEventListener("click", () => {

    const selectedLevel =
        Number(ui.level.value);

    const currentLevel =
        levels[selectedLevel];


    /*
     * Jika tidak ada level berikutnya
     */

    if (
        !currentLevel ||
        currentLevel.next === null
    ) {

        hideResult();

        showMessage(
            "🎉 Semua level telah selesai!",
            "success"
        );

        return;

    }


    /*
     * Pindah ke level berikutnya
     */

    ui.level.value =
        currentLevel.next;


    /*
     * Reset tampilan
     */

    ui.secretCode.value = "";

    clearMessage();

    hideResult();

    updateNextButton();


    /*
     * Fokus kembali ke input
     */

    ui.secretCode.focus();

});


/* ==================================================
   12. UPDATE NEXT BUTTON
   ================================================== */

function updateNextButton() {

    const selectedLevel =
        Number(ui.level.value);

    const currentLevel =
        levels[selectedLevel];


    if (
        currentLevel &&
        currentLevel.next !== null
    ) {

        ui.nextButton.textContent =
            "➡ NEXT LEVEL";

        ui.nextButton.style.display =
            "block";

    } else {

        ui.nextButton.textContent =
            "🏆 SELESAI";

        ui.nextButton.style.display =
            "block";

    }

}


/* ==================================================
   13. MESSAGE
   ================================================== */

function showMessage(
    text,
    type = ""
) {

    ui.message.textContent =
        text;

    ui.message.className =
        type;

}


function clearMessage() {

    ui.message.textContent =
        "";

    ui.message.className =
        "";

}