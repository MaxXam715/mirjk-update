import JkCard from "/components/JkCard.js";

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


        var html = JkCard();
        return html;
    }

}