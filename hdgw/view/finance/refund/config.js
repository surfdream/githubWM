﻿seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'financePublic': 'http://a.myhd.wumeiwang.com/hdgw/view/finance/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'points_promotion': "http://a.myhd.wumeiwang.com/hdgw/view/public/points_promotion/dist/points_promotion.js",
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'forimg': 'http://a.myhd.wumeiwang.com/hdgw/model/wmforimg/dist/forimg.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'wmpage': 'http://a.myhd.wumeiwang.com/hdgw/model/wmpage/dist/wmpage.js',
        'jquery.ui.core': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.core.js',
        'jquery.ui.widget': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.widget.js',
        'jquery.ui.datepicker': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.datepicker.js',
        'datepicker-zh-CN': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/i18n/jquery.ui.datepicker-zh-CN.js',
        'core-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.core.css#',
        'theme-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.theme.css#',
        'datepicker-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.datepicker.css#',


    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014050901']
    ]
});
(function () {
    var dev = false, //上线时，修改为false
         scripts = document.scripts,
         script = scripts[scripts.length - 1],
         boot = script.getAttribute('data-init'),
         dir = script.getAttribute('src');

    dir = dir.slice(0, dir.lastIndexOf('/') + 1);
    //dev 
    if (dev) {
        dir = dir + 'src/';
    } else {
        dir = dir + 'dist/';
    }
    /*
     * 上面获取路径脚本需要立刻执行
     * 将加载脚本放到domReady后执行，避免ie浏览器终止操作错误
     */
    seajs.use('jquery', function ($) {
        $(function () {
            seajs.use('public');
            seajs.use('financePublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();
