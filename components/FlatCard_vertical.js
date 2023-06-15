export default function FlatCard_vertical() {
    var html = `
    <div class="G-flat-item" id="place.id">
        <div class="flat-gallery href" target="blank" href="place_url">
            <div class="main-photos">
                <div class="photo-item">
                    <img src="https://mirjk.ru/images/flat-layout.png" alt="">
                </div>
            </div>
            <div class="bottom-photos">
                <div class="photo-item">
                    <img src="https://mirjk.ru/images/flat-bottom-photo.jpg" alt="">
                </div>
                <div class="photo-item">
                    <img src="https://mirjk.ru/images/flat-bottom-photo.jpg" alt="">
                </div>
                <div class="photo-item">
                    <img src="https://mirjk.ru/images/flat-bottom-photo.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="flat-info">
            <!--    ниже только на планшете-->
            <div class="developer-info tab-mob">
                <span class="subtitle">Застройщик</span>
                <h3 class="title">brand.title</h3>
            </div>
            <!--  выше только на планшете-->
            <div class="info-header href" target="blank" href="place_url">1-комн. кв., 58 м², 8/21 этаж </div>
            <div class="subtitle">
            <!-- За кв метр, класс, дата сдачи  -->
            <span>121549 ₽ за м<sup>2</sup></span>
            <span>Бизнес</span>
            <span>Сдача в 4 квартал 2024</span>
        </div>
        <div class="advantages">
            <div class="advantage-item">Индивидуальная планировка</div>
            <div class="advantage-item">Ипотека 0,1 %</div>
            <div class="advantage-item">С отделкой</div>
            <div class="advantage-item">Без первого взноса</div>
        </div>
        <!--    ниже            только на планшете-->
        <div class="developer-info tab-mob">
            <p class="name-jk">ЖК Название</p>
        </div>
        <div class="address">
            <div class="location">
                <div class="place"><i class="icon location-icon"></i>Москва, пр-т Ленинградский, 8</div>
                <div class="metro"><i class="icon metro-icon"></i>Белорусская</div>
                <div class="walk-metro "><i class="icon walking-people"></i>11 минут пешком</div>
            </div>
        </div>
        <div class="price-wrapper">
            <div class="price-row">
                <p class="full-price">15 118 918 ₽</p>
                <p class="price-mortgage">В ипотеку от 545 495 ₽/мес.</p>
            </div>
            <div class="price-row"><p class="price-per-meter">150 025 ₽/м²</p></div>
        </div>
        <p class="flat-description">
            Продаётся room_txt.кв от застройщика без комиссии общей площадью place.allSquare м² c просторной кухней 6.4 м²
            на place['floor'] этаже в корпусе Корпус 1 ЖК Селигер Сити. Срок сдачи 4 кв. 2022 года.
        </p>
        <a href="" class="same-flats">Ещё 11 таких же квартир в этом ЖК</a>
        <!-- только на планшете-->
        <div class="developer-info tab-mob">
            <a href="tel:brand.tel" tel="brand.tel" class="open-phone btn btn--transparent tel">Показать номер</a>
        </div>
        <!-- только на планшете-->
        </div>
        <div class="developer-info">
            <span class="subtitle">Застройщик</span>
            <h3 class="title">Застройщик</h3>
            <p class="name-jk">Название ЖК</p>
            <a href="#" class="all-jk-developer">Посмотреть все ЖК застройщика</a>
            <a href="tel:$brand.tel" tel="brand.tel" class="open-phone btn btn--transparent tel">Показать номер</a>
        </div>
    </div>`;

    return html;
}