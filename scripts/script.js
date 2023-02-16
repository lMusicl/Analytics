$(document).ready(function () {
// меню бургер
    let menu = $('#menu');
// открываем меню
    $('#burger').on('click', function () {
        menu.addClass('open');
    });
// закрытие при нажатии на любой из элементов
    $.each(menu.find('*'), (index, value) => {
        value.onclick = () => {
            menu.removeClass('open');
        }
    })
})