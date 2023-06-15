import JkCard from "/components/JkCard.js";

export default function similarJK() {
    var html = `
    <section class="P-similar-jk">
        <div class="G-container">
            <div class="heading">
                <h2 class="title">Похожие ЖК</h2>
                <a href="#" class="link-to-all">Смотреть все</a>
            </div>
            <div class="jk-items splide-wrapper splide slider-similar-jk">
                <div class="splide__track ">
                    <ul class="splide__list">`;
                        for (var i = 0; i < 5; i++) {
                            html += `<li class="splide__slide">${JkCard()}</li>`;
                        }
                        html += `
                    </ul>
                </div>
                <div class="splide__arrows">
                    <button class="btn splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left-fat"></i></button>
                    <button class="btn splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right-fat"></i></button>
                </div>
            </div>
    
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    new Splide('.slider-similar-jk', {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        gap: 24,
        breakpoints: {
            1024: {
                gap: 16,
            },
            600: {
                gap: 8,
            }
        },
        pagination: false
    }).mount();
}