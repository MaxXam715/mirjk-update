const version = $('head').find('#versionFiles').attr('content');

// ---------- import ----------
$.ajax({ // Functions
    async: false,
    url: "/assets/js/functions.js?v="+version,
    dataType: "script"
});

$.ajax({ // Lazyload
    async: false,
    url: "/plugins/lazyload/lazyload.min.js?v="+version,
    dataType: "script"
});

$.ajax({ // Header
    async: false,
    url: "/components/Header.js?v="+version,
    dataType: "script"
});

$.ajax({ // Footer
    async: false,
    url: "/components/Footer.js?v="+version,
    dataType: "script"
});

$.ajax({ // Router
    async: false,
    url: "/assets/js/router.js?v="+version,
    dataType: "script"
});

var titlePage = document.title,
    url = getFilterParamsfromUrl(),
    url_page = window.location.pathname,
    g_jk_classes = {0:'не определен', 1: 'Эконом', 2: 'Комфорт', 3: 'Бизнес', 4: 'Премиум', 5:'Элитный'},
    filter_metro = 0;



// ленивая загрузка изображений
// html.find("img[src=''].lazyload").lazyload({rootMargin: "500px"});


$(document).ready(function () {
    HeaderMain();
    FooterMain();
    $('#app').addClass('visible')
});

function setFilterParamsfromUrl() {
    var filter_json = getFilterParamsfromUrl();
    // console.log('filter_json', filter_json);
    for (var name in filter_json) {
        if ($.isArray(filter_json[name])) {
            var el = $('.G-filter-container').find("[name='" + name + "[]']");
            if (el.hasClass("modify")) {
                el.val(filter_json[name]);
                selOptionUpdate(el);
            } else {
                rangeUpdate(el.closest(".range_modal").find(".slider-range"), {
                    value1: filter_json[name][0],
                    value2: filter_json[name][1]
                });
                el.eq(0).val(filter_json[name][0]);
                el.eq(1).val(filter_json[name][1]);
            }
        } else {
            var el = $(".G-filter-container").find("[name='" + name + "']");
            el.val(filter_json[name]);
            if (el.is('input[type="checkbox"]')) {
                el.attr('checked', 'checked').closest('label').addClass('checkActive');
            }
            if (el.closest(".inputs_from_to").html() != undefined) { // обновляем слайдер
                var from = el.closest(".inputs_from_to").find('input').eq(0).val();
                var to = el.closest(".inputs_from_to").find('input').eq(1).val();
                // console.log(from, to);
                var slider_range = el.closest(".range_modal").find('.slider-range');
                rangeUpdate(slider_range, {
                    "value1": from,
                    "value2": to
                });
            }
            if (name == 'address') {
                if (filter_json['addr_cat'] == 'metro') {
                    filter_metro = filter_json['addr_attr'];
                }
                $('.f-address').attr('cat', filter_json['addr_cat']);
                $('.f-address').attr('attr', filter_json['addr_attr']);
            } else {
                selOptionUpdate(el);
            }
        }
    }
}

function setUrlfromFilterParams(href) {
    var filters = $(".G-filter-container").serializeArray(),
        filter_arr = [],
        addr_cat, addr_attr;

    for (var i in filters) {
        if (filters[i].value) {
            if (filters[i].name == 'address') {
                addr_cat = $(".f-address").attr('cat');
                addr_attr = $(".f-address").attr('attr');
                filter_arr.push("addr_cat=" + addr_cat);
                filter_arr.push("addr_attr=" + addr_attr);
                filter_arr.push("address=" + encodeURIComponent($(".f-address").val()));
            } else {
                filter_arr.push(filters[i].name + "=" + filters[i].value);
            }
        }
    }
    var filter = filter_arr.join("&");

    if (href == undefined) {
        var href = window.location.href;
        href = href.split('?');
        href = href[0];
        history.pushState(filter, '', href + '?' + filter);
    } else {
        window.location = href + '?' + filter;
    }
}

function mortgageCalculate(attr) {
    if(attr==undefined){
        return false;
    }
    var ret = {};
    if(attr.cost == undefined) {
        var cost = attr;
        attr = {};
        attr.cost = cost;
    }
    if (attr.deposit == undefined) {
        attr.deposit = attr.cost * 20 / 100;
    }
    if (attr.percent == undefined) {
        attr.percent = 5;
    }
    if (attr.year == undefined) {
        attr.year = 20;
    }
    var S = attr.cost - attr.deposit;
    var p = attr.percent;
    var n = attr.year;

    p = p / 1200;
    n = n * 12;

    var mp = S * p / (1 - Math.pow(1 + p, -n));
    ret.m_pay_s = mp * n;

    ret.m_pay = mp.toFixed();
    ret.credit = S;
    ret.percent = attr.percent;
    ret.year = attr.year;
    return ret;
}

