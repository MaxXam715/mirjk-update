function HeaderMain() {
    var html = `
    <header class="G-header header">
        <div class="G-container">
            <div class="wrapper-container">
                <a href="/" class="logo"><img src="/assets/img/logotype.svg" alt="" class="logo-image"></a>
                <nav class="menu-nav">
                    <ul class="menu-list">
                        <li class="list-item"><a href="/kvartiry-v-novostroykax" class="link">Квартиры в новостройках</a>
                        </li>
                        <li class="list-item"><a href="/novostroyki" class="link">Жилые Комплексы</a></li>
                        <li class="list-item"><a href="/novostroyki-na-karte" class="link">Новостройки на карте</a></li>
<!--                        <li class="list-item"><a href="/blog-posts" class="link">Блог</a></li>-->
                    </ul>
                </nav>
                <div class="special"></div>
                <div class="burger js-burger"><span class="line"></span></div>
            </div>
        </div>
    </header>`;
    html = $(html);
    $('#app').before(html);

    //Показать скрыть меню при скролле
    hideShowHeader()

    //открытие закрытие меню по клику на бургер
    $('.G-header .burger').on('click', function () {
        $(this).toggleClass('active')
        $('.G-header').toggleClass('active')
        $('body').toggleClass('no-scroll')
    });
}

function hideShowHeader() {
    const $header = $(".G-header")
    let lastScroll = 0;

    $(window).scroll(function() {
        const hidePosition = 50;

        if (window.scrollY > hidePosition) {
            $header.css('box-shadow','0 4px 24px rgba(0, 0, 0, 0.08)')
        } else {
            $header.css('box-shadow', 'none')
        }

        if (window.scrollY > hidePosition && window.scrollY > lastScroll) {
            $header.addClass('hidden')
        } else {
            $header.removeClass('hidden')
        }
        lastScroll = window.scrollY;
    })
}