document.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы DOM
    const timeDisplayElement = document.getElementById('timeDisplay');
    const statusElement = document.getElementById('statusMessage');
    const loggerOutputElement = document.getElementById('loggerOutput');

    // Функция форматирования времени
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            fractionalSecondDigits: 3 
        });
    }

    // Функция отображения текущего времени
    function displayCurrentTime() {
        const currentTime = Date.now();
        if (timeDisplayElement) {
            timeDisplayElement.textContent = `Текущее время: ${formatTimestamp(currentTime)}`;
        }
    }

    // Функция для создания логгера с определенным уровнем
    function createLogger(level) {
        const colors = {
            'INFO': '#28a745',
            'ERROR': '#dc3545',
            'WARNING': '#ffc107'
        };

        return function(message) {
            const timestamp = formatTimestamp(Date.now());
            const logMessage = `[${timestamp}] ${level}: ${message}`;
            
            if (loggerOutputElement) {
                const logEntry = document.createElement('div');
                logEntry.style.color = colors[level] || '#000';
                logEntry.style.marginBottom = '5px';
                logEntry.textContent = logMessage;
                loggerOutputElement.appendChild(logEntry);
            }
            console.log(logMessage);
        };
    }

    // Инициализация логгеров
    const logInfo = createLogger("INFO");
    const logError = createLogger("ERROR");
    const logWarning = createLogger("WARNING");

    // Запуск периодического обновления времени
    const timeUpdateInterval = setInterval(displayCurrentTime, 5000);

    // Логируем запуск приложения
    logInfo("Приложение запущено");
    logWarning("Таймер активен, ожидание 1 минуты");

    // Установка таймера на 1 минуту
    setTimeout(() => {
        // Очищаем интервал обновления времени
        clearInterval(timeUpdateInterval);
        
        if (statusElement) {
            statusElement.textContent = "Прошла 1 минута - таймер остановлен";
        }

        logWarning("Таймер остановлен");
        logError("Демонстрация сообщения об ошибке");
        logInfo("Приложение продолжает работу");
    }, 60000);

    // Первое обновление времени
    displayCurrentTime();
});