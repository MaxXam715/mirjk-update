export default function CatalogJK() {

    const getDataJKs = ajaxRequest({url: 'https://mirjk.planetarf.ru/api/restapiv1.php', method: 'GET', data: {method: 'getJKs'}})['data'],
            list_jks = getDataJKs.jks,
          count_jks = getDataJKs.count;

    console.log('Список ЖК', getDataJKs);
    console.log('Кол-во', count_jks);
    console.log('Лист', list_jks);

    var html = `
    <section class="G-section-catalog-jk">
        <div class="G-container">
            <div class="P-cards-jk-wrapper">`;
                for (var i in list_jks) {

                }
                html += `
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    // setTimeout(sliceWord, 500)
    // window.addEventListener('resize', debounce(sliceWord, 50), true);
}

// function getJks() {
//     var url = window.location.href,
//         filter_json = getFilterParamsfromUrl(),
//         jk_class = new JK();
//
//     url = url.replace("novostroyki", "novostroyki-na-karte");
//     $("#toMap").attr("href", url);
//
//     filter_json.verified = 1;
//     if(filter_json.page == undefined) {
//         filter_json.page = 1;
//     }
//
//     $(".P-cards-jk-wrapper").html('');
//
//     jk_class.getJks({
//         filter: filter_json,
//         container: $(".P-cards-jk-wrapper"),
//         callback: function(data) {
//             paginationUpdate(filter_json.page, data.count, getJks);
//             $(".filter_sec .found .value").html(data.count);
//         }
//     });
// }
//
// // изменение длины текста в карточке ЖК
// function sliceWord() {
//     const windowWidth = document.body.clientWidth
//     // console.log(windowWidth);
//     $('.G-card-jk .rooms').each(function (index, room) {
//         if (windowWidth <= 1440) {
//             if (room.innerHTML !== 'Студия') {
//                 room.innerHTML = room.innerHTML.split(' ').join('').slice(0, 6) + '.'
//             }
//         } else {
//             room.innerHTML = room.innerHTML.replace('.', 'атные')
//         }
//     });
// }
//
// function debounce(func, delay) {
//     let timeId;
//     return function (...args) {
//         if (timeId) {
//             clearTimeout(timeId);
//         }
//         timeId = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// }