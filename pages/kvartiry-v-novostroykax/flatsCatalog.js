import FlatCard_horizontal from "/components/FlatCard_horizontal.js";

export default function flatsCatalog() {

    setFilterParamsfromUrl();

    var dataGetFlat = function () {

        var filter_json = getFilterParamsfromUrl();

        if(filter_json.page == undefined) filter_json.page = 1;
        if(filter_json.cost_min!=undefined) filter_json.cost_min *= 1000000;
        if(filter_json.cost_max!=undefined) filter_json.cost_max *= 1000000;
        if(filter_json.mort_min!=undefined) filter_json.mort_min *= 1000;
        if(filter_json.mort_max!=undefined) filter_json.mort_max *= 1000;

        filter_json.saleStatus = 1;
        filter_json.jk_verified = 1;

        var data = ajaxRequest({
            url: 'https://mirjk.planetarf.ru/api/restapiv1.php',
            method: 'GET',
            data: {
                method: 'getPlaces',
                filter: JSON.stringify(filter_json)
            }
        });
        return data;
    }

    var allDataFlats = dataGetFlat().data, // получаем всю информацию
        dataFlats = dataGetFlat().data.places, // получаем список квартир
        dataJK = dataGetFlat().data.jks; // получаем список ЖК

   var html = `
    <section class="P-section-flats">
        <div class="G-container">
            <div class="items items_flat"></div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    // выводим квартиры
    outputTmplFlat(dataFlats, allDataFlats);


    $(".recommended-block li").click(function(){
        var sort_json = [],
            val = $(this).attr('val');

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

    });
}

function outputTmplFlat(flats, allDataFlats) {
    $('.P-section-flats .items_flat').html('');
    for (var item in flats) {
        $('.P-section-flats .items_flat').append(FlatCard_horizontal(flats[item], allDataFlats));
    }
}