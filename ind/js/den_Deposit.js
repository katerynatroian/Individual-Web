document.getElementById('checkDepositButton').addEventListener('click', calculateDeposite);

class Deposite {
    constructor(deposit, duration, rate) {
        if (deposit > 0 && duration > 0 && rate > 0) {
            this.deposit = deposit;
            this.duration = duration;
            this.rate = rate;
        } else {
            throw new Error("Некоректні дані. Будь ласка, перевірте введення.");
        }
    }

    costTotalAmount() {
        const totalAmount = this.deposit * Math.pow(1 + this.rate / 100, this.duration);
        return totalAmount;
    }

    costProfit() {
        const totalAmount = this.costTotalAmount();
        const profit = totalAmount - this.deposit;
        return profit;
    }
}

function calculateDeposite() {
    try {
        let deposit = parseFloat(document.getElementById("deposit").value);
        let duration = parseFloat(document.getElementById("duration").value);
        let rate = parseFloat(document.getElementById("rate").value);

        const deposite = new Deposite(deposit, duration, rate);

        const totalAmount = deposite.costTotalAmount();
        const profit = deposite.costProfit();

        const resultHtml = `
            <div class="results_deposit_div_1">
                <label class="results_totalAmount_text">Загальна сума депозиту<br>наприкінці строку з<br>відсотками</label>
                <label class="results_totalAmount"><strong>${totalAmount.toFixed(2)} грн<br></strong></label>
            </div>
            <div class="results_deposit_div_2">
                <label class="results_profit_text">Ваш прибуток</label>
                <label class="results_profit"><strong>${profit.toFixed(2)} грн</strong></label>
            </div>
        `;

        const resultContainer = document.getElementById('DepositResult');
        resultContainer.innerHTML = resultHtml;
    } catch (error) {
        alert(error.message);
    }
}