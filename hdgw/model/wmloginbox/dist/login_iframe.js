define(function(require,exports,module){var b=require("jquery"),d=require("lib"),a=require("wmverification");var c=function(){var f=b(".wmlogin_form"),g=b("#user_name"),h=d.cookie("wm.user.username");window.document.domain="hdgw.com";g.val(h||"").focus();a.init(f,function(){this.setTipSkin("white1").setDirection("tl").setOffSet({left:200,top:-5}).strikingSuccess=false});e();g.attr("tabindex","1");f.find(":password").attr("tabindex","2")};var e=function(){var g=b(".wmlogin_form");var i,l,f,k=false,h;var j=function(n,o){b.ajax({url:"http://account.hdgw.com/accountExists",data:{username:encodeURI(n)},type:"get",dataType:"json",success:function(p){typeof o==="function"&&o(p)}})};var m=function(n,o){b.ajax({url:"http://account.hdgw.com/CheckAuthCode",data:{vcode:n},type:"get",dataType:"json",success:function(p){typeof o==="function"&&o(p)}})};g.on("click",".login_btn",function(){var q=b(this);var p=b("[name='username']"),n=b("[for='"+p.attr("name")+"']"),o=b.trim(p.val());if(!a.verify()){return false}if(!k){j(o,function(r){if(!r.response){k=false;n.empty().append('<i class="wm_ico fork2"></i>用户名不存在！')}else{k=true;h=r.attachment.userid;n.empty();q.click()}});return false}b.ajax({url:"/login",type:"post",data:{username:h,password:g.find("[name='password']").val(),authcode:g.find(".v_code_txt").val()},dataType:"json",success:function(r){if(r.response){window.top.location.reload()}else{if(r.attachment.require_authcode&&!g.find(".v_code_txt").length){g.find("#pw_row").after('<li class="form_row"><label class="row_key">验证码：</label><input type="text" class="form_txt w100 v_code_txt" wmv="empty" wmvmsg="验证码不能为空！" tabindex="3"><img src="http://account.hdgw.com/auth" class="mrl5 v_code_img" title="点击更换" style="vertical-align: middle;" /></li>')}alert(r.attachment.message)}},error:function(){alert("服务器正忙，请稍后再试！")}});return false});g.find("[name='username']").on("change",function(){var p=b(this),n=b("[for='"+p.attr("name")+"']"),o=b.trim(p.val());if(o){n.empty().append('<i class="loading18_18_1"></i>正在检测登录名').css("display","inline-block");j(o,function(q){if(!q.response){k=false;n.empty().append('<i class="wm_ico fork2"></i>用户名不存在！')}else{if(q.attachment.require_authcode&&!g.find(".v_code_txt").length){g.find("#pw_row").after('<li class="form_row"><label class="row_key">验证码：</label><input type="text" class="form_txt w100 v_code_txt" wmv="empty" wmvmsg="验证码不能为空！" tabindex="3"><img src="http://account.hdgw.com/auth" class="mrl5 v_code_img" title="点击更换" style="vertical-align: middle;" /></li>')}k=true;h=q.attachment.userid;n.empty()}})}});g.on("keypress",function(n){if(n.keyCode==13){b(".login_btn").click()}});g.on("click",".go_reg",function(){top.location.href="http://account.hdgw.com/register";return false});g.on("blur",".v_code_txt",function(){var p=b(this),o=b.trim(p.val()),n;if(o){m(o,function(q){if(!q.response){n=p.data("v_code_tips");if(!n){n=new tips({ele:p,con:"验证码错误！",skin:"white1",direction:"tl",offset:{left:270,top:-5}});p.data("v_code_tips",n)}n.show();g.find(".v_code_img").click()}})}});g.on("focus",".v_code_txt",function(){var o=b(this),n;n=o.data("v_code_tips");n&&n.hide()});g.on("click",".v_code_img",function(){b(this).attr("src","http://account.hdgw.com/auth?t="+new Date().getTime());return false})};c()});