define(function(require,exports,module){var l=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");require("../css/style.css#");require("../../../view/public/wm_btn/css/style.css#");var f=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),d=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js");var e=f("body");var g=(function(){var m={};var n=0;return{heap:function(p,o){if(p&&o){m[p]=o;n++;return this}if(p&&!o){return m[p]}},removeHeap:function(o){n--;m[o]=null;return this},getIndex:function(){return n}}})();var j={create:function(o){var n=this;var m=o.opacity||"0.5";var p='<div class="wmBox-mask"style="display:block; top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; background-color: #000; filter: alpha(opacity='+m*100+"); opacity:"+m+"; position: fixed;  _position: absolute;zoom: 1;_height:"+e.height()+'"><iframe class="sdialog-mask-iframe" style="display: none; _display: block; width: 100%; height: 100%; filter: alpha(opacity=0); opacity: 0;" frameborder="0" src="javascript:\'\';"></iframe></div>';this.wmBox=f(this._html.render(o));this.mask=f(p);this.index=g.getIndex()+(o.basezIndex||10001);this.wmBox.css("z-index",this.index+1);this.mask.css("z-index",this.index);this.key="box_"+(g.getIndex()+1)},bind:function(){var m=this;this.mask.click(function(n){n.preventDefault();n.stopPropagation()});this.mask.mousemove(function(n){n.preventDefault();n.stopPropagation()});this.wmBox.on("click",".sure,.close",function(n){m.close();n.preventDefault()});this.wmBox.on("click",".hide",function(n){m.hide();n.preventDefault()});this.wmBox.on("click",".sure",function(n){if(typeof m.sureCallBack==="function"){m.sureCallBack.call(m)}n.preventDefault()});this.wmBox.on("click",".wm_btn_item",function(n){var p=f(this),o=p.attr("dataindex");if(m.btns&&typeof m.btns[o].callback==="function"){m.btns[o].callback.call(m,p)}n.preventDefault()});this.wmBox.on("click.stopPropagation",function(n){n.stopPropagation()});this.wmBox.mousemove(function(n){n.stopPropagation()})},abstractFun:function(){this.hide=function(){throw"hide方法未实现！"};this.show=function(){throw"show方法未实现！"};this.close=function(){throw"close方法未实现！"};this.position=function(){throw"position方法未实现！"};this.setCon=function(){throw"setCon方法未实现！"};this.setIndex=function(){throw"setIndex方法未实现！"};this.setTitle=function(){throw"setTitle方法未实现！"}}};var c=f.browser.msie&&f.browser.version==="6.0";var k=false;var a=function(){if(c){k=true;var p=f(window),o=f("body"),m=o[0],n=p.height();p.on("scroll.fixed",function(){var r=f(this),q=Math.random()*99999;r.data("t",q);(function(s){setTimeout(function(){if(s==r.data("t")){var t=f("body > .fixed_box:visible");if(t.length){var u=m.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0;var v=n/2-t.outerHeight()/2;t.css("margin-top",0);t.animate({top:u+v})}}},500)})(q)})}};var h=function(o,q){var n=this,m,p;this._html=d(['<div class="wmBox ${boxCls} fixed_box" id="${boxId}">','<div class="wmBox-head">','<h3 class="wmBox-title">${titleText}</h3>','<a class="close" href="javascript:void(0);">&times;</a>',"</div>",'<div class="wmBox-content">$${content}</div>','<div class="wmBox-botton">',"{@each btns as btnsitem,i}",'<a class="wm_btn_item ui_btn ${btnsitem.cls} ${btnsitem.res}" href="#" dataindex="${i}"><span class="ui_btn_txt">${btnsitem.text}</span></a>',"{@/each}","</div>","</div>"].join(""));m=f.extend({titleText:"系统提示",content:"",mask:true,btns:[{cls:"ui_btn_h23red6",res:"sure",text:"确定"}]},o);m.callback=o?o.callback||q:undefined;j.create.call(this,o);j.bind.call(this);j.abstractFun.call(this);this.btns=m.btns;e.append(this.mask).append(this.wmBox);if(c){p={zoom:1,width:n.wmBox.outerWidth()};this.wmBox.find(".wmBox-head").css(p);this.wmBox.find(".wmBox-botton").css(p)}this.position=function(){n.wmBox.css({marginTop:-(n.wmBox.outerHeight()/2)+"px",marginLeft:-(n.wmBox.outerWidth()/2)+"px"})};this.show=function(r){n.wmBox.show();n.mask.css("display","block");n.position();typeof r==="function"&&r()};this.setTitle=function(r){n.wmBox.find(".wmBox-title").empty().append(r)};this.close=function(r){n.wmBox.fadeOut(function(){f(this).remove();typeof r==="function"&&r()});n.mask.fadeOut(function(){f(this).remove()});g.removeHeap(n.key)};this.hide=function(){n.wmBox.fadeOut();n.mask.fadeOut()};this.setIndex=function(r){n.wmBox.css("z-index",r+1);n.mask.css("z-index",r)};this.wmBox.attr("top",this.wmBox.css("top"));typeof m.callback==="function"&&m.callback.call(this);!k&&a();k&&c&&f(window).scroll()};var b=function(u,r){var t=this,s,q,p,n,o,m;if(!u.rely){throw"relyBox rely parameter is null or undefined"}this.rely=f(u.rely);n=f(window);o=n.scrollLeft();m=n.scrollTop();p=this.rely.offset();this._html=d(['<div class="wmBox wm_relyBox ${boxCls}" id="${boxId}">','<div class="wmBox-content">$${content}</div>','<div class="wmBox-botton">',"{@each btns as btnsitem,i}",'<a class="wm_btn_item ui_btn ${btnsitem.cls} ${btnsitem.res}" href="#" dataindex="${i}"><span class="ui_btn_txt">${btnsitem.text}</span></a>',"{@/each}","</div>","</div>"].join(""));s=f.extend({content:"",mask:false,offset:{top:0,left:0},btns:[{cls:"ui_btn_h22red10",res:"sure",text:"确定"},{cls:"ui_btn_h22gray6",res:"close",text:"取消"}]},u);s.callback=u?u.callback||r:undefined;j.create.call(this,u);j.bind.call(this);j.abstractFun.call(this);this.btns=s.btns;e.append(this.wmBox);if(c){q={zoom:1,width:_wmBox.outerWidth()};_wmBox.find(".wmBox-botton").css(q)}this.show=function(v){t.position();t.wmBox.show();typeof v==="function"&&v.call(t)};this.position=function(){o=n.scrollLeft();m=n.scrollTop();p=t.rely.offset();var v=p.left-(s.offset.left||0);if(v+t.wmBox.outerWidth()>e.outerWidth()){v=p.left-t.wmBox.outerWidth()+t.rely.outerWidth()}t.wmBox.css({marginTop:"0px",marginLeft:"0px",top:p.top+t.rely.outerHeight()+5+(s.offset.top||0),left:v-o})};this.hide=function(){t.wmBox.fadeOut()};this.close=function(v){t.wmBox.fadeOut(function(){f(this).remove();typeof v==="function"&&v()});g.removeHeap(t.key)};this.setIndex=function(v){t.wmBox.css("z-index",v+1);t.mask.css("z-index",v)};typeof s.callback==="function"&&s.callback.call(this)};var i=function(o,q){var n=this,m,p;this._html=d(['<div class="wmBox invBox ${boxCls} fixed_box" id="${boxId}">','<div class="wmBox-content">$${content}</div>',"</div>"].join(""));m=f.extend({content:"",mask:true},o);m.callback=o?o.callback||q:undefined;m.callback=o?o.callback||q:undefined;j.create.call(this,o);j.bind.call(this);j.abstractFun.call(this);e.append(this.mask).append(this.wmBox);this.btns=m.btns;if(c){p={zoom:1,width:_wmBox.outerWidth()};_wmBox.find(".wmBox-head").css(p);_wmBox.find(".wmBox-botton").css(p)}this.position=function(){n.wmBox.css({marginTop:-(n.wmBox.outerHeight()/2)+"px",marginLeft:-(n.wmBox.outerWidth()/2)+"px"})};this.show=function(r){n.wmBox.show();n.mask.css("display","block");n.position();typeof r==="function"&&r.call(n)};this.hide=function(){n.wmBox.fadeOut();n.mask.fadeOut()};this.setIndex=function(r){n.wmBox.css("z-index",r+1);n.mask.css("z-index",r)};typeof m.callback==="function"&&m.callback.call(this);this.wmBox.attr("top",this.wmBox.css("top"));!k&&a();k&&c&&f(window).scroll()};exports.alert=function(m,o){var n=new h(m,o);g.heap(n.key,n);n.show();return n};exports.relyBox=function(m,o){var n=new b(m,o);g.heap(n.key,n);n.show();return n};exports.invBox=function(m,o){var n=new i(m,o);g.heap(n.key,n);n.show();return n};exports.getIndex=function(){return g.getIndex()};exports.getBox=function(m){return g.heap(m)}});