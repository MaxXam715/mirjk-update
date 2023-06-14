import "/plugins/noUiSlider/dist/nouislider.min.js";
import "/plugins/noUiSlider/wNumb/wNumb.min.js";

export default function SearchFilter(data) {
    var html = `
    <form action="" class="filter__form">
        <div class="filter__wrapper">
            <div class="input-wrapper">
                <div class="title">Стоимость ипотеки в&nbsp;месяц</div>
                <div class="input-range">
                    <div class="input-from-to-wrapper from">
                        <span>от&nbsp;</span> <input class="input-from-to from" type="text" id="mortgage-from" val="">
                    </div>
                    <span class="separator"> — </span>
                    <div class="input-from-to-wrapper to">
                        <span>до</span> <input class="input-from-to to" type="text" id="mortgage-to" val="">
                    </div>
                    <div id="my-slider"></div>
                </div>
            </div>
            <div class="input-wrapper rooms">
                <div class="title">Количество комнат</div>
                <div class="input-checkbox-multi">
                    <label class="checkbox-label" for="checkbox-nested-1">Студия
                        <input type="checkbox" name="checkbox-nested-1" id="checkbox-nested-1">
                    </label>
                    <label class="checkbox-label" for="checkbox-nested-2">1
                        <input type="checkbox" name="checkbox-nested-2" id="checkbox-nested-2">
                    </label>
                    <label class="checkbox-label" for="checkbox-nested-3">2
                        <input type="checkbox" name="checkbox-nested-3" id="checkbox-nested-3">
                    </label>
                    <label class="checkbox-label" for="checkbox-nested-4">3
                        <input type="checkbox" name="checkbox-nested-4" id="checkbox-nested-4">
                    </label>
                    <label class="checkbox-label" for="checkbox-nested-5">4
                        <input type="checkbox" name="checkbox-nested-5" id="checkbox-nested-5">
                    </label>
    
                </div>
            </div>
    
            <div class="input-wrapper">
                <div class="title">Стоимость квартиры</div>
                <div class="input-range">
                    <div class="input-from-to-wrapper from">
                        <span>от&nbsp;</span> <input class="input-from-to from" type="text" id="cost-from" val="">
                    </div>
                    <span class="separator"> — </span>
                    <div class="input-from-to-wrapper to">
                        <span>до</span> <input class="input-from-to to" type="text" id="cost-to" val="">
                    </div>
                    <div id="my-slider-cost"></div>
                </div>
            </div>
    
            <div class="input-wrapper square-wrapper">
                <div class="title">Площадь квартиры</div>
                <div class="input-range">
                    <div class="input-from-to-wrapper from">
                        <span>от&nbsp;</span> <input class="input-from-to from" type="text" id="square-from" val="">
                    </div>
                    <span class="separator"> — </span>
                    <div class="input-from-to-wrapper to">
                        <span>до</span> <input class="input-from-to to" type="text" id="square-to" val="">
                    </div>
                    <div id="my-slider-square" class="my-slider-square"></div>
                </div>
            </div>
    
            <div class="input-wrapper select-wrapper">
                <div class="title">Срок сдачи</div>
                <!--                        <label for="selectDeadline">План обслуживания</label>-->
                <select id="selectDeadline" class="select hidden">
                    <option value="Любой">Любой</option>
                    <option value="Неважно">Неважно</option>
                    <option value="Сдан">Сдан</option>
                    <option value="Строящиеся">Строящиеся</option>
                    <option value="В течение 6 месяцев">В течение 6 месяцев</option>
                    <option value="В 2023 г.">В 2023 г.</option>
                    <option value="В 2024 г.">В 2024 г.</option>
                    <option value="В 2025 г.">В 2025 г.</option>
                </select>
                <div class="select js-select">
                    <div class="select__value js-selected-value"><span>Любой</span></div>
                    <div class="select__options js-select-options mCustomScrollbar">
                        <div class="select__option">Неважно</div>
                        <div class="select__option">Сдан</div>
                        <div class="select__option">Строящиеся</div>
                        <div class="select__option">В течение 6 месяцев</div>
                        <div class="select__option">В 2023 г.</div>
                        <div class="select__option">В 2024 г.</div>
                        <div class="select__option">В 2025 г.</div>
                    </div>
                </div>
            </div>
    
            <div class="input-wrapper address-wrapper">
                <div class="title">Адрес, метро, район или ЖК</div>
                <input type="text" name="address" class="f-address fi" placeholder="Например ЖК Селигер Сити">
                <input type="hidden" name="addr_cat" class="f-addr_cat fi">
                <input type="hidden" name="addr_attr" class="f-addr_attr fi">
            </div>
    
            <button type="button" class="open-filters btn btn-primary"><i class="icon mob-filter"></i> <span class="text"> Еще фильтры </span></button>
    
    
            <div class="popup-filters">
                <div class="container-body">
                    <div class="heading"><h4 class="title">Еще фильтры</h4></div>
                    <div class="close-filters btn-close-modal">
                        <i class="icon close"></i>
                    </div>
                    <div class="input-wrapper square-wrapper">
                        <div class="title">Площадь квартиры</div>
                        <div class="input-range">
                            <div class="input-from-to-wrapper from">
                                <span>от&nbsp;</span> <input class="input-from-to from" type="text" id="square-from" val="">
                            </div>
                            <span class="separator"> — </span>
                            <div class="input-from-to-wrapper to">
                                <span>до</span> <input class="input-from-to to" type="text" id="square-to" val="">
                            </div>
                            <div id="my-slider-square" class="my-slider-square"></div>
                        </div>
                    </div>
    
                    <div class="input-wrapper select-wrapper">
                        <div class="title">Срок сдачи</div>
                        <!--                        <label for="selectDeadline">План обслуживания</label>-->
                        <select id="selectDeadline" class="select hidden">
                            <option value="Любой">Любой</option>
                            <option value="Неважно">Неважно</option>
                            <option value="Сдан">Сдан</option>
                            <option value="Строящиеся">Строящиеся</option>
                            <option value="В течение 6 месяцев">В течение 6 месяцев</option>
                            <option value="В 2023 г.">В 2023 г.</option>
                            <option value="В 2024 г.">В 2024 г.</option>
                            <option value="В 2025 г.">В 2025 г.</option>
                        </select>
                        <div class="select js-select">
                            <div class="select__value js-selected-value"><span>Любой</span></div>
                            <div class="select__options js-select-options mCustomScrollbar">
                                <div class="select__option">Неважно</div>
                                <div class="select__option">Сдан</div>
                                <div class="select__option">Строящиеся</div>
                                <div class="select__option">В течение 6 месяцев</div>
                                <div class="select__option">В 2023 г.</div>
                                <div class="select__option">В 2024 г.</div>
                                <div class="select__option">В 2025 г.</div>
                            </div>
                        </div>
                    </div>
    
                    <div class="buttons-row">
    
                        <button type="button" class="btn btn-primary"> Показать объекты </button>
                        <button type="button" class="clean-filter btn btn-outline-primary"><span class="text">Очистить фильтры</span></button>
                    </div>
                </div>
            </div>
    
        </div>
    </form>`;
    html = $(html);
    $(data.append).append(html);


    // Поставить снять
    html.find('.input-wrapper.rooms .checkbox-label input').click(function () {
        if ($(this).is(':checked')) {
            $(this).closest('.checkbox-label').addClass('selected')
        } else {
            $(this).closest('.checkbox-label').removeClass('selected')
        }
    });

    var filter_metro = 0;
    html.find('.open-filters').click(function () {
        html.find('.popup-filters').addClass('active');
        $('body').addClass('no-scroll');
    });

    // Закрыть фильтр окно по фону
    html.find('.popup-filters').mouseup(function (e) {
        var target = $(e.target);
        if ($(this).has(e.target).length === 0){
            closeModalCallBack(target);
        }
    });

    // Закрыть фильтр окно по крестику
    html.find('.popup-filters .btn-close-modal').click(function (e) {
        var target = $(e.target).closest('.popup-filters');
        closeModalCallBack(target);
    });


    // Инпуты селекты вызов функции
    inputSelect()
    //открытие закрытие фильтров на планшете и мобилке
    toggleMobFilter()
    hideShowFilter()
    //запуск инпут range
    initDoubleRangeMortgage()
    initDoubleRangeCost()
    initDoubleRangeSquare()


    // Закрыть фильтр окно (функция)
    function closeModalCallBack(target) {
        target.removeClass('active');
        $('body').removeClass('no-scroll');
    }


    function hideShowFilter() {
        const $header = $('#filter_sec'),
              filterBlockOffset = $('#topDiv').innerHeight() + $header.innerHeight(),
              width = window.innerWidth;

        let scrollPrev = 0,
            prevDirection = 'down',
            changeScrollPosition;

        window.addEventListener('scroll', function() {
            if (width <= 911) {
                return;
            }

            const scrolled = window.scrollY
            const direction = scrollPrev < scrolled ? 'down' : 'up';

            if (direction !== prevDirection) {
                changeScrollPosition = scrolled;
            }

            $header.toggleClass('box-shadow fixed', scrolled > 60);

            if (scrolled > filterBlockOffset && scrolled - changeScrollPosition > 200) {
                $header.addClass('hide-filter');
            } else if (changeScrollPosition - scrolled > 200) {
                $header.removeClass('hide-filter');
            }

            prevDirection = direction;
            scrollPrev = scrolled;
        });
}

// Инпуты селект, выбор опции и подстановка в инпут
function inputSelect() {
    const selects = document.querySelectorAll(".js-select");

    if (!selects) {
        return;
    }

    selects.forEach(function (select) {
        const selectOptions = select.querySelector(".js-select-options");
        const selectedValue = select.querySelector(".js-selected-value span");

        select.addEventListener("click", function () {
            select.classList.toggle("select--active");
        });

        selectOptions.addEventListener("click", function (event) {
            const target = event.target;
            const option = target.closest(".select__option");
            const optionValue = option.innerText;
            const selectReal = select.parentElement.querySelector("select");
            const optionsReal = [...selectReal.options];

            if (!option) {
                return;
            }

            optionsReal.forEach(function (optionReal, i) {
                if (optionReal.innerText.trim() === optionValue.trim()) {
                    optionReal.setAttribute("selected", true);
                    selectedValue.innerText = optionReal.innerText;
                } else {
                    optionReal.removeAttribute("selected");
                }
            });
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".js-select")) {
            selects.forEach(function (select) {
                select.classList.remove("select--active");
            });
        }
    });
}

function toggleMobFilter() {
    $('.js-open-filter').click(function () {
        $('.filter-new').addClass('active');
        $('body').addClass('no-scroll');
    });

    $('.js-close').click(function () {
        $('.filter-new').removeClass('active');
        $('body').removeClass('no-scroll')
    });
}


//Range для поля "стоимость ипотеки в месяц"
function initDoubleRangeMortgage() {
    var formatSlider = document.getElementById('my-slider');

    noUiSlider.create(formatSlider, {
        // Values are parsed as numbers using the "from" function in "format"
        start: ['34548', '649895'],
        range: {
            'min': 0,
            'max': 649895
        },
        connect: true,
        step: 500,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ₽'
        })
    });

