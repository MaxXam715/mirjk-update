export default function flatInfoParams(flat) {
    var html = `
    <div class="right-side">
        <div class="flat-about">
            <!-- Заголовок квартиры -->
            <h2 class="title-flat">Студия, 33.2 м² <br>в <a href="/novostroyki/seliger_siti">ЖК Селигер Сити</a>
            </h2>
            <!-- Адрес -->
            <div class="address-row">
                <div class="G-address address">
                    <div class="location">
                        <div class="place">
                            <!--                                    <i class="icon location-icon"></i>-->
                            Москва, пр-т Ленинградский, 8
                        </div>
                        <div class="metro"><i class="icon metro-icon"></i>Белорусская</div>
                        <div class="walk-metro "><i class="icon walking-people"></i>11 минут пешком</div>
                    </div>
                </div>
                <!--                        <div class="address-icon"><img src="/images/address-icon.svg" alt=""></div>-->
            </div>
        
            <div class="G-prices price-wrapper">
                <div class="price-row">
                    <p class="full-price">14 085 970 <span class="rub">₽</span></p>
                    <p class="price-mortgage">В ипотеку от 105 072 ₽/мес.</p>
                </div>
                <div class="price-row">
                    <p class="price-per-meter">425 558 ₽/м²</p>
                </div>
            </div>
        
            <div class="advantages">
                <div class="advantage-item">Индивидуальная планировка</div>
                <div class="advantage-item">Ипотека 0,1 %</div>
                <div class="advantage-item">С отделкой</div>
                <div class="advantage-item">Без первого взноса</div>
            </div>
        
            <ul class="flat-features">
                <li class="item">
                    <span class="subtitle">Общая площадь</span>
                    <span class="value">33.2&nbsp;м²</span>
                </li>
                <li class="item">
                    <span class="subtitle">Жилая площадь</span>
                    <span class="value">33.2&nbsp;м²</span>
                </li>
                <li class="item">
                    <span class="subtitle">Этаж</span>
                    <span class="value">19</span>
                </li>
                <li class="item">
                    <span class="subtitle">Срок сдачи</span>
                    <span class="value">3 кв. 2026 г.</span>
                </li>
                <li class="item">
                    <span class="subtitle">Срок сдачи</span>
                    <span class="value">3 кв. 2026 г.</span>
                </li>
                <li class="item">
                    <span class="subtitle">Срок сдачи</span>
                    <span class="value">3 кв. 2026 г.</span>
                </li>
            </ul>
        
            <div class="show-all js-flat-show-more">
                <span class="text">Все характеристики</span>
                <i class="icon arrow-right-fat"></i>
            </div>
        
            <div class="phone">
                <a class="btn btn-primary tel" tel="+7 (495) 021-19-12" href="tel:+7 (495) 021-19-12">Показать телефон</a>
            </div>
        </div>
    </div>`;
    html = $(html);
    $('.P-flat-card .flat-container').append(html);
}