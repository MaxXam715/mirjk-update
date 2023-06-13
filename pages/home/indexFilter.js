import SearchFilter from '/components/SearchFilter.js';

export default function indexFilter() {
    var html = `
    <section id="map_sec">
        <!-- blur баннера -->
        <div id="map_jpg">
            <img src="/assets/img/filter_banner-2.jpg" alt="">
            <div id="opacMainBanner"></div>
        </div>
    
        <!-- Контент -->
        <div class="G-container">
            <h1>Лучшие предложения в&nbsp;новостройках</h1>
            <p class="subtitle">Купите больше комнат за те же деньги</p>
    
            <div class="big-buttons">
                <a href="/novostroyki-na-karte" type="button" class="item open-map">
                    <img src="/assets/img/home-open-map.svg" alt="Open">
                    <span>Показать на карте</span>
                </a>
                <button type="button" class="item  js-open-filter">
                    <img src="/assets/img/home-open-filter.svg" alt="Open">
                    <span>Найти квартиру</span>
                </button>
            </div>
    
            <div class="filter-new more-filters home-filter">
                <div class="heading-mob">
                    <h4 class="title">Найти квартиру</h4>
                    <div class="close js-close">
                        <i class="icon close"></i>
                    </div>
                </div>
    
                <div class="padding" id="max_123123">
                    <!-- append filter -->
                </div>
    
                <div class="filter-buttons">
                    <button type="button" class="btn  btn--white toMap">Показать на карте</button>
                    <button type="button" class="btn btn-primary toFlats">Найти квартиру</button>
                </div>
    
            </div>
        </div>
    </section>`;
    html = $(html);
    $("#app").append(html);

    SearchFilter({append: '#max_123123'});
}