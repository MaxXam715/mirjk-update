import SearchFilter from '/components/SearchFilter.js';

export default function indexFilter() {
    var html = `
    <section class="banner">
        <!-- blur баннера -->
        <div class="banner-bg">
            <img src="/assets/img/filter_banner-2.jpg" alt="">
        </div>
    
        <!-- Контент -->
        <div class="G-container">
            <h1>Лучшие предложения в&nbsp;новостройках</h1>
            <p class="subtitle">Купите больше комнат за те же деньги</p>
    
            <div class="big-buttons">
                <a href="/novostroyki-na-karte" type="button" class="item open-map">
                    <i class="icon map-points"></i>
                    <span>Показать на карте</span>
                </a>
                <button type="button" class="item  js-open-filter">
                    <i class="icon house"></i>
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