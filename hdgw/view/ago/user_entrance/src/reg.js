﻿define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge"; var domains = require('domains');
    var $ = require("jquery"),
        juicer = require("juicer"),
        box = require("wmbox"),
        lib = require("lib"),
        tips = require("wmtips"),
        verification = require('wmverification');
    var pacthtml = [
        '<div class="pact_mian">',
            '<ul>',
                '<li>',
                    '<h3>第一条 隐私保护原则</h3>',
                    '<p>互动购物承诺尊重您的隐私和您的个人信息安全。互动购物并且承诺尽可能地为您提供最佳的服务。比如，互动购物会利用通过网站运作而收集到的这些信息， 来制定您的个性化沟通方式和购物经历、也可以更好地对您的客户服务调查做出反应、对您的订单和帐户信息及客户服务需求与您进行沟通、就互动购物网站中的商品和活动与您进行沟通以及为了其他推广宣传目的、优化管理、促销、调查等其他本网站的特别项目使用这些信息。互动购物也可以用这样的信息来阻止可能的被禁止项目和非法活动，用以加强使用规则和条款的实施，并用以解决争议和保护其合法的私有财产权益及解决涉及互动购物的交易活动而产生的问题。</p>',
                '</li>',
                '<li>',
                    '<h3>第二条 禁止泄密原则</h3>',
                    '<p>互动购物不可以向任何其他人出售或出租您的个人信息。但如果是为经营目的需要的，互动购物可以将信息交付给一些服务提供商只在为互动购物的经营来使用。例如，他们负责处理互动购物的装运业务、数据管理业务、电子邮件发送业务、市场调查业务、信息分析业务和促销管理业务。买卖互动购物网站上的商品， 查阅数据资料、销售信函、市场调查、分析报告和促销手段。互动购物提供给其服务提供商的个人信息的前提是他们需要这些信息来完成其服务并同时承诺尽可能保护您的个人信息。</p>',
                '</li>',
                '<li>',
                    '<h3>第三条 保密例外原则</h3>',
                    '<p>在极少数情况下，互动购物可以透露特定的信息，例如，政府机构请求、法院调查令等法律规定的情况，以及为执行本网站的政策或保护他人的权益、财产 和安全。互动购物也会和那些协助进行诈骗防范和调查的公司共享信息。下在法律范围内响应法院指令，以便加强本网站的管理政策或保护他人的权利、财产或 保险。互动购物同时与公司分享信息协助保护或调查。互动购物不会提供信息给那些推销和商业目的公司或代理机构行。</p>',
                '</li>',
                '<li>',
                    '<h3>第四条 意外免责原则</h3>',
                    '<p>互动购物会将非常认真地保护您的个人信息。然而，尽管互动购物已经尽力了，但是仍有第三方通过非法手段在中途截取发送的信息的风险。这在所有互联网 使用中都是真实存在的。以至于互动购物无法完全保证您传送的任何信息的安全。发送任何信息的风险都您都须承担。特别是，互动购物将采取所有合理的预防措施来确保您的订购和付款详细信息的安全，除非互动购物存在疏忽，否则互动购物将不承担因您提供的信息被非法侵入而造成您和第三方的相应损失。</p>',
                '</li>',
                '<li>',
                    '<h3>第五条 补充条款</h3>',
                    '<p>互动购物决不会发送电子邮件来向您索要登录帐户和密码。如果您接收了这样的电子邮件，绝对不要回复。</p>',
                '</li>',
            '</ul>',
        '</div>'
    ].join('');
    var init = function () {
        if (global_setting && global_setting.current && global_setting.current.error) {
            box.alert({
                boxCls: "errbox",
                titleText: "系统提示",
                content: "<p>" + global_setting.current.message + "</p>"
            });
        }
        if (global_setting && global_setting.current && global_setting.current.success) {
            box.alert({
                boxCls: "errbox",
                titleText: "系统提示",
                content: '<p style="font-size: 18px;text-align: center;padding: 40px 80px"><i class="wm_ico hook5" style="margin-right:5px"></i>注册成功！</p><p style="text-align: right;*margin-bottom:-20px"><a href="' + domains.account + '/login" class="ui_btn ui_btn_h26red14"><span class="ui_btn_txt">马上登录</span></a></p>',
                btns: []
            });
        }
        verification.init();
        verification.strikingSuccess = false;
        bind();
    };
    var bind = function () {
        var $form = $(".reg_form");
        var $show_other_login = $(".show_other_login");
        $form.on("click", ":submit", function () {
            return verification.verify($form);
            var $this = $(this), phone, phonevcTips;
            if (verification.verify($form)) {
                phone = $form.find(".phone_txt").val();
                $.ajax({
                    url: domains.account+"/actions/IsPhoneEnabled",
                    type: "get",
                    dataType: "json",
                    data: {
                        phone: phone
                    },
                    success: function (data) {
                        if (data.response) {
                            $this.closest("form").submit();
                        } else {
                            phonevcTips = $this.data("errTips");
                            if (!phonevcTips) {
                                phonevcTips = new tips({
                                    ele: $form.find(".phone_txt"),
                                    con: "<p>此手机已被注册！</p>",
                                    skin: "red2",
                                    direction: "rc",
                                    close: 2000,
                                    offset: { top: 5 }
                                });
                                $this.data("errTips", phonevcTips);
                            }
                            phonevcTips.show();
                        }
                    }
                });
            }
            return false;
        });
        $form.on("focus", ".form_txt", function () {
            var $this = $(this), _msg = $this.attr("data_form_msg");
            if (_msg) {
                $("[for='" + $this.attr("name") + "']").empty().append('<i class="wm_ico bulb1" style="margin: 0 5px;"></i>' + _msg).css({
                    'padding-left': 10,
                    'color': "#6d6161",
                    'float': 'left',
                    'width': 220
                });
            }
        });
        $form.on("blur", "#user_name", function () {
            var $this = $(this), $msg = $("[for='" + $this.attr("name") + "']"), _v = $this.val();
            if (_v && !$this.attr("wmvresult")) {
                $msg.empty().append('<i class="loading18_18_1"></i>正在检测登录名');
                $.ajax({
                    url: '/nameExists',
                    data: {
                        username: encodeURI(_v)
                    },
                    type: 'get',
                    dataType: 'json',
                    success: function (data) {
                        if (data.response) {
                            $msg.empty().append('<i class="wm_ico fork2"></i>用户名已存在！');
                        } else {
                            $msg.empty();
                        }
                    }
                });
            }
        });
        $form.on("click", ".pact a", function () {
            box.alert({
                boxCls: "pactbox",
                titleText: "物美用户服务协议",
                content: pacthtml
            });
            return false;
        });
        $form.on("click", ".getphonevc", function () {
            var $this = $(this), $parent = $this.closest(".getphonevc_box"), errTips, phone;
            phone = $form.find(".phone_txt").val();
            if (verification.verify($form.find(".row_phone"))) {
                verification.hideTips();
                $.ajax({
                    url: domains.account+"/actions/IsPhoneEnabled",
                    type: "get",
                    dataType: "json",
                    data: {
                        phone: phone
                    },
                    success: function (data) {
                        if (data.response) {
                            lib.countdown({
                                parent: $parent,
                                ele: $this,
                                countdownModel: '<span style="font-size:12px;color:#535353">验证码已发送，<b style="color:#e13436;font-weight: 500;">${i}秒</b>后重新获取！</span>',
                                start: 30
                            });
                            lib.sendSMS({
                                param: {
                                    phone: phone
                                }
                            });
                        } else {
                            errTips = $this.data("errTips");
                            if (!errTips) {
                                errTips = new tips({
                                    ele: $form.find(".phone_txt"),
                                    con: "<p>此手机已被注册！</p>",
                                    skin: "red2",
                                    direction: "rc",
                                    close: 2000,
                                    offset: { top: 5 }
                                });
                                $this.data("errTips", errTips);
                            }
                            errTips.show();
                        }
                    }
                });

            }

            return false;
        });

    };
    init();
});
