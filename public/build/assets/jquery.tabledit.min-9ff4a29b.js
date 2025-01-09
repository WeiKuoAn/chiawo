/*!
 * Tabledit v1.2.3 (https://github.com/markcell/jQuery-Tabledit)
 * Copyright (c) 2015 Celso Marques
 * Licensed under MIT (https://github.com/markcell/jQuery-Tabledit/blob/master/LICENSE)
 */if(typeof jQuery>"u")throw new Error("Tabledit requires jQuery library.");(function(n){n.fn.Tabledit=function(y){function p(t){var i=d.find(".tabledit-input").serialize()+"&action="+t,a=e.onAjax(t,i);if(a===!1)return!1;var s=n.post(e.url,i,function(o,c,u){t===e.buttons.edit.action&&(h.removeClass(e.dangerClass).addClass(e.warningClass),setTimeout(function(){d.find("tr."+e.warningClass).removeClass(e.warningClass)},1400)),e.onSuccess(o,c,u)},"json");return s.fail(function(o,c,u){t===e.buttons.delete.action?(f.removeClass(e.mutedClass).addClass(e.dangerClass),f.find(".tabledit-toolbar button").attr("disabled",!1),f.find(".tabledit-toolbar .tabledit-restore-button").hide()):t===e.buttons.edit.action&&h.addClass(e.dangerClass),e.onFail(o,c,u)}),s.always(function(){e.onAlways()}),s}if(!this.is("table"))throw new Error("Tabledit only works when applied to a table.");var d=this,C={url:window.location.href,inputClass:"form-control input-sm",toolbarClass:"btn-toolbar",groupClass:"btn-group btn-group-sm",dangerClass:"danger",warningClass:"warning",mutedClass:"text-muted",eventType:"click",rowIdentifier:"id",hideIdentifier:!1,autoFocus:!0,editButton:!0,deleteButton:!0,saveButton:!0,restoreButton:!0,buttons:{edit:{class:"btn btn-sm btn-default",html:'<span class="glyphicon glyphicon-pencil"></span>',action:"edit"},delete:{class:"btn btn-sm btn-default",html:'<span class="glyphicon glyphicon-trash"></span>',action:"delete"},save:{class:"btn btn-sm btn-success",html:"Save"},restore:{class:"btn btn-sm btn-warning",html:"Restore",action:"restore"},confirm:{class:"btn btn-sm btn-danger",html:"Confirm"}},onDraw:function(){},onSuccess:function(){},onFail:function(){},onAlways:function(){},onAjax:function(){}},e=n.extend(!0,C,y),h="undefined",f="undefined",m={columns:{identifier:function(){e.hideIdentifier&&d.find("th:nth-child("+parseInt(e.columns.identifier[0])+"1), tbody td:nth-child("+parseInt(e.columns.identifier[0])+"1)").hide();var t=d.find("tbody td:nth-child("+(parseInt(e.columns.identifier[0])+1)+")");t.each(function(){var i='<span class="tabledit-span tabledit-identifier">'+n(this).text()+"</span>",a='<input class="tabledit-input tabledit-identifier" type="hidden" name="'+e.columns.identifier[1]+'" value="'+n(this).text()+'" disabled>';n(this).html(i+a),n(this).parent("tr").attr(e.rowIdentifier,n(this).text())})},editable:function(){for(var t=0;t<e.columns.editable.length;t++){var i=d.find("tbody td:nth-child("+(parseInt(e.columns.editable[t][0])+1)+")");i.each(function(){var a=n(this).text();e.editButton||n(this).css("cursor","pointer");var s='<span class="tabledit-span">'+a+"</span>";if(typeof e.columns.editable[t][2]<"u"){var o='<select class="tabledit-input '+e.inputClass+'" name="'+e.columns.editable[t][1]+'" style="display: none;" disabled>';n.each(jQuery.parseJSON(e.columns.editable[t][2]),function(u,v){o+=a===v?'<option value="'+u+'" selected>'+v+"</option>":'<option value="'+u+'">'+v+"</option>"}),o+="</select>"}else var o='<input class="tabledit-input '+e.inputClass+'" type="text" name="'+e.columns.editable[t][1]+'" value="'+n(this).text()+'" style="display: none;" disabled>';n(this).html(s+o),n(this).addClass("tabledit-view-mode")})}},toolbar:function(){if(e.editButton||e.deleteButton){var t="",i="",a="",s="",o="";d.find("th.tabledit-toolbar-column").length===0&&d.find("tr:first").append('<th class="tabledit-toolbar-column"></th>'),e.editButton&&(t='<button type="button" class="tabledit-edit-button '+e.buttons.edit.class+'" style="float: none;">'+e.buttons.edit.html+"</button>"),e.deleteButton&&(i='<button type="button" class="tabledit-delete-button '+e.buttons.delete.class+'" style="float: none;">'+e.buttons.delete.html+"</button>",o='<button type="button" class="tabledit-confirm-button '+e.buttons.confirm.class+'" style="display: none; float: none;">'+e.buttons.confirm.html+"</button>"),e.editButton&&e.saveButton&&(a='<button type="button" class="tabledit-save-button '+e.buttons.save.class+'" style="display: none; float: none;">'+e.buttons.save.html+"</button>"),e.deleteButton&&e.restoreButton&&(s='<button type="button" class="tabledit-restore-button '+e.buttons.restore.class+'" style="display: none; float: none;">'+e.buttons.restore.html+"</button>");var c='<div class="tabledit-toolbar '+e.toolbarClass+`" style="text-align: left;">
                                           <div class="`+e.groupClass+'" style="float: none;">'+t+i+`</div>
                                           `+a+`
                                           `+o+`
                                           `+s+`
                                       </div></div>`;d.find("tr:gt(0)").append('<td style="white-space: nowrap; width: 1%;">'+c+"</td>")}}}},b={view:function(t){var i=n(t).parent("tr");n(t).parent("tr").find(".tabledit-input.tabledit-identifier").prop("disabled",!0),n(t).find(".tabledit-input").blur().hide().prop("disabled",!0),n(t).find(".tabledit-span").show(),n(t).addClass("tabledit-view-mode").removeClass("tabledit-edit-mode"),e.editButton&&(i.find("button.tabledit-save-button").hide(),i.find("button.tabledit-edit-button").removeClass("active").blur())},edit:function(t){r.reset(t);var i=n(t).parent("tr");i.find(".tabledit-input.tabledit-identifier").prop("disabled",!1),n(t).find(".tabledit-span").hide();var a=n(t).find(".tabledit-input");a.prop("disabled",!1).show(),e.autoFocus&&a.focus(),n(t).addClass("tabledit-edit-mode").removeClass("tabledit-view-mode"),e.editButton&&(i.find("button.tabledit-edit-button").addClass("active"),i.find("button.tabledit-save-button").show())}},l={reset:function(t){n(t).each(function(){var i=n(this).find(".tabledit-input"),a=n(this).find(".tabledit-span").text();i.is("select")?i.find("option").filter(function(){return n.trim(n(this).text())===a}).attr("selected",!0):i.val(a),b.view(this)})},submit:function(t){var i=p(e.buttons.edit.action);i!==!1&&(n(t).each(function(){var a=n(this).find(".tabledit-input");n(this).find(".tabledit-span").text(a.is("select")?a.find("option:selected").text():a.val()),b.view(this)}),h=n(t).parent("tr"))}},r={reset:function(t){d.find(".tabledit-confirm-button").hide(),d.find(".tabledit-delete-button").removeClass("active").blur()},submit:function(t){r.reset(t),n(t).parent("tr").find("input.tabledit-identifier").attr("disabled",!1);var i=p(e.buttons.delete.action);n(t).parents("tr").find("input.tabledit-identifier").attr("disabled",!0),i!==!1&&(n(t).parent("tr").addClass("tabledit-deleted-row"),n(t).parent("tr").addClass(e.mutedClass).find(".tabledit-toolbar button:not(.tabledit-restore-button)").attr("disabled",!0),n(t).find(".tabledit-restore-button").show(),f=n(t).parent("tr"))},confirm:function(t){d.find("td.tabledit-edit-mode").each(function(){l.reset(this)}),n(t).find(".tabledit-delete-button").addClass("active"),n(t).find(".tabledit-confirm-button").show()},restore:function(t){n(t).parent("tr").find("input.tabledit-identifier").attr("disabled",!1);var i=p(e.buttons.restore.action);n(t).parents("tr").find("input.tabledit-identifier").attr("disabled",!0),i!==!1&&(n(t).parent("tr").removeClass("tabledit-deleted-row"),n(t).parent("tr").removeClass(e.mutedClass).find(".tabledit-toolbar button").attr("disabled",!1),n(t).find(".tabledit-restore-button").hide(),n(t).parent("tr"))}};return m.columns.identifier(),m.columns.editable(),m.columns.toolbar(),e.onDraw(),e.deleteButton&&(d.on("click","button.tabledit-delete-button",function(t){if(t.handled!==!0){t.preventDefault();var i=n(this).hasClass("active"),a=n(this).parents("td");r.reset(a),i||r.confirm(a),t.handled=!0}}),d.on("click","button.tabledit-confirm-button",function(t){if(t.handled!==!0){t.preventDefault();var i=n(this).parents("td");r.submit(i),t.handled=!0}})),e.restoreButton&&d.on("click","button.tabledit-restore-button",function(t){t.handled!==!0&&(t.preventDefault(),r.restore(n(this).parents("td")),t.handled=!0)}),e.editButton?(d.on("click","button.tabledit-edit-button",function(t){if(t.handled!==!0){t.preventDefault();var i=n(this),a=i.hasClass("active");l.reset(d.find("td.tabledit-edit-mode")),a||n(i.parents("tr").find("td.tabledit-view-mode").get().reverse()).each(function(){b.edit(this)}),t.handled=!0}}),d.on("click","button.tabledit-save-button",function(t){t.handled!==!0&&(t.preventDefault(),l.submit(n(this).parents("tr").find("td.tabledit-edit-mode")),t.handled=!0)})):(d.on(e.eventType,"tr:not(.tabledit-deleted-row) td.tabledit-view-mode",function(t){t.handled!==!0&&(t.preventDefault(),l.reset(d.find("td.tabledit-edit-mode")),b.edit(this),t.handled=!0)}),d.on("change","select.tabledit-input:visible",function(){event.handled!==!0&&(l.submit(n(this).parent("td")),event.handled=!0)}),n(document).on("click",function(t){var i=d.find(".tabledit-edit-mode");i.is(t.target)||i.has(t.target).length!==0||l.reset(d.find(".tabledit-input:visible").parent("td"))})),n(document).on("keyup",function(t){var i=d.find(".tabledit-input:visible"),a=d.find(".tabledit-confirm-button");if(i.length>0)var s=i.parents("td");else{if(!(a.length>0))return;var s=a.parents("td")}switch(t.keyCode){case 9:e.editButton||(l.submit(s),b.edit(s.closest("td").next()));break;case 13:l.submit(s);break;case 27:l.reset(s),r.reset(s)}}),this}})(jQuery);
