export default function FlatCard_horizontal(flat, allData) {

    // console.log('allData', allData)
    console.log('#'+flat.id+', '+flat.allSquare+' m.', flat);

    var layoutFlat = (flat.hasOwnProperty('layout') && flat.layout.length != 0 && flat.layout.complete) ? 'https://planetarf.ru/uploads/mirjk/places/'+flat.layout : '/assets/img/photo-nan.jpg',
        jk = allData.jks[flat.id_jk],
        photoJK = jk.photos,
        rooms_title = (flat.rooms == 0) ? 'Студия' : (flat.isApartments != 0) ? 'Апартаменты' : flat.rooms+'-комн. кв.',
        floorOf = jk.filters.max_floor,
        housingClass = (jk.class == '1') ? 'Эконом' : (jk.class == '2') ? 'Бизнес' : (jk.class == '3') ? 'Элитное' : 'NaN',
        address = `${jk.city}, ${(jk.okrug != '') ? jk.okrug+',' : ''} ${jk.streetType} ${jk.street} ${jk.numType} ${jk.num}`,
        developer = (jk.hasOwnProperty('participants') && Object.keys(jk.participants).length != 0) ? jk.participants[Object.keys(jk.participants)[0]].company.brand.title : 'NaN';


    var html = `
    <div class="G-flat-item" id="place.id">
        <div class="flat-gallery href" target="blank" href="place_url">
            <div class="main-photos">
                <div class="photo-item">
                    <img src="${layoutFlat}" alt="layout">
                </div>
            </div>
            <div class="bottom-photos">`;
                for (var i = 0; i < 3; i++) {
                    html += `
                    <div class="photo-item">
                        <img src="https://planetarf.ru/uploads/mirjk/galleries/${photoJK[i].file}" alt="img-jk" class="img-jk">
                    </div>`;
                }
                html += `
            </div>
        </div>
        <div class="flat-info">
            <!--    ниже только на планшете-->
            <div class="developer-info tab-mob">
                <span class="subtitle">Застройщик</span>
                <h3 class="title">${developer}</h3>
            </div>
            <!--  выше только на планшете-->
            <a href="/kvartiry?id=${flat.id}" class="info-header href" target="blank" href="place_url">${rooms_title}, ${flat.allSquare} м², ${flat.floor}/${floorOf} этаж </a>
            <div class="subtitle">
            <!-- За кв метр, класс, дата сдачи  -->
            <span>${jk.title}</span>
            <span>${housingClass}</span>
            <span>Сдача в ${dt_format(jk.date_end, "Q Y")}</span>
        </div>
<!--        <div class="advantages">-->
<!--            <div class="advantage-item">Индивидуальная планировка</div>-->
<!--            <div class="advantage-item">Ипотека 0,1 %</div>-->
<!--            <div class="advantage-item">С отделкой</div>-->
<!--            <div class="advantage-item">Без первого взноса</div>-->
<!--        </div>-->
        <!--    ниже            только на планшете-->
        <div class="developer-info tab-mob">
            <p class="name-jk">${jk.title}</p>
        </div>
        <div class="G-address address">
            <div class="location">
                <div class="place"><i class="icon location-icon"></i>${address}</div>`;
                    if (jk.hasOwnProperty('metros') && jk.metros.length != 0) {
                        html += `
                        <div class="metro"><i class="icon metro-icon" style="background-color: "></i>${jk.metros.shift().title}</div>
                        <div class="walk-metro "><i class="icon walking-people"></i>${jk.metros.shift().duration} минут пешком</div>`;
                    }
                html += `            
            </div>
        </div>
        <div class="G-prices price-wrapper">
            <div class="price-row">
                <p class="full-price">${numberWithSpaces(flat.AgentCost)} ₽</p>
                <p class="price-mortgage">В ипотеку от 545 495 ₽/мес.</p>
            </div>
            <div class="price-row"><p class="price-per-meter">${numberWithSpaces(flat.AgentPrice)} ₽/м²</p></div>
        </div>
        <p class="flat-description">
            Продаётся ${rooms_title} от застройщика без комиссии общей площадью ${flat.allSquare} м² c просторной кухней 6.4 м²
            на ${flat.floor} этаже в корпусе Корпус 1 ЖК Селигер Сити. Срок сдачи 4 кв. 2022 года.
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
            <h3 class="title">${developer}</h3>
            <a href="#" class="all-jk-developer">Посмотреть все ЖК застройщика</a>
            <a href="tel:$brand.tel" tel="brand.tel" class="open-phone btn btn--transparent tel">Показать номер</a>
        </div>
    </div>`;

    return html;
}