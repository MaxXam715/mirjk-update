function HeaderMain() {
    var html = `
    <header id="topDiv" class="header">
        <div class="content">
            <!-- Лого -->
            <a href="/" class="logotype"><img src="/assets/img/logotype.svg"></a>
            <!-- Меню -->
            <ul id="topMenu">
                <li><a href="/kvartiry-v-novostroykax">Квартиры в новостройках</a></li>
                <li><a href="/novostroyki">Жилые Комплексы</a></li>
                <li><a href="/novostroyki-na-karte">Новостройки на карте</a></li>
                <li><a href="/blog-posts">Ипотека</a></li>
                <li><a href="/blog-posts">Блог</a></li>
            </ul>
    
            <!-- Кнопка Моб. меню -->
            <div id="topBar" class="topBar js-toogle-nav" style="display: none;">
                <div class="line">
                    <div></div>
                </div>
            </div>
    
        </div>
        <div id="topMenuBar">
            <ul></ul>
        </div>
    </header>`;
    html = $(html);
    $('#app').before(html);
}