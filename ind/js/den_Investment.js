document.getElementById('calculateInvestmentButton').addEventListener('click', calculateInvestment);


class Investment {
    constructor(bank_name, gold_invest, home) {
        if (bank_name !== "" && gold_invest > 0 && home !== "") {
            this.bank_name = bank_name;
            this.gold_invest = gold_invest;
            this.home = home;
        } else {
            throw new Error("Некоректні дані. Будь ласка, перевірте введення.");
        }
    }

    calculateInvestmentRate() {
        const bankRates = {
            lep: 10, // 10%
            clever: 12, // 12%
            gnom_lep: 15, // 15%
            main: 8, // 8%
            clever_lep: 20, // 20%
        };
        return bankRates[this.bank_name] || 0; // Повертає ставку для обраного банку
    }

    calculateDeliveryFee() {
        const deliveryFees = {
            Lep: { lep: 5, clever: 10, gnom_lep: 15, main: 8, clever_lep: 12 },
            Gnom: { lep: 15, clever: 8, gnom_lep: 5, main: 10, clever_lep: 15 },
            Magic: { lep: 10, clever: 12, gnom_lep: 20, main: 15, clever_lep: 10 },
            Clever: { lep: 12, clever: 5, gnom_lep: 15, main: 10, clever_lep: 8 },
            Green: { lep: 8, clever: 10, gnom_lep: 12, main: 5, clever_lep: 10 },
            Clever_Lep: { lep: 10, clever: 8, gnom_lep: 12, main: 10, clever_lep: 5 },
        };

        const homeFees = deliveryFees[this.home] || {};
        return homeFees[this.bank_name] || 0;
    }

    calculateTotalProfit() {
        const rate = this.calculateInvestmentRate();
        const deliveryFee = this.calculateDeliveryFee();
        const potentialProfit = this.gold_invest * (rate / 100);
        return this.gold_invest + potentialProfit - deliveryFee; // Загальний прибуток
    }

    simulateOutcome() {
        return Math.random() > 0.5; // >50% успіх, <=50% програш
    }
}


function calculateInvestment() {
    const bankName = document.getElementById('bank_name').value;
    const goldInvest = parseInt(document.getElementById('gold_invest').value) || 0;
    const home = document.getElementById('home').value;

    if (!bankName || goldInvest <= 0 || !home) {
        alert("Будь ласка, заповніть усі поля коректними значеннями.");
        return;
    }

    try {
        const investment = new Investment(bankName, goldInvest, home);
        const totalProfit = investment.calculateTotalProfit();
        const outcome = investment.simulateOutcome();

        const resultContainer = document.getElementById('InvestmentResult');
        let resultMessage;

        if (outcome) {
            resultMessage = `
                <div class="results_Invest_div_1">
                    <label class="results_Invest_amount">
                        <strong>Вітаємо! Ваша інвестиція в банк принесла прибуток: ${totalProfit.toFixed(2)} золотих монет (з урахуванням доставки).</strong>
                    </label>
                </div>`;
        } else {
            resultMessage = `
                <div class="results_Invest_div_1">
                    <label class="results_Invest_amount">
                        <strong>На жаль, ваша інвестиція прогоріла. Ви втратили ${goldInvest} золотих монет.</strong>
                    </label>
                </div>`;
        }

        resultContainer.innerHTML = resultMessage;
    } catch (error) {
        alert(error.message);
    }
}
