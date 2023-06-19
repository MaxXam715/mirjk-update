import flatLayoutGallery from "./flatLayoutGallery.js";
import flatInfoParams from "./flatInfoParams.js";

/** ascasc */
export default function flatDetailInfo(flat) {
    var html = `
    <section class="P-flat-card">
        <div class="G-container">
            <div class="flat-container"></div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);

    flatLayoutGallery(flat);
    flatInfoParams(flat);
}