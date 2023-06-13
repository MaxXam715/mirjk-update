const version = $('head').find('#versionFiles').attr('content');

// ---------- import ----------
$.ajax({ // Functions
    async: false,
    url: "/assets/js/functions.js?v="+version,
    dataType: "script"
});

$.ajax({ // Lazyload
    async: false,
    url: "/plugins/lazyload/lazyload.min.js?v="+version,
    dataType: "script"
});

$.ajax({ // Header
    async: false,
    url: "/components/Header.js?v="+version,
    dataType: "script"
});

$.ajax({ // Footer
    async: false,
    url: "/components/Footer.js?v="+version,
    dataType: "script"
});

$.ajax({ // Router
    async: false,
    url: "/assets/js/router.js?v="+version,
    dataType: "script"
});

$.ajax({ // Planeta Class
    async: false,
    url: "/classesJS/planeta.js?v="+version,
    dataType: "script"
});

var titlePage = document.title,
    url = getFilterParamsfromUrl(),
    url_page = window.location.pathname;



// ленивая загрузка изображений
// html.find("img[src=''].lazyload").lazyload({rootMargin: "500px"});


$(document).ready(function () {
    HeaderMain();
    FooterMain();
    $('#app').addClass('visible')
});