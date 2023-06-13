var pathname = document.location.pathname,
    paths = pathname.split('/'),
    page = (paths[1] == "") ? 'home' : paths[1],
    route_css,
    route_js,
    routes = {},
    g_import = 0;


if((paths.length == 3 && paths[1] == "novostroyki") || (paths.length == 4 && paths[1] == "novostroyki" && paths[3] == "")){
    page = "jk";
}

if (routes[page] != undefined) {
    if (routes[page].css != undefined) {
        for (var i in routes[page].css) {
            route_css = routes[page].css[i];
            $('head').append('<link rel="stylesheet" type="text/css" href="/css/' + route_css + '.css?v=' + version + '">');
        }
    }

    if (routes[page].js != undefined) {
        for (var i in routes[page].js) {
            route_js = routes[page].js[i];
            switch (route_js) {
                case "chartJS":
                    break;
            }
        }
    }
}


$('head').append('<link rel="stylesheet" href="/pages/' + page + '/css/' + page + '.css?v=' + version + '">');
import("/pages/" + page + "/" + page + ".js?v=" + version).then(function (obj) {
    obj.default();
}).catch(function (err) {
    console.error('error import', err);
});