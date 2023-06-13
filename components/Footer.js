function FooterMain() {
    var html = `
    <footer class="footer">
        <div class="G-container">
            <ul class="links-list">
                <li><a href="/kvartiry-v-novostroykax">Новостройки</a></li>
                <li><a href="">Ипотека</a></li>
                <li><a href="/novostroyki-na-karte">Объекты на карте</a></li>
                <li><a href="/">Услуги</a></li>
                <li><a href="/">Застройщики</a></li>
<!--                <li><a href="/novostroyki">Жилые Комплексы</a></li>-->
                <li><a href="/blog-posts">Новости</a></li>
                <li><a href="/">Видео обзоры</a></li>
                <li><a href="/">Контакты</a></li>
<!--                <li><a  href="/kontakty">Реклама на сайте</a></li>-->
<!--                <li><a  href="/policy">Политика конфиденциальности</a></li>-->
            </ul>
            <hr class="footer-line">
            <div class="footer-bottom">
                <div class="logo"><img src="/assets/img/footer-logo.svg" alt="МИР ЖК"></div>
                <span>© 2017 - ${new Date().getFullYear()}</span>
                <span>Все права защищены</span>
            </div>
        </div>
    </footer>`;
    html = $(html);
    $('#app').after(html);
}