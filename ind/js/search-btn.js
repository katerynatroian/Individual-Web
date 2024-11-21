const searchInput = document.querySelector(".search-input");

// Обробка натискання Enter
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Перевіряємо, чи натиснуто Enter
        event.preventDefault(); // Запобігаємо стандартному поведінці форми (якщо це форма)
        performSearch();
    }
});

function performSearch() {
    const query = searchInput.value.toLowerCase().trim(); // Зчитуємо запит, переводимо в нижній регістр

    if (!query) {
        alert("Будь ласка, введіть запит для пошуку.");
        return;
    }

    // Логіка пошуку для сторінок
    if (query.includes("відкрити") || query.includes("банк лепреконів") || query.includes("магічний рахунок") || query.includes("головна") || query.includes("сторінка") || query.includes("головна сторінка")) {
        window.location.href = "main_page.html";  
        return; // Використовуємо return, щоб зупинити подальше виконання функції
    } else if (query.includes("послуги") || query.includes("банк") || query.includes("лепреконів")) {
        window.location.href = "services_page.html";
        return;
    } else if (query.includes("історія") || query.includes("традиції")) {
        window.location.href = "history_page.html";
        return; // Зупиняємо функцію після переходу
    } else if (query.includes("команда") || query.includes("чарівна") || query.includes("наша")) {
        window.location.href = "team_page.html";
        return;
    }

    // Логіка пошуку для команди
    if (query.includes("фінбар") || query.includes("професор фінбар") || query.includes("мудрий") || query.includes("наставник")) {
        window.location.href = "team_page.html#finbar"; 
        return;
    } else if (query.includes("кормак") || query.includes("дружній") || query.includes("банкір")) {
        window.location.href = "team_page.html#kormak"; 
        return;
    } else if (query.includes("айдан") || query.includes("веселий") || query.includes("радник")) {
        window.location.href = "team_page.html#aidan"; 
        return;
    } else if (query.includes("коналл") || query.includes("професор коналл") || query.includes("хранитель") || query.includes("скарбів")) {
        window.location.href = "team_page.html#konall"; 
        return;
    }

    // Логіка пошуку для історії
    if (query.includes("академія чарівних фінансів") || query.includes("академія") || query.includes("чарівних") || query.includes("фінансів")) {
        window.location.href = "history_page.html#academy"; 
        return;
    } else if (query.includes("про банк лепреконів") || query.includes("про банк")) {
        window.location.href = "history_page.html#about-bank"; 
        return;
    } else if (query.includes("казан багатства лепреконів") || query.includes("казан багатства") || query.includes("казан") || query.includes("багатства")) {
        window.location.href = "history_page.html#cauldron"; 
        return;
    }
    
    // Логіка пошуку для послуг
    if (query.includes("депозити в чарівному золоті") || query.includes("депозити")) {
        window.location.href = "services_page.html#deposits_more"; 
        return;
    } else if (query.includes("магічні кредити") || query.includes("кредити")) {
        window.location.href = "services_page.html#credits_more"; 
        return;
    } else if (query.includes("захист скарбів") || query.includes("захист")) {
        window.location.href = "services_page.html#protection_more"; 
        return;
    } else if (query.includes("інвестиції в казкові активи") || query.includes("інвестиції")) {
        window.location.href = "services_page.html#investment_more"; 
        return;
    }
}