// Values are parsed as numbers using the "from" function in "format"
    formatSlider.noUiSlider.set(['34548', '649895']);

    var formatValues = [
        document.getElementById('mortgage-from'),
        document.getElementById('mortgage-to')
    ];

    formatSlider.noUiSlider.on('update', function (values, handle, unencoded) {
        // "values" has the "to" function from "format" applied
        // "unencoded" contains the raw numerical slider values
        formatValues[handle].value = values[handle];
    });
}


//Range для поля "стоимость квартиры"
function initDoubleRangeCost() {
    var formatSliderCost = document.getElementById('my-slider-cost');

    noUiSlider.create(formatSliderCost, {
        // Values are parsed as numbers using the "from" function in "format"
        start: ['4420000', '16649000'],
        range: {
            'min': 4420000,
            'max': 16649000
        },
        connect: true,
        step: 10000,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ₽'
        })
    });

// Values are parsed as numbers using the "from" function in "format"
    formatSliderCost.noUiSlider.set(['4420000', '16649000']);

    var formatValues = [
        document.getElementById('cost-from'),
        document.getElementById('cost-to')
    ];

    formatSliderCost.noUiSlider.on('update', function (values, handle, unencoded) {
        // "values" has the "to" function from "format" applied
        // "unencoded" contains the raw numerical slider values
        formatValues[handle].value = values[handle];
    });
}

//Range для поля "площадь квартиры"
function initDoubleRangeSquare() {
    var formatSlidersSquare = [...document.getElementsByClassName( 'my-slider-square' )];

    formatSlidersSquare.forEach(function (item){

        noUiSlider.create(item, {
            // Values are parsed as numbers using the "from" function in "format"
            start: ['28', '164'],
            range: {
                'min': 19,
                'max': 164
            },
            connect: true,
            step: 1,
            format: wNumb({
                decimals: 0,
                thousand: ' ',
                suffix: ' м²'
            })
        });

        // Values are parsed as numbers using the "from" function in "format"
        item.noUiSlider.set(['28', '164']);

        var formatValues = [
            item.closest('.input-range').querySelector('.input-from-to.from'),
            item.closest('.input-range').querySelector('.input-from-to.to')
        ];

        item.noUiSlider.on('update', function (values, handle, unencoded) {
            // "values" has the "to" function from "format" applied
            // "unencoded" contains the raw numerical slider values
            formatValues[handle].value = values[handle];
        });
    })

}

}