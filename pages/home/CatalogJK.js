export default function CatalogJK() {
    var html = `
    <section class="G-section-catalog-jk">
        <div class="G-container">
            <h2 class="title">Популярные ЖК в Москве</h2>
            <div class="P-cards-jk-wrapper"></div>
            <div class="button-link"><a href="/novostroyki" class="btn btn-primary">Смотреть все ЖК</a></div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    getTopJks();
}

function getTopJks() {
    var Planeta = new PlanetaClass();

    $(".P-cards-jk-wrapper").html('');
    Planeta.getJks({
        filter: {top: 1, verified: 1},
        container: $(".P-cards-jk-wrapper")
    });
}