<?php

session_start();
GLOBAL $globals;
$path = "";
$v = "";
$versionContent = "";

$_SESSION['subdomain'] = $globals['subdomain'];

require $_SERVER['DOCUMENT_ROOT'] . '/backend/clearCash.php';

$root = $_SERVER['DOCUMENT_ROOT'];

if ($_SERVER['HTTP_HOST'] == 'mirjk-update') {
    $v = mt_rand(10000, 99999999);
} else {
    $v = 1.00001;
}

if ($path) echo $this->path = $path;

if(isset($_SERVER['HTTP_HOST']) && strpos($_SERVER['HTTP_HOST'], "mirjk.ru") !== false) {
    clearCash($root . "/pages", $this->v);
    clearCash($root . "/assets", $this->v);
    clearCash($root . "/components", $this->v);
}

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Все квартиры в новостройках | МирЖК</title>
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="next-head-count" content="12">
    <meta id="versionContent" content="">
    <meta id="versionFiles" content="<?=$v?>">

    <!-- meta -->
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="Все квартиры в новостройках | МирЖК">
    <meta property="og:title" content="Ремонт квартир под ключ">
    <meta property="og:image" content="https://art-form.ru/static/cover-site_full.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:type" content="website">
    <meta name="twitter:title" content="Все квартиры в новостройках | МирЖК">
    <meta property="og:description" content="Строительное бюро полного цикла. Наш приоритет №1 - это качество работы. Мы специализируемся на частных пространствах и гарантируем высокое качество.">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:image" content="https://art-form.ru/static/cover-site_full.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="vk:image" content="https://art-form.ru/static/cover-site_small.png">
    <meta name="description" content="дизайн интерьеров">
    <meta property="og:url" content="">
    <meta property="article:author" content="Art-Form 1">
    <meta property="article:publisher" content="Art-Form 2">
    <link rel="image_src" href="https://art-form.ru/static/cover-site_full.png">

    <!-- Favicons -->
    <link rel="shortcut icon" href="/static/favicon.svg">
    <link rel="icon" href="/static/<? echo ($_SERVER['HTTP_HOST'] == 'mirjk-update') ? 'faviconDev.svg' : 'favicon.svg' ?>?v=1.03124">
    <link rel="apple-touch-icon" href="/static/favicon.svg">
    <link rel="mask-icon" href="/static/favicon.svg">

    <!-- color header browser - Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#1375A0">
    <!-- color header browser - Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#1375A0">
    <!-- color header browser - iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#1375A0">


    <!-- Style global -->
    <link rel="stylesheet" href="/assets/css/global.css?v=<?=$v?>">

</head>
<body>

    <main id="app"></main>

    <script src="/plugins/jquery-3.7.0.min.js"></script>
    <script src='/assets/js/scripts.js?v=<?=$v?>'></script>

</body>
</html>