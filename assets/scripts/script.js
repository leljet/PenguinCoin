// Переменные для хранения счёта
let cryptoCount = 0;

// Получаем элементы по их ID
const cryptoButton = document.getElementById('crypto-button');
const cryptoCountDisplay = document.getElementById('crypto-count');

// Обработчик клика по изображению
cryptoButton.addEventListener('click', function() {
    cryptoCount += 0.01; // Добавляем 0.01 BTC за каждый клик
    cryptoCountDisplay.innerText = `${cryptoCount.toFixed(2)} BTC`; // Обновляем отображение
});
