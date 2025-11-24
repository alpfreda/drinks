(function () {
    const dayOptions = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const timeOptions = ["16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00", "20:00 - 21:00", "21:13 - 22:00"];

    const SELECTORS = {
        secimLabel: '#pageContent_lblSecim',
        btnSuccess: '.btn-success',
        otpInput: '#pageContent_txtDogrulamaKodu',
        otpBtn: '#btnCepTelDogrulamaGonder',
        loginBtn: '#btnGirisYap',
        checkboxOnay: '#pageContent_cboxOnay',
        saveBtn: '#lbtnKaydet',
        mySessionsLink: '#liseanslarim a'
    };

    const selectedDayTime = {
        day: "Pazar",
        time: "16:00 - 17:00"
    };


    // ------------------ HELPER FUNCTIONS ------------------
    function getTime(el) {
        const p = el.closest("div");
        const t = p?.querySelector('[id*="SeansSaat"]');
        return t?.textContent.trim() || "";
    }

    function getDay(el) {
        const panel = el.closest(".panel-info");
        const title = panel?.querySelector(".panel-title");
        return title?.innerText.trim() || "";
    }

    function trySelectCheckbox() {
        const TARGET_DAY = selectedDayTime.day;
        const TARGET_TIME = selectedDayTime.time;
        const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:not(#pageContent_cboxOnay)'));
        const filteredCheckboxes = checkboxes.filter(cb => getDay(cb).includes(TARGET_DAY) && getTime(cb) === TARGET_TIME);
        if(filteredCheckboxes.length === 0) {
            alert(`'not found for ${TARGET_DAY} ${TARGET_TIME}`)
            return;
        }
         checkboxes.some(cb => {
             cb.click();
        });
    }

    function refreshAtNextHour() {
        let hourlyTimer = setInterval(function () {
            const now = new Date();
            const mins = now.getMinutes();
            const secs = now.getSeconds();

            // Top of the hour (xx:00:00)
            if (secs <= 1) {
                clearInterval(hourlyTimer);
                location.reload();
            }
        }, 500);
    }

    // ------------------ PAGE HANDLERS ------------------
    function loginPage() {
        const t = document.querySelector('input[name="txtTCPasaport"]');
        const p = document.querySelector('input[name="txtSifre"]');
        if (t) t.value = '99816473580';
        if (p) p.value = '1029643364';
        setTimeout(() => document.querySelector('input[name="btnGirisYap"]')?.click(), 400);
    }

    function confirmCheckboxPage() {
        document.querySelector(SELECTORS.checkboxOnay)?.click();
        document.querySelector(SELECTORS.saveBtn)?.click();
    }

    function checkboxPage() {
        trySelectCheckbox();
        refreshAtNextHour();
    }

    function listPage() {
        document.querySelector(SELECTORS.btnSuccess)?.click();
    }

    function homePage() {
       document.querySelector(SELECTORS.mySessionsLink)?.click();
    }

    function codePage() {
        document.querySelector(SELECTORS.checkboxOnay)?.click();
        const input = document.querySelector(SELECTORS.otpInput);
        const btn = document.querySelector(SELECTORS.otpBtn);
        input.focus();
        input?.addEventListener('input', () => {
            if (input.value.length === 4) btn?.click();
        });
    }

    // ------------------ AUTO-RUN ------------------
    const secimLabel = document.querySelector(SELECTORS.secimLabel);

    if (document.querySelector(SELECTORS.loginBtn)) loginPage();
    else if (document.querySelector(SELECTORS.otpInput) && document.querySelector(SELECTORS.otpBtn)) codePage();
    else if (secimLabel?.textContent === "1" && document.querySelector(SELECTORS.saveBtn)) confirmCheckboxPage();
    else if (secimLabel?.textContent === "0" && document.querySelector(SELECTORS.saveBtn)) checkboxPage();
    else if (document.querySelector(SELECTORS.btnSuccess)) listPage();
    else if (document.querySelector('#liseanslarim')) homePage();
})();
