class FormElements {
    #slider_callbacks;
    #list_callbacks;

    constructor(){
        this.slider_callbacks = {};
        this.list_callbacks = {};
    }

    filtersSetValues(form, filters){

        var cats = {
            'kvartiry' :'Квартира',
            'mm' :'Машиноместо',
            'nejiloe' :'Нежилое',
            'kladovki' :'Кладовка'
        };

        for(var col in filters){
            if(col == 'rooms'){
                console.log('col', col);
                for(var i in filters[col]){
                    console.log('filters[col]', filters[col][i]);
                    this._buttonSelectValue('rooms', filters[col][i]);
                }
            }
            if(col == 'category') this._selectSelectValue($("#list_category"), cats[filters[col]]);
            if(col == 'deadline') this._selectSelectValue($("#list_deadline"), filters[col]);

            if(col == 'id_house') this._selectSelectValue($("#list_id_house"), filters[col]);

            if(col == 'square_min') this._setRangeTwoValues('square', {'val1':filters[col]});
            if(col == 'square_max') this._setRangeTwoValues('square', {'val2':filters[col]});

            if(col == 'floor_min') this._setRangeTwoValues('floor', {'val1':filters[col]});
            if(col == 'floor_max') this._setRangeTwoValues('floor', {'val2':filters[col]});

            if(col == 'cost_min') this._setRangeTwoValues('cost', {'val1':filters[col]});
            if(col == 'cost_max') this._setRangeTwoValues('cost', {'val2':filters[col]});

            if(col == 'orderBy'){
                $("#orderBy_hidden").val(filters[col]);
                this._selectSelectValue($("#list_sort"), filters[col]);
            }
            if(col == 'saleStatus') $("#saleStatus_hidden").val(filters[col]);
            if(col == 'id_jk') $("#id_jk_hidden").val(filters[col]);
        }
    }

    G_select(data) {
        if (data.activeOption == undefined || data.activeOption == '') {
            data.activeOption = false
        }

        if(this.list_callbacks[data.id]==undefined) this.list_callbacks[data.id] = {};
        if(data.changeCallback!=undefined) this.list_callbacks[data.id]['changeCallback'] = data.changeCallback;


        var html = `
            <div
                id="list_`+data.id+`"
                class="G-select-destructor `+((data.selectClass != '' && data.selectClass != undefined) ? data.selectClass : '')+`"
                data-theme="`+((data.theme != '' && data.theme != undefined) ? data.theme : '')+`"
                data-placeholder="`+((data.placeholder != '' && data.placeholder != undefined) ? data.placeholder : '')+`"
                data-multiple="`+((data.multiple != '' && data.multiple != undefined) ? data.multiple : '')+`">`;
                if (data.label != '' && data.label != undefined) {
                    html += `<span class="select-destructor_label">`+data.label+`</span>`
                }
                html += `<div class="select-destructor_container">
                            <div class="select-destructor_filed">`;
                if (data.icon != '' && data.icon != undefined) {
                    html += `
                        <div class="container-icon container-icon_left">
                            <i class="icon `+data.icon+`"></i>
                        </div>`;
                }
                html += `<p class="input-filed">`+data.placeholder+`</p>
                        <div class="container-icon container-icon_right">
                            <i class="icon arrow-bottom"></i>
                        </div>
                    </div>
                    <ul class="select-destructor_results uk-animation-fade uk-animation-fast" data-active-option="`+data.activeOption+`"></ul>
                </div>`;
                if(data.multiple==undefined || data.multiple == false){
                    html += `<select  id="listSelect_`+data.id+`" class="listSelect_hide col" col="`+data.id+`"></select>`;
                }
            html += `</div>`;
        html = $(html);


        html.find('ul.select-destructor_results').on("click", 'li.option', (e)=>{
            var id = $(e.target).closest('.G-select-destructor').find("select").attr('col');
            if(this.list_callbacks[id]['changeCallback']!=undefined)
                this.list_callbacks[id]['changeCallback']();
        });

        if(data.appendType!=undefined){
            if(data.appendType == 'prepend'){
                $(data.append).prepend(html);
            } else {
                $(data.append).append(html);
            }
        } else {
            $(data.append).append(html);
        }
        this._selectSetValues(html, data.data);


        // Открыть и закрыть select
        html.find('.select-destructor_filed').click(function () {
            var G_select = $(this).closest('.G-select-destructor');

            $('.G-select-destructor').not(G_select).each(function () {
                $(this).removeClass('active');
            });

            if (!G_select.hasClass('active')) {
                G_select.addClass('active');
            } else {
                G_select.removeClass('active');
            }

            // задаем максимальную высоту списка
            var selectHeight = $(this).closest('.select-destructor_container').outerHeight(),
                selectTop = $(this).closest('.select-destructor_container')[0].getBoundingClientRect().top,
                listHeight = $(window).height() - selectHeight - selectTop;

            $(this).closest('.select-destructor_container').find('.select-destructor_results').attr('style', 'max-height: ' + (listHeight - 20) + 'px;')
        });

    }
    _selectSetValues(select_obj, values){
        let placeholder = select_obj.attr('data-placeholder');

        select_obj.find("ul.select-destructor_results").html('');
        select_obj.find('.input-filed').text(placeholder);
        select_obj.find('select').html('');

        for(var i in values){
            this._selectAppendValues(select_obj, values[i]);
        }
        this._selectSelectValue(select_obj, '')
    }

