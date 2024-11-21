document.getElementById('checkProtectButton').addEventListener('click', calculateBankFee);

function calculateBankFee() {
    // Отримання введених даних
    const goldCoins = parseInt(document.getElementById('gold_coins').value) || 0;
    const goldBars = parseInt(document.getElementById('gold').value) || 0;
    const greenClovers = parseInt(document.getElementById('green').value) || 0;
    const protectUntil = document.getElementById('date_protect').value;

    // Перевірка, чи всі поля заповнені
    if (!protectUntil || goldCoins < 0 || goldBars < 0 || greenClovers < 0) {
        alert("Будь ласка, заповніть усі поля коректними значеннями.");
        return;
    }

    // Розрахунок кількості днів
    const currentDate = new Date();
    const protectDate = new Date(protectUntil);
    const timeDiff = protectDate.getTime() - currentDate.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (days <= 0) {
        alert("Дата зберігання має бути в майбутньому.");
        return;
    }

    // Логіка обчислення відсотка банку
    const baseRate = 5;
    const coinsFee = goldCoins * baseRate * days;
    const barsFee = goldBars * (baseRate * 1.5) * days; 
    const cloversDiscount = greenClovers * 2 * days; 
    const totalFee = Math.max(0, coinsFee + barsFee - cloversDiscount);

    // Виведення результату
    const resultHtml = `
        <div class="results_credit_div_1">
            <label class="results_credit_text">Монети, які спише<br>магічний банк</label>
            <label class="results_credit_amount"><strong>${totalFee.toFixed(2)} золотих монет</strong></label>
        </div>
        <div class="results_credit_div_2">
            <label class="results_credit_day_text">Впродовж</label>
            <label class="results_credit_day"><strong>${days} днів</strong></label>
        </div>
    `;

    const resultContainer = document.getElementById('ProtectResult');
    resultContainer.innerHTML = resultHtml;
}
