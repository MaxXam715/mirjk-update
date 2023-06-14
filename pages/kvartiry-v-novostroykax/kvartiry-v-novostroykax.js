import headerFilter from "./headerFilter.js";
import flatsCatalog from "./flatsCatalog.js";

export default function KvartiryVnovostroykax() {
    document.title = "Квартиры в новостройках"
    headerFilter();
    flatsCatalog();
}