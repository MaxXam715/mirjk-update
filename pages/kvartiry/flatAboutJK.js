export default function flatAboutJK() {
    var html = `
    <section class="G-about-jk">
        <div class="G-container">
            <div class="content-wrapper">
                <div class="top-row">
                    <div class="left-side">
                        <h2 class="title">Информация о ЖК</h2>
                    </div>
                    <div class="right-side">
                        <h4 class="title">Расположение, транспортная доступность</h4>
                        <div class="text-wrapper">
                            <p class="description">
                                Новый современный комплекс апартаментов премиум-класса SLAVA расположен в той части центра,
                                где традиция соединяется с прогрессивными городскими тенденциями. Здесь историческая Москва
                                встречается с передовым миром.
                                <br>SLAVA находится всего в 5 мин. пешком от м. «Белорусская», по-новому открывая
                                Ленинградский
                                проспект. Архитектурный почерк комплекса (1 очередь), разработанный международными бюро Dyer
                                и Gillespies, соединяет космополитичный дух с самым деликатным отношением к традиции.
                                Развитое общественное пространство комплекса SLAVA расширяет само понятие своего дома,
                                предлагая
                                интересную, разнообразную и насыщенную событиями жизнь в Москве как Лондоне или Нью-Йорке.
                                <br>SLAVA находится всего в 5 мин. пешком от м. «Белорусская», по-новому открывая
                                Ленинградский
                                проспект. Архитектурный почерк комплекса (1 очередь), разработанный международными бюро Dyer
                                и Gillespies, соединяет космополитичный дух с самым деликатным отношением к традиции.
                                Развитое общественное пространство комплекса SLAVA расширяет само понятие своего дома,
                                предлагая
                                интересную, разнообразную и насыщенную событиями жизнь в Москве как Лондоне или Нью-Йорке.
                            </p>
                            <div class="show-more js-about-jk-more">Читать больше <i class="icon caret-up"></i></div>
                        </div>
                    </div>
                </div>
                <div class="features">`;
                    if (window.innerWidth > 700) {
                        html += `
                        <div class="features-items">
                            <div class="item" data-slider="landscaping">
                                <div class="img-wrapper">
                                    <img src="http://mirjk/images/about-jk-features-3.jpg" alt="">
                                </div>
                                <div class="info">
                                    <h4 class="heading">Благоустройство</h4>
                                    <p class="description"></p>
                                </div>
                            </div>
                            <div class="item" data-slider="entry-group">
                                <div class="img-wrapper">
                                    <img src="http://mirjk/images/about-jk-features-5.jpg" alt="">
                                </div>
                                <div class="info">
                                    <h4 class="heading">Входная группа</h4>
                                    <p class="description"></p>
                                </div>
                            </div>
                            <div class="item" data-slider="day-views">
                                <div class="img-wrapper">
                                    <img src="http://mirjk/images/about-jk-features-1.jpg" alt="">
                                </div>
                                <div class="info">
                                    <h4 class="heading">Дневные виды</h4>
                                    <p class="description"></p>
                                </div>
                            </div>
                            <div class="item" data-slider="architecture">
                                <div class="img-wrapper">
                                    <img src="http://mirjk/images/about-jk-features-4.jpg" alt="">
                                </div>
                                <div class="info">
                                    <h4 class="heading">Архитектура</h4>
                                    <p class="description"></p>
                                </div>
                            </div>
                        </div>`;
                    } else {
                        html += `
                        <div class="P-tab-slider">
                            <div class="switchers-wrapper">
                                <button type="button" class="btn btn-tab" data-tab="111">Благоустройство</button>
                                <button type="button" class="btn btn-tab" data-tab="222">Входная группа</button>
                                <button type="button" class="btn btn-tab" data-tab="333">Дневные виды</button>
                                <button type="button" class="btn btn-tab" data-tab="444">Архитектура</button>
                            </div>
                        </div>
                        <div class="container-slider">
                            <!-- Append JS -->                  
                        </div>`;
                    }
                    html += `
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    // выводим данные через ТАБЫ
    html.find('.P-tab-slider .btn').click(function () {
        let selectedTab = $(this).data('tab'),
            nameTab = $(this).text();

        $(this).closest('.features').find('.container-slider').html('');

        sliderInfoJk_mob({
            title: nameTab,
            className: 'slider-123',
            data: '123',
            append: '.G-about-jk .features .container-slider'
        });

        $(this).addClass('active').siblings().removeClass('active');
    });

    if (window.innerWidth < 991) {
        sliderInfoJk_mob({
            title: 'ascasc',
            className: 'slider-landscaping',
            data: '123123123',
            append: '.G-about-jk .features .container-slider'
        });
    }

    //по нажатию на "Читать больше" открываем текст
    html.find('.js-about-jk-more').click(function () {
        const textWrapper = $(this).closest('.text-wrapper')

        if (textWrapper.hasClass('active')) {
            textWrapper.removeClass('active');
            $(this).text('Читать больше')
        } else {
            textWrapper.addClass('active');
            $(this).text('Скрыть')
        }
    });


    // выводим данные в модальное окно
    html.find('.features-items .item').click(function () {
        let selectedTab = $(this).data('slider');
        const title = $(this).find('.info .heading').text()
        //console.log('selectedTab', selectedTab)


        $(function () {
            var modal = `
            <div class="G-modal jk-info">
                <div class="container-body custom-scroll">
                    <div class="heading">
                        <h3 class="title title--h2">${title}</h3>
                        <p class="desc text text--p1">Высокий потолок в сочетании с большими окнами делает комнаты более светлыми и просторными. Он даёт возможность реализовать практически любые дизайнерские решения</p>
                    </div>
                    <div class="splide splide-wrapper ${selectedTab}" slider-title="${selectedTab}">
                        <div class="splide__track ">
                            <ul class="splide__list">
                                <li class="splide__slide">
                                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-1.jpg" alt="img" class="slide-photo">
                                </li>
                                <li class="splide__slide">
                                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-2.jpg" alt="img" class="slide-photo">
                                </li>
                                <li class="splide__slide">
                                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-3.jpg" alt="img" class="slide-photo">
                                </li>
                                <li class="splide__slide">
                                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-4.jpg" alt="img" class="slide-photo">
                                </li>
                                <li class="splide__slide">
                                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-5.jpg" alt="img" class="slide-photo">
                                </li>
                            </ul>
                        </div>
                        <div class="splide__arrows slider-arrows">
                            <button class="splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left"></i></button>
                            <button class="splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="close-modal"><span class="icon-wrapper btn-close-modal"><i class="icon close-smooth"></i></span></div>
                </div>
            </div>`;
            modal = $(modal);

            initModal(modal);

            //инициализация слайдера на странице ЖК и странице квартира
            new Splide( '.splide.'+selectedTab, {
                type: 'slide',
                // perPage: 1,
                // pagination: true,
            }).mount();
        });
    });
}

function sliderInfoJk_mob(data) {
    var slider = `
    <div class="splide splide-wrapper ${data.className}" slider-title="${data.title}">
        <div class="splide__track ">
            <ul class="splide__list">
                <li class="splide__slide">
                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-1.jpg" alt="img" class="slide-photo">
                </li>
                <li class="splide__slide">
                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-2.jpg" alt="img" class="slide-photo">
                </li>
                <li class="splide__slide">
                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-3.jpg" alt="img" class="slide-photo">
                </li>
                <li class="splide__slide">
                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-4.jpg" alt="img" class="slide-photo">
                </li>
                <li class="splide__slide">
                    <img data-fancybox="gallery" src="http://mirjk/images/about-jk-features-5.jpg" alt="img" class="slide-photo">
                </li>
            </ul>
        </div>
        <div class="splide__arrows slider-arrows">
            <button class="splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left"></i></button>
            <button class="splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right"></i></button>
        </div>
    </div>`;
    slider = $(slider);
    $(data.append).append(slider);

    console.log('slider', data)

    new Splide( '.'+data.className, {
        type: 'slide',
        perPage: 1,
    }).mount();
}