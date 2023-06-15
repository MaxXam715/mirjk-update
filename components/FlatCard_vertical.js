export default function FlatCard_vertical() {
    var html = `
    <div class="flat-card-vertical" id="place.id">
        <div class="flat-gallery href" target="blank" href="place_url">
            <div class="photo-item">
                <img src="https://mirjk.ru/images/flat-layout.png" alt="">
            </div>
        </div>
        <div class="advantages">
            <div class="advantage-item">Индивидуальная планировка</div>
            <div class="advantage-item">Ипотека 0,1 %</div>
            <div class="advantage-item">С отделкой</div>
            <div class="advantage-item">Без первого взноса</div>
        </div>
        <div class="flat-info">
            <div class="info-header href" target="blank" href="place_url">1-комн. кв., 58 м², 8/21 этаж </div>
            <div class="subtitle">
                <span class="item">121549 ₽ за м<sup>2</sup></span>
                <span class="item">Бизнес</span>
                <span class="item">Сдача в 4 квартал 2024</span>
            </div>
            <a href="#" class="link-to-jk"><p class="name-jk">ЖК Название</p></a>
            <div class="G-address address">
                <div class="location">
                    <div class="place"><i class="icon location-icon"></i>Москва, пр-т Ленинградский, 8</div>
                    <div class="metro"><i class="icon metro-icon"></i>Белорусская</div>
                    <div class="walk-metro "><i class="icon walking-people"></i>11 минут пешком</div>
                </div>
            </div>
            <div class="G-prices price-wrapper">
                <div class="price-row">
                    <p class="full-price">15 118 918 ₽</p>
                </div>
            </div>
        </div>
    </div>`;

    return html;
}