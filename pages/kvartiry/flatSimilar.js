import FlatCard_vertical from "/components/FlatCard_vertical.js";

export default function flatSimilar() {
    var html = `
    <section class="P-same-flats">
        <div class="G-container">
            <div class="heading">
                <h2 class="title">Похожие квартиры в этом ЖК</h2>
                <a href="#" class="all-same-flats">Смотреть все</a>
            </div>
            <div class="flat-items">
                <div class="splide splide-wrapper js-same-flats-splider">
                    <div class="splide__track ">
                        <ul class="splide__list">`;
                            for (var i = 0; i < 5; i++) {
                                html += `
                                <li class="splide__slide">
                                    ${FlatCard_vertical()}
                                </li>`;
                            }
                            html += `
                        </ul>
                    </div>
                    <div class="splide__arrows slider-arrows">
                        <button class="splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left"></i></button>
                        <button class="splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right"></i></button>
                    </div>
                </div>
            </div>
    
            <div class="show-all">
                <a href="#" class="btn btn-primary all-same-flats">Смотреть все</a>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    new Splide('.js-same-flats-splider',{
        type   : 'slide',
        perPage: 4,
        gap: 40,
        pagination: false,
        breakpoints: {
            1530: {
                perPage: 3,
            },
            600: {
                gap: 16,
            },
            400: {
                perPage: 1,
            }
        }
    }).mount();
}