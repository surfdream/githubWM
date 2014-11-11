﻿define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge"; var domains = require('domains');
    var $ = require("jquery"),
        lib = require("lib"),
        lazyload = require("wmlazyload"),
         wmas = require("wmas"),
        forImg = require("wmforimg");
    var init = function () {
        var $page = $("#page");
        wmas.init({
            callback: [
                {
                    key: "adv_max_320",
                    fun: function () {
                        if (this.find(".for_img_item").length > 1) {
                            new forImg.Fade({
                                forImgBoxEle: ".adv_max_320",
                                interval: 5000,
                                callback: function () {
                                    var that = this;
                                    var i = this.forImgItem.length
                                    var $indexBox = this.forImgBox.find(".indexBox"), indexItem = [];
                                    while (i--) {
                                        indexItem[i] = '<li>' + (i + 1) + '</li>';
                                    }
                                    $indexBox.append(indexItem.join(''));
                                    this.indexs = $indexBox.find('li');
                                    this.indexs.eq(0).addClass("curr");
                                    this.indexs.click(function () {
                                        that.setIndex(this);
                                    });
                                    this.automatic(true);
                                }
                            });
                        }
                    }
                },
                {
                    key: "adv_220_340",
                    fun: function () {
                        this.find(".spread_brand img[src='']").attr("src", 'http://a.myhd.wumeiwang.com/hdgw/view/ago/wmwomen/img/404logo.png');
                    }
                },
                {
                    key: "lady_right_200_150",
                    fun: function () {
                        var $lady = this.closest(".wm_lady"),
                            $brand_list = $lady.find(".brand_list");
                        this.find(".remark img[src='']").attr("src", 'http://a.myhd.wumeiwang.com/hdgw/view/ago/wmwomen/img/404logo.png');
                        $brand_list.empty();
                        $lady.find(".lady_item").each(function () {
                            $brand_list.append('<li class="brand_item"><a href="#"><img src="' + ($(this).find("a").attr("data_brand") || "http://a.myhd.wumeiwang.com/hdgw/view/ago/wmwomen/img/404logo.png") + '"></a></li>');
                        });
                    }
                },
                {
                    key: "elegant_right_200_150",
                    fun: function () {
                        var $elegant = this.closest(".wm_elegant"),
                           $brand_list = $elegant.find(".brand_list");
                        this.find(".remark img[src='']").attr("src", 'http://a.myhd.wumeiwang.com/hdgw/view/ago/wmwomen/img/404logo.png');
                        $brand_list.empty();
                        $elegant.find(".elegant_item").each(function () {
                            $brand_list.append('<li class="brand_item"><a href="#"><img src="' + ($(this).find("a").attr("data_brand") || "http://a.myhd.wumeiwang.com/hdgw/view/ago/wmwomen/img/404logo.png") + '"></a></li>');
                        });
                    }
                }
            ],
            otherData: "logo"
        });

        bind();
    };
    var bind = function () {

    };
    init();
});
