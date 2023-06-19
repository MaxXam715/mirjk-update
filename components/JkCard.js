export default function JkCard(jk) {

    console.log(jk.title, jk);

    var photo = (jk.hasOwnProperty('photos') && jk.photos.length != 0) ? 'https://planetarf.ru/uploads/mirjk/galleries/' + jk.photos.shift().file : '/assets/img/photo-nan.jpg',
        nameJK = (jk.title != undefined && jk.title != '') ? jk.title : 'NaN',
        address = `${jk.city}, ${(jk.okrug != '') ? jk.okrug+',' : ''} ${jk.streetType} ${jk.street} ${jk.numType} ${jk.num}`,
        developer = (jk.hasOwnProperty('photos') && Object.keys(jk.photos).length != 0) ? jk.participants[Object.keys(jk.participants)[0]].company.title : 'NaN',
        housingClass = (jk.class == '1') ? 'Эконом' :
                        (jk.class == '2') ? 'Бизнес' :
                        (jk.class == '3') ? 'Элитное' : 'NaN';


    var html = `
    <div class="G-card-jk" id="${jk.id}">
        <div class="photo-container">
            <a href="/novostroyki/${jk.seo_title}" target="_blank" class="photo-link">
                <div class="img-wrapper">
                    <img src="${photo}" alt="${jk.title}">
                </div>
            </a>
        </div>
        <div class="jk-info">`;
            if (jk.hasOwnProperty('groups') && Object.keys(jk.groups).length != 0) {

                // var arrayRooms = [],
                //     object = $.extend({}, object1, object2);

                for (var i in jk.groups.rooms) {
                    console.log('komnat', i)
                }

                console.log('----------------')

            html += `
            <div class="info-toggle" style="">
                <div class="offers">
                    <ul class="offers-list">`;
                        for (var itemRoom in jk.groups.rooms) {
                            var room = jk.groups.rooms[itemRoom];
                            html += `
                            <li class="offer-item">
                                <a href="/novostroyki/metropoliya/kvartiry?rooms[]=0" class="link"><span class="rooms">${itemRoom}</span></a>
                                <p class="square">от ${room.min_square} м²</p>
                                <p class="price">от ${numberWithSpaces(room.min_cost)} млн.₽</p>
                            </li>`;
                        }
                        html += `
                    </ul>
                </div>
            </div>`;
            }
            html += `
            <div class="info-footer">
                <a href="/novostroyki/metropoliya" target="_blank" class="jk-name">${nameJK}</a>`;
                    if (jk.hasOwnProperty('metros') && jk.metros.length != 0) {
                        html += `
                        <div class="jk-metro">
                            <div class="item">
                                <p class="name-branch"><span class="color-branch" style="background-color: ${jk.metros.shift().color}"></span>${jk.metros.shift().title}</p>
                                <span class="walking-metro"><i class="icon walking-people"></i> 5 мин.</span>
                            </div>
                        </div>`;
                    }
                    html += `
                <p class="jk-address">${address}</p>
                <div class="indicators">
                    <p class="point cost">от ${numberWithSpaces(jk.filters.min_cost)} ₽ за м²</p>
                    <p class="point category">${housingClass}</p>
                    <p class="point deadline">Сдача в ${dt_format(jk.date_end, "Q Y")}</p>
                </div>
                <p class="toggle-btn">Раскрыть</p>
            </div>
    
            <p class="developer">Застройщик <span>«${developer}»</span>
            </p>
        </div>
    </div>`;
    return html;
}