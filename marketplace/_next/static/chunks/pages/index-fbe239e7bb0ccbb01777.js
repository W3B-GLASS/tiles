(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(809),o=t.n(r),s=t(5893),a=t(2447),i=t(241),c=t(7771),l=t(387),d=t(7616),p=t(7294),u=t(9669),h=t.n(u),w=t(2484),f=t.n(w),x=t(4298),m=t(2025),g=t(1692);function k(){var e=(0,p.useState)([]),n=e[0],t=e[1],r=(0,p.useState)("not-loaded"),u=r[0],w=r[1];function k(){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)(o().mark((function e(){var n,r,s,p,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new i.Q(window.ethereum,"any")).on("network",(function(e,n){console.log("New Network name=",e.name),console.log("New Network chain id=",e.chainId),137!=e.chainId?console.log("At this time we only support the Polygon mainnet "):parent.postMessage({event:"network",name:e.name},"*"),n&&window.location.reload()})),e.next=4,c.yl().getNetwork();case 4:return r=e.sent,console.log("Network name=",r.name),console.log("Network chain id=",r.chainId),alert(window.location),window.location.split("-").length>1&&(m.IR=window.location.split("-").pop(),alert(m.IR)),s=new l.CH(m.IR,g.Mt,n),e.next=12,s.fetchMarketItems();case 12:return p=e.sent,e.next=15,Promise.all(p.map(function(){var e=(0,a.Z)(o().mark((function e(n){var t,r,a,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,h().get(t);case 5:if(r=e.sent,a=d.bM(n.price.toString(),"ether"),i={price:a,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,image:r.data.image,name:r.data.name,description:r.data.description},console.log("token id: "+i.tokenId),console.log("token desc: "+i.description),"undefined"!==typeof i.description){e.next=12;break}return e.abrupt("return",i);case 12:if("undefined"!==typeof i.description){e.next=14;break}return e.abrupt("return",i);case 14:return location.search&&i.description.split("--").pop()==location.search.split("?").pop()&&(console.log("Need to create Doc for NFT"),c=location.search.split("?").pop(),parent.postMessage('{ "docId": "'.concat(c,'", "tokenId": item.tokenId'),"*")),e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 15:u=e.sent,t(u),w("loaded");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(o().mark((function e(n){var t,r,s,a,c,p,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(f()),e.next=3,t.connect();case 3:return r=e.sent,s=new i.Q(r),window.location.hash&&(!window.location.hash.split("#")[6]||(m.IR=window.location.hash.split("#")[6])),a=s.getSigner(),c=new l.CH(m.IR,g.Mt,a),p=d.vz(n.price.toString(),"ether"),e.next=11,c.createMarketSale(n.tokenId,{value:p});case 11:return u=e.sent,e.next=14,u.wait();case 14:k();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,p.useEffect)((function(){k()}),[]),"loaded"!==u||n.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.default,{src:"../selection.js",strategy:"afterInteractive"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"px-4",style:{maxWidth:"1600px"},children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,s.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,s.jsx)("img",{src:e.image}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold",children:e.name}),(0,s.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,s.jsx)("p",{id:"nft-description",className:"text-gray-400",children:e.description})})]}),(0,s.jsxs)("div",{className:"p-4 bg-black",children:[(0,s.jsxs)("p",{className:"text-2xl font-bold text-white",children:[e.price," ETH"]}),(0,s.jsx)("button",{className:"mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",onClick:function(){return function(e){return v.apply(this,arguments)}(e)},children:"Buy"})]})]},n)}))})})})]}):(0,s.jsx)("h1",{className:"px-20 py-10 text-3xl",children:"No items in marketplace"})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[277,380,669,771,248,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);