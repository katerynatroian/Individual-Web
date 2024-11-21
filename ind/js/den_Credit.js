document.getElementById('checkCreditButton').addEventListener('click', calculateCredit);

class Credit {
    constructor(name, job, coins, savings, realty, box, comeback) {
        if (name && job && coins > 0 && savings > 0 && realty > 0 && box > 0 && comeback) {
            this.name = name;
            this.job = job;
            this.coins = coins;
            this.savings = savings;
            this.realty = realty;
            this.box = box;
            this.comeback = comeback;
        } else {
            throw new Error("Некоректні дані. Будь ласка, перевірте введення.");
        }
    }

    calculateDays() {
        const comebackObj = new Date(this.comeback);
        const currentDate = new Date();
        const timeDiff = comebackObj.getTime() - currentDate.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysLeft;
    }

    AllCoins() {
        const daysLeft = this.calculateDays();
        const all_coins = (this.coins * (daysLeft % 30)) + this.savings + (this.realty * 26);
        return all_coins;
    }

    CreditIF() {
        const daysLeft = this.calculateDays();
        if (daysLeft <= 0) {
            throw new Error("Дата зберігання має бути в майбутньому.");
        }

        const all_coins = this.AllCoins();
        let answer = "";
        this.daysForCredit = daysLeft;
        
        if (all_coins > (this.box * 100)) {
            answer = "Ви можете взяти магічний кредит";
        } else {
            answer = "У магічному кредиті відмовлено";
            this.daysForCredit = 0;
        }

        return answer;
    }
}

function calculateCredit() {
    try {
        const name = document.getElementById("name").value;
        const job = document.getElementById("job").value;
        const coins = parseFloat(document.getElementById("coins").value);
        const savings = parseFloat(document.getElementById("savings").value);
        const realty = parseFloat(document.getElementById("realty").value);
        const box = parseFloat(document.getElementById("box").value);
        const comeback = document.getElementById("comeback").value;

        const credit = new Credit(name, job, coins, savings, realty, box, comeback);

        const answer = credit.CreditIF();
        const comeback_date = credit.daysForCredit;
        
        const resultHtml = `
            <div class="results_credit_div_1">
                <label class="results_answer_text">Інформація про<br>можливість отримання<br>кредиту</label>
                <label class="results_answer"><strong>${answer} <br></strong></label>
            </div>
            <div class="results_credit_div_2">
                <label class="results_comeback_date_text">Отримання кредиту на</label>
                <label class="results_comeback_date"><strong>${comeback_date} днів</strong></label>
            </div>
        `;

        const resultContainer = document.getElementById('CreditResult');
        resultContainer.innerHTML = resultHtml;
    } catch (error) {
        alert(error.message);
    }
}
