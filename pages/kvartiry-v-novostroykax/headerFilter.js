import SearchFilter from '/components/SearchFilter.js';

export default function headerFilter() {
    var html = `
    <section id="filter_sec" class="filter_sec P-section-flats-filter">
        <div class="G-container">
            <div class="mob-heading">
                <h4 class="title">Выбор квартиры в новостройке</h4>
                <span class="founded">Найдено <span class="value">12</span> объектов</span>
                <div class="mob-buttons">
                    <button type="button" class="btn btn--blue js-open-filter">
                        <i class="icon mob-filter"></i>
                        <span>Фильтр</span>
                    </button>
                    <button type="button" class="btn btn--transparent open-map">
                        <i class="icon mob-map"></i>
                        <span>Карта</span>
                    </button>
                </div>
            </div>
        
            <div class="filter-new more-filters js-scroll-filter">
                <h2 class="filter-title">Выбор квартиры в новостройке</h2>
                <div class="heading-mob">
                    <h4 class="title">Найти квартиру</h4>
                    <div class="close js-close">
                        <i class="icon close"></i>
                    </div>
                </div>
                
                <div class="filter-container"></div>
        
                <div class="filter-buttons">
                    <button type="button" class="btn white-btn btn--gray toMap"><i class="icon location"></i>Показать на
                        карте
                    </button>
                    <div class="sorting">
                        <div class="sorting-heading btn btn--gray">
                            <p class="title">
                                <i class="icon sortArrow"></i>
                                <span>Рекомендуемые</span>
                                <i class="icon caret-up"></i>
                            </p>
        
                        </div>
                        <div class="sorting-block " uk-dropdown="mode: click">
                            <ul>
                                <li val="rec" class="active">Рекомендуемые</li>
                                <li val="costAsc">По цене (сначала дешевле)</li>
                                <li val="costDesc">По цене (сначала дороже)</li>
                                <li val="priceAsc">По цене за м2 (сначала дешевле)</li>
                                <li val="priceDesc">По цене за м2 (сначала дороже)</li>
                                <li val="area_allAsc">По общей площади (сначала маленькие)</li>
                                <li val="area_allDesc">По общей площади (сначала большие)</li>
                            </ul>
                        </div>
                    </div>
        
                    <div class="found"><span class="text">Найдено <span class="value">12</span> объектов</span></div>
                    <span class="clean-filter">Очистить фильтр<i class="icon cross"></i></span>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    SearchFilter({append: '.filter-container'});
}