    _selectAppendValues(obj, value){
        var html = `<li class="option" val="`+value.id+`">`+value.val+`</li>`,
            optionHtml = `<option value="`+value.id+`">`+value.val+`</option>`;

        html = $(html);
        html.click((e)=>{
            console.log('Выбран: ', $(e.target).text());
            this._selectSelectValue($(e.target).closest('.G-select-destructor'), $(e.target).attr('val'));
        });
        obj.find("ul.select-destructor_results").append(html);
        obj.find('select').append(optionHtml);
    }

    _selectSelectValue(select_obj, val) {
        var selectElem = select_obj,
            select_native = select_obj.find("select"),
            option = selectElem.find("li.option[val='"+val+"']"),
            optionText = selectElem.find("li.option[val='"+val+"']").text(),
            multiple = selectElem.data('multiple');

        if (multiple == true) {
            if ( option.hasClass('selected') ) {
                option.removeClass('selected')
            } else {
                option.addClass('selected');
            }
            var valueOptions = [];
            selectElem.find("li.option.selected").each(function(){
                valueOptions.push($(this).attr('val'));
            });
            selectElem.find('.input-filed').text('Выбрать');
        } else {
            option.addClass('selected').siblings().removeClass('selected');
            select_native.val(val);

            if (optionText != '' && optionText != undefined) {
                selectElem.removeClass('active').find('.input-filed').text(optionText)
            } else {
                selectElem.removeClass('active').find('.input-filed').text(selectElem.attr('data-placeholder'))
            }
        }
    }



