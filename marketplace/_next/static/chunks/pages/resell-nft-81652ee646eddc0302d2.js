(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(809),c=n.n(r),i=n(5893),s=n(6265),u=n(2447),a=n(7294),o=n(241),p=n(7616),f=n(387),l=n(1163),h=n(9669),b=n.n(h),d=n(2484),w=n.n(d),g=n(2025),m=n(1692);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(){var e=(0,a.useState)({price:"",image:""}),t=e[0],n=e[1],r=(0,l.useRouter)(),s=r.query,h=s.id,d=s.tokenURI,x=t.image,j=t.price;function v(){return(v=(0,u.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b().get(d);case 4:t=e.sent,n((function(e){return O(O({},e),{},{image:t.data.image})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,u.Z)(c().mark((function e(){var n,i,s,u,a,l,b,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return n=new(w()),e.next=5,n.connect();case 5:return i=e.sent,s=new o.Q(i),u=s.getSigner(),a=p.vz(t.price,"ether"),l=new f.CH(g.IR,m.Mt,u),e.next=12,l.getListingPrice();case 12:return b=(b=e.sent).toString(),e.next=16,l.resellToken(h,a,{value:b});case 16:return d=e.sent,e.next=19,d.wait();case 19:r.push("https://W3B-GLASS.github.io/tiles/marketplace/");case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[h]),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsxs)("div",{className:"w-1/2 flex flex-col pb-12",children:[(0,i.jsx)("input",{placeholder:"Asset Price in Eth",className:"mt-2 border rounded p-4",onChange:function(e){return n(O(O({},t),{},{price:e.target.value}))}}),x&&(0,i.jsx)("img",{className:"rounded mt-4",width:"350",src:x}),(0,i.jsx)("button",{onClick:function(){return y.apply(this,arguments)},className:"font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",children:"List NFT"})]})})}},7392:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resell-nft",function(){return n(771)}])},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[277,380,669,248,774,888,179],(function(){return t=7392,e(e.s=t);var t}));var t=e.O();_N_E=t}]);