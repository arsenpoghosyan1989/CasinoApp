(this["webpackJsonpucraft-casino-app"]=this["webpackJsonpucraft-casino-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/1.9808255f.PNG"},36:function(e,t,a){e.exports=a.p+"static/media/2.0434c4f6.PNG"},37:function(e,t,a){e.exports=a.p+"static/media/3.2fb49cbd.PNG"},38:function(e,t,a){e.exports=a.p+"static/media/4.8c904e68.PNG"},39:function(e,t,a){e.exports=a.p+"static/media/5.5d72f711.PNG"},40:function(e,t,a){e.exports=a.p+"static/media/6.10e88f99.PNG"},41:function(e,t,a){e.exports=a.p+"static/media/7.d16f4f66.PNG"},42:function(e,t,a){e.exports=a.p+"static/media/spinner.bc442313.gif"},43:function(e,t,a){e.exports=a.p+"static/media/dot.cd2b8065.gif"},49:function(e,t,a){e.exports=a(75)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=a(14),o=a(15),s=a(35),u=a.n(s),m=a(36),d=a.n(m),p=a(37),f=a.n(p),v=a(38),h=a.n(v),b=a(39),g=a.n(b),E=a(40),y=a.n(E),C=a(41),N=a.n(C),k=a(21),F=a.n(k),P=[u.a,d.a,f.a,h.a,g.a,y.a,N.a],S=["IGT","NetEnt","Playtech","DragonFish","Novomatic"],j=["Fashon Show","Fashion Club DAPP","Fashion Boutique","Bikini Angels","Live Blackjack"],O=["classic","video Slot","Table Games","Virtual Poker","Virtual Games"],A=["enabled","disabled","disabled","enabled","disabled","disabled","disabled","enabled","disabled","enabled"];function x(e,t){return Math.floor(Math.random()*(t-e)+e)}var w=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getProviders",value:function(e,t,a){return new Promise((function(n,r){setTimeout((function(){n(function(e,t,a){for(var n=[],r=e;r<e+t;r++){var l=F.a.generate(),c=S[x(0,5)].toUpperCase()+"-"+a,i=j[x(0,5)]+r+x(e,e+t),o=O[x(0,5)]+" "+l,s=A[x(0,10)],u=P[x(0,7)];n.push({id:l,name:c,title:i,status:s,category:o,image:u})}return n}(e,t,a))}),1e3)}))}}]),e}(),T=r.a.createContext(),G=T.Provider,B=T.Consumer,_=a(18),q=a(26),D=a(24),H=(a(62),function(){return r.a.createElement("div",null," Error ")}),I=function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(H,null):this.props.children}}]),a}(n.Component),L=a(25),U=a(4),M=a(32),J=(a(63),function(e){var t=e.provider,a=t.name,n=t.title,l=t.status,c=t.category,i=t.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"enabled"===l?"statusBadge on":"statusBadge off"}),r.a.createElement("h4",null," ",a," "),r.a.createElement("img",{src:i}),r.a.createElement("h5",null,n),r.a.createElement("h6",null,c))}),V=a(42),Y=a.n(V),z=a(43),K=a.n(z),Q=(a(64),function(){return r.a.createElement("img",{src:K.a,className:"loading"})}),R=function(){return r.a.createElement("img",{src:Y.a,className:"spinner"})},W=(a(65),function(e){var t=e.providers,a=e.handleScroll,n=e.loading;return r.a.createElement("ul",{className:"mx-auto providersList",onScroll:a},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(J,{provider:e}))})),n&&t.length>0&&r.a.createElement(Q,null))}),X=function(e){var t=e.state,a=e.fetchAgain,l=Object(n.useState)(!1),c=Object(L.a)(l,2),i=c[0],o=c[1],s=t.providers,u=t.tabFilter.filter,m=u.search,d=u.category,p=u.provider,f=u.status;Object(n.useEffect)((function(){o(!1)}),[s.length]);var v=s.filter((function(e){var t=e.title,a=e.category,n=e.name,r=e.status;return!(""!==m&&!t.includes(m)||"all"!==d&&d!==a||"all"!==p&&p!==n||"all"!==f&&f!==r)}));return 0===s.length?r.a.createElement(R,null):r.a.createElement(W,{providers:v,handleScroll:function(e){var t=e.currentTarget,n=t.clientHeight;t.scrollHeight-t.scrollTop===n&&(a(),o(!0))},style:{height:"64vh",overflowY:"auto"},loading:i})},Z=function(){return function(e){return function(t){return r.a.createElement(B,null,(function(a){return r.a.createElement(e,Object.assign({},t,{CasinoService:a}))}))}}},$=function(e,t){return e.sort((function(e,a){var n=e[t].toUpperCase(),r=a[t].toUpperCase(),l=0;return n>r?l=1:n<r&&(l=-1),l}))},ee=function(e){var t=e.providers,a=e.filter,n=e.handleFilterChange,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=$(t,e),n=[];return a.map((function(t){if(!n.includes(t[e]))return n.push(t[e]),r.a.createElement("option",{value:t[e],key:t[e]+F.a.generate()},t[e])}))},c=a.category,i=a.provider,o=a.status,s=a.count;return r.a.createElement("div",{className:"row filterComponent"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{position:"relative",display:"inline"}},r.a.createElement("input",{type:"text",onChange:function(e){n({Search:e.target.value})},placeholder:"Search",className:"form-control"}),r.a.createElement("i",{className:"fa fa-search",style:{position:"absolute",right:"5px",top:0,color:"lightgray"}})),r.a.createElement("select",{className:"form-control",onChange:function(e){n({Category:e.target.value})},value:c},r.a.createElement("option",{value:"all"},"All Categoryes"),l("category")),r.a.createElement("select",{className:"form-control",onChange:function(e){n({Provider:e.target.value})},value:i},r.a.createElement("option",{value:"all"},"All Providers"),l("name")),r.a.createElement("select",{className:"form-control",onChange:function(e){n({Status:e.target.value})},value:o},r.a.createElement("option",{value:"all"},"All Statuses"),r.a.createElement("option",{value:"enabled"},"Enabled"),r.a.createElement("option",{value:"disabled"},"Disabled")),r.a.createElement("select",{className:"form-control",onChange:function(e){n({Count:e.target.value})},value:s},r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"5"},"5"))))},te=function(e){var t=e.tab,a=e.handleTabClick,n=function(e){a(e.target.value)};return r.a.createElement("div",{className:"row tabsBlock"},r.a.createElement("div",{className:"form-group mx-auto"},r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"btn  ".concat("games"===t?"btn-secondary":"")},r.a.createElement("input",{type:"radio",value:"games",checked:"games"===t,onChange:n,style:{display:"none"}}),"Games")),r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"btn  ".concat("categories"===t?"btn-secondary":"")},r.a.createElement("input",{type:"radio",value:"categories",checked:"categories"===t,onChange:n,style:{display:"none"}}),"Categories")),r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"btn  ".concat("types"===t?"btn-secondary":"")},r.a.createElement("input",{type:"radio",value:"types",checked:"types"===t,onChange:n,style:{display:"none"}}),"Types")),r.a.createElement("div",{className:"radio"},r.a.createElement("label",{className:"btn  ".concat("providers"===t?"btn-secondary":"")},r.a.createElement("input",{type:"radio",value:"providers",checked:"providers"===t,onChange:n,style:{display:"none"}}),"Providers"))))},ae=(a(66),function(e){var t=e.state,a=e.handleTabClick,n=e.handleFilterChange,l=t.providers,c=t.tabFilter,i=c.tab,o=c.filter;return r.a.createElement("div",null,r.a.createElement(te,{tab:i,handleTabClick:a}),r.a.createElement(ee,{providers:l,filter:o,handleFilterChange:n}))}),ne=(a(67),function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={providers:[],tabFilter:{tab:"games",filter:{search:"",category:"all",provider:"all",status:"all",count:20}},start:1},e.fetchAgain=function(){var t=e.state.start,a=e.state.tabFilter.tab,n=e.state.tabFilter.filter.count;e.props.CasinoService.getProviders(t,n,a).then((function(a){var r=[].concat(Object(M.a)(e.state.providers),Object(M.a)(a)),l=t+n;e.setState({providers:r,start:l})}))},e.handleTabClick=function(t){var a=e.state.tabFilter;a.tab=t,e.setState({tabFilter:a,providers:[]}),e.fetchAgain()},e.handleFilterChange=function(t){var a=function(t,a){var n=e.state.tabFilter;n.filter[t]=a,e.setState({tabFilter:n})};switch(Object.keys(t)[0]){case"Search":a("search",t.Search);break;case"Category":a("category",t.Category);break;case"Provider":a("provider",t.Provider);break;case"Status":a("status",t.Status);break;case"Count":a("count",+t.Count);break;default:console.log("n")}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchAgain()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{state:this.state,handleTabClick:this.handleTabClick,handleFilterChange:this.handleFilterChange}),r.a.createElement(X,{state:this.state,fetchAgain:this.fetchAgain}))}}]),a}(n.Component)),re=Z()(ne),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"animate__animated animate__slideInDown"},"About us"),r.a.createElement("p",{className:"animate__animated animate__slideInUp"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quaerat! Asperiores quibusdam nobis culpa numquam itaque quis vero eveniet aliquid."))},ce=a(78),ie=(a(68),function(){var e=Object(n.useState)(!1),t=Object(L.a)(e,2),a=t[0],l=t[1],c=function(){return l(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.b,{to:"/",onClick:c,className:"btn btn-primary"},"Provider List"),r.a.createElement(_.b,{to:"/about",onClick:c,className:"btn btn-default"},"About Provider"),r.a.createElement(ce.a,{show:a,onHide:function(){return l(!1)},className:"modalContainer"},r.a.createElement(ce.a.Header,{closeButton:!0},r.a.createElement(ce.a.Title,null,"Casino App")),r.a.createElement(ce.a.Body,null,r.a.createElement("main",{rol:"main",className:"container-fluid"},r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/",exact:!0,component:re}),r.a.createElement(U.a,{path:"/about",component:le}))))))}),oe=new w;c.a.render(r.a.createElement(I,null,r.a.createElement(G,{value:oe},r.a.createElement(_.a,null,r.a.createElement(ie,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8575d5fc.chunk.js.map