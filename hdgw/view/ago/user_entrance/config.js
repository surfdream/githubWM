﻿seajs.config({
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'agoPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/ago/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'fwxy': 'http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_dsxy/dist/fwxy.js',
        'dsxy': 'http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_dsxy/dist/dsxy.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014091701']
    ]
});
(function () {
    var dev = false, //上线时，修改为false
       scripts = document.scripts,
       script = scripts[scripts.length - 1],
       boot = script.getAttribute('data-init'),
       dir = script.getAttribute("src");

    dir = dir.slice(0, dir.lastIndexOf('/') + 1);
    //dev 
    if (dev) {
        if (location.href.indexOf('debug') === -1) {
            seajs.config({
                'map': [
                   [/^(.*\.(?:css|js))(.*)$/i, '$1?t=' + (+new Date())]
                ]
            });
        }
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
            try {
                seajs.use('agoPublic');
            }
            catch (e) {

            }
            finally {
                if (boot) {
                    seajs.use(dir + boot);
                }
            }
        });
    });
})();
