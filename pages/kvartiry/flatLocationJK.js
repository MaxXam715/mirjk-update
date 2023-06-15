var map,
    myMap,
    map_load = false,
    idJk = $("#title_sec h1").attr('id'),
    objectManager = "";

export default function flatLocationJK() {
    var html = `
    <section class="G-jk-map P-flat">
        <div class="G-container">
            <h4 class="title">Расположение и инфраструктура</h4>
        </div>
        <div id="location_sec">
<!--            <div class="desc">1231231</div>-->
            <div class="G-container">
                <div class="jk-map-wrapper">
                    <div class="location-jk" id="locationJk" data-ltd="55.861593" data-lng="37.543879"></div>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);


    initLocationJk();
}

function initLocationJk() {
    var ltd = $("#locationJk").data('ltd'),
        lng = $("#locationJk").data('lng');

    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("locationJk", {
            center: [ltd, lng],
            zoom: 15,
            controls: []
        });
    }

    // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    // if (window.innerWidth < 991) {
    //     myMap.behaviors.get('drag').disable();
    // }

    // objectManager = new ymaps.ObjectManager({
    //     // Чтобы метки начали кластеризоваться, выставляем опцию.
    //     clusterize: false,
    //     // ObjectManager принимает те же опции, что и кластеризатор.
    //     gridSize: 64,
    //     // Макет метки кластера pieChart.
    //     clusterIconLayout: "default#pieChart"
    // });

    // objectManager = new ymaps.ObjectManager({
    //     // Чтобы метки начали кластеризоваться, выставляем опцию.
    //     clusterize: false,
    //     // ObjectManager принимает те же опции, что и кластеризатор.
    //     // gridSize: 64,
    //     // Макет метки кластера pieChart.
    //     // clusterIconLayout: "default#pieChart"
    // });
    // myMap.geoObjects.add(objectManager);
    //
    // myMap.controls.add('zoomControl', {
    //     size: 'small',
    //     float: 'none',
    //     position: {
    //         bottom: '50px',
    //         right: '30px'
    //     }
    // });
    //
    // var placemark = new ymaps.Placemark([ltd, lng], {}, {
    //     // Задаем стиль метки (метка в виде круга).
    //     preset: "islands#circleDotIcon",
    //     iconLayout: 'default#image',
    //     iconImageHref: "/images/MID-balloon.png",
    //     iconImageSize: [69.6, 81.6],
    //     iconImageOffset: [-34, -40],
    //     zIndex: 800
    // });
    // myMap.geoObjects.add(placemark);
    //
    // $.post('https://bestcon.planetarf.ru/api/site.php', {
    //     method: 'getMapPoints',
    //     filter: JSON.stringify({id_jk: 382})
    // }, function (res) {
    //     // console.log('getMapPoints',res);
    //     var data_points = {"type": "FeatureCollection", "features": []},
    //         mapCategories = `
    //         <div class="map-categories" id="map_categories">
    //             <div class="list-wrapper">
    //                 <ul class="list-categories">`;
    //     for (var i in res) {
    //         mapCategories += `
    //             <li class="item" id="` + res[i].id + `">
    //                 <img src="https://planetarf.ru/uploads/bestcon/map_points/` + res[i].file + `" class="icon-category">
    //                 <p class="category-title">` + res[i].title + `<span class="count">` + Object.keys(res[i].points).length + `</span></p>
    //             </li>`;
    //
    //         var point;
    //         for (var k in res[i].points) {
    //             point = res[i].points[k];
    //
    //             data_points.features.push(
    //                 {
    //                     "type": "Feature",
    //                     "id": point.id,
    //                     "geometry": {"type": "Point", "coordinates": [point.ltd, point.lng]},
    //                     "properties": {
    //                         "balloonContent": point.title,
    //                         "clusterCaption": res[i].id,
    //                         "hintContent": point.title,
    //                         "iconCaption": res[i].title
    //                     },
    //                     "options": {
    //                         "preset": "islands#blueCircleDotIconWithCaption",
    //                         "iconLayout": 'default#image',
    //                         "iconImageHref": "https://planetarf.ru/uploads/bestcon/map_points/" + res[i].file,
    //                         "iconImageSize": [30, 30],
    //                         "iconImageOffset": [-15, -15]
    //                     }
    //                 }
    //             );
    //         }
    //     }
    //     mapCategories += `
    //                 </ul>
    //             </div>
    //             <div class="route-wrapper"><button class="btn btn-primary">Проложить маршрут</button></div>
    //         </div>`;
    //     $('.jk-map-wrapper .location-jk').after(mapCategories);
    //     objectManager.add(data_points);
    //
    //     $('#map_categories li').each(function () {
    //         $(this).addClass('active');
    //     });
    //
    //     $('#map_categories li').click(function () {
    //         let $this = $(this),
    //             $listCat = $this.closest('.list-categories'),
    //             $listItems = $this.parent().find('li'),
    //             id_cat = $(this).attr('id');
    //
    //         if ($listCat.find('.item.active').length == 1) {
    //             if ($(this).hasClass('active')) {
    //                 $listItems.addClass('active')
    //                 objectManager.setFilter(getFilterFunction('all'));
    //             } else {
    //                 $this.addClass('active').siblings().removeClass('active')
    //                 objectManager.setFilter(getFilterFunction(id_cat));
    //             }
    //
    //         } else if ($listCat.find('.item.active').length >= 2) {
    //             $this.siblings().removeClass('active')
    //             objectManager.setFilter(getFilterFunction(id_cat));
    //         }
    //     });
    //
    // });
    //
    // if (window.mobile) {
    //     myMap.behaviors.disable('drag');
    //     myMap.behaviors.disable(['scrollZoom']);
    //     myMap.controls.remove('zoomControl');
    // }

}

function getFilterFunction(categories) {
    return function (obj) {
        var content = obj.properties.clusterCaption;
        if(categories == 'all' || categories == content) return true;
        else return false;
    }
}