    G_inputRangeTwo(data) {
        var html = `
            <div id="rangeTwo_`+data.name+`" class="G-input-rangeTwo G_bs-slider-range" data-name="`+data.name+`" data-theme="`+((data.theme != '' && data.theme != undefined) ? data.theme : '')+`">`;
                // добавлено условие ниже, т.к. необходим был label вне поля инпут
                 if (data.labelOuter!='' && data.labelOuter!=undefined) {
                        html +=`<p class="select-destructor_label">`+data.labelOuter+`</p>`
                    }
                html +=`
                <div class="input-destructor_container">
                    <div class="container-destructor_to">
                        <p class="label">`+data.label+` от</p>
                        <input type="text" value="" name="min" class="input-filed _minValue col" col="`+data.name+`_min">
                    </div>
                    <div class="container-destructor_separation">
                        <div class="line"></div>
                    </div>
                    <div class="container-destructor_from">
                        <p class="label">до</p>
                        <input type="text" value="" name="max" class="input-filed _maxValue col" col="`+data.name+`_max">
                    </div>
                </div>
                <div class="slider `+data.name+`"></div>
            </div>`;

        html = $(html);
        $(data.append).append(html);

        if(this.slider_callbacks[data.name]==undefined) this.slider_callbacks[data.name] = {};
        if(data.changeCallback!=undefined && data.changeCallback!=''){
            this.slider_callbacks[data.name]['changeCallback'] = data.changeCallback;
        }

        html.find("._minValue,._maxValue").change(function (){
            var val = parseInt($(this).val());
            var index;
            if($(this).hasClass('_minValue')) index = 0;
            if($(this).hasClass('_maxValue')) index = 1;
            $(this).closest(".G_bs-slider-range").find('.slider').slider('values', index, val);
        });

        // инициализация JQ Range
        html.find('.slider').slider({
            range: true,
            slide: (event, ui) => {
                $(ui.handle).closest('.G_bs-slider-range').find('._minValue').val(ui.values[0]);
                $(ui.handle).closest('.G_bs-slider-range').find('._maxValue').val(ui.values[1]);

                var name = $(ui.handle).closest('.G_bs-slider-range').data('name');
                if(this.slider_callbacks[name]!=undefined && this.slider_callbacks[name]['changeCallback']!='') {
                    this.slider_callbacks[name]['changeCallback']();
                }
            },
            change:(event, ui) => {
                var min = $(ui.handle).closest('.slider').slider('option', 'min');
                var max = $(ui.handle).closest('.slider').slider('option', 'max');
            }
        });
    }
    _setRangeTwoValues(id, params){ //val1,val2,min,max,step
        if(params.val1!=undefined) {
            $("#rangeTwo_" + id + " input._minValue").val(params.val1);
            $("#rangeTwo_" + id + " .slider").slider('values', 0, params.val1);
        }
        if(params.val2!=undefined) {
            $("#rangeTwo_" + id + " input._maxValue").val(params.val2);
            $("#rangeTwo_" + id + " .slider").slider('values', 1, params.val2);
        }
    }


    // Global component - "G_FilterButtons"
    G_FilterButtons(data) {
        var html = ``;
                // добавлено условие ниже, т.к. необходим был label вне поля инпут
                 if (data.labelOuter!='' && data.labelOuter!=undefined) {
                        html +=`<p class="select-destructor_label">`+data.labelOuter+`</p>`
                    }
            html +=`
            <div class="G-buttons-filter" id="fButtons_`+data.id+`">`;
                if (data.label != '' && data.label != undefined) {
                    html += `<span class="buttons-filter-label">`+data.label+`</span>`;
                }
                html += `<div class="buttons-filter_container"></div>
            </div>`;
        $(data.append).append(html);
        this._buttonsSetValues(data.id, data.values);
        if(data.changeCallback!=undefined){
            $("#fButtons_"+data.id+" .buttons-filter_container").on('click', 'button', function(){
                data.changeCallback();
            });
        }
    }
    _buttonsSetValues(id, values){
        $("#fButtons_"+id+" .buttons-filter_container").html('');
        var html = ``;
        for(var i in values){
            html = `<button type="button" val="`+values[i].id+`" class="btn btn-filter_option">`+values[i].val+`<input type="checkbox" col="`+id+`[]" class="col" val="`+values[i].id+`" value="`+values[i].id+`"></button>`;

            html = $(html);
            html.click((e)=>{
                this._buttonSelectValue(id, $(e.target).attr('val'));
            });

            $("#fButtons_"+id+" .buttons-filter_container").append(html);
        }
    }

    _buttonSelectValue(id_buttons, val){
        var btn = $("#fButtons_"+id_buttons+" button[val='"+val+"']");
        btn.toggleClass('selected');
        if(btn.hasClass('selected')){
            btn.find("input").prop('checked', true);
        }
        if(!btn.hasClass('selected')){
            btn.find("input").prop('checked', false);
        }
    }

    G_FilterCheckbox(data) {
        var html = `
            <div class="G-checkbox-filter">
                <span class="checkbox-filter-label">Подпись</span>
                <div class="checkbox-filter_container">
                    <label class="checkbox-filter_option">
                        <input type="checkbox" col="`+data.id+`" value="`+data.value+`" class="input-checkbox col">
                        <span class="label-input">`+data.label+`</span>
                    </label>
                </div>
            </div>`;
        $(data.append).append(html);
    }

}

// закрыть по клику вне select
$(document).on('mouseup', function (e) {
    var container = $('.G-select-destructor .select-destructor_filed');
    if (container.has(e.target).length === 0 && container.closest('.G-select-destructor').hasClass('active')) {
        container.closest('.G-select-destructor').removeClass('active');
    }
});
