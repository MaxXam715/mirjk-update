export default function flatInThisJK() {
    var html = `
    <section class="P-flats-jk">
        <div class="G-container">
            <div class="content-wrapper">
                <div class="left-side">
                    <h4 class="heading"><a href="" class="count">124 квартиры</a>&nbsp;в <? echo $jk['title'] ?></h4>
                    <div class="variables-wrapper">
                        <div class="top-block-switcher">
                            <div class="container">
                                <ul class="switcher-group uk-subnav uk-subnav-pill"
                                    uk-switcher="connect: .uk-switcher; swiping: false;">
                                    <li class="switcher-item">
                                        <a href="#" class="buildings-switcher-btn btn">Все корпуса</a>
                                    </li>
                                    <li class="switcher-item">
                                        <a href="#" class="buildings-switcher-btn btn">
                                            <span class="title">B1-B4</span>
                                            <span class="deadline">Сдача в 1-кв. 2023</span>
                                        </a>
                                    </li>
                                    <li class="switcher-item">
                                        <a href="#" class="buildings-switcher-btn btn">
                                            <span class="title">B5</span>
                                            <span class="deadline">Сдача в 1-кв. 2023</span>
                                        </a>
                                    </li>
                                    <li class="switcher-item">
                                        <a href="#" class="buildings-switcher-btn btn">
                                            <span class="title">B6</span>
                                            <span class="deadline">Сдача в 1-кв. 2023</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="container-wrapper">
                            <ul class="uk-switcher uk-margin">
                                <div class="offers-wrapper">
                                    <ul class="offers-list">
                                        <li class="item">
                                            <p class="rooms">Студии</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">1-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">14,4 – 32 млн ₽</p>
                                            <a href="" class="offer-link">5 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">2-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">3-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">4-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">7 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">5-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="offers-wrapper">
                                    <ul class="offers-list">
                                        <li class="item">
                                            <p class="rooms">1-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">14,4 – 32 млн ₽</p>
                                            <a href="" class="offer-link">12 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">2-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">12 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">3-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">12 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">4-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">12 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">5-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">12 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="offers-wrapper">
                                    <ul class="offers-list">
                                        <li class="item">
                                            <p class="rooms">Студии</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">55 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">1-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">14,4 – 32 млн ₽</p>
                                            <a href="" class="offer-link">55 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">2-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">55 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">3-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">55 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">4-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">55 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="offers-wrapper">
                                    <ul class="offers-list">
                                        <li class="item">
                                            <p class="rooms">Студии</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">1-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">14,4 – 32 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                        <li class="item">
                                            <p class="rooms">2-комнатные</p>
                                            <p class="square">23,1 - 32,9 м²</p>
                                            <p class="price">4,4 – 14 млн ₽</p>
                                            <a href="" class="offer-link">25 <span class="text">&nbsp;предложений</span> <i
                                                        class="icon arrow-right-fat"></i> </a>
                                        </li>
                                    </ul>
                                </div>
    
                            </ul>
                        </div>
                    </div>
                    <a href="#" class="all-flats">Посмотреть все <span>124 квартиры</span> в этом корпусе</a>
                </div>
                <div class="right-side">
                    <div class="advantages">
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="/images/booking.svg" alt="">
                            </div>
                            <div class="text-wrapper">
                                <h5 class="title">Бронирование online</h5>
                                <p class="description">Разнообразный и богатый опыт постоянный количественный рост и сфера
                                    нашей активности в значительной степени.</p>
                            </div>
                        </div>
    
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="/images/mortgage.svg" alt="">
                            </div>
                            <div class="text-wrapper">
                                <h5 class="title">Ипотека от 0,01 %</h5>
                                <p class="description">Разнообразный и богатый опыт постоянный количественный рост и сфера
                                    нашей активности в значительной степени.</p>
                            </div>
                        </div>
    
                        <div class="item">
                            <div class="icon-wrapper">
                                <img src="/images/safety.svg" alt="">
                            </div>
                            <div class="text-wrapper">
                                <h5 class="title">Безопасность сделки</h5>
                                <p class="description">Разнообразный и богатый опыт постоянный количественный рост и сфера
                                    нашей активности в значительной степени.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $('#app').append(html);
}