define(function(require,exports,module){var f=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var b=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),c=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js");var d=c.cookie("wmpushmsgindex")-0||0;var g=function(){};var e=function(){var h=b("body");window.document.domain="hdgw.com";h.append('<iframe src="http://a.myhd.wumeiwang.com/hdgw/model/wmds/dsifrmae.html" style="display:none" id="getDataIframe"></iframe>')};var a=setInterval(function(){var h=c.cookie("wmpushmsgindex")-0||0;if(d!==h){g(b.parseJSON(c.cookie("wmpushmsg")));d=h}},5000);e();exports.newDataClaaback=function(h){if(typeof h==="function"){g=h}};exports.closeGet=function(){b("#getDataIframe")[0].contentWindow.closeGet()}});