import{r as y}from"./jquery-4e911315.js";import{r as h}from"./dataTables.bootstrap5-a4b2f015.js";import{d as x}from"./dataTables.responsive-96a45fab.js";import{a as g}from"./_commonjsHelpers-042e6b4d.js";var b={},T={get exports(){return b},set exports(d){b=d}};const _=g(x);/*! Bootstrap 5 integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */(function(d,q){(function(e){var n,s;n=y(),s=function(a,o){o.fn.dataTable||h(a,o),o.fn.dataTable.Responsive||_(a,o)},typeof window<"u"?d.exports=function(a,o){return a=a||window,o=o||n(a),s(a,o),e(o,a,a.document)}:(s(window,n),d.exports=e(n,window,window.document))})(function(e,n,s,a){var o,i=e.fn.dataTable,l=i.Responsive.display,w=l.modal,r=e('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"/></div></div></div>'),p=n.bootstrap;return i.Responsive.bootstrap=function(t){p=t},l.modal=function(t){return o=o||new p.Modal(r[0]),function(m,u,c){var f,v;e.fn.modal?u||(t&&t.header&&(v=(f=r.find("div.modal-header")).find("button").detach(),f.empty().append('<h4 class="modal-title">'+t.header(m)+"</h4>").append(v)),r.find("div.modal-body").empty().append(c()),r.appendTo("body").modal(),o.show()):w(m,u,c)}},i})})(T);
