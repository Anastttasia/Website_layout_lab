const form = document.querySelector('.form')

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
    if (nameInput.value.trim() === '') {
        event.preventDefault(); // Предотвратить отправку
        errorMsg.textContent = 'Это поле обязательно для заполнения!';
        nameInput.setAttribute('aria-invalid', 'true'); // Для доступности
    } else {
        errorMsg.textContent = ''; // Очистить ошибку
        nameInput.setAttribute('aria-invalid', 'false');
    }
});

