﻿/*
站内信
*/
define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge"; var domains = require('domains');
    var $ = require('http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js'),
        lib = require('http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js');
    var _send = function (op) { },
        _delAll = function (op) { },
        _delSingle = function (op) { }
    ;
    //发送站内信
    exports.send = function (op) {
        lib.verificationLogin(function () {
            _send(op);
        });
    };
    //删除与某个人的聊天记录
    exports.delAll = function (op) {
        lib.verificationLogin(function () {
            _delAll(op);
        });
    };
    //删除单挑聊天记录
    exports.delSingle = function (op) {
        lib.verificationLogin(function () {
            _delSingle(op);
        });
    };
});