function jkMinAttrTmpl(jk) {
    var min_price = 999999999,
        g;
    for (var i in jk['groups']) {
        g = jk['groups'][i];
        if (g['min_price'] < min_price) {
            min_price = g['min_price'];
        }
    }
    var building_date;
    // if (jk['min_deadline'] != undefined) {
    //     if (jk['max_deadline'] != jk['min_deadline']) {
    //         building_date = jk['min_deadline'].split('-')[0] + " - " + jk['max_deadline'].split('-')[0] + " г.";
    //     } else {
    //         var deadline = jk['min_deadline'].split('-');
    //         building_date = Math.ceil(deadline[1] / 3) + " кв. " + deadline[0] + " г.";
    //     }
    // }

    var deadline = jk.date_end.split('-');
    building_date = Math.ceil(deadline[1] / 3) + " кв. " + deadline[0] + " г.";

    var item = `
        <span>${numberWithSpaces(Math.round(jk.groups.min_cost))} ₽ за м<sup>2</sup></span>
        <span>${g_jk_classes[jk.class]}</span>
        <span>Сдача в ${building_date}</span>
    `;
    return item;
}

function addrTmpl(addr, metros) {
    var arr = {
            'транспорте': 'bus',
            'пешком': 'walk'
        },
        m, c = 0,
        metro;
    var addr_html = `<div class="location"> 
                        <div class="place"><i class="icon location-icon"></i>${addr}</div>`;
    if (filter_metro) {
        filter_metro = filter_metro.split('_').pop();
    }
    for (var i in metros) {
        m = metros[i];
        if (filter_metro) {
            if (m['id_metro'] == filter_metro) {
                addr_html += `
                               <div class="metro"><i class="icon metro-icon" style="background-color: ${m['color']}"></i>${m['title']}</div>
                               <div class="walk-metro ${arr[m['travel_mode']]}"><i class="icon walking-people"></i>${m['duration']} минут пешком</div>`;
            }
        } else {
            c++;
            if (c >= 2) {
                continue;
            }
            addr_html += `<div class="metro"><i class="icon metro-icon" style="background-color: ${m['color']}"></i>${m['title']}</div>
                               <div class="walk-metro ${arr[m['travel_mode']]}"><i class="icon walking-people"></i>${m['duration']} минут пешком</div>`;
        }
    }
    addr_html += '</div>';
    return addr_html;
}

function paginationUpdate(page, n, callback) {
    page = parseInt(page);
    if (n == undefined) {
        var n = 15;
    } else {
        n = Math.ceil(n / 30);
    }
    var pages = [];
    if (page - 1 > 1) {
        pages.push(1);
    }
    if (page - 2 > 1) {
        pages.push('...');
    }
    for (var i = 1; i <= n; i++) {
        if (i >= page - 1 && i <= page + 1) {
            pages.push(i);
        }
    }
    if (page + 2 < n) {
        pages.push('...');
    }
    if (page + 1 < n) {
        pages.push(n);
    }
    // Закомментировано снизу, т.к. необходимо чутка переделать рендер списка (добавить кнопку назад/вперед)
    // $("#pagination").html('');
    var attr = 0;
    for (var i in pages) {
        if (page == pages[i]) {
            $("#pagination").append("<li attr='" + pages[i] + "' class='active'>" + pages[i] + "</li>");
        } else {
            if (pages[i] == '...') {
                if (pages[i] == '...' && i == 1) {
                    attr = 2;
                } else {
                    attr = n - 1;
                }
            } else {
                attr = pages[i];
            }
            $("#pagination").append("<li attr='" + attr + "'>" + pages[i] + "</li>");
        }
    }
    $("#pagination li").click(function(){
        var href = window.location.href;
        if (href.search('novostroyki-na-karte') <= 0) {
            var filter_json = getFilterParamsfromUrl();
            var url_params = [];
            delete filter_json.page;
            var page = $(this).attr('attr');
            filter_json.page = page;
            for (var key in filter_json) {
                if ($.isArray(filter_json[key])) {
                    for (var k in filter_json[key]) {
                        url_params.push(key + "[]=" + filter_json[key][k]);
                    }
                } else {
                    url_params.push(key + "=" + filter_json[key]);
                }
            }
            url_params = url_params.join("&");
            href = href.split('?');
            href = href[0];
            history.pushState(filter_json, '', href + '?' + url_params);
            callback();
            paginationUpdate(page);
        }
    });
}