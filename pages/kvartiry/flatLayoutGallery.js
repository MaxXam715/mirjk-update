export default function flatLayoutGallery() {
    var html = `
    <div class="left-side">
        <div class="flat-gallery-wrapper">
            <div class="splide-wrapper splide js-splide-flat-gallery">
                <div class="splide__track ">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <img data-fancybox="gallery" src="https://mirjk.ru/images/flat-layout.png" alt="img" class="slide-photo">
                        </li>
                        <li class="splide__slide">
                            <img data-fancybox="gallery" src="https://sportishka.com/uploads/posts/2022-11/1667522638_1-sportishka-com-p-zal-dizain-krasivo-1.jpg" alt="img" class="slide-photo">
                        </li>
                    </ul>
                </div>
                <div class="splide__arrows slider-arrows left">
                    <button class="splide__arrow splide__arrow--prev" type="button"><i class="icon arrow-left"></i></button>
                </div>
                <div class="splide__arrows slider-arrows right">
                    <button class="splide__arrow splide__arrow--next" type="button"><i class="icon arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>`;
    html = $(html);
    $('.P-flat-card .flat-container').append(html);

    new Splide( '.js-splide-flat-gallery', {
        type: 'slide',
        perPage: 1,
        pagination: true
    }).mount();
}