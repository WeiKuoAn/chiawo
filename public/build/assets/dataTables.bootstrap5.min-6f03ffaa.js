import{r as q}from"./jquery-4e911315.js";import{r as C}from"./jquery.dataTables-82c2ad5b.js";var k={},E={get exports(){return k},set exports(u){k=u}};/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */(function(u,F){(function(r){var l,d;l=q(),d=function(s,e){e.fn.dataTable||C(s,e)},typeof window<"u"?u.exports=function(s,e){return s=s||window,e=e||l(s),d(s,e),r(e,0,s.document)}:(d(window,l),u.exports=r(l,window,window.document))})(function(r,l,d,s){var e=r.fn.dataTable;return r.extend(!0,e.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"}),r.extend(e.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"}),e.ext.renderer.pageButton.bootstrap=function(n,i,y,A,c,x){function h(w,_){for(var a,p,I=function(g){g.preventDefault(),r(g.currentTarget).hasClass("disabled")||T.page()==g.data.action||T.page(g.data.action).draw("page")},v=0,L=_.length;v<L;v++)if(a=_[v],Array.isArray(a))h(w,a);else{switch(t=o="",a){case"ellipsis":o="&#x2026;",t="disabled";break;case"first":o=f.sFirst,t=a+(0<c?"":" disabled");break;case"previous":o=f.sPrevious,t=a+(0<c?"":" disabled");break;case"next":o=f.sNext,t=a+(c<x-1?"":" disabled");break;case"last":o=f.sLast,t=a+(c<x-1?"":" disabled");break;default:o=a+1,t=c===a?"active":""}o&&(p=t.indexOf("disabled")!==-1,p=r("<li>",{class:P.sPageButton+" "+t,id:y===0&&typeof a=="string"?n.sTableId+"_"+a:null}).append(r("<a>",{href:p?null:"#","aria-controls":n.sTableId,"aria-disabled":p?"true":null,"aria-label":B[a],"aria-role":"link","aria-current":t==="active"?"page":null,"data-dt-idx":a,tabindex:n.iTabIndex,class:"page-link"}).html(o)).appendTo(w),n.oApi._fnBindAction(p,{action:a},I))}}var o,t,m,T=new e.Api(n),P=n.oClasses,f=n.oLanguage.oPaginate,B=n.oLanguage.oAria.paginate||{},i=r(i);try{m=i.find(d.activeElement).data("dt-idx")}catch{}var b=i.children("ul.pagination");b.length?b.empty():b=i.html("<ul/>").children("ul").addClass("pagination"),h(b,A),m!==s&&i.find("[data-dt-idx="+m+"]").trigger("focus")},e})})(E);
