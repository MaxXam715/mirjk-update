export default function mapContainer() {

    var heightNav = $('.G-header').innerHeight(),
        heightWindow = window.innerHeight;

    var html = `
    <div class="map-wrapper" style="height: ${(heightWindow - heightNav)}px">
        <div id="map-container" style="width: 100%; height: 100%;"></div>
    </div>`;
    html = $(html);
    $('#app').append(html);


    var ymaps = window.ymaps;

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map-container", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75193313231408,37.62161856079101],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 11
        });
    }
}