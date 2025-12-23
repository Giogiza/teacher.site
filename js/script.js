// Скрипт для автоматической установки даты на всех страницах
document.addEventListener('DOMContentLoaded', function() {
    // Функция для форматирования даты в формате ДД.ММ.ГГГГ
    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    
    // Установка текущей даты во всех элементах с классом 'current-date'
    const currentDate = new Date();
    const dateElements = document.querySelectorAll('.current-date, #current-date, #update-date');
    
    dateElements.forEach(element => {
        if (element.textContent.trim() === '') {
            element.textContent = formatDate(currentDate);
        }
    });
    
    // Добавление даты в декабрьские бейджи
    const decemberBadges = document.querySelectorAll('.date-badge');
    decemberBadges.forEach(badge => {
        if (badge.textContent.includes('Декабрь')) {
            badge.textContent = `Декабрь ${currentDate.getFullYear()}`;
        }
    });
});