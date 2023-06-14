export default function flatsCatalog() {
    var html = `
    <section id="homecatalog_sec" class="P-section-flats">
        <div class="G-container">
            <div class="items items_flat"></div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);


    var sort_json;

    setFilterParamsfromUrl();
    getFlatsbyJkPlaneta();
    $("#show_res").val("Показать квартиры 222");

    $("#show_res, .show_flats").click(function(){
        setUrlfromFilterParams();
        getFlatsbyJkPlaneta();
        $('.filterCatalog').hide();
    });

    $(".deleted-filter").click(function(){
        window.location.href = '/kvartiry-v-novostroykax';
    });

    $(document).on("click", "#pagination li", function(){
        getFlatsbyJkPlaneta();
        $('body,html').animate({
            scrollTop: 0
        },1000);
    });

    var width = $(window).width();
    if(width <= 600){
        $(".G-filter-container .price_from_to .range_modal").addClass("inp_modal");
    }
    $(".recommended-block li").click(function(){
        var val = $(this).attr('val');
        sort_json = [];
        if(val == "priceDesc"){
            sort_json.push("price DESC");
        }
        if(val == "priceAsc"){
            sort_json.push("price ASC");
        }
        if(val == "costAsc"){
            sort_json.push("price_all ASC");
        }
        if(val == "costDesc"){
            sort_json.push("price_all DESC");
        }
        if(val == "area_allAsc"){
            sort_json.push("area_all ASC");
        }
        if(val == "area_allDesc"){
            sort_json.push("area_all DESC");
        }
        getFlatsbyJkPlaneta();
    });
}


function getFlatsbyJkPlaneta(){
    var filter_json = getFilterParamsfromUrl();
    if(filter_json.page == undefined){
        filter_json.page = 1;
    }
    if(filter_json.cost_min!=undefined) filter_json.cost_min *= 1000000;
    if(filter_json.cost_max!=undefined) filter_json.cost_max *= 1000000;
    if(filter_json.mort_min!=undefined) filter_json.mort_min *= 1000;
    if(filter_json.mort_max!=undefined) filter_json.mort_max *= 1000;
    filter_json.saleStatus = 1;
    filter_json.jk_verified = 1;
    var json = {filter: JSON.stringify(filter_json), method: 'getPlaces'};
    $.post( "https://mirjk.planetarf.ru/api/site.php", json, function(data){
        data = $.parseJSON(data);
        // console.log('planetaPlaces',data);

        var c = 0;
        $("h1 span").html(data.allCount);
        $(".flat_items .content .grid-flats").html('');
        JkFlatTmplPlaneta(data);
        paginationUpdate(filter_json.page, data.allCount, getFlatsbyJkPlaneta);
        $('body,html').animate({
            scrollTop: 0
        },1000);
    }, "html");
}

function JkFlatTmplPlaneta(data) {
    var place,section,house,jk;
    var room_txt,place_url,room_txt_url, place_div,place_title,mort_cost;
    for(var i in data.places){
        place = data.places[i];
        jk = data.jks[place.id_jk];
        section = data.sections[place.id_section];
        house = data.houses[place.id_house];
        mort_cost = mortgageCalculate({cost:place['AgentCost']});
        mort_cost = mort_cost.m_pay;

        // console.log('jkl', jk);

        var brand = {};
        if(jk.participants != undefined) {
            for (var part in jk.participants) {
                if(jk.participants[part].role == 'developer')
                    brand = jk.participants[part].company.brand;
            }
        }



        room_txt = (place['rooms'] > 0) ? place['rooms'] + "-комнатная" : "Студия";
        room_txt_url = (place['rooms'] > 0) ? place['rooms'] + "-komnatnaya" : "studiya";
        place_url = '/novostroyki/' + jk.seo_title + '/kvartiry/' + room_txt_url + '-' + place.allSquare + 'm-' + place.floor + '-etaj-' + place['id'];
        place_title = place.category+', ' + room_txt + ', ' + place.allSquare+' м<sup>2</sup>';

        place_div = `
        <div class="G-flat-item" id="` + place.id + `">
            <div class="flat-gallery href" target="blank" href="${place_url}">
                <div class="main-photos">
                    <div class="photo-item">
<!--                        <img src="https://mirjk.planetarf.ru/uploads/mirjk/places/${place.layout}" alt="">-->
                        <img src="https://92.img.avito.st/640x480/5782415492.jpg" alt="">
                    </div>
                </div>
                <div class="bottom-photos">
                    <div class="photo-item">
                        <img src="/assets/img/flat-bottom-photo.jpg" alt="">
                    </div>
                    <div class="photo-item">
                        <img src="/assets/img/flat-bottom-photo.jpg" alt="">
                    </div>
                    <div class="photo-item">
                        <img src="/assets/img/flat-bottom-photo.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="flat-info">
                <!--            только на планшете-->
                <div class="developer-info tab-mob">
                    <span class="subtitle">Застройщик</span>
                    <h3 class="title">${brand.title}</h3>
                </div>
                <!--      только на планшете-->
                <div class="info-header href" target="blank" href="${place_url}">${room_txt} кв., ${place.allSquare} м², ${place['floor']}/${place['h_floor']} этаж </div>
                <div class="subtitle">
<!--                      За кв метр, класс, дата сдачи  -->
                    ${jkMinAttrTmpl(jk)}
                </div>
                <div class="advantages">
                    <div class="advantage-item">Индивидуальная планировка</div>
                    <div class="advantage-item">Ипотека 0,1 %</div>
                    <div class="advantage-item">С отделкой</div>
                    <div class="advantage-item">Без первого взноса</div>
                </div>
                
                <!--НИЖЕ  адрес,метро, время до метро -->
                ${addrTmpl(jk['address'], jk['metros'])}
                <!--ВЫШЕ  адрес,метро, время до метро -->
                <div class="price-wrapper">
                    <div class="price-row">
                        <p class="full-price">${numberWithSpaces(Math.round(place.AgentCost))} ₽</p>
                        <p class="price-mortgage">В ипотеку от ${numberWithSpaces(Math.round(mort_cost))} ₽/мес.</p>
                    </div>
                    <div class="price-row"><p class="price-per-meter">${numberWithSpaces(Math.round(place.AgentPrice))} ₽/м²</p></div>
                </div>
                <p class="name-jk">${jk['title']}</p>
                <p class="flat-description">
                    Продаётся ${room_txt}.кв от застройщика без комиссии общей площадью ${place.allSquare} м² c просторной кухней 6.4&nbsp;м²
                    на ${place['floor']} этаже в корпусе Корпус 1 ЖК Селигер Сити. Срок сдачи 4 кв. 2022 года.
                </p>
                <a href="" class="same-flats">Ещё 11 таких же квартир в этом ЖК</a>
                
                <!--                только на планшете-->
                <div class="developer-info tab-mob">
                    <a href="tel:${brand.tel}" tel="${brand.tel}" class="open-phone btn btn--transparent tel">Показать номер</a>
                </div>
                <!--                только на планшете-->
            </div>
            <div class="developer-info">
                <span class="subtitle">Застройщик</span>
                <h3 class="title">${brand.title}</h3>
                <a href="#" class="all-jk-developer">Посмотреть все ЖК застройщика</a>
                <a href="tel:${brand.tel}" tel="${brand.tel}" class="open-phone btn btn--transparent tel">Показать номер</a>
            </div>
        
        </div>`;
        $(".items_flat").append(place_div);
    }
}

function updateCountFlats(){
    var filter_json = getFilterfromParams();
    var json = {filter: JSON.stringify(filter_json), ajax_type: 'getCountFlats'};
    $.post( "/ajax/ajax.php", json, function(data){
        var c = 0;
        if(data!=0){
            data = $.parseJSON(data);
            c = data.c;
        }

        function maxmax() {
            var world = parseInt($(window).width());
            if( world > 500) {
                $("#show_res").val("Показать квартиры - "+numberWithSpaces(c));
            } else {
                $("#show_res").val("Показать квартиры");
            }
        }
        maxmax()

        $(window).resize(function(){
            maxmax()
        });

    }, "html");
}