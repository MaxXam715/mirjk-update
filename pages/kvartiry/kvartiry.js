import flatDetailInfo from "./flatDetailInfo.js";
import "/plugins/splide/js/splide.min.js";
import MortgageCalculator from "/components/MortgageCalculator.js";
import flatAboutJK from "./flatAboutJK.js";
import flatLocationJK from "./flatLocationJK.js";
import flatSimilar from "./flatSimilar.js";

export default function kvartiry() {
    flatDetailInfo(); // вывод планировки с галереей и параметров
    MortgageCalculator({append: '#app'}); // ипотечный калькулятор
    flatAboutJK();    // Описание ЖК
    flatLocationJK(); // Расположение и инфраструктура
    flatSimilar(); // Похожие квартиры в этом ЖК
}