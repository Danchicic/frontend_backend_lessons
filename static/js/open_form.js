const openFormButton = document.querySelector('.card-wrapper');
const cardWrapper = document.querySelector('.card-wrapper');
const bodyOverlay = document.querySelector('.body-overlay');

jQuery(document).ready(function () {
    jQuery("#phone").mask("+7 (999) 999-99-99");
});


function getEventId(event) {
    return event.target.id;
}

openFormButton.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {

        let buttonId = getEventId(event);
        console.log(buttonId);
        let form = document.querySelector('#form');
        form.style.display = 'flex';
        cardWrapper.style.display = 'none';
        bodyOverlay.style.display = 'flex';

        document.querySelector('#form').onsubmit = (event) => {
            // event.preventDefault(); // Отменяем стандартное поведение отправки формы
            const checkbox = document.querySelector('#tos');
            if (checkbox.checked) {
                checkbox.parentNode.removeChild(checkbox);
                const buttonIdField = document.createElement('input');
                buttonIdField.style.display = 'none';
                buttonIdField.value = buttonId;
                buttonIdField.name = 'buttonId';
                document.getElementById('form').appendChild(buttonIdField);


                const formData = new FormData(document.getElementById('form')); // Получаем данные формы

                // Выводим данные формы в консоль
                for (const [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }


            } else {
                document.querySelector('#tos-required').style.display = 'block';
                event.preventDefault();

            }

        };


    }
})

