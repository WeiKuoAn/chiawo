/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){var u=0,l={};function r(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+u,this.options=r.Adapter.extend({},r.defaults,i),this.element=this.options.element,this.adapter=new r.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=r.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=r.Context.findOrCreateByElement(this.options.context),r.offsetAliases[this.options.offset]&&(this.options.offset=r.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),l[this.key]=this,u+=1}r.prototype.queueTrigger=function(i){this.group.queueTrigger(this,i)},r.prototype.trigger=function(i){this.enabled&&this.callback&&this.callback.apply(this,i)},r.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete l[this.key]},r.prototype.disable=function(){return this.enabled=!1,this},r.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},r.prototype.next=function(){return this.group.next(this)},r.prototype.previous=function(){return this.group.previous(this)},r.invokeAll=function(i){var o=[];for(var e in l)o.push(l[e]);for(var t=0,n=o.length;t<n;t++)o[t][i]()},r.destroyAll=function(){r.invokeAll("destroy")},r.disableAll=function(){r.invokeAll("disable")},r.enableAll=function(){r.Context.refreshAll();for(var i in l)l[i].enabled=!0;return this},r.refreshAll=function(){r.Context.refreshAll()},r.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},r.viewportWidth=function(){return document.documentElement.clientWidth},r.adapters=[],r.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},r.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=r})();(function(){function u(t){window.setTimeout(t,1e3/60)}var l=0,r={},i=window.Waypoint,o=window.onload;function e(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+l,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,r[t.waypointContextKey]=this,l+=1,i.windowContext||(i.windowContext=!0,i.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}e.prototype.add=function(t){var n=t.options.horizontal?"horizontal":"vertical";this.waypoints[n][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),n=this.Adapter.isEmptyObject(this.waypoints.vertical),a=this.element==this.element.window;t&&n&&!a&&(this.adapter.off(".waypoints"),delete r[this.key])},e.prototype.createThrottledResizeHandler=function(){var t=this;function n(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,i.requestAnimationFrame(n))})},e.prototype.createThrottledScrollHandler=function(){var t=this;function n(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){(!t.didScroll||i.isTouch)&&(t.didScroll=!0,i.requestAnimationFrame(n))})},e.prototype.handleResize=function(){i.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},n={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var a in n){var h=n[a],d=h.newScroll>h.oldScroll,f=d?h.forward:h.backward;for(var v in this.waypoints[a]){var s=this.waypoints[a][v];if(s.triggerPoint!==null){var p=h.oldScroll<s.triggerPoint,c=h.newScroll>=s.triggerPoint,w=p&&c,g=!p&&!c;(w||g)&&(s.queueTrigger(f),t[s.group.id]=s.group)}}}for(var y in t)t[y].flushTriggers();this.oldScroll={x:n.horizontal.newScroll,y:n.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var n in this.waypoints)for(var a in this.waypoints[n])t.push(this.waypoints[n][a]);for(var h=0,d=t.length;h<d;h++)t[h].destroy()},e.prototype.refresh=function(){var t=this.element==this.element.window,n=t?void 0:this.adapter.offset(),a={},h;this.handleScroll(),h={horizontal:{contextOffset:t?0:n.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:n.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var d in h){var f=h[d];for(var v in this.waypoints[d]){var s=this.waypoints[d][v],p=s.options.offset,c=s.triggerPoint,w=0,g=c==null,y,m,x,A,S;s.element!==s.element.window&&(w=s.adapter.offset()[f.offsetProp]),typeof p=="function"?p=p.apply(s):typeof p=="string"&&(p=parseFloat(p),s.options.offset.indexOf("%")>-1&&(p=Math.ceil(f.contextDimension*p/100))),y=f.contextScroll-f.contextOffset,s.triggerPoint=Math.floor(w+y-p),m=c<f.oldScroll,x=s.triggerPoint>=f.oldScroll,A=m&&x,S=!m&&!x,!g&&A?(s.queueTrigger(f.backward),a[s.group.id]=s.group):(!g&&S||g&&f.oldScroll>=s.triggerPoint)&&(s.queueTrigger(f.forward),a[s.group.id]=s.group)}}return i.requestAnimationFrame(function(){for(var b in a)a[b].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in r)r[t].refresh()},e.findByElement=function(t){return r[t.waypointContextKey]},window.onload=function(){o&&o(),e.refreshAll()},i.requestAnimationFrame=function(t){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||u;n.call(window,t)},i.Context=e})();(function(){function u(e,t){return e.triggerPoint-t.triggerPoint}function l(e,t){return t.triggerPoint-e.triggerPoint}var r={vertical:{},horizontal:{}},i=window.Waypoint;function o(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),r[this.axis][this.name]=this}o.prototype.add=function(e){this.waypoints.push(e)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var e in this.triggerQueues){var t=this.triggerQueues[e],n=e==="up"||e==="left";t.sort(n?l:u);for(var a=0,h=t.length;a<h;a+=1){var d=t[a];(d.options.continuous||a===t.length-1)&&d.trigger([e])}}this.clearTriggerQueues()},o.prototype.next=function(e){this.waypoints.sort(u);var t=i.Adapter.inArray(e,this.waypoints),n=t===this.waypoints.length-1;return n?null:this.waypoints[t+1]},o.prototype.previous=function(e){this.waypoints.sort(u);var t=i.Adapter.inArray(e,this.waypoints);return t?this.waypoints[t-1]:null},o.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e)},o.prototype.remove=function(e){var t=i.Adapter.inArray(e,this.waypoints);t>-1&&this.waypoints.splice(t,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(e){return r[e.axis][e.name]||new o(e)},i.Group=o})();(function(){var u=window.jQuery,l=window.Waypoint;function r(i){this.$element=u(i)}u.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,o){r.prototype[o]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[o].apply(this.$element,e)}}),u.each(["extend","inArray","isEmptyObject"],function(i,o){r[o]=u[o]}),l.adapters.push({name:"jquery",Adapter:r}),l.Adapter=r})();(function(){var u=window.Waypoint;function l(r){return function(){var i=[],o=arguments[0];return r.isFunction(arguments[0])&&(o=r.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var e=r.extend({},o,{element:this});typeof e.context=="string"&&(e.context=r(this).closest(e.context)[0]),i.push(new u(e))}),i}}window.jQuery&&(window.jQuery.fn.waypoint=l(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=l(window.Zepto))})();
