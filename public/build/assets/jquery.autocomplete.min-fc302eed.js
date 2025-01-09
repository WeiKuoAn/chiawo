import{c as T}from"./_commonjs-dynamic-modules-302442b1.js";import{r as V}from"./jquery-4e911315.js";import"./_commonjsHelpers-042e6b4d.js";(function(R){(function(i){i(typeof T=="function"?V():jQuery)})(function(i){function d(t,e){var n=this;n.element=t,n.el=i(t),n.suggestions=[],n.badQueries=[],n.selectedIndex=-1,n.currentValue=n.element.value,n.timeoutId=null,n.cachedResponse={},n.onChangeTimeout=null,n.onChange=null,n.isLocal=!1,n.suggestionsContainer=null,n.noSuggestionsContainer=null,n.options=i.extend(!0,{},d.defaults,e),n.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},n.hint=null,n.hintValue="",n.selection=null,n.initialize(),n.setOptions(e)}function S(t,e,n){return t.value.toLowerCase().indexOf(n)!==-1}function b(t){return typeof t=="string"?i.parseJSON(t):t}function w(t,e){if(!e)return t.value;var n="("+x.escapeRegExChars(e)+")";return t.value.replace(new RegExp(n,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function I(t,e){return'<div class="autocomplete-group">'+e+"</div>"}var x=function(){return{escapeRegExChars:function(t){return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(t){var e=document.createElement("div");return e.className=t,e.style.position="absolute",e.style.display="none",e}}}(),g={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},v=i.noop;d.utils=x,i.Autocomplete=d,d.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:w,formatGroup:I,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:v,onSearchComplete:v,onSearchError:v,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:S,paramName:"query",transformResult:b,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},d.prototype={initialize:function(){var t,e=this,n="."+e.classes.suggestion,o=e.classes.selected,r=e.options;e.element.setAttribute("autocomplete","off"),e.noSuggestionsContainer=i('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),e.suggestionsContainer=d.utils.createNode(r.containerClass),t=i(e.suggestionsContainer),t.appendTo(r.appendTo||"body"),r.width!=="auto"&&t.css("width",r.width),t.on("mouseover.autocomplete",n,function(){e.activate(i(this).data("index"))}),t.on("mouseout.autocomplete",function(){e.selectedIndex=-1,t.children("."+o).removeClass(o)}),t.on("click.autocomplete",n,function(){e.select(i(this).data("index"))}),t.on("click.autocomplete",function(){clearTimeout(e.blurTimeoutId)}),e.fixPositionCapture=function(){e.visible&&e.fixPosition()},i(window).on("resize.autocomplete",e.fixPositionCapture),e.el.on("keydown.autocomplete",function(s){e.onKeyPress(s)}),e.el.on("keyup.autocomplete",function(s){e.onKeyUp(s)}),e.el.on("blur.autocomplete",function(){e.onBlur()}),e.el.on("focus.autocomplete",function(){e.onFocus()}),e.el.on("change.autocomplete",function(s){e.onKeyUp(s)}),e.el.on("input.autocomplete",function(s){e.onKeyUp(s)})},onFocus:function(){var t=this;t.disabled||(t.fixPosition(),t.el.val().length>=t.options.minChars&&t.onValueChange())},onBlur:function(){var t=this,e=t.options,n=t.el.val(),o=t.getQuery(n);t.blurTimeoutId=setTimeout(function(){t.hide(),t.selection&&t.currentValue!==o&&(e.onInvalidateSelection||i.noop).call(t.element)},200)},abortAjax:function(){var t=this;t.currentRequest&&(t.currentRequest.abort(),t.currentRequest=null)},setOptions:function(t){var e=this,n=i.extend({},e.options,t);e.isLocal=Array.isArray(n.lookup),e.isLocal&&(n.lookup=e.verifySuggestionsFormat(n.lookup)),n.orientation=e.validateOrientation(n.orientation,"bottom"),i(e.suggestionsContainer).css({"max-height":n.maxHeight+"px",width:n.width+"px","z-index":n.zIndex}),this.options=n},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var t=this;t.disabled=!0,clearTimeout(t.onChangeTimeout),t.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var t=this,e=i(t.suggestionsContainer),n=e.parent().get(0);if(n===document.body||t.options.forceFixPosition){var o=t.options.orientation,r=e.outerHeight(),s=t.el.outerHeight(),u=t.el.offset(),l={top:u.top,left:u.left};if(o==="auto"){var a=i(window).height(),c=i(window).scrollTop(),p=-c+u.top-r,f=c+a-(u.top+s+r);o=Math.max(p,f)===p?"top":"bottom"}if(o==="top"?l.top+=-r:l.top+=s,n!==document.body){var m,h=e.css("opacity");t.visible||e.css("opacity",0).show(),m=e.offsetParent().offset(),l.top-=m.top,l.top+=n.scrollTop,l.left-=m.left,t.visible||e.css("opacity",h).hide()}t.options.width==="auto"&&(l.width=t.el.outerWidth()+"px"),e.css(l)}},isCursorAtEnd:function(){var t,e=this,n=e.el.val().length,o=e.element.selectionStart;return typeof o=="number"?o===n:!document.selection||(t=document.selection.createRange(),t.moveStart("character",-n),n===t.text.length)},onKeyPress:function(t){var e=this;if(!e.disabled&&!e.visible&&t.which===g.DOWN&&e.currentValue)return void e.suggest();if(!e.disabled&&e.visible){switch(t.which){case g.ESC:e.el.val(e.currentValue),e.hide();break;case g.RIGHT:if(e.hint&&e.options.onHint&&e.isCursorAtEnd()){e.selectHint();break}return;case g.TAB:if(e.hint&&e.options.onHint)return void e.selectHint();if(e.selectedIndex===-1)return void e.hide();if(e.select(e.selectedIndex),e.options.tabDisabled===!1)return;break;case g.RETURN:if(e.selectedIndex===-1)return void e.hide();e.select(e.selectedIndex);break;case g.UP:e.moveUp();break;case g.DOWN:e.moveDown();break;default:return}t.stopImmediatePropagation(),t.preventDefault()}},onKeyUp:function(t){var e=this;if(!e.disabled){switch(t.which){case g.UP:case g.DOWN:return}clearTimeout(e.onChangeTimeout),e.currentValue!==e.el.val()&&(e.findBestHint(),e.options.deferRequestBy>0?e.onChangeTimeout=setTimeout(function(){e.onValueChange()},e.options.deferRequestBy):e.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)return void(this.ignoreValueChange=!1);var t=this,e=t.options,n=t.el.val(),o=t.getQuery(n);return t.selection&&t.currentValue!==o&&(t.selection=null,(e.onInvalidateSelection||i.noop).call(t.element)),clearTimeout(t.onChangeTimeout),t.currentValue=n,t.selectedIndex=-1,e.triggerSelectOnValidInput&&t.isExactMatch(o)?void t.select(0):void(o.length<e.minChars?t.hide():t.getSuggestions(o))},isExactMatch:function(t){var e=this.suggestions;return e.length===1&&e[0].value.toLowerCase()===t.toLowerCase()},getQuery:function(t){var e,n=this.options.delimiter;return n?(e=t.split(n),i.trim(e[e.length-1])):t},getSuggestionsLocal:function(t){var e,n=this,o=n.options,r=t.toLowerCase(),s=o.lookupFilter,u=parseInt(o.lookupLimit,10);return e={suggestions:i.grep(o.lookup,function(l){return s(l,t,r)})},u&&e.suggestions.length>u&&(e.suggestions=e.suggestions.slice(0,u)),e},getSuggestions:function(t){var e,n,o,r,s=this,u=s.options,l=u.serviceUrl;if(u.params[u.paramName]=t,u.onSearchStart.call(s.element,u.params)!==!1){if(n=u.ignoreParams?null:u.params,i.isFunction(u.lookup))return void u.lookup(t,function(a){s.suggestions=a.suggestions,s.suggest(),u.onSearchComplete.call(s.element,t,a.suggestions)});s.isLocal?e=s.getSuggestionsLocal(t):(i.isFunction(l)&&(l=l.call(s.element,t)),o=l+"?"+i.param(n||{}),e=s.cachedResponse[o]),e&&Array.isArray(e.suggestions)?(s.suggestions=e.suggestions,s.suggest(),u.onSearchComplete.call(s.element,t,e.suggestions)):s.isBadQuery(t)?u.onSearchComplete.call(s.element,t,[]):(s.abortAjax(),r={url:l,data:n,type:u.type,dataType:u.dataType},i.extend(r,u.ajaxSettings),s.currentRequest=i.ajax(r).done(function(a){var c;s.currentRequest=null,c=u.transformResult(a,t),s.processResponse(c,t,o),u.onSearchComplete.call(s.element,t,c.suggestions)}).fail(function(a,c,p){u.onSearchError.call(s.element,t,a,c,p)}))}},isBadQuery:function(t){if(!this.options.preventBadQueries)return!1;for(var e=this.badQueries,n=e.length;n--;)if(t.indexOf(e[n])===0)return!0;return!1},hide:function(){var t=this,e=i(t.suggestionsContainer);i.isFunction(t.options.onHide)&&t.visible&&t.options.onHide.call(t.element,e),t.visible=!1,t.selectedIndex=-1,clearTimeout(t.onChangeTimeout),i(t.suggestionsContainer).hide(),t.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var t,e=this,n=e.options,o=n.groupBy,r=n.formatResult,s=e.getQuery(e.currentValue),u=e.classes.suggestion,l=e.classes.selected,a=i(e.suggestionsContainer),c=i(e.noSuggestionsContainer),p=n.beforeRender,f="",m=function(h,C){var y=h.data[o];return t===y?"":(t=y,n.formatGroup(h,t))};return n.triggerSelectOnValidInput&&e.isExactMatch(s)?void e.select(0):(i.each(e.suggestions,function(h,C){o&&(f+=m(C)),f+='<div class="'+u+'" data-index="'+h+'">'+r(C,s,h)+"</div>"}),this.adjustContainerWidth(),c.detach(),a.html(f),i.isFunction(p)&&p.call(e.element,a,e.suggestions),e.fixPosition(),a.show(),n.autoSelectFirst&&(e.selectedIndex=0,a.scrollTop(0),a.children("."+u).first().addClass(l)),e.visible=!0,void e.findBestHint())},noSuggestions:function(){var t=this,e=t.options.beforeRender,n=i(t.suggestionsContainer),o=i(t.noSuggestionsContainer);this.adjustContainerWidth(),o.detach(),n.empty(),n.append(o),i.isFunction(e)&&e.call(t.element,n,t.suggestions),t.fixPosition(),n.show(),t.visible=!0},adjustContainerWidth:function(){var t,e=this,n=e.options,o=i(e.suggestionsContainer);n.width==="auto"?(t=e.el.outerWidth(),o.css("width",t>0?t:300)):n.width==="flex"&&o.css("width","")},findBestHint:function(){var t=this,e=t.el.val().toLowerCase(),n=null;e&&(i.each(t.suggestions,function(o,r){var s=r.value.toLowerCase().indexOf(e)===0;return s&&(n=r),!s}),t.signalHint(n))},signalHint:function(t){var e="",n=this;t&&(e=n.currentValue+t.value.substr(n.currentValue.length)),n.hintValue!==e&&(n.hintValue=e,n.hint=t,(this.options.onHint||i.noop)(e))},verifySuggestionsFormat:function(t){return t.length&&typeof t[0]=="string"?i.map(t,function(e){return{value:e,data:null}}):t},validateOrientation:function(t,e){return t=i.trim(t||"").toLowerCase(),i.inArray(t,["auto","bottom","top"])===-1&&(t=e),t},processResponse:function(t,e,n){var o=this,r=o.options;t.suggestions=o.verifySuggestionsFormat(t.suggestions),r.noCache||(o.cachedResponse[n]=t,r.preventBadQueries&&!t.suggestions.length&&o.badQueries.push(e)),e===o.getQuery(o.currentValue)&&(o.suggestions=t.suggestions,o.suggest())},activate:function(t){var e,n=this,o=n.classes.selected,r=i(n.suggestionsContainer),s=r.find("."+n.classes.suggestion);return r.find("."+o).removeClass(o),n.selectedIndex=t,n.selectedIndex!==-1&&s.length>n.selectedIndex?(e=s.get(n.selectedIndex),i(e).addClass(o),e):null},selectHint:function(){var t=this,e=i.inArray(t.hint,t.suggestions);t.select(e)},select:function(t){var e=this;e.hide(),e.onSelect(t)},moveUp:function(){var t=this;if(t.selectedIndex!==-1)return t.selectedIndex===0?(i(t.suggestionsContainer).children("."+t.classes.suggestion).first().removeClass(t.classes.selected),t.selectedIndex=-1,t.ignoreValueChange=!1,t.el.val(t.currentValue),void t.findBestHint()):void t.adjustScroll(t.selectedIndex-1)},moveDown:function(){var t=this;t.selectedIndex!==t.suggestions.length-1&&t.adjustScroll(t.selectedIndex+1)},adjustScroll:function(t){var e=this,n=e.activate(t);if(n){var o,r,s,u=i(n).outerHeight();o=n.offsetTop,r=i(e.suggestionsContainer).scrollTop(),s=r+e.options.maxHeight-u,o<r?i(e.suggestionsContainer).scrollTop(o):o>s&&i(e.suggestionsContainer).scrollTop(o-e.options.maxHeight+u),e.options.preserveInput||(e.ignoreValueChange=!0,e.el.val(e.getValue(e.suggestions[t].value))),e.signalHint(null)}},onSelect:function(t){var e=this,n=e.options.onSelect,o=e.suggestions[t];e.currentValue=e.getValue(o.value),e.currentValue===e.el.val()||e.options.preserveInput||e.el.val(e.currentValue),e.signalHint(null),e.suggestions=[],e.selection=o,i.isFunction(n)&&n.call(e.element,o)},getValue:function(t){var e,n,o=this,r=o.options.delimiter;return r?(e=o.currentValue,n=e.split(r),n.length===1?t:e.substr(0,e.length-n[n.length-1].length)+t):t},dispose:function(){var t=this;t.el.off(".autocomplete").removeData("autocomplete"),i(window).off("resize.autocomplete",t.fixPositionCapture),i(t.suggestionsContainer).remove()}},i.fn.devbridgeAutocomplete=function(t,e){var n="autocomplete";return arguments.length?this.each(function(){var o=i(this),r=o.data(n);typeof t=="string"?r&&typeof r[t]=="function"&&r[t](e):(r&&r.dispose&&r.dispose(),r=new d(this,t),o.data(n,r))}):this.first().data(n)},i.fn.autocomplete||(i.fn.autocomplete=i.fn.devbridgeAutocomplete)})})();
