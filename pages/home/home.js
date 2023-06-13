import indexFilter from './indexFilter.js';
import UsefulLinks from './UsefulLinks.js';
import CatalogJK from './CatalogJK.js';
import MortgageCalculator from "/components/MortgageCalculator.js";

export default function homePage() {
    indexFilter();
    UsefulLinks();
    CatalogJK();
    MortgageCalculator({append: '#app'});
}