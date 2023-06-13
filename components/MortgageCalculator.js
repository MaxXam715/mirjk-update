export default function MortgageCalculator(data) {

    var min_cost = 5000000,
        max_cost = 50000000;


    var html = `
    <section id="mortgage_sec" class="G-section-mortgage">
        <div class="G-container">
            <div class="container-wrapper">
                <h2 class="title">Ипотечный калькулятор</h2>
                <div class="mortgage-row">
                    <div class="right-side">
                        <div class="calculator-wrapper">
                            <div class="calc">
                                <div class="calc-row">
                                    <div class="input-row cost">
                                        <input class="numbers calc_inp ${(min_cost == max_cost) ? 'disabled' : ''}"
                                               col="cost" type="text"
                                               value="${min_cost}"
                                               min="${min_cost}"
                                               max="${max_cost}"
                                               step="100000">
                                        <span class="head">Стоимость недвижимости</span>
                                    </div>
                                    <div class="slider"></div>
                                </div>
                                <div class="calc-row">
                                    <div class="input-row deposit">
                                        <input class="numbers calc_inp" col="deposit" type="text"
                                               value="${min_cost}"
                                               min="${(min_cost / 10)}"
                                               max="${max_cost}" step="100000">
                                        <span class="head">Первоначальный взнос</span>
                                    </div>
                                    <div class="slider"></div>
                                    <div class="quick-pick-row">
                                        <div class="pick-item"><span>0</span>&nbsp;%</div>
                                        <div class="pick-item"><span>10</span>&nbsp;%</div>
                                        <div class="pick-item"><span>15</span>&nbsp;%</div>
                                        <div class="pick-item"><span>20</span>&nbsp;%</div>
                                        <div class="pick-item"><span>25</span>&nbsp;%</div>
                                        <div class="pick-item"><span>30</span>&nbsp;%</div>
                                    </div>
                                </div>
                                <div class="calc-row">
                                    <div class="input-row year">
                                        <input class="numbers calc_inp" col="year" type="text" value="20" min="1" max="30" step="1">
                                        <span class="head">Срок кредита</span>
                                    </div>
                                    <div class="slider"></div>
                                    <div class="quick-pick-row">
                                        <div class="pick-item"><span>5</span>&nbsp;лет</div>
                                        <div class="pick-item"><span>10</span>&nbsp;лет</div>
                                        <div class="pick-item"><span>15</span>&nbsp;лет</div>
                                        <div class="pick-item"><span>20</span>&nbsp;лет</div>
                                    </div>
                                </div>
                                <div class="calc-row">
                                    <div class="input-row percent">
                                        <input class="numbers calc_inp" col="percent" type="text" value="5" min="3" max="14" step="0.05">
                                        <span class="head">Процентная ставка</span>
                                    </div>
                                    <div class="slider"></div>
                                    <div class="quick-pick-row">
                                        <div class="pick-item"><span>0,1</span>&nbsp;%</div>
                                        <div class="pick-item"><span>4,5</span>&nbsp;%</div>
                                        <div class="pick-item"><span>6</span>&nbsp;%</div>
                                        <div class="pick-item"><span>7,5</span>&nbsp;%</div>
                                        <div class="pick-item"><span>9,1</span>&nbsp;%</div>
                                        <div class="pick-item"><span>10</span>&nbsp;%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="calc-res-wrapper">
                                <h3 class="title">Наше предложение</h3>
                                <div class="calc-res">
                                    <div class="res-item-wrapper">
                                        <p class="subtitle">Ваш ежемесячный платеж</p>
                                        <p class="cnt col_res month-pay" col="m_pay" style="color: #3D81DA;">
                                            <span class="val">97 736</span>
                                            <span class="label">₽</span>
                                        </p>
                                    </div>
                                    <div class="calc-res-wrapper-row">
                                        <div class="res-item-wrapper">
                                            <p class="subtitle">Сумма ипотеки</p>
                                            <p class="cnt col_res" col="credit">
                                                <span class="val"></span>
                                                <span class="label">₽</span>
                                            </p>
                                        </div>
                                        <div class="res-item-wrapper">
                                            <p class="subtitle">Ставка</p>
                                            <p class="cnt col_res" col="percent">
                                                <span class="val"></span>
                                                <span class="label">%</span>
                                            </p>
                                        </div>
                                        <div class="res-item-wrapper">
                                            <p class="subtitle">Срок</p>
                                            <p class="cnt col_res" col="year">
                                                <span class="val"></span>
                                                <span class="label">лет</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn--blue calc-close"><span>154</span>&nbsp;квартиры доступно</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    html = $(html);
    $(data.append).append(html);
}