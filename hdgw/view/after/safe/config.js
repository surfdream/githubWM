﻿seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'afterPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/after/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'area': 'http://a.myhd.wumeiwang.com/hdgw/model/wmarea/dist/wmarea.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'wmupload': 'http://a.myhd.wumeiwang.com/hdgw/model/wmupload/dist/wmupload.js',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'wmshowartwork': 'http://a.myhd.wumeiwang.com/hdgw/model/wmshowartwork/dist/wmshowartwork.js',
        'wminputdown': 'http://a.myhd.wumeiwang.com/hdgw/model/wminputdown/dist/wminputdown.js',
        'wmarea': 'http://a.myhd.wumeiwang.com/hdgw/model/wmarea/dist/wmarea.js',
        'bankbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbank/dist/wmbank_box.js'

    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014011601']
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
            seajs.use('afterPublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();
