import{$ as r}from"./jquery-efbb5999.js";import{D as m}from"./jquery.dataTables-034f69f1.js";import{a as R}from"./_commonjsHelpers-042e6b4d.js";/*! Buttons for DataTables 2.3.6
 * ©2016-2023 SpryMedia Ltd - datatables.net/license
 */var W=0,G=0,D=m.ext.buttons;function O(t,e,n){r.fn.animate?t.stop().fadeIn(e,n):(t.css("display","block"),n&&n.call(t))}function q(t,e,n){r.fn.animate?t.stop().fadeOut(e,n):(t.css("display","none"),n&&n.call(t))}var x=function(t,e){if(!(this instanceof x))return function(n){return new x(n,t).container()};typeof e>"u"&&(e={}),e===!0&&(e={}),Array.isArray(e)&&(e={buttons:e}),this.c=r.extend(!0,{},x.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new m.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+W++},this.dom={container:r("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};r.extend(x.prototype,{action:function(t,e){var n=this._nodeToButton(t);return e===void 0?n.conf.action:(n.conf.action=e,this)},active:function(t,e){var n=this._nodeToButton(t),i=this.c.dom.button.active,o=r(n.node);return e===void 0?o.hasClass(i):(o.toggleClass(i,e===void 0?!0:e),this)},add:function(t,e,n){var i=this.s.buttons;if(typeof e=="string"){for(var o=e.split("-"),a=this.s,c=0,l=o.length-1;c<l;c++)a=a.buttons[o[c]*1];i=a.buttons,e=o[o.length-1]*1}return this._expandButton(i,t,t!==void 0?t.split:void 0,(t===void 0||t.split===void 0||t.split.length===0)&&a!==void 0,!1,e),(n===void 0||n===!0)&&this._draw(),this},collectionRebuild:function(t,e){var n=this._nodeToButton(t);if(e!==void 0){var i;for(i=n.buttons.length-1;i>=0;i--)this.remove(n.buttons[i].node);for(n.conf.prefixButtons&&e.unshift.apply(e,n.conf.prefixButtons),n.conf.postfixButtons&&e.push.apply(e,n.conf.postfixButtons),i=0;i<e.length;i++){var o=e[i];this._expandButton(n.buttons,o,o!==void 0&&o.config!==void 0&&o.config.split!==void 0,!0,o.parentConf!==void 0&&o.parentConf.split!==void 0,null,o.parentConf)}}this._draw(n.collection,n.buttons)},container:function(){return this.dom.container},disable:function(t){var e=this._nodeToButton(t);return r(e.node).addClass(this.c.dom.button.disabled).prop("disabled",!0),this},destroy:function(){r("body").off("keyup."+this.s.namespace);var t=this.s.buttons.slice(),e,n;for(e=0,n=t.length;e<n;e++)this.remove(t[e].node);this.dom.container.remove();var i=this.s.dt.settings()[0];for(e=0,n=i.length;e<n;e++)if(i.inst===this){i.splice(e,1);break}return this},enable:function(t,e){if(e===!1)return this.disable(t);var n=this._nodeToButton(t);return r(n.node).removeClass(this.c.dom.button.disabled).prop("disabled",!1),this},index:function(t,e,n){e||(e="",n=this.s.buttons);for(var i=0,o=n.length;i<o;i++){var a=n[i].buttons;if(n[i].node===t)return e+i;if(a&&a.length){var c=this.index(t,i+"-",a);if(c!==null)return c}}return null},name:function(){return this.c.name},node:function(t){if(!t)return this.dom.container;var e=this._nodeToButton(t);return r(e.node)},processing:function(t,e){var n=this.s.dt,i=this._nodeToButton(t);return e===void 0?r(i.node).hasClass("processing"):(r(i.node).toggleClass("processing",e),r(n.table().node()).triggerHandler("buttons-processing.dt",[e,n.button(t),n,r(t),i.conf]),this)},remove:function(t){var e=this._nodeToButton(t),n=this._nodeToHost(t),i=this.s.dt;if(e.buttons.length)for(var o=e.buttons.length-1;o>=0;o--)this.remove(e.buttons[o].node);e.conf.destroying=!0,e.conf.destroy&&e.conf.destroy.call(i.button(t),i,r(t),e.conf),this._removeKey(e.conf),r(e.node).remove();var a=r.inArray(e,n);return n.splice(a,1),this},text:function(t,e){var n=this._nodeToButton(t),i=this.c.dom.collection.buttonLiner,o=n.inCollection&&i&&i.tag?i.tag:this.c.dom.buttonLiner.tag,a=this.s.dt,c=r(n.node),l=function(u){return typeof u=="function"?u(a,c,n.conf):u};return e===void 0?l(n.conf.text):(n.conf.text=e,o?c.children(o).eq(0).filter(":not(.dt-down-arrow)").html(l(e)):c.html(l(e)),this)},_constructor:function(){var t=this,e=this.s.dt,n=e.settings()[0],i=this.c.buttons;n._buttons||(n._buttons=[]),n._buttons.push({inst:this,name:this.c.name});for(var o=0,a=i.length;o<a;o++)this.add(i[o]);e.on("destroy",function(c,l){l===n&&t.destroy()}),r("body").on("keyup."+this.s.namespace,function(c){if(!document.activeElement||document.activeElement===document.body){var l=String.fromCharCode(c.keyCode).toLowerCase();t.s.listenKeys.toLowerCase().indexOf(l)!==-1&&t._keypress(l,c)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=r.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,e){t||(t=this.dom.container,e=this.s.buttons),t.children().detach();for(var n=0,i=e.length;n<i;n++)t.append(e[n].inserter),t.append(" "),e[n].buttons&&e[n].buttons.length&&this._draw(e[n].collection,e[n].buttons)},_expandButton:function(t,e,n,i,o,a,c){var l=this.s.dt,u=!1,h=Array.isArray(e)?e:[e];e===void 0&&(h=Array.isArray(n)?n:[n]),e!==void 0&&e.split!==void 0&&(u=!0);for(var d=0,b=h.length;d<b;d++){var f=this._resolveExtends(h[d]);if(f){if(f.config!==void 0&&f.config.split?u=!0:u=!1,Array.isArray(f)){this._expandButton(t,f,s!==void 0&&s.conf!==void 0?s.conf.split:void 0,i,c!==void 0&&c.split!==void 0,a,c);continue}var s=this._buildButton(f,i,f.split!==void 0||f.config!==void 0&&f.config.split!==void 0,o);if(s){if(a!=null?(t.splice(a,0,s),a++):t.push(s),s.conf.buttons||s.conf.split){if(s.collection=r("<"+(u?this.c.dom.splitCollection.tag:this.c.dom.collection.tag)+"/>"),s.conf._collection=s.collection,s.conf.split)for(var y=0;y<s.conf.split.length;y++)typeof s.conf.split[y]=="object"&&(s.conf.split[y].parent=c,s.conf.split[y].collectionLayout===void 0&&(s.conf.split[y].collectionLayout=s.conf.collectionLayout),s.conf.split[y].dropup===void 0&&(s.conf.split[y].dropup=s.conf.dropup),s.conf.split[y].fade===void 0&&(s.conf.split[y].fade=s.conf.fade));else r(s.node).append(r('<span class="dt-down-arrow">'+this.c.dom.splitDropdown.text+"</span>"));this._expandButton(s.buttons,s.conf.buttons,s.conf.split,!u,u,a,s.conf)}s.conf.parent=c,f.init&&f.init.call(l.button(s.node),l,r(s.node),f)}}}},_buildButton:function(t,e,n,i){var o=this.c.dom.button,a=this.c.dom.buttonLiner,c=this.c.dom.collection;this.c.dom.split;var l=this.c.dom.splitCollection,u=this.c.dom.splitDropdownButton,h=this.s.dt,d=function(p){return typeof p=="function"?p(h,f,t):p};if(t.spacer){var b=r("<span></span>").addClass("dt-button-spacer "+t.style+" "+o.spacerClass).html(d(t.text));return{conf:t,node:b,inserter:b,buttons:[],inCollection:e,isSplit:n,inSplit:i,collection:null}}if(!n&&i&&l?o=u:!n&&e&&c.button&&(o=c.button),!n&&i&&l.buttonLiner?a=l.buttonLiner:!n&&e&&c.buttonLiner&&(a=c.buttonLiner),t.available&&!t.available(h,t)&&!t.hasOwnProperty("html"))return!1;var f;if(t.hasOwnProperty("html"))f=r(t.html);else{var s=function(p,v,_,C){C.action.call(v.button(_),p,v,_,C),r(v.table().node()).triggerHandler("buttons-action.dt",[v.button(_),v,_,C])},y=t.tag||o.tag,H=t.clickBlurs===void 0?!0:t.clickBlurs;if(f=r("<"+y+"/>").addClass(o.className).addClass(i?this.c.dom.splitDropdownButton.className:"").attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(p){p.preventDefault(),!f.hasClass(o.disabled)&&t.action&&s(p,h,f,t),H&&f.trigger("blur")}).on("keypress.dtb",function(p){p.keyCode===13&&(p.preventDefault(),!f.hasClass(o.disabled)&&t.action&&s(p,h,f,t))}),y.toLowerCase()==="a"&&f.attr("href","#"),y.toLowerCase()==="button"&&f.attr("type","button"),a.tag){var N=r("<"+a.tag+"/>").html(d(t.text)).addClass(a.className);a.tag.toLowerCase()==="a"&&N.attr("href","#"),f.append(N)}else f.html(d(t.text));t.enabled===!1&&f.addClass(o.disabled),t.className&&f.addClass(t.className),t.titleAttr&&f.attr("title",d(t.titleAttr)),t.attr&&f.attr(t.attr),t.namespace||(t.namespace=".dt-button-"+G++),t.config!==void 0&&t.config.split&&(t.split=t.config.split)}var w=this.c.dom.buttonContainer,A;w&&w.tag?A=r("<"+w.tag+"/>").addClass(w.className).append(f):A=f,this._addKey(t),this.c.buttonCreated&&(A=this.c.buttonCreated(t,A));var g;if(n){g=r("<div/>").addClass(this.c.dom.splitWrapper.className),g.append(f);var k=r.extend(t,{text:this.c.dom.splitDropdown.text,className:this.c.dom.splitDropdown.className,closeButton:!1,attr:{"aria-haspopup":"dialog","aria-expanded":!1},align:this.c.dom.splitDropdown.align,splitAlignClass:this.c.dom.splitDropdown.splitAlignClass});this._addKey(k);var L=function(p,v,_,C){D.split.action.call(v.button(g),p,v,_,C),r(v.table().node()).triggerHandler("buttons-action.dt",[v.button(_),v,_,C]),_.attr("aria-expanded",!0)},T=r('<button class="'+this.c.dom.splitDropdown.className+' dt-button"><span class="dt-btn-split-drop-arrow">'+this.c.dom.splitDropdown.text+"</span></button>").on("click.dtb",function(p){p.preventDefault(),p.stopPropagation(),T.hasClass(o.disabled)||L(p,h,T,k),H&&T.trigger("blur")}).on("keypress.dtb",function(p){p.keyCode===13&&(p.preventDefault(),T.hasClass(o.disabled)||L(p,h,T,k))});t.split.length===0&&T.addClass("dtb-hide-drop"),g.append(T).attr(k.attr)}return{conf:t,node:n?g.get(0):f.get(0),inserter:n?g:A,buttons:[],inCollection:e,isSplit:n,inSplit:i,collection:null}},_nodeToButton:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t)return e[n];if(e[n].buttons.length){var o=this._nodeToButton(t,e[n].buttons);if(o)return o}}},_nodeToHost:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t)return e;if(e[n].buttons.length){var o=this._nodeToHost(t,e[n].buttons);if(o)return o}}},_keypress:function(t,e){if(!e._buttonsHandled){var n=function(o,a){if(o.key){if(o.key===t)e._buttonsHandled=!0,r(a).click();else if(r.isPlainObject(o.key)){if(o.key.key!==t||o.key.shiftKey&&!e.shiftKey||o.key.altKey&&!e.altKey||o.key.ctrlKey&&!e.ctrlKey||o.key.metaKey&&!e.metaKey)return;e._buttonsHandled=!0,r(a).click()}}},i=function(o){for(var a=0,c=o.length;a<c;a++)n(o[a].conf,o[a].node),o[a].buttons.length&&i(o[a].buttons)};i(this.s.buttons)}},_removeKey:function(t){if(t.key){var e=r.isPlainObject(t.key)?t.key.key:t.key,n=this.s.listenKeys.split(""),i=r.inArray(e,n);n.splice(i,1),this.s.listenKeys=n.join("")}},_resolveExtends:function(t){var e=this,n=this.s.dt,i,o,a=function(d){for(var b=0;!r.isPlainObject(d)&&!Array.isArray(d);){if(d===void 0)return;if(typeof d=="function"){if(d=d.call(e,n,t),!d)return!1}else if(typeof d=="string"){if(!D[d])return{html:d};d=D[d]}if(b++,b>30)throw"Buttons: Too many iterations"}return Array.isArray(d)?d:r.extend({},d)};for(t=a(t);t&&t.extend;){if(!D[t.extend])throw"Cannot extend unknown button type: "+t.extend;var c=a(D[t.extend]);if(Array.isArray(c))return c;if(!c)return!1;var l=c.className;t.config!==void 0&&c.config!==void 0&&(t.config=r.extend({},c.config,t.config)),t=r.extend({},c,t),l&&t.className!==l&&(t.className=l+" "+t.className),t.extend=c.extend}var u=t.postfixButtons;if(u)for(t.buttons||(t.buttons=[]),i=0,o=u.length;i<o;i++)t.buttons.push(u[i]);var h=t.prefixButtons;if(h)for(t.buttons||(t.buttons=[]),i=0,o=h.length;i<o;i++)t.buttons.splice(i,0,h[i]);return t},_popover:function(t,e,n,i){var o=e,a=this.c,c=!1,l=r.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,contentClassName:a.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",tag:a.dom.collection.tag},n),u=e.node(),h=function(){c=!0,q(r(".dt-button-collection"),l.fade,function(){r(this).detach()}),r(o.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),r("div.dt-button-background").off("click.dtb-collection"),x.background(!1,l.backgroundClassName,l.fade,u),r(window).off("resize.resize.dtb-collection"),r("body").off(".dtb-collection"),o.off("buttons-action.b-internal"),o.off("destroy")};if(t===!1){h();return}var d=r(o.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes());d.length&&(u.closest("div.dt-button-collection").length&&(u=d.eq(0)),h());var b=r(".dt-button",t).length,f="";b===3?f="dtb-b3":b===2?f="dtb-b2":b===1&&(f="dtb-b1");var s=r("<div/>").addClass("dt-button-collection").addClass(l.collectionLayout).addClass(l.splitAlignClass).addClass(f).css("display","none").attr({"aria-modal":!0,role:"dialog"});t=r(t).addClass(l.contentClassName).attr("role","menu").appendTo(s),u.attr("aria-expanded","true"),u.parents("body")[0]!==document.body&&(u=document.body.lastChild),l.popoverTitle?s.prepend('<div class="dt-button-collection-title">'+l.popoverTitle+"</div>"):l.collectionTitle&&s.prepend('<div class="dt-button-collection-title">'+l.collectionTitle+"</div>"),l.closeButton&&s.prepend('<div class="dtb-popover-close">x</div>').addClass("dtb-collection-closeable"),O(s.insertAfter(u),l.fade);var y=r(e.table().container()),H=s.css("position");if((l.span==="container"||l.align==="dt-container")&&(u=u.parent(),s.css("width",y.width())),H==="absolute"){var N=r(u[0].offsetParent),w=u.position(),A=u.offset(),g=N.offset(),k=N.position(),L=window.getComputedStyle(N[0]);g.height=N.outerHeight(),g.width=N.width()+parseFloat(L.paddingLeft),g.right=g.left+g.width,g.bottom=g.top+g.height;var T=w.top+u.outerHeight(),p=w.left;s.css({top:T,left:p}),L=window.getComputedStyle(s[0]);var v=s.offset();v.height=s.outerHeight(),v.width=s.outerWidth(),v.right=v.left+v.width,v.bottom=v.top+v.height,v.marginTop=parseFloat(L.marginTop),v.marginBottom=parseFloat(L.marginBottom),l.dropup&&(T=w.top-v.height-v.marginTop-v.marginBottom),(l.align==="button-right"||s.hasClass(l.rightAlignClassName))&&(p=w.left-v.width+u.outerWidth()),(l.align==="dt-container"||l.align==="container")&&(p<w.left&&(p=-w.left),p+v.width>g.width&&(p=g.width-v.width)),k.left+p+v.width>r(window).width()&&(p=r(window).width()-v.width-k.left),A.left+p<0&&(p=-A.left),k.top+T+v.height>r(window).height()+r(window).scrollTop()&&(T=w.top-v.height-v.marginTop-v.marginBottom),k.top+T<r(window).scrollTop()&&(T=w.top+u.outerHeight()),s.css({top:T,left:p})}else{var H=function(){var C=r(window).height()/2,B=s.height()/2;B>C&&(B=C),s.css("marginTop",B*-1)};H(),r(window).on("resize.dtb-collection",function(){H()})}l.background&&x.background(!0,l.backgroundClassName,l.fade,l.backgroundHost||u),r("div.dt-button-background").on("click.dtb-collection",function(){}),l.autoClose&&setTimeout(function(){o.on("buttons-action.b-internal",function(_,C,B,$){$[0]!==u[0]&&h()})},0),r(s).trigger("buttons-popover.dt"),o.on("destroy",h),setTimeout(function(){c=!1,r("body").on("click.dtb-collection",function(_){if(!c){var C=r.fn.addBack?"addBack":"andSelf",B=r(_.target).parent()[0];(!r(_.target).parents()[C]().filter(t).length&&!r(B).hasClass("dt-buttons")||r(_.target).hasClass("dt-button-background"))&&h()}}).on("keyup.dtb-collection",function(_){_.keyCode===27&&h()}).on("keydown.dtb-collection",function(_){var C=r("a, button",t),B=document.activeElement;_.keyCode===9&&(C.index(B)===-1?(C.first().focus(),_.preventDefault()):_.shiftKey?B===C[0]&&(C.last().focus(),_.preventDefault()):B===C.last()[0]&&(C.first().focus(),_.preventDefault()))})},0)}});x.background=function(t,e,n,i){n===void 0&&(n=400),i||(i=document.body),t?O(r("<div/>").addClass(e).css("display","none").insertAfter(i),n):q(r("div."+e),n,function(){r(this).removeClass(e).remove()})};x.instanceSelector=function(t,e){if(t==null)return r.map(e,function(a){return a.inst});var n=[],i=r.map(e,function(a){return a.name}),o=function(a){if(Array.isArray(a)){for(var c=0,l=a.length;c<l;c++)o(a[c]);return}if(typeof a=="string")if(a.indexOf(",")!==-1)o(a.split(","));else{var u=r.inArray(a.trim(),i);u!==-1&&n.push(e[u].inst)}else typeof a=="number"?n.push(e[a].inst):typeof a=="object"&&n.push(a)};return o(t),n};x.buttonSelector=function(t,e){for(var n=[],i=function(u,h,d){for(var b,f,s=0,y=h.length;s<y;s++)b=h[s],b&&(f=d!==void 0?d+s:s+"",u.push({node:b.node,name:b.conf.name,idx:f}),b.buttons&&i(u,b.buttons,f+"-"))},o=function(u,h){var d,b,f=[];i(f,h.s.buttons);var s=r.map(f,function(A){return A.node});if(Array.isArray(u)||u instanceof r){for(d=0,b=u.length;d<b;d++)o(u[d],h);return}if(u==null||u==="*")for(d=0,b=f.length;d<b;d++)n.push({inst:h,node:f[d].node});else if(typeof u=="number")h.s.buttons[u]&&n.push({inst:h,node:h.s.buttons[u].node});else if(typeof u=="string")if(u.indexOf(",")!==-1){var y=u.split(",");for(d=0,b=y.length;d<b;d++)o(y[d].trim(),h)}else if(u.match(/^\d+(\-\d+)*$/)){var H=r.map(f,function(A){return A.idx});n.push({inst:h,node:f[r.inArray(u,H)].node})}else if(u.indexOf(":name")!==-1){var N=u.replace(":name","");for(d=0,b=f.length;d<b;d++)f[d].name===N&&n.push({inst:h,node:f[d].node})}else r(s).filter(u).each(function(){n.push({inst:h,node:this})});else if(typeof u=="object"&&u.nodeName){var w=r.inArray(u,s);w!==-1&&n.push({inst:h,node:s[w]})}},a=0,c=t.length;a<c;a++){var l=t[a];o(e,l)}return n};x.stripData=function(t,e){return typeof t!="string"||(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),t=t.replace(/<!\-\-.*?\-\->/g,""),(!e||e.stripHtml)&&(t=t.replace(/<[^>]*>/g,"")),(!e||e.trim)&&(t=t.replace(/^\s+|\s+$/g,"")),(!e||e.stripNewlines)&&(t=t.replace(/\n/g," ")),(!e||e.decodeEntities)&&(I.innerHTML=t,t=I.value)),t};x.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled",spacerClass:""},buttonLiner:{tag:"span",className:""},split:{tag:"div",className:"dt-button-split"},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper"},splitDropdown:{tag:"button",text:"&#x25BC;",className:"dt-btn-split-drop",align:"split-right",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",className:"dt-btn-split-drop-button dt-button"},splitCollection:{tag:"div",className:"dt-button-split-collection"}}};x.version="2.3.6";r.extend(D,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",closeButton:!1,init:function(t,e,n){e.attr("aria-expanded",!1)},action:function(t,e,n,i){i._collection.parents("body").length?this.popover(!1,i):this.popover(i._collection,i),t.type==="keypress"&&r("a, button",i._collection).eq(0).focus()},attr:{"aria-haspopup":"dialog"}},split:{text:function(t){return t.i18n("buttons.split","Split")},className:"buttons-split",closeButton:!1,init:function(t,e,n){return e.attr("aria-expanded",!1)},action:function(t,e,n,i){this.popover(i._collection,i)},attr:{"aria-haspopup":"dialog"}},copy:function(t,e){if(D.copyHtml5)return"copyHtml5"},csv:function(t,e){if(D.csvHtml5&&D.csvHtml5.available(t,e))return"csvHtml5"},excel:function(t,e){if(D.excelHtml5&&D.excelHtml5.available(t,e))return"excelHtml5"},pdf:function(t,e){if(D.pdfHtml5&&D.pdfHtml5.available(t,e))return"pdfHtml5"},pageLength:function(t){var e=t.settings()[0].aLengthMenu,n=[],i=[],o=function(l){return l.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},l.page.len())};if(Array.isArray(e[0]))n=e[0],i=e[1];else for(var a=0;a<e.length;a++){var c=e[a];r.isPlainObject(c)?(n.push(c.value),i.push(c.label)):(n.push(c),i.push(c))}return{extend:"collection",text:o,className:"buttons-page-length",autoClose:!0,buttons:r.map(n,function(l,u){return{text:i[u],className:"button-page-length",action:function(h,d){d.page.len(l).draw()},init:function(h,d,b){var f=this,s=function(){f.active(h.page.len()===l)};h.on("length.dt"+b.namespace,s),s()},destroy:function(h,d,b){h.off("length.dt"+b.namespace)}}}),init:function(l,u,h){var d=this;l.on("length.dt"+h.namespace,function(){d.text(h.text)})},destroy:function(l,u,h){l.off("length.dt"+h.namespace)}}},spacer:{style:"empty",spacer:!0,text:function(t){return t.i18n("buttons.spacer","")}}});m.Api.register("buttons()",function(t,e){e===void 0&&(e=t,t=void 0),this.selector.buttonGroup=t;var n=this.iterator(!0,"table",function(i){if(i._buttons)return x.buttonSelector(x.instanceSelector(t,i._buttons),e)},!0);return n._groupSelector=t,n});m.Api.register("button()",function(t,e){var n=this.buttons(t,e);return n.length>1&&n.splice(1,n.length),n});m.Api.registerPlural("buttons().active()","button().active()",function(t){return t===void 0?this.map(function(e){return e.inst.active(e.node)}):this.each(function(e){e.inst.active(e.node,t)})});m.Api.registerPlural("buttons().action()","button().action()",function(t){return t===void 0?this.map(function(e){return e.inst.action(e.node)}):this.each(function(e){e.inst.action(e.node,t)})});m.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(t){return this.each(function(e){for(var n=0;n<t.length;n++)typeof t[n]=="object"&&(t[n].parentConf=e);e.inst.collectionRebuild(e.node,t)})});m.Api.register(["buttons().enable()","button().enable()"],function(t){return this.each(function(e){e.inst.enable(e.node,t)})});m.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})});m.Api.register("button().index()",function(){var t=null;return this.each(function(e){var n=e.inst.index(e.node);n!==null&&(t=n)}),t});m.Api.registerPlural("buttons().nodes()","button().node()",function(){var t=r();return r(this.each(function(e){t=t.add(e.inst.node(e.node))})),t});m.Api.registerPlural("buttons().processing()","button().processing()",function(t){return t===void 0?this.map(function(e){return e.inst.processing(e.node)}):this.each(function(e){e.inst.processing(e.node,t)})});m.Api.registerPlural("buttons().text()","button().text()",function(t){return t===void 0?this.map(function(e){return e.inst.text(e.node)}):this.each(function(e){e.inst.text(e.node,t)})});m.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})});m.Api.register("button().popover()",function(t,e){return this.map(function(n){return n.inst._popover(t,this.button(this[0].node),e)})});m.Api.register("buttons().containers()",function(){var t=r(),e=this._groupSelector;return this.iterator(!0,"table",function(n){if(n._buttons)for(var i=x.instanceSelector(e,n._buttons),o=0,a=i.length;o<a;o++)t=t.add(i[o].container())}),t});m.Api.register("buttons().container()",function(){return this.containers().eq(0)});m.Api.register("button().add()",function(t,e,n){var i=this.context;if(i.length){var o=x.instanceSelector(this._groupSelector,i[0]._buttons);o.length&&o[0].add(e,t,n)}return this.button(this._groupSelector,t)});m.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this});m.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this});var K;m.Api.register("buttons.info()",function(t,e,n){var i=this;return t===!1?(this.off("destroy.btn-info"),q(r("#datatables_buttons_info"),400,function(){r(this).remove()}),clearTimeout(K),K=null,this):(K&&clearTimeout(K),r("#datatables_buttons_info").length&&r("#datatables_buttons_info").remove(),t=t?"<h2>"+t+"</h2>":"",O(r('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(r("<div/>")[typeof e=="string"?"html":"append"](e)).css("display","none").appendTo("body")),n!==void 0&&n!==0&&(K=setTimeout(function(){i.buttons.info(!1)},n)),this.on("destroy.btn-info",function(){i.buttons.info(!1)}),this)});m.Api.register("buttons.exportData()",function(t){if(this.context.length)return Q(new m.Api(this.context[0]),t)});m.Api.register("buttons.exportInfo()",function(t){return t||(t={}),{filename:Z(t),title:J(t),messageTop:F(this,t.message||t.messageTop,"top"),messageBottom:F(this,t.messageBottom,"bottom")}});var Z=function(t){var e=t.filename==="*"&&t.title!=="*"&&t.title!==void 0&&t.title!==null&&t.title!==""?t.title:t.filename;if(typeof e=="function"&&(e=e()),e==null)return null;e.indexOf("*")!==-1&&(e=e.replace("*",r("head > title").text()).trim()),e=e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");var n=E(t.extension);return n||(n=""),e+n},E=function(t){return t==null?null:typeof t=="function"?t():t},J=function(t){var e=E(t.title);return e===null?null:e.indexOf("*")!==-1?e.replace("*",r("head > title").text()||"Exported data"):e},F=function(t,e,n){var i=E(e);if(i===null)return null;var o=r("caption",t.table().container()).eq(0);if(i==="*"){var a=o.css("caption-side");return a!==n?null:o.length?o.text():""}return i},I=r("<textarea/>")[0],Q=function(t,e){var n=r.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(g){return x.stripData(g,n)},footer:function(g){return x.stripData(g,n)},body:function(g){return x.stripData(g,n)}},customizeData:null},e),i=t.columns(n.columns).indexes().map(function(g){var k=t.column(g).header();return n.format.header(k.innerHTML,g,k)}).toArray(),o=t.table().footer()?t.columns(n.columns).indexes().map(function(g){var k=t.column(g).footer();return n.format.footer(k?k.innerHTML:"",g,k)}).toArray():null,a=r.extend({},n.modifier);t.select&&typeof t.select.info=="function"&&a.selected===void 0&&t.rows(n.rows,r.extend({selected:!0},a)).any()&&r.extend(a,{selected:!0});for(var c=t.rows(n.rows,a).indexes().toArray(),l=t.cells(c,n.columns),u=l.render(n.orthogonal).toArray(),h=l.nodes().toArray(),d=i.length,b=d>0?u.length/d:0,f=[],s=0,y=0,H=b;y<H;y++){for(var N=[d],w=0;w<d;w++)N[w]=n.format.body(u[s],y,w,h[s]),s++;f[y]=N}var A={header:i,footer:o,body:f};return n.customizeData&&n.customizeData(A),A};r.fn.dataTable.Buttons=x;r.fn.DataTable.Buttons=x;r(document).on("init.dt plugin-init.dt",function(t,e){if(t.namespace==="dt"){var n=e.oInit.buttons||m.defaults.buttons;n&&!e._buttons&&new x(e,n).container()}});function M(t,e){var n=new m.Api(t),i=e||n.init().buttons||m.defaults.buttons;return new x(n,i).container()}m.ext.feature.push({fnInit:M,cFeature:"B"});m.ext.features&&m.ext.features.register("buttons",M);const U=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),j=R(U);export{j as r};
