import{r as se}from"./jquery-4e911315.js";/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */(function(le){(function(r){r(se())})(function(r){var e,B,m,P,g,G,v="Close",Y="BeforeClose",ee="AfterClose",te="BeforeAppend",L="MarkupParse",H="Open",J="Change",A="mfp",c="."+A,S="mfp-ready",Q="mfp-removing",F="mfp-prevent-close",E=function(){},N=!!window.jQuery,h=r(window),u=function(t,n){e.ev.on(A+t+c,n)},y=function(t,n,i,o){var a=document.createElement("div");return a.className="mfp-"+t,i&&(a.innerHTML=i),o?n&&n.appendChild(a):(a=r(a),n&&a.appendTo(n)),a},l=function(t,n){e.ev.triggerHandler(A+t,n),e.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),e.st.callbacks[t]&&e.st.callbacks[t].apply(e,r.isArray(n)?n:[n]))},W=function(t){return t===G&&e.currTemplate.closeBtn||(e.currTemplate.closeBtn=r(e.st.closeMarkup.replace("%title%",e.st.tClose)),G=t),e.currTemplate.closeBtn},R=function(){r.magnificPopup.instance||(e=new E,e.init(),r.magnificPopup.instance=e)},ne=function(){var t=document.createElement("p").style,n=["ms","O","Moz","Webkit"];if(t.transition!==void 0)return!0;for(;n.length;)if(n.pop()+"Transition"in t)return!0;return!1};E.prototype={constructor:E,init:function(){var t=navigator.appVersion;e.isLowIE=e.isIE8=document.all&&!document.addEventListener,e.isAndroid=/android/gi.test(t),e.isIOS=/iphone|ipad|ipod/gi.test(t),e.supportsTransition=ne(),e.probablyMobile=e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),m=r(document),e.popupsCache={}},open:function(t){var n;if(t.isObj===!1){e.items=t.items.toArray(),e.index=0;var i,o=t.items;for(n=0;n<o.length;n++)if(i=o[n],i.parsed&&(i=i.el[0]),i===t.el[0]){e.index=n;break}}else e.items=r.isArray(t.items)?t.items:[t.items],e.index=t.index||0;if(e.isOpen)return void e.updateItemHTML();e.types=[],g="",t.mainEl&&t.mainEl.length?e.ev=t.mainEl.eq(0):e.ev=m,t.key?(e.popupsCache[t.key]||(e.popupsCache[t.key]={}),e.currTemplate=e.popupsCache[t.key]):e.currTemplate={},e.st=r.extend(!0,{},r.magnificPopup.defaults,t),e.fixedContentPos=e.st.fixedContentPos==="auto"?!e.probablyMobile:e.st.fixedContentPos,e.st.modal&&(e.st.closeOnContentClick=!1,e.st.closeOnBgClick=!1,e.st.showCloseBtn=!1,e.st.enableEscapeKey=!1),e.bgOverlay||(e.bgOverlay=y("bg").on("click"+c,function(){e.close()}),e.wrap=y("wrap").attr("tabindex",-1).on("click"+c,function(I){e._checkIfClose(I.target)&&e.close()}),e.container=y("container",e.wrap)),e.contentContainer=y("content"),e.st.preloader&&(e.preloader=y("preloader",e.container,e.st.tLoading));var a=r.magnificPopup.modules;for(n=0;n<a.length;n++){var s=a[n];s=s.charAt(0).toUpperCase()+s.slice(1),e["init"+s].call(e)}l("BeforeOpen"),e.st.showCloseBtn&&(e.st.closeBtnInside?(u(L,function(I,x,k,ae){k.close_replaceWith=W(ae.type)}),g+=" mfp-close-btn-in"):e.wrap.append(W())),e.st.alignTop&&(g+=" mfp-align-top"),e.fixedContentPos?e.wrap.css({overflow:e.st.overflowY,overflowX:"hidden",overflowY:e.st.overflowY}):e.wrap.css({top:h.scrollTop(),position:"absolute"}),(e.st.fixedBgPos===!1||e.st.fixedBgPos==="auto"&&!e.fixedContentPos)&&e.bgOverlay.css({height:m.height(),position:"absolute"}),e.st.enableEscapeKey&&m.on("keyup"+c,function(I){I.keyCode===27&&e.close()}),h.on("resize"+c,function(){e.updateSize()}),e.st.closeOnContentClick||(g+=" mfp-auto-cursor"),g&&e.wrap.addClass(g);var p=e.wH=h.height(),d={};if(e.fixedContentPos&&e._hasScrollBar(p)){var M=e._getScrollbarSize();M&&(d.marginRight=M)}e.fixedContentPos&&(e.isIE7?r("body, html").css("overflow","hidden"):d.overflow="hidden");var b=e.st.mainClass;return e.isIE7&&(b+=" mfp-ie7"),b&&e._addClassToMFP(b),e.updateItemHTML(),l("BuildControls"),r("html").css(d),e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||r(document.body)),e._lastFocusedEl=document.activeElement,setTimeout(function(){e.content?(e._addClassToMFP(S),e._setFocus()):e.bgOverlay.addClass(S),m.on("focusin"+c,e._onFocusIn)},16),e.isOpen=!0,e.updateSize(p),l(H),t},close:function(){e.isOpen&&(l(Y),e.isOpen=!1,e.st.removalDelay&&!e.isLowIE&&e.supportsTransition?(e._addClassToMFP(Q),setTimeout(function(){e._close()},e.st.removalDelay)):e._close())},_close:function(){l(v);var t=Q+" "+S+" ";if(e.bgOverlay.detach(),e.wrap.detach(),e.container.empty(),e.st.mainClass&&(t+=e.st.mainClass+" "),e._removeClassFromMFP(t),e.fixedContentPos){var n={marginRight:""};e.isIE7?r("body, html").css("overflow",""):n.overflow="",r("html").css(n)}m.off("keyup"+c+" focusin"+c),e.ev.off(c),e.wrap.attr("class","mfp-wrap").removeAttr("style"),e.bgOverlay.attr("class","mfp-bg"),e.container.attr("class","mfp-container"),!e.st.showCloseBtn||e.st.closeBtnInside&&e.currTemplate[e.currItem.type]!==!0||e.currTemplate.closeBtn&&e.currTemplate.closeBtn.detach(),e.st.autoFocusLast&&e._lastFocusedEl&&r(e._lastFocusedEl).focus(),e.currItem=null,e.content=null,e.currTemplate=null,e.prevHeight=0,l(ee)},updateSize:function(t){if(e.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;e.wrap.css("height",i),e.wH=i}else e.wH=t||h.height();e.fixedContentPos||e.wrap.css("height",e.wH),l("Resize")},updateItemHTML:function(){var t=e.items[e.index];e.contentContainer.detach(),e.content&&e.content.detach(),t.parsed||(t=e.parseEl(e.index));var n=t.type;if(l("BeforeChange",[e.currItem?e.currItem.type:"",n]),e.currItem=t,!e.currTemplate[n]){var i=e.st[n]?e.st[n].markup:!1;l("FirstMarkupParse",i),i?e.currTemplate[n]=r(i):e.currTemplate[n]=!0}P&&P!==t.type&&e.container.removeClass("mfp-"+P+"-holder");var o=e["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,e.currTemplate[n]);e.appendContent(o,n),t.preloaded=!0,l(J,t),P=t.type,e.container.prepend(e.contentContainer),l("AfterChange")},appendContent:function(t,n){e.content=t,t?e.st.showCloseBtn&&e.st.closeBtnInside&&e.currTemplate[n]===!0?e.content.find(".mfp-close").length||e.content.append(W()):e.content=t:e.content="",l(te),e.container.addClass("mfp-"+n+"-holder"),e.contentContainer.append(e.content)},parseEl:function(t){var n,i=e.items[t];if(i.tagName?i={el:r(i)}:(n=i.type,i={data:i,src:i.src}),i.el){for(var o=e.types,a=0;a<o.length;a++)if(i.el.hasClass("mfp-"+o[a])){n=o[a];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=n||e.st.type||"inline",i.index=t,i.parsed=!0,e.items[t]=i,l("ElementParse",i),e.items[t]},addGroup:function(t,n){var i=function(a){a.mfpEl=this,e._openClick(a,t,n)};n||(n={});var o="click.magnificPopup";n.mainEl=t,n.items?(n.isObj=!0,t.off(o).on(o,i)):(n.isObj=!1,n.delegate?t.off(o).on(o,n.delegate,i):(n.items=t,t.off(o).on(o,i)))},_openClick:function(t,n,i){var o=i.midClick!==void 0?i.midClick:r.magnificPopup.defaults.midClick;if(o||!(t.which===2||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var a=i.disableOn!==void 0?i.disableOn:r.magnificPopup.defaults.disableOn;if(a){if(r.isFunction(a)){if(!a.call(e))return!0}else if(h.width()<a)return!0}t.type&&(t.preventDefault(),e.isOpen&&t.stopPropagation()),i.el=r(t.mfpEl),i.delegate&&(i.items=n.find(i.delegate)),e.open(i)}},updateStatus:function(t,n){if(e.preloader){B!==t&&e.container.removeClass("mfp-s-"+B),n||t!=="loading"||(n=e.st.tLoading);var i={status:t,text:n};l("UpdateStatus",i),t=i.status,n=i.text,e.preloader.html(n),e.preloader.find("a").on("click",function(o){o.stopImmediatePropagation()}),e.container.addClass("mfp-s-"+t),B=t}},_checkIfClose:function(t){if(!r(t).hasClass(F)){var n=e.st.closeOnContentClick,i=e.st.closeOnBgClick;if(n&&i||!e.content||r(t).hasClass("mfp-close")||e.preloader&&t===e.preloader[0])return!0;if(t===e.content[0]||r.contains(e.content[0],t)){if(n)return!0}else if(i&&r.contains(document,t))return!0;return!1}},_addClassToMFP:function(t){e.bgOverlay.addClass(t),e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),e.wrap.removeClass(t)},_hasScrollBar:function(t){return(e.isIE7?m.height():document.body.scrollHeight)>(t||h.height())},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).focus()},_onFocusIn:function(t){return t.target===e.wrap[0]||r.contains(e.wrap[0],t.target)?void 0:(e._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=r.extend(i.data,n)),l(L,[t,n,i]),r.each(n,function(a,s){if(s===void 0||s===!1)return!0;if(o=a.split("_"),o.length>1){var p=t.find(c+"-"+o[0]);if(p.length>0){var d=o[1];d==="replaceWith"?p[0]!==s[0]&&p.replaceWith(s):d==="img"?p.is("img")?p.attr("src",s):p.replaceWith(r("<img>").attr("src",s).attr("class",p.attr("class"))):p.attr(o[1],s)}}else t.find(c+"-"+a).html(s)})},_getScrollbarSize:function(){if(e.scrollbarSize===void 0){var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),e.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e.scrollbarSize}},r.magnificPopup={instance:null,proto:E.prototype,modules:[],open:function(t,n){return R(),t=t?r.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return r.magnificPopup.instance&&r.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(r.magnificPopup.defaults[t]=n.options),r.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},r.fn.magnificPopup=function(t){R();var n=r(this);if(typeof t=="string")if(t==="open"){var i,o=N?n.data("magnificPopup"):n[0].magnificPopup,a=parseInt(arguments[1],10)||0;o.items?i=o.items[a]:(i=n,o.delegate&&(i=i.find(o.delegate)),i=i.eq(a)),e._openClick({mfpEl:i},n,o)}else e.isOpen&&e[t].apply(e,Array.prototype.slice.call(arguments,1));else t=r.extend(!0,{},t),N?n.data("magnificPopup",t):n[0].magnificPopup=t,e.addGroup(n,t);return n};var w,z,O,q="inline",V=function(){O&&(z.after(O.addClass(w)).detach(),O=null)};r.magnificPopup.registerModule(q,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){e.types.push(q),u(v+"."+q,function(){V()})},getInline:function(t,n){if(V(),t.src){var i=e.st.inline,o=r(t.src);if(o.length){var a=o[0].parentNode;a&&a.tagName&&(z||(w=i.hiddenClass,z=y(w),w="mfp-"+w),O=o.after(z).detach().removeClass(w)),e.updateStatus("ready")}else e.updateStatus("error",i.tNotFound),o=r("<div>");return t.inlineElement=o,o}return e.updateStatus("ready"),e._parseMarkup(n,{},t),n}}});var T,_="ajax",K=function(){T&&r(document.body).removeClass(T)},X=function(){K(),e.req&&e.req.abort()};r.magnificPopup.registerModule(_,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){e.types.push(_),T=e.st.ajax.cursor,u(v+"."+_,X),u("BeforeChange."+_,X)},getAjax:function(t){T&&r(document.body).addClass(T),e.updateStatus("loading");var n=r.extend({url:t.src,success:function(i,o,a){var s={data:i,xhr:a};l("ParseAjax",s),e.appendContent(r(s.data),_),t.finished=!0,K(),e._setFocus(),setTimeout(function(){e.wrap.addClass(S)},16),e.updateStatus("ready"),l("AjaxContentAdded")},error:function(){K(),t.finished=t.loadError=!0,e.updateStatus("error",e.st.ajax.tError.replace("%url%",t.src))}},e.st.ajax.settings);return e.req=r.ajax(n),""}}});var f,ie=function(t){if(t.data&&t.data.title!==void 0)return t.data.title;var n=e.st.image.titleSrc;if(n){if(r.isFunction(n))return n.call(e,t);if(t.el)return t.el.attr(n)||""}return""};r.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var t=e.st.image,n=".image";e.types.push("image"),u(H+n,function(){e.currItem.type==="image"&&t.cursor&&r(document.body).addClass(t.cursor)}),u(v+n,function(){t.cursor&&r(document.body).removeClass(t.cursor),h.off("resize"+c)}),u("Resize"+n,e.resizeImage),e.isLowIE&&u("AfterChange",e.resizeImage)},resizeImage:function(){var t=e.currItem;if(t&&t.img&&e.st.image.verticalFit){var n=0;e.isLowIE&&(n=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",e.wH-n)}},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,f&&clearInterval(f),t.isCheckingImgSize=!1,l("ImageHasSize",t),t.imgHidden&&(e.content&&e.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(t){var n=0,i=t.img[0],o=function(a){f&&clearInterval(f),f=setInterval(function(){return i.naturalWidth>0?void e._onImageHasSize(t):(n>200&&clearInterval(f),n++,void(n===3?o(10):n===40?o(50):n===100&&o(500)))},a)};o(1)},getImage:function(t,n){var i=0,o=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===e.currItem&&(e._onImageHasSize(t),e.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,l("ImageLoadComplete")):(i++,200>i?setTimeout(o,100):a()))},a=function(){t&&(t.img.off(".mfploader"),t===e.currItem&&(e._onImageHasSize(t),e.updateStatus("error",s.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},s=e.st.image,p=n.find(".mfp-img");if(p.length){var d=document.createElement("img");d.className="mfp-img",t.el&&t.el.find("img").length&&(d.alt=t.el.find("img").attr("alt")),t.img=r(d).on("load.mfploader",o).on("error.mfploader",a),d.src=t.src,p.is("img")&&(t.img=t.img.clone()),d=t.img[0],d.naturalWidth>0?t.hasSize=!0:d.width||(t.hasSize=!1)}return e._parseMarkup(n,{title:ie(t),img_replaceWith:t.img},t),e.resizeImage(),t.hasSize?(f&&clearInterval(f),t.loadError?(n.addClass("mfp-loading"),e.updateStatus("error",s.tError.replace("%url%",t.src))):(n.removeClass("mfp-loading"),e.updateStatus("ready")),n):(e.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,n.addClass("mfp-loading"),e.findImageSize(t)),n)}}});var Z,oe=function(){return Z===void 0&&(Z=document.createElement("p").style.MozTransform!==void 0),Z};r.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,n=e.st.zoom,i=".zoom";if(n.enabled&&e.supportsTransition){var o,a,s=n.duration,p=function(M){var b=M.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),I="all "+n.duration/1e3+"s "+n.easing,x={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},k="transition";return x["-webkit-"+k]=x["-moz-"+k]=x["-o-"+k]=x[k]=I,b.css(x),b},d=function(){e.content.css("visibility","visible")};u("BuildControls"+i,function(){if(e._allowZoom()){if(clearTimeout(o),e.content.css("visibility","hidden"),t=e._getItemToZoom(),!t)return void d();a=p(t),a.css(e._getOffset()),e.wrap.append(a),o=setTimeout(function(){a.css(e._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){a.remove(),t=a=null,l("ZoomAnimationEnded")},16)},s)},16)}}),u(Y+i,function(){if(e._allowZoom()){if(clearTimeout(o),e.st.removalDelay=s,!t){if(t=e._getItemToZoom(),!t)return;a=p(t)}a.css(e._getOffset(!0)),e.wrap.append(a),e.content.css("visibility","hidden"),setTimeout(function(){a.css(e._getOffset())},16)}}),u(v+i,function(){e._allowZoom()&&(d(),a&&a.remove(),t=null)})}},_allowZoom:function(){return e.currItem.type==="image"},_getItemToZoom:function(){return e.currItem.hasSize?e.currItem.img:!1},_getOffset:function(t){var n;n=t?e.currItem.img:e.st.zoom.opener(e.currItem.el||e.currItem);var i=n.offset(),o=parseInt(n.css("padding-top"),10),a=parseInt(n.css("padding-bottom"),10);i.top-=r(window).scrollTop()-o;var s={width:n.width(),height:(N?n.innerHeight():n[0].offsetHeight)-a-o};return oe()?s["-moz-transform"]=s.transform="translate("+i.left+"px,"+i.top+"px)":(s.left=i.left,s.top=i.top),s}}});var C="iframe",re="//about:blank",j=function(t){if(e.currTemplate[C]){var n=e.currTemplate[C].find("iframe");n.length&&(t||(n[0].src=re),e.isIE8&&n.css("display",t?"block":"none"))}};r.magnificPopup.registerModule(C,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){e.types.push(C),u("BeforeChange",function(t,n,i){n!==i&&(n===C?j():i===C&&j(!0))}),u(v+"."+C,function(){j()})},getIframe:function(t,n){var i=t.src,o=e.st.iframe;r.each(o.patterns,function(){return i.indexOf(this.index)>-1?(this.id&&(i=typeof this.id=="string"?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1):void 0});var a={};return o.srcAction&&(a[o.srcAction]=i),e._parseMarkup(n,a,t),e.updateStatus("ready"),n}}});var D=function(t){var n=e.items.length;return t>n-1?t-n:0>t?n+t:t},$=function(t,n,i){return t.replace(/%curr%/gi,n+1).replace(/%total%/gi,i)};r.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var t=e.st.gallery,n=".mfp-gallery";return e.direction=!0,t&&t.enabled?(g+=" mfp-gallery",u(H+n,function(){t.navigateByImgClick&&e.wrap.on("click"+n,".mfp-img",function(){return e.items.length>1?(e.next(),!1):void 0}),m.on("keydown"+n,function(i){i.keyCode===37?e.prev():i.keyCode===39&&e.next()})}),u("UpdateStatus"+n,function(i,o){o.text&&(o.text=$(o.text,e.currItem.index,e.items.length))}),u(L+n,function(i,o,a,s){var p=e.items.length;a.counter=p>1?$(t.tCounter,s.index,p):""}),u("BuildControls"+n,function(){if(e.items.length>1&&t.arrows&&!e.arrowLeft){var i=t.arrowMarkup,o=e.arrowLeft=r(i.replace(/%title%/gi,t.tPrev).replace(/%dir%/gi,"left")).addClass(F),a=e.arrowRight=r(i.replace(/%title%/gi,t.tNext).replace(/%dir%/gi,"right")).addClass(F);o.click(function(){e.prev()}),a.click(function(){e.next()}),e.container.append(o.add(a))}}),u(J+n,function(){e._preloadTimeout&&clearTimeout(e._preloadTimeout),e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages(),e._preloadTimeout=null},16)}),void u(v+n,function(){m.off(n),e.wrap.off("click"+n),e.arrowRight=e.arrowLeft=null})):!1},next:function(){e.direction=!0,e.index=D(e.index+1),e.updateItemHTML()},prev:function(){e.direction=!1,e.index=D(e.index-1),e.updateItemHTML()},goTo:function(t){e.direction=t>=e.index,e.index=t,e.updateItemHTML()},preloadNearbyImages:function(){var t,n=e.st.gallery.preload,i=Math.min(n[0],e.items.length),o=Math.min(n[1],e.items.length);for(t=1;t<=(e.direction?o:i);t++)e._preloadItem(e.index+t);for(t=1;t<=(e.direction?i:o);t++)e._preloadItem(e.index-t)},_preloadItem:function(t){if(t=D(t),!e.items[t].preloaded){var n=e.items[t];n.parsed||(n=e.parseEl(t)),l("LazyLoad",n),n.type==="image"&&(n.img=r('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,l("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}});var U="retina";r.magnificPopup.registerModule(U,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(n){return"@2x"+n})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var t=e.st.retina,n=t.ratio;n=isNaN(n)?n():n,n>1&&(u("ImageHasSize."+U,function(i,o){o.img.css({"max-width":o.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse."+U,function(i,o){o.src=t.replaceSrc(o,n)}))}}}}),R()})})();
