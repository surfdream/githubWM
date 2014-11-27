define(function(require,exports,module){var i=require("domains");var c=require("jquery"),g=require("lib"),d=require("wmbox"),a=require("verification"),b=require("juicer"),e=require("api");var h=function(){a.strikingSuccess=false;f()};var f=function(){var l=c(".user_role");var k=function(r){var q=this;e.getModelTree({success:function(t){if(t.success){var s=c('<dl style="margin: 20px 24px 0 24px;background: #ccc;padding: 8px;font-size: 16px;border: 1px solid #999;"><dt><a href="#" class="iconfont f5_tree" style="font-size: 16px;margin: 0 4px;">&#xf015c;</a><span data_id="'+t.success.id+'" data_name="'+t.success.name+'">根目录</span></dt></dl>');var u=q.wmBox.find(".nav_tree");n(u,t.success.subList,t.success.id,t.success.name);u.find(".get_page").click();u.before(s);u.find(".show_sub_btn").click();q.position();typeof r==="function"&&r.call(q)}}})};var n=function(w,v,u,t){var r,q;if(v&&v.length){for(var s in v){if(v[s].subList&&v[s].subList.length){r=c('<dd><dl data_id="'+v[s].id+'"></dl></dd>'),q=r.find("dl");q.append('<dt><a href="#" class="iconfont show_sub_btn">&#xf0175;</a><span class="chkbox iconfont">&#xf00b2;</span><a href="#" class="nav_nide" data_id="'+v[s].id+'" data_name="'+v[s].name+'" data_parent_id="'+u+'" data_parent_name="'+t+'">'+v[s].name+"</a></dt>");n(q,v[s].subList,v[s].id,v[s].name)}else{r=c('<dd><dl data_id="'+v[s].id+'"></dl></dd>'),q=r.find("dl");q.append('<dt><a href="#" class="iconfont show_sub_btn">&#xf0175;</a><span class="chkbox iconfont">&#xf00b2;</span><a href="#" class="nav_nide get_page" data_id="'+v[s].id+'" data_name="'+v[s].name+'" data_parent_id="'+u+'" data_parent_name="'+t+'">'+v[s].name+"</a></dt>")}w.append(r)}}};var o=b(['<div class="ids_main">','<div class="ids_head">',"<h3>{@if id }修改角色{@else}添加角色{@/if}</h3>",'<a href="#" class="iconfont close">&#xf00b3;</a>',"</div>",'<div class="ids_con">','<ul class="wm_form" data_id="${id}">','<li class="form_row">','<label class="row_key"><b class="form_must">*</b>角色名称：</label>','<input type="text" class="form_txt role_name" wmv="empty" wmvmsg="角色名称不能为空！" name="role_name_${m}" value="${role_name}" />','<span for="role_name_${m}"></span>',"</li>",'<li class="form_row">','<label class="row_key">角色表述</label>','<input type="text" class="form_txt remark" value="${remark}" />',"</li>",'<li class="form_row">','<label class="row_key">&nbsp;</label>','<a href="#" class="ui_btn ui_btn_h33gray15 submit"><span class="ui_btn_txt">确定</span></a>','<a href="#" class="ui_btn ui_btn_h33gray15 close"><span class="ui_btn_txt">取消</span></a>',"</li>","</ul>","</div>","</div>"].join(""));var p=b(['<div class="ids_main">','<div class="ids_head">',"<h3>${role_name}-权限分配</h3>",'<a href="#" class="iconfont close">&#xf00b3;</a>',"</div>",'<div class="ids_con">','<div class="wm_form" data_id="${role_id}">','<p class="role_remark"><i class="wm_ico bulb1"></i>${role_remark}</p>','<div class="nav_tree"></div>','<div class="btns">','<a href="#" class="ui_btn ui_btn_h33gray15 submit"><span class="ui_btn_txt">确定</span></a>','<a href="#" class="ui_btn ui_btn_h33gray15 close"><span class="ui_btn_txt">取消</span></a>',"</div>","</div>","</div>","</div>"].join(""));var j=function(q){return d.invBox({boxCls:"inv_default_skin",content:o.render(c.extend({m:parseInt(Math.random()*99999)+9999},q)),callback:function(){var s=this,u=this.wmBox.find(".wm_form"),t=u.attr("data_id"),r=this.wmBox.find(".nav_tree");this.close=this.hide;a.init(u);this.wmBox.on("click",".submit",function(){var v=u.find(".role_name").val(),w=u.find(".remark").val();if(a.verify(u)){if(t){e.editRole({role_id:t,role_name:v,role_remark:w,success:function(x){if(x.success){alert("修改成功");window.location.reload()}else{alert(x.error||"修改失败！")}},error:function(){alert("系统繁忙！")}})}else{e.addRole({role_name:v,role_remark:w,success:function(x){if(x.success){alert("添加成功");window.location.reload()}else{alert(x.error||"添加失败！")}},error:function(){alert("系统繁忙！")}})}}return false})}})};var m=function(q){return d.invBox({boxCls:"inv_default_skin role_to_competence_box",content:p.render(c.extend({m:parseInt(Math.random()*99999)+9999},q)),callback:function(){var s=this,t=this.wmBox.find(".wm_form"),r=this.wmBox.find(".nav_tree");this.close=this.hide;a.init(t);this.wmBox.on("click",".submit",function(){var u=t.attr("data_id"),v=[];r.find(".competence_item.allchkbox").each(function(){var x=c(this),w=x.closest("dl").attr("data_id");v.push({moduleId:w,privilegeId:x.attr("data_id")})});v=JSON.stringify(v);e.roleEditCompetence({roleId:u,asList:v,success:function(w){if(w.success){alert("设置成功！")}else{alert(w.error||"设置失败！")}},error:function(){alert("系统繁忙！")}});return false});this.wmBox.on("click",".show_sub_btn",function(){var v=c(this),u=v.closest("dd");u.addClass("show_sub_dd");v.attr("class","iconfont hide_sub_btn").empty().append("&#xf0176;");return false});this.wmBox.on("click",".hide_sub_btn",function(){var v=c(this),u=v.closest("dd");u.removeClass("show_sub_dd");v.attr("class","iconfont show_sub_btn").empty().append("&#xf0175;");return false});this.wmBox.on("click",".f5_tree",function(){k(s);return false});this.wmBox.on("click",".nav_nide",function(){var u=c(this);r.find(".curr").removeClass("curr");u.addClass("curr");u.parent().find(".show_sub_btn").click();return false});this.wmBox.on("click",".get_competence",function(){var v=c(this),u=v.closest("dl");(function(y,x){e.getPageCompetenceList({id:y.attr("data_id"),success:function(A){if(A.success&&A.success.length){for(var z in A.success){w.push('<dd class="competence_item" data_id="'+A.success[z].id+'" data_name="'+A.success[z].name+'"><span class="chkbox iconfont competence_chk">&#xf00b2;</span><span class="competence_name">'+A.success[z].name+'</span><span class="competence_remark">'+A.success[z].remark+"</span></dd>")}x.append(w.join(""));y.removeClass("get_competence")}},error:function(){}});var w=[]})(v,u);return false});this.wmBox.on("click",".chkbox",function(){var x=c(this),v=x.closest("dt"),u=u=v.closest("dl"),w=x.closest(".competence_item");v.toggleClass("allchkbox");w.toggleClass("allchkbox");if(v.hasClass("allchkbox")){u.find("dt,.competence_item").addClass("allchkbox").removeClass("sectionchkbox").find(".chkbox").empty().append("&#xf00b2;")}else{u.find("dt,.competence_item").removeClass("allchkbox")}r.find(".allchkbox:not(.competence_item)").each(function(){var y=c(this).closest("dd");if(y.find("dd:not(.competence_item)").length+1>y.find(".allchkbox:not(.competence_item)").length){y.find(".allchkbox:not(.competence_item):eq(0)").attr("class","sectionchkbox").find(".chkbox").empty().append("&#xf015d;")}else{y.find(".sectionchkbox:eq(0)").attr("class","allchkbox").find(".chkbox").empty().append("&#xf00b2;")}});r.find(".sectionchkbox").each(function(){var y=c(this).closest("dd");if(y.find("dd:not(.competence_item)").length===y.find(".allchkbox:not(.competence_item)").length){y.find(".sectionchkbox:not(.competence_item):eq(0)").attr("class","allchkbox").find(".chkbox").empty().append("&#xf00b2;")}});r.find(".sectionchkbox").each(function(){var y=c(this).closest("dd");if(!y.find(".allchkbox:not(.competence_item)").length){y.find(".sectionchkbox").removeClass("sectionchkbox")}})});this.wmBox.on("click",".competence_chk",function(){var u=c(this).closest("dl"),v=u.find(".competence_item.allchkbox").length;if(v!==u.find(".competence_item").length){u.find("dt").attr("class","sectionchkbox").find(".chkbox").empty().append("&#xf015d;")}else{u.find("dt").attr("class","allchkbox").find(".chkbox").empty().append("&#xf00b2;")}if(!v){u.find("dt").attr("class","").find(".chkbox").empty().append("&#xf00b2;")}return false});this.wmBox.on("click",".get_page",function(){var w=c(this),v=w.attr("data_id"),u=w.attr("data_name");e.getModelPageList({id:v,success:function(A){var y,x;if(A.success){for(var z in A.success.page_list){y=c('<dd><dl data_id="'+A.success.page_list[z].id+'"></dl></dd>');x=y.find("dl");x.append('<dt><a href="#" class="iconfont show_sub_btn get_competence"  data_id="'+A.success.page_list[z].id+'">&#xf0175;</a><span class="chkbox iconfont">&#xf00b2;</span><a href="#" class="nav_nide" data_id="'+A.success.page_list[z].id+'" data_name="'+A.success.page_list[z].name+'" data_parent_id="'+v+'" data_parent_name="'+u+'">'+A.success.page_list[z].name+"</a></dt>");w.closest("dl").append(y)}r.find(".get_competence").click();w.removeClass("get_page")}}});return false});k.call(this,function(){this.wmBox.find(".competence_item[data_id='1'] .chkbox").click()})}})};l.on("click",".add_user_role",function(){var r=c(this),q=r.data("roleBox");if(!q){q=j();r.data("roleBox",q)}q.show();return false});l.on("click",".edit_user_role",function(){var v=c(this),u=v.data("roleBox"),t=v.closest("tr"),s=t.attr("data_id"),q=t.attr("data_name"),r=t.attr("data_remark");if(!u){u=j({id:s,role_name:q,remark:r});v.data("roleBox",u)}u.show();return false});l.on("click",".set_competence",function(){var u=c(this),v=u.data("set_competence_box"),t=u.closest("tr"),r=t.attr("data_id"),q=t.attr("data_name"),s=t.attr("data_remark");if(!v){v=m({role_id:r,role_name:q,role_remark:s});u.data("set_competence_box",v)}v.show();return false});l.on("click",".deit_role",function(){var r=c(this),q=r.closest("tr");if(confirm("确定要删除角色？删除后无法恢复")){}return false})};h()});