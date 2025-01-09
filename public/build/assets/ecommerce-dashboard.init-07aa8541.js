import{A as l}from"./apexcharts.common-ec382e21.js";import"./jquery-jvectormap-1.2.2.min-6500bd1b.js";import"./jquery-jvectormap-world-mill-en-900da6a3.js";(function(e){e(document).ready(function(a){e.Dashboard.init()})})(window.jQuery);(function(e){var a=function(){this.$body=e("body"),this.charts=[]};a.prototype.initCharts=function(){window.Apex={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{left:0,right:0}},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"]};var t=["#727cf5","#0acf97","#fa5c7c","#ffbc00"],o=e("#revenue-chart").data("colors");o&&(t=o.split(","));var r={chart:{height:363,type:"line",dropShadow:{enabled:!0,opacity:.2,blur:7,left:-7,top:7}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},series:[{name:"Current Week",type:"area",data:[10,20,15,25,20,30,20]},{name:"Previous Week",type:"line",data:[0,15,10,30,15,35,25]}],fill:{type:"solid",opacity:[.35,1]},colors:t,zoom:{enabled:!1},legend:{show:!1},xaxis:{type:"string",categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tooltip:{enabled:!1},axisBorder:{show:!1}},yaxis:{labels:{formatter:function(n){return n+"k"},offsetX:-15}}},i=new l(document.querySelector("#revenue-chart"),r);i.render()},a.prototype.initMaps=function(){e("#world-map-markers").length>0&&e("#world-map-markers").vectorMap({map:"world_mill_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,regionStyle:{initial:{fill:"#e3eaef"}},markerStyle:{initial:{r:9,fill:"#727cf5","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},backgroundColor:"transparent",markers:[{latLng:[22.3,78.8],name:"India"},{latLng:[40.71,-74],name:"New York"},{latLng:[37.77,-122.41],name:"San Francisco"},{latLng:[-33.86,151.2],name:"Sydney"},{latLng:[1.3,103.8],name:"Singapore"}],zoomOnScroll:!1})},a.prototype.init=function(){this.initCharts(),this.initMaps()},e.Dashboard=new a,e.Dashboard.Constructor=a})(window.jQuery);
