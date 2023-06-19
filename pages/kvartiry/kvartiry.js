import flatDetailInfo from "./flatDetailInfo.js";
import "/plugins/splide/js/splide.min.js";
import MortgageCalculator from "/components/MortgageCalculator.js";
import flatAboutJK from "./flatAboutJK.js";
import flatLocationJK from "./flatLocationJK.js";
import flatSimilar from "./flatSimilar.js";

const dataFlat = ajaxRequest({url: 'https://mirjk.planetarf.ru/api/restapiv1.php', method: 'GET', data: {method: 'getPlace', id: '219557'}})['data'];

export default function kvartiry() {
    flatDetailInfo(dataFlat); // вывод планировки с галереей и параметров
    MortgageCalculator({append: '#app'}); // ипотечный калькулятор
    flatAboutJK(dataFlat);    // Описание ЖК
    flatLocationJK(dataFlat); // Расположение и инфраструктура
    flatSimilar(dataFlat); // Похожие квартиры в этом ЖК
}

