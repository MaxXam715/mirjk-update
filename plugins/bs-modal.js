// инициализация модального окна
function initModal(modal) {
    var classList = $(modal)[0].classList[1];
    $('body').append(modal);
    openModalWindow(classList);
}

// Открыть модальное окно (функция)
function openModalWindow(modal) {
    $('body').addClass('no-scroll');
    setTimeout(function () {
        $('.bs-modal.' + modal).addClass('open');
    }, 50)
}

// Закрыть модальное окно (функция)
function closeModalCallBack(target) {
    if ( target == undefined) {
        target = $('.bs-modal:last-child');
    }
    $(target).removeClass('open');
    if($(target).attr('id')!=undefined && $(target).attr('id') == 'filterModal'){
        $(target).hide();
        $('body').removeClass('no-scroll');
    }else {
        setTimeout(function () {
            $(target).remove();
            if ($('.bs-modal.open').length == 0) {
                $('body').removeClass('no-scroll');
            }
        }, 320);
    }
}

// Закрыть модальное окно по фону
$(document).on('mouseup', '.bs-modal', function (e) {
    var target = $(e.target);
    if ($(this).has(e.target).length === 0){
        closeModalCallBack(target);
    }
});

// Закрыть модальное окно по крестику
$(document).on('click', '.bs-modal .btn-close-modal', function (e) {
    var target = $(e.target).closest('.bs-modal');
    closeModalCallBack(target);
});

// Закрыть модальное окно по ESC
$(document).on('keyup', function(e, target) {
    if (e.key == "Escape" && $('.bs-modal').length > 0) {
        closeModalCallBack(target);
    }
});
