function ajaxRequest(data) {
    var json;
    $.ajax({
        url: data.url,
        method: (data.method == undefined && data.method == '') ? 'GET' : data.method,
        async: false,
        data: (data.data != undefined && data.data != '') ? data.data : '',
    }).done(function(data) {
        if (isJsonString(data)) {
            data = $.parseJSON(data);
        }
        json = data;
    }).fail(function(error) {
        alert('JSON request error. See DEV Tools')
        console.log('%c Ошибка запроса JSON ', 'background: red; color: #fff; border-radius: 50px;');
        console.table({
            Страница: document.title,
            URL: data.url,
            Method: data.method,
            Async: false,
            readyState: error.readyState,
            status: error.status,
            statusText: error.statusText,
        });
    });

    return json;
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/***** Router start */
function routeUrl(state,url){
    history.replaceState(state, '', url);
}
/***** Router end */


function getFilterParamsfromUrl() {
    var filter_json = {};
    if(window.location.href.indexOf('?')!=-1){
        var url = window.location.href.slice(window.location.href.indexOf('?')+1);
        if(url.indexOf('#')!=-1) {
            url = url.slice(0, url.indexOf('#'));
        }
        var params = url.split('&');
        for(var i in params){
            var param = params[i].split('=');
            if(param[0].indexOf('[]')!=-1 || param[0].indexOf('%5B%5D')!=-1 || param[0].indexOf('%5b%5d')!=-1){
                param[0] = param[0].replace('[]', '');
                param[0] = param[0].replace('%5B%5D', '');
                param[0] = param[0].replace('%5b%5d', '');
                if(filter_json[param[0]] == undefined){
                    filter_json[param[0]] = [];
                }
                filter_json[param[0]].push(decodeURIComponent(param[1]));
            }else{
                filter_json[param[0]] = decodeURIComponent(param[1]);
            }
        }
    }
    return filter_json;
}

function pushParamsToUrl(params){ // {param1: value1, param2: value2}
    var href = window.location.href;
    var filter_json = getFilterParamsfromUrl();
    var url_params = [];
    for(var param in params){
        delete filter_json[param];
        if(params[param] != null){
            filter_json[param] = params[param];
        }
    }
    for(var key in filter_json){
        if($.isArray(filter_json[key])){
            for(var k in filter_json[key]){
                url_params.push(key+"[]="+filter_json[key][k]);
            }
        }else{
            if(filter_json[key]!=undefined){
                url_params.push(key+"="+filter_json[key]);
            }
        }
    }
    url_params = url_params.join("&");
    href = href.split('?');
    href = href[0];
    if(url_params == undefined){
        return href;
    }else{
        return href+'?'+url_params;
    }
}

function mergeJson(json1, json2){
    for(var i in json1){
        if(getType(json1[i]) == 'object'){
            for(var k in json1[i]){
                if(getType(json1[i][k]) == 'object'){
                    for(var p in json1[i][k]){
                        if(json2[i]!=undefined && json2[i][k]!=undefined && json2[i][k][p] != undefined) json1[i][k][p] = json2[i][k][p];
                    }
                }else{
                    if(json2[i] != undefined && json2[i][k] != undefined) json1[i][k] = json2[i][k];
                }
            }
        }else{
            if(json2[i] != undefined) json1[i] = json2[i];
        }
    }
    return json1;
}

function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

function dropdownWidget(data) {
    var classWrapper = (data.classWrapper != '' && data.classWrapper != undefined) ? data.classWrapper : '',
        classList = (data.classList != '' && data.classList != undefined) ? data.classList : '',
        buttonToggle = (data.buttonToggle != '' && data.buttonToggle != undefined) ? data.buttonToggle : '<button type="button" class=""><i class="icon menu-dots"></i></button>';

    var html = `
    <div class="uk-inline ${classWrapper}">
        ${buttonToggle}
       
        <ul uk-dropdown="mode: click" class="${classList}">`;
    for (var i in data.buttonsList) {
        var itemBtn = data.buttonsList[i],
            className = (itemBtn.class != '' && itemBtn.class != undefined) ? itemBtn.class : '',
            link = (itemBtn.link != '' && itemBtn.link != undefined) ? `href="${itemBtn.link}"` : '',
            title = (itemBtn.title != '' && itemBtn.title != undefined) ? itemBtn.title : 'undefined';

        html += `
                <li>
                    <a ${link} class="item ${className}">`;
        if (itemBtn.icon != '' && itemBtn.icon != undefined) {
            if (itemBtn.icon.iconType == 'icon') {
                html += `<i class="icon ${itemBtn.icon.name}"></i>`;
            } else {
                html += `<img src="${itemBtn.icon.name}" alt="icon" class="icon-img">`;
            }
        }
        html += `
                        ${title}
                    </a>
                </li>`;
    }
    html += `
        </ul>
    </div>`;
    return html;
}

function numberWithSpaces(x, decimal){
    if(isNaN(x) || x==''){
        x = 0;
    }
    if(decimal>0){
        x = parseFloat(x);
        x.toFixed();
        x = x.toFixed(decimal);
        x = x.split(".");
        x[0] = x[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        if(x[1]!=undefined){
            x = x[0]+"."+x[1];
        }else{
            x = x[0];
        }
    }else{
        x = Math.round(x);
        x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return x;
}

function dt_format(date,format){
    if(date == "") date = "0000-00-00";
    if(date == '0000-00-00 00:00:00' || date == '0000-00-00'){
        if(format == 'd.m.Y'){
            return '00.00.0000';
        }else{
            return date;
        }
    }
    if (date instanceof Date){
    }else{
        if(typeof date != 'number') {
            var dateReg = /^\d{2}([.])\d{2}\1\d{4}$/
            var matches = date.match(dateReg); // matches
            if (matches) {
                date = date.replace(/^(\d{2})[.](\d{2})[.](\d{4})$/, '$3-$2-$1');
            }
            date = date.replaceAll('-','/');
        }
        date = new Date(date);
    }
    var arr_months_wd = {'01':'Января', '02':'Февраля', '03':'Марта','04':'Апреля', '05':'Мая', '06':'Июня', '07':'Июля', '08':'Августа', '09':'Сентября', '10':'Октября', '11':'Ноября', '12':'Декабря'}
    var arr_months = {'01':'Январь', '02':'Февраль', '03':'Март','04':'Апрель', '05':'Май', '06':'Июнь', '07':'Июль', '08':'Август', '09':'Сентябрь', '10':'Октябрь', '11':'Ноябрь', '12':'Декабрь'}
    var week_days = ['вс', 'пн', 'вт','ср','чт','пт','сб']
    if(format == undefined){
        format = "Y-m-d";
    }
    var month = date.getMonth()+1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds();
    var quarter = Math.ceil(month/3);
    hour = (hour<10)?"0"+hour:hour;
    minute = (minute<10)?"0"+minute:minute;
    second = (second<10)?"0"+second:second;
    var t = new Date(date.getFullYear(), date.getMonth()+1, 0);
    t = t.getDate()+1;
    month = month.toString().length > 1 ? month : '0' + month;
    day = day.toString().length > 1 ? day : '0' + day;
    var fullYear = date.getFullYear();
    if(format == "Y"){
        return fullYear;
    }
    if(format == "d"){
        return day;
    }
    if(format == "Y-m-01"){
        return fullYear+"-"+month+"-01";
    }
    if(format == "d Month, N (H:i)") {
        return day + " " + arr_months_wd[month] + ", " + week_days[date.getDay()]+" ("+hour+":"+minute+")";
    }
    if(format.indexOf("Y-m-w")>-1){ // week - число , это номер дня недели
        var num_week = format.replace("Y-m-w", "");
        var week_n = date.getDay();
        date.setDate(date.getDate() - week_n+parseInt(num_week));

        return dt_format(date, 'Y-m-d');
    }
    if(format == "d Month, N"){
        return day+" "+arr_months_wd[month]+", "+week_days[date.getDay()];
    }
    if(format == "d Month, N (Y)"){
        return day+" "+arr_months_wd[month]+", "+week_days[date.getDay()] + " ("+fullYear+")";
    }
    if(format == "d Month Y"){
        return day+" "+arr_months_wd[month]+" "+fullYear;
    }
    if(format == "d Month Y H:i"){
        return day+" "+arr_months_wd[month]+" "+fullYear+" ("+hour+":"+minute+")";
    }
    if(format == "d.m.Y"){
        return day+"."+month+"."+fullYear;
    }
    if(format == "Q Y"){
        return quarter+" кв. "+fullYear;
    }
    if(format == "Y-m-d"){
        return fullYear+"-"+month+"-"+day;
    }
    if(format == "d Month"){
        return day+" "+arr_months_wd[month];
    }
    if(format == "H:i"){
        return hour+":"+minute;
    }
    if(format == "d.m H:i"){
        return day+"."+month+" "+hour+":"+minute;
    }
    if(format == "d.m.Y H:i:s"){
        return day+"."+month+"."+fullYear+" "+hour+":"+minute+":"+second;
    }
    if(format == "d.m.Y H:i"){
        return day+"."+month+"."+fullYear+" "+hour+":"+minute;
    }
    if(format == "Y-m-d H:i:s"){
        return fullYear+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
    }
    if(format == "Y-m-dTH:i:s"){
        return fullYear+"-"+month+"-"+day+"T"+hour+":"+minute+":"+second;
    }
    if(format == "Month Y"){
        return arr_months[month] + " " + fullYear;
    }
    if(format == "Month"){
        return arr_months[month];
    }
    if(format == "Y"){
        return fullYear;
    }
    if(format == "NearFriday.m.Y"){
        var delta = 5-date.getDay();
        var result = new Date(date);
        if (delta >= 0){
            result.setDate(result.getDate()+delta);
        }else{
            result.setDate(result.getDate()+7+delta);
        }
        day = result.getDate();
        day = day.toString().length > 1 ? day : '0' + day;
        month = result.getMonth()+1;
        month = month.toString().length > 1 ? month : '0' + month;
        return "до "+day+"."+month+"."+fullYear;
    }
    if(format == "Y-m-t"){
        var lastDayOfMonth = new Date(fullYear, date.getMonth()+1, 0);
        lastDayOfMonth = lastDayOfMonth.getDate();
        lastDayOfMonth = lastDayOfMonth.toString().length > 1 ? lastDayOfMonth : '0' + lastDayOfMonth;
        return fullYear+"-"+month+"-"+lastDayOfMonth;
    }
}