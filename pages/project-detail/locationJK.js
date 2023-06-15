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
    var myMap,
        ltd = $("#locationJk").data('ltd'),
        lng = $("#locationJk").data('lng');

    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("locationJk", {
            center: [ltd, lng],
            zoom: 15,
            controls: []
        });
    }
}