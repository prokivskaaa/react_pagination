(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),r=t(1),l=(t(10),t(2)),s=t.n(l),o=t(0),j=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=void 0===c?1:c,i=e.onPageChange,r=Math.ceil(a/t),l=Array.from({length:r},(function(e,a){return a+1})),j=1===n,d=n===l.length,u=function(e){e<1||e>r||i(e)};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:j}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":j,onClick:function(){return u(n-1)},children:"\xab"})}),l.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===n}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return u(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:d}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":d,onClick:function(){return u(n+1)},children:"\xbb"})})]})};var d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],u=l[1],h=d.length,b=(s-1)*t,p=b+t,m=d.slice(b,p);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b+1," - ").concat(Math.min(p,h)," of ").concat(h,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){c(+e.target.value),u(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:h,perPage:t,currentPage:s,onPageChange:function(e){return u(e)}}),Object(o.jsx)("ul",{children:m.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9ee5c62b.chunk.js.map