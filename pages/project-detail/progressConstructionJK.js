export default function progressConstructionJK() {
    var html = `
    <section class="P-construction-progress-jk">
        <div class="wrapper-container">
            <div class="G-container">
                <div class="heading">
                    <h2 class="title">Ход строительства</h2>
                    <div class="heading-right">
                        <span class="check-date">Срок сдачи ЖК:<span class="value">2 кв. 2023</span></span>
    
                    </div>
                </div>
            </div>
            <div class="G-container full-right">
                <div class="splide-wrapper splide slider-construction-progress">
                    <div class="splide__track ">
                        <ul class="splide__list">`;

                            for (var i = 0; i < 5; i++) {
                                html += `
                                <li class="splide__slide item-gallery" id-gallery="123123">
                                    <img src="https://mirjk.ru/images/construction-progress.jpg" alt="img" class="photo-place">
                                    <div class="inner">
                                        <div class="inner-top">
                                            <div class="label">20 фото</div>
                                            <div class="label">2 видео</div>
                                        </div>
                                        <div class="inner-bottom">
                                            <span class="month">Ноябрь</span>
                                            <span class="year">2022</span>
                                        </div>
                                    </div>
                                </li>`;
                            }

                            html += `
                        </ul>
                    </div>
                    <div class="splide__arrows">
                        <button class="btn btn--prev splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left"></i></button>
                        <button class="btn btn--next splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    new Splide('.slider-construction-progress', {
        type: 'slide',
        pagination: false,
        // perPage: 4,
        perMove: 1,
        gap: 24,
        breakpoints: {
            1024: {
                gap: 16,
            },
            600: {
                gap: 8,
            }
        }
    }).mount();
}