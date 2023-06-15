export default class JK {
    classes = {0: 'не определен', 1: 'Эконом', 2: 'Комфорт', 3: 'Бизнес', 4: 'Премиум', 5: 'Элитный'};
    travel_modes = {0: 'пешком', 1: 'на транспорте'};
    #id;

    getJks(params) {
        var filter = params.filter;
        $.post('https://mirjk.planetarf.ru/api/site.php', {method: 'getJks', filter: JSON.stringify(filter)}, (res) => {
            console.log('res', res);
            for (var i in res.data) {
                params.container.append(this.tgb_tmpl(res.data[i]));
            }
            if (params.callback != undefined)
                params.callback(res);
        });

        // Раскрытие доп инфы в карточке ЖК
        $(document).on('click', '.G-card-jk .info-footer .toggle-btn', function () {
            var $footer = $(this).closest('.G-card-jk').find('.info-toggle');

            if ($footer.hasClass('active')) {
                $footer.removeClass('active');
                $(this).text('Раскрыть')
            } else {
                $footer.addClass('active');
                $(this).text('Скрыть')
            }
            console.log($footer)

        });
    }

    getJk(id) {
        $.post('https://mirjk.planetarf.ru/api/site.php', {method: 'getJKbyId', id: id}, (res) => {
            // console.log('res',res);
        });
    }

    getTypicalLayouts(params) {
        this.id = $("h1").attr('id');
        $.post('https://mirjk.planetarf.ru/api/site.php', {
            method: 'getTypicalLayouts',
            filter: JSON.stringify({"id_jk": this.id})
        }, (res) => {
            //console.log('getTypicalLayouts',res);
            var rooms = {};
            for (var i in res) {
                if (rooms[res[i].rooms_origin] == undefined) rooms[res[i].rooms_origin] = [];
                rooms[res[i].rooms_origin].push(res[i]);
            }
            params.callback(rooms);
        });
    }

    tgb_tmpl(item) {
        if (item.photos != undefined) {
            var keys = Object.keys(item.photos);
            var photo = item.photos[keys[0]];
        } else {
            var photo = {file: ''};
        }
        if (item.developer == undefined) item.developer = {title: ''};
        var addr = item.city + `, ` + item.okrug + `, ` + item.streetType + ` ` + item.street + `, ` + item.numType + ` ` + item.num;


        var html = `
            <div class="G-card-jk" id="${item['id']}">
                
                <div class="photo-container">
<!--                    <a href="/novostroyki/${item.seo_title}" target="_blank" class="photo-link">-->
                    <a href="/project-detail" target="_blank" class="photo-link">
                       <div class="img-wrapper"> <img src="//planetarf.ru/uploads/mirjk/galleries/${photo.file}" alt=""></div>
                    </a>
                </div>
                
                <div class="jk-info">`;
                    if (item.groups !== undefined) {
                        var size = Object.keys(item.groups.rooms).length;

                        html += `
                        <div class="info-toggle">
                            <div class="offers">
                                <ul class="offers-list">`;
                                    for (var r in item.groups.rooms) {
                                        var group = item.groups.rooms[r],
                                            rooms_txt = (r == 0) ? 'Студия' : r + '-комнатная';

                                        html += `                                                        
                                        <li class="offer-item">                                        
                                            <a href="/novostroyki/${item.seo_title}/kvartiry?rooms[]=${r}" class="link"><span class="rooms">${rooms_txt}</span></a>
                                            <p class="square">от&nbsp;<span class="value">${group.min_square}</span>&nbsp;м²</p>
                                            <p class="price">от&nbsp;<span class="value">${numberWithSpaces(group.min_cost / 1000000, 2)}</span>&nbsp;млн.&nbsp;₽</p>
                                        </li>`;
                                    }
                                html += `
                                </ul>
                            </div>
                        </div>`;
                    }

                    html += `
                    <div class="info-footer">
                        <a href="/novostroyki/${item.seo_title}" target="_blank" class="jk-name">${item.title}</a>
                        <div class="jk-metro">`;
                            var metro, c = 0;
                            for (var i in item.metros) {
                                c++;
                                metro = item.metros[i];
                            html += `
                            <div class="item">
                                <p class="name-branch"><span class="color-branch" style="background-color:${metro.color}" ></span>${metro.title}</p>
                                <span class="walking-metro"><i class="icon walking-people"></i> ${metro.duration} мин.</span>
                            </div>`;
                                if (c == 1) {break}
                            }
                    html += `
                        </div>
                    
                        <p class="jk-address">${addr}</p>
                        <div class="indicators">
                            <p class="point cost">от <span class="value">${numberWithSpaces(Math.round(item.min_price))}</span> ₽ за м²</p>
                            <p class="point category">${this.classes[item.class]}</p>
                            <p class="point deadline">Сдача в&nbsp; ${dt_format(item.date_end, 'Q Y')}</p>
                        </div>
                        <p class="toggle-btn">Раскрыть</p>
                    </div>

                    <p class="developer">Застройщик `;
            if (item.participants !== undefined && item.participants !== '') {
                html += `<span>«${item.participants[Object.keys(item.participants)[0]].company.brand.title}»</span>
                    </p>`
                    } else {
                html += ` -- нет данных --`
            }
                html += `
                </div>
            </div>`;
        return html;
    }

}