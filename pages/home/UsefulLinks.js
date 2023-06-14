export default function UsefulLinks() {
    var html = `
    <section class="P-section-helpful-links">
        <div class="G-container">
            <h2 class="title">Полезные ссылки</h2>
            <div class="wrapper">
                <div class="compilation">
                    <h4 class="title">Подборка новых <br>новостроек</h4>
                    <p class="description">Посмотрите подборку новых новостроек, которые сданы в&nbsp;2022 году и те,
                        которые будут в&nbsp;сдаче в&nbsp;2023 году</p>
                    <button type="button" class="btn helpful-btn btn--white">Смотреть</button>
                    <i class="icon flats"></i>
<!--                    <img src="/assets/img/compilation-mob.svg" alt="" class="icon-mob">-->
                </div>
                <div class="choose-flats">
                    <h4 class="title">Выберите квартиру</h4>
                    <ul class="flats-list">
                        <li class="list-item">
                            <a href="#" class="link">Студии</a>
                            <span class="count-offers"><span class="count">242</span> предложений</span>
                        </li>
                        <li class="list-item">
                            <a href="#" class="link">1-комнатные</a>
                            <span class="count-offers"><span class="count">1312</span> предложений</span>
                        </li>
                        <li class="list-item">
                            <a href="#" class="link">2-комнатные</a>
                            <span class="count-offers"><span class="count">484</span> предложений</span>
                        </li>
                        <li class="list-item">
                            <a href="#" class="link">3-комнатные</a>
                            <span class="count-offers"><span class="count">540</span> предложений</span>
                        </li>
                        <li class="list-item">
                            <a href="#" class="link">4-комнатные</a>
                            <span class="count-offers"><span class="count">45</span> предложений</span>
                        </li>
    
                    </ul>
                </div>
                <div class="to-map">
                    <div class="inner-panel">
                        <div class="left">
                            <h2 class="title">Удобный поиск на карте</h2>
                            <span class="subtitle">Ищите новостройки рядом с работой,<br>друзьями или родственниками</span>
                        </div>
                        <div class="link">
                            <a href="/novostroyki-na-karte" class="home-map-btn btn btn-primary"><i class="icon location"></i>Найти
                                на карте</a>
                        </div>
                    </div>
                </div>
                <div class="to-flat-card">
                    <h3 class="title">Квартиры рядом с&nbsp;метро <br>от&nbsp;40 000 ₽</h3>
                    <p class="description">Подборка квартир рядом с&nbsp;метро с&nbsp;ипотечным платежом от 40 000 ₽</p>
                    <button type="button" class="helpful-btn btn btn--blue">Смотреть</button>
                    <i class="icon metro-big"></i>
<!--                    <img src="/assets/img/card-metro-mob.svg" alt="" class="metro icon-mob">-->
                </div>
                <div class="to-flat-card">
                    <h3 class="title">1-комнатные квартиры <br>в&nbsp;Новой Москве</h3>
                    <p class="description">Подборка 1-комнатных квартир в&nbsp;Новой Москве</p>
                    <button type="button" class="helpful-btn btn btn--blue">Смотреть</button>
                    <i class="icon flats"></i>
<!--                    <img src="/assets/img/card-flats-mob.svg" alt="" class="icon-mob">-->
                </div>
                <div class="to-flat-card card-mortgage">
                    <h3 class="title">Ипотека от 0.01 %</h3>
                    <p class="description">Подборка квартир с ипотекой от&nbsp;0.01&nbsp;%</p>
                    <button type="button" class="helpful-btn btn btn--blue">Смотреть</button>
                    <i class="icon percent-big"></i>
<!--                    <img src="/assets/img/card-percent-mob.svg" alt="" class="icon-mob">-->
                </div>
    
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);
}