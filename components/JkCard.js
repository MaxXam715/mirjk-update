export default function JkCard(jk) {
    // console.log(jk);
    // console.log(jk.photos);
    console.log(jk.title, jk);

    // console.log(jk.groups)

    // const keys = Object.keys(jk.photos);
    // let photo;
    // if (jk.photos !== undefined) {
    //     photo = jk.photos[keys[0]];
    // } else {
    //     photo = {file: ''};
    // }

    const photo = (jk.hasOwnProperty('photos') && jk.photos.length !== 0) ? 'https://planetarf.ru/uploads/mirjk/galleries/' + jk.photos[0].file : '/assets/img/photo-nan.jpg';
    const address = `${jk.city}, ${(jk.okrug !== '') ? jk.okrug+',' : ''} ${jk.streetType} ${jk.street}, ${jk.numType} ${jk.num}`;
    const nameJK = (jk.title !== undefined && jk.title !== '') ? jk.title : 'NaN';
    const developer = (jk.hasOwnProperty('participants') && Object.keys(jk.participants).length !== 0) ? jk.participants[Object.keys(jk.participants)[0]].company.title : 'NaN';
    const housingClass = (jk.class === '1') ? 'Эконом' :
                         (jk.class === '2') ? 'Бизнес' :
                         (jk.class === '3') ? 'Элитное' : 'NaN';



    var html = `
    <div class="G-card-jk" id="${jk.id}">
        <div class="photo-container">
            <a href="/novostroyki/${jk.seo_title}" target="_blank" class="photo-link">
                <div class="img-wrapper"> <img src="${photo}" alt="${jk.title}"></div>
            </a>
        </div>
        <div class="jk-info">`;
            if (jk.hasOwnProperty('groups') && Object.keys(jk.groups).length !== 0) {
            html += `
            <div class="info-toggle" style="">
                <div class="offers">
                    <ul class="offers-list">`;
                        for (let room in jk.groups.rooms) {
                            if (room == 'E2' || room == 'E3' || room == 'E4' || room == 'E5') break;
                            const group = jk.groups.rooms[room],
                                  rooms_txt = (room == '0') ? 'Студия' :
                                      (room == 'A') ? 'Апартаменты' : room + '-комнатная';
                            html += `                                                        
                            <li class="offer-item">                                        
                                <a href="/novostroyki/${jk.seo_title}" class="link"><span class="rooms">${rooms_txt}</span></a>
                                <p class="square">от ${group.min_square} м²</p>
                                <p class="price">от ${numberWithSpaces(group.min_cost / 1000000, 2)} млн.&nbsp;₽</p>
                            </li>`;
                        }
                    html += `
                    </ul>
                </div>
            </div>`;
            }
            html += `
            <div class="info-footer">
                <a href="/novostroyki/${jk.seo_title}" target="_blank" class="jk-name">${nameJK}</a>`;
                    if (jk.hasOwnProperty('metros') && jk.metros.length !== 0) {
                        html += `
                        <div class="jk-metro">
                            <div class="item">
                                <p class="name-branch"><span class="color-branch" style="background:${jk.metros[0].color}"></span>${jk.metros[0].title}</p>
                                <span class="walking-metro"><i class="icon walking-people"></i> ${jk.metros[0].duration} мин.</span>
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