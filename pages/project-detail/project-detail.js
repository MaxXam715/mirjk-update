import projectBanner from "./projectBanner.js"
import "/plugins/splide/js/splide.min.js";
import generalParameters from "./generalParameters.js"
import flatInThisJK from "./flatInThisJK.js"
import MortgageCalculator from "/components/MortgageCalculator.js";
import locationJK from "./locationJK.js"
import progressConstructionJK from "./progressConstructionJK.js"
import similarJK from "./similarJK.js"

export default function projectDetail() {
    projectBanner();
    generalParameters();
    flatInThisJK();
    MortgageCalculator({append: '#app'});
    locationJK();
    progressConstructionJK();
    similarJK();
}