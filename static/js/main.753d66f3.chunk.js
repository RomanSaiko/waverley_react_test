(this.webpackJsonpwaverley_react_test=this.webpackJsonpwaverley_react_test||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=(a(32),a(20)),i=a.n(o),l=a(23),u=a(16),m=a(62),p=a(64),h=a(68),f=a(65),b=a(71),x=a(67),d=a(66),v=a(69),E=Object(m.a)({backdrop:{zIndex:9,color:"#fff"},card:{"&:hover":{boxShadow:"0px 6px 12px 0px rgba(184,178,184,1)"}}});var k=function(){var e=E(),t=r.a.useState([]),a=Object(u.a)(t,2),c=a[0],s=a[1],o=r.a.useState([]),m=Object(u.a)(o,2),k=m[0],j=m[1],g=Object(n.useState)(!0),w=Object(u.a)(g,2),y=w[0],O=w[1],S=Object(n.useState)(!1),_=Object(u.a)(S,2),F=_[0],N=_[1],I=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,r,c,o,l,u,m,p,h,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://hacker-news.firebaseio.com/v0/topstories.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.sort((function(){return.5-Math.random()})),r=n.slice(0,10),c=[],o=0;case 11:if(!(o<r.length)){e.next=23;break}return e.next=14,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(r[o],".json"));case 14:return l=e.sent,e.t0=c,e.next=18,l.json();case 18:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 20:o+=1,e.next=11;break;case 23:u=[].concat(c),u.sort((function(e,t){return parseFloat(e.score)-parseFloat(t.score)})),m=[],p=u.map((function(e){return e.by})),h=0;case 28:if(!(h<p.length)){e.next=40;break}return e.next=31,fetch("https://hacker-news.firebaseio.com/v0/user/".concat(p[h],".json"));case 31:return f=e.sent,e.t2=m,e.next=35,f.json();case 35:e.t3=e.sent,e.t2.push.call(e.t2,e.t3);case 37:h+=1,e.next=28;break;case 40:s(u),j(m),e.next=47;break;case 44:e.prev=44,e.t4=e.catch(0),N(!0);case 47:return e.prev=47,O(!1),e.finish(47);case 50:case"end":return e.stop()}}),e,null,[[0,44,47,50]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){I()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{container:!0,justify:"center",spacing:3},F&&r.a.createElement("div",null,"Something went wrong ..."),y?r.a.createElement(h.a,{className:e.backdrop,open:y},r.a.createElement(f.a,{color:"inherit"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"h3",component:"h1",align:"center"},"10 Hacker News")),c.map((function(t,a){return r.a.createElement(p.a,{key:t.id,item:!0,xs:12,md:5},r.a.createElement(v.a,{href:t.url,target:"_blank",underline:"none"},r.a.createElement(b.a,{className:e.card},r.a.createElement(x.a,null,r.a.createElement(d.a,{variant:"h5",component:"h3"},t.title),r.a.createElement(d.a,null,"Story score: ",t.score),r.a.createElement(d.a,{component:"p"},"Author: ",k[a].id," - ",k[a].karma),r.a.createElement(d.a,{component:"p"},"Published: ",(n=t.time,new Date(1e3*n).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"})))))));var n})))))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.753d66f3.chunk.js.map