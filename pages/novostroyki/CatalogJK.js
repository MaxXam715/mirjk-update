import JK from "/classesJS/jk.js";

export default function CatalogJK() {
    var html = `
    <section class="G-section-catalog-jk">
        <div class="G-container">
            <div class="P-cards-jk-wrapper"></div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    getJks();
}

function getJks() {
    var url = window.location.href,
        filter_json = getFilterParamsfromUrl(),
        jk_class = new JK();

    url = url.replace("novostroyki", "novostroyki-na-karte");
    $("#toMap").attr("href", url);

    filter_json.verified = 1;
    if(filter_json.page == undefined) {
        filter_json.page = 1;
    }

    $(".P-cards-jk-wrapper").html('');

    jk_class.getJks({
        filter: filter_json,
        container: $(".P-cards-jk-wrapper"),
        callback: function(data) {
            paginationUpdate(filter_json.page, data.count, getJks);
            $(".filter_sec .found .value").html(data.count);
        }
    });
}