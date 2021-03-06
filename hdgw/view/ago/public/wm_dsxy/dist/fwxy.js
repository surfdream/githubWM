﻿//服务协议
define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge"; var domains = require('domains');
    var $ = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),
        juicer = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js"),
        box = require('http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js'),
        lib = require('http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js');
    require('http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_dsxy/css/style.css');
    var businesshtml = [
        '<div class="fwxy_box">',
            '<div class="fwxy_title">',
                '<span class="remark">本协议最终解释权归互动购物所有</span>',
                '<h3>互动购物服务协议</h3>',
            '</div>',
            '<table border="0" cellspacing="0">',
                '<tbody>',
                    '<tr>',
                        '<td><b>甲方</b></td>',
                        '<td colspan="3"></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>乙方</b></td>',
                        '<td colspan="3"><b>杭州互动购物络科技有限公司</b></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>甲方承诺</b></td>',
                        '<td colspan="3">',
                            '<ol>',
                                '<li>不销售非约定经营范围内类目或者品牌的商品；</li>',
                                '<li>不销售假货，伪劣及非原厂正品商品以及未经报关进口商品和过期商品等；</li>',
                                '<li>在乙方平台发布的商品不缺货、断货；</li>',
                                '<li>遵守乙方相关规则，认真履行销售方义务；如甲方违反上述承诺，乙方有权立即终止所有服务及所有相关协议。</li>',
                            '</ol>',
                        '</td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>甲方产品品类及推广佣金</b></td>',
                        '<td colspan="3">',
                            '<ul class="class_list">',
                                '<li>□服饰箱包</li>',
                                '<li>□家纺百货</li>',
                                '<li>□珠宝首饰</li>',
                                '<li>□车品</li>',
                                '<li>□户外</li>',
                                '<li>□玩具</li>',
                                '<li>□成人用品</li>',
                                '<li>□婚庆用品</li>',
                                '<li>母婴（□食品类  □其他 ）</li>',
                                '<li>□食品饮料</li>',
                            '</ul>',
                        '</td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>商家用户名</b></td>',
                        '<td></td>',
                        '<td><b>电子邮件</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>在乙方平台出售的产品品牌</b></td>',
                        '<td colspan="3"></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>商家名称</b>（与营业执照所载一致）</td>',
                        '<td colspan="3"></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>工商营业执照注册号</b></td>',
                        '<td></td>',
                        '<td><b>注册法人</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>银行账号</b></td>',
                        '<td></td>',
                        '<td><b>户名</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>开户行</b></td>',
                        '<td colspan="3"></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>授权联系人</b></td>',
                        '<td></td>',
                        '<td><b>手机</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>商家电话</b></td>',
                        '<td></td>',
                        '<td></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>办公地址</b></td>',
                        '<td></td>',
                        '<td><b>邮编</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>结算方式</b></td>',
                        '<td colspan="3">同意按公司统一的结算规则</td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>售后</b></td>',
                        '<td colspan="3">甲方销售出去商品，必须全权负责好所有售后问题</td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>服务期限</b></td>',
                        '<td colspan="3"><b>1年</b></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>备注</b></td>',
                        '<td colspan="3">',
                            '<ol>',
                                '<li>甲方同意使用"甲方信息"中"电子邮件"接收乙方通知，并同意通过该电子邮件或电话与乙方缔结补充协议。</li>',
                                '<li>在乙方平台出售的商品价格不得高于本商品在其他电子商务平台的价格，其他平台促销品除外。</li>',
                            '</ol>',
                        '</td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>甲方</b></td>',
                        '<td></td>',
                        '<td><b>乙方</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>授权代表</b></td>',
                        '<td></td>',
                        '<td><b>授权代表</b></td>',
                        '<td></td>',
                    '</tr>',
                    '<tr>',
                        '<td><b>签约日期</b></td>',
                        '<td></td>',
                        '<td><b>签约日期</b></td>',
                        '<td></td>',
                    '</tr>',
                '</tbody>',
            '</table>',
        '</div>'
    ].join('');
    exports.show = function () {
        return box.alert({
            boxId: "fwxy",
            titleText: "物美服务协议",
            content: businesshtml,
            btns: [
                {
                    cls: 'ui_btn_h44yellow17',
                    res: 'hide',
                    text: '不同意协议',
                    callback: function () {
                        
                    }
                },
                {
                    cls: 'ui_btn_h44green3',
                    res: 'agree_and_register',
                    text: '同意协议',
                    callback: function () {
                        window.location.href = domains.account+"/seller/next_improve";
                    }
                }
            ],
            callback: function () {
                this.close = this.hide;
            }
        });
    };

});
