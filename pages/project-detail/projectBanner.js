export default function projectBanner() {

    var heightNav = $('.G-header').innerHeight(),
        heightWindow = window.innerHeight;

    var html = `
    <section class="P-container-jk-banner" data-id-jk="123" style="height: calc(100vh - ${heightNav}px)">
        <div class="wrapper-container">
            
            <!--Слайдер + текст + кнопки -->
            <div class="slider-wrapper">
                <div class="splide slider-banner js-splide-jk-banner">
                    <!-- сами изображения слайдера -->
                    <div class="splide__track">
                        <ul class="splide__list slider-items">
                            <li class="splide__slide slider-item">
                                <div class="splide-content img-back" style="background-image: url(https://mirjk.ru/images/jk-banner.jpg)"></div>
                            </li>
                            <li class="splide__slide slider-item">
                                <div class="splide-content img-back" style="background-image: url(https://mirjk.ru/images/jk-banner.jpg)"></div>
                            </li>
                            <li class="splide__slide slider-item">
                                <div class="splide-content img-back" style="background-image: url(https://mirjk.ru/images/jk-banner.jpg)"></div>
                            </li>
                        </ul>
                    </div>
    
                    <div class="splide__arrows G-container banner-arrows">
                        <button class="splide__arrow splide__arrow--prev arrow"><i class="icon arrow-left"></i></button>
                        <button class="splide__arrow splide__arrow--next arrow"><i class="icon arrow-right"></i></button>
                    </div>
    
                    <!-- кнопка в галерею -->
                    <div class="to-gallery">
                        <div class="G-container">
                            <button type="button" class="btn-gallery btn btn--gray">
                                <i class="icon gallery"></i>
                                Галерея ЖК
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="anchors-wrapper ">
                <div class="anchors">
                    <a href="#" class="anchor-link"><span>11 фото</span></a>
                    <a href="#" class="anchor-link"><span>Характеристики</span></a>
                    <a href="#" class="anchor-link"><span>Квартиры</span></a>
                    <a href="#" class="anchor-link"><span>Расположение</span></a>
                    <a href="#" class="anchor-link"><span>Ипотеки</span></a>
                    <a href="#" class="anchor-link"><span>О ЖК</span></a>
                    <a href="#" class="anchor-link"><span>Ход строительства</span></a>
                    <a href="#" class="anchor-link"><span>Похожие ЖК</span></a>
                </div>
            </div>
    
            <!-- текстовый блок -->
            <div class="inner-content">
                <div class="G-container">
                    <div class="advantages-wrapper">
                        <div class="advantages">
                            <div class="advantage-item">Индивидуальная планировка</div>
                            <div class="advantage-item">Ипотека 0,1 %</div>
                            <div class="advantage-item">С отделкой</div>
                        </div>
                    </div>
                    <h2 class="main-title">ЖК Название  <? echo $jk['title'] ?></h2>
                    <div class="price-range">от 80,4 млн ₽ до 731,9 млн ₽</div>
                    <div class="price-per-meter-range">от 1 914 983 до 3 658 429 ₽/м²</div>
                    <div class="banner-buttons">
                        <button type="button" class="btn btn-primary">Выбрать квартиру</button>
                        <a href="tel:" tel="84951234567" class="open-phone btn btn--white tel">Показать телефон</a>
                    </div>
                </div>
            </div>
            
            <!-- Нижняя панель баннера -->
            <div class="bottom-panel">
                <div class="G-container">
                    <div class="item">
                        <span class="subtitle">Ближайшее метро</span>
                        <span class="text branch">
                            <span class="color-branch"></span>
                            <span class="value">Белорусская</span>
                        </span>
                    </div>
                    <div class="item">
                        <span class="subtitle">Срок сдачи</span>
                        <span class="text">
                            <span class="value">В III квартале 2024 г.</span>
                        </span>
                    </div>
                    <div class="item">
                        <span class="subtitle">Класс ЖК</span>
                        <span class="text">
                            <span class="value">Премиум</span>
                        </span>
                    </div>
                    <div class="item">
                        <span class="subtitle">Застройщик</span>
                        <span class="text">
                            <span class="value">MR Group</span>
                        </span>
                    </div>
    
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    let sliderJKBanner = new Splide('.js-splide-jk-banner', {
        type: 'fade',
        arrows: true,
        // autoplay: true,
        rewind: true,
        interval: 6000,
        speed: 2000,
        rewindSpeed: 1700,
        lazyLoad: 'sequential',
        classes: {
            pagination: 'splide__pagination jk-banner-pagination',
            page: 'splide__pagination__page js-splide-jk-banner',
        },
    }).mount();

    const section = html.find('.slider-wrapper')
    const heightSection = section.innerHeight();
    const heightBtn = html.find('.banner-buttons').innerHeight();
    console.log('высота кнопки', heightBtn)
    if (window.innerWidth <= 911) {
        // $section.css('height','calc(100vh - ${heightNav}px - ${heightContent})')
        // console.log(section.css('height'));
        // const height = heightSection - heightBtn
        // section.css('height', `${height}px`)

        $('.P-container-jk-banner').css('height', `calc(100vh - ${heightNav}px - ${heightBtn}px)`)
    }
}