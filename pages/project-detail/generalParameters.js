export default function generalParameters() {
    var html = `
    <section class="P-general-parameters">
        <div class="G-container">
            <div class="content-wrapper">
                <div class="location-row">
                    <div class="map-wrapper"><img src="https://mirjk.ru/images/jk-fast-info-map.png" alt=""></div>
                    <div class="text-info">
                        <span class="subtitle">Расположение</span>
                        <span class="address">Москва, пр-т Ленинградский, 8</span>
                        <div class="metro">
                            <span class="name"> <i class="icon metro-icon" style="background-color: #B1C828"></i>Белорусская</span>
                            <span class="walk-metro"><i class="icon walking-people"></i>11 минут пешком</span>
                        </div>
                    </div>
                </div>
                <div class="items-wrapper">
                    <div class="info-items">
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/deadline.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Срок сдачи</span>
                                <span class="value">В III квартале 2024 г.</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/flat-category.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Класс</span>
                                <span class="value">Премиум</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/floors.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Этажность</span>
                                <span class="value">От 12 до 40 этажей</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/buildings.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Корпусов</span>
                                <span class="value">3 корпуса</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/parking.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Варианты парковки</span>
                                <span class="value">Подземная и гостевая</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/type-house.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Тип дома</span>
                                <span class="value">Монолитно-кирпичный</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/ceiling-height.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Высота потолков</span>
                                <span class="value">от 3,37 м до 3,98 м</span>
                            </div>
                        </div>
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="https://mirjk.ru/images/finishing.svg" alt="">
                            </div>
                            <div class="text">
                                <span class="subtitle">Отделка</span>
                                <span class="value">Без отделки, черновая</span>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);
}