﻿seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'buyersPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/buyers/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'wmcollection': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_collect/dist/collect.js',
        'wm_ad': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_delivery_address/dist/addad_box.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014011101']
    ]
});
window.document.domain = "hdgw.com";
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
            seajs.use('buyersPublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();
