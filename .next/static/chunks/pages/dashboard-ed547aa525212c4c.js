(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1015:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(4087)}])},6047:function(e,s,t){"use strict";t.d(s,{Q:function(){return o}});var a=t(5893),l=t(7294),r=t(1163),n=t(2760);function o(e){return function(s){let t=(0,r.useRouter)(),[o,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{let e=function(){let e=JSON.parse(localStorage.getItem("auth_user"));return!!e&&null!=e&&!!e.token||(localStorage.removeItem("auth_user"),!1)}();e||t.asPath===n.Z.SIGN_UP||t.asPath===n.Z.SIGN_IN?e&&"/"===t.asPath&&t.push("/dashboard"):t.push(t.asPath===n.Z.SIGN_UP?n.Z.SIGN_UP:n.Z.SIGN_IN),i(!0)},[t]),o)?(0,a.jsx)(e,{...s}):null}}},4087:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var a=t(5893),l=t(6474);t(1789);var r=t(1664),n=t.n(r),o=t(7294),i=e=>{let{totalUsers:s,totalAffiliateUsers:t,totalPRUsers:l,totalUpcomingEvents:r}=e,o={boxShadow:"0px 1px 3px 0px #0051AF1A"};return(0,a.jsx)("div",{className:"flex sm:flex-nowrap flex-wrap gap-4 w-full",children:[{src:"/icons/card2.png",provider:"Total Users",number:s,path:"/dashboard/users"},{src:"/icons/card1.png",provider:"Total Affiliate Users",number:t,path:"/dashboard/publicAffiliateUser"},{src:"/icons/card3.png",provider:"Total PR Users",number:l,path:"/dashboard/publicRelationUser"},{src:"/icons/card3.png",provider:"Total Upcoming Events",number:r,path:"/dashboard/events"}].map((e,s)=>(0,a.jsx)("div",{className:" rounded-lg p-5 w-full bg-white",style:o,children:(0,a.jsxs)("div",{className:"flex flex-col gap-7",children:[(0,a.jsx)("div",{className:"flex justify-between items-center",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{className:"h-10",src:null==e?void 0:e.src,alt:""}),(0,a.jsx)("h1",{className:"text-[#4E5564] font-semibold mt-1",children:null==e?void 0:e.provider})]})}),(0,a.jsxs)(n(),{href:null==e?void 0:e.path,className:"flex justify-between",children:[(0,a.jsx)("h1",{className:"text-xl font-medium text-secondary",children:null==e?void 0:e.number}),(0,a.jsx)("p",{className:"".concat(0===s?"text-[#1A55A5]":1===s?"text-[#F7B84B]":"text-[#CC7A00]"," cursor-pointer font-medium"),children:"View all"})]})]})},s))})},c=t(9881),u=t(6047),d=t(9470),h=t(9008),f=t.n(h),x=t(1163),p=(0,u.Q)(()=>{(0,x.useRouter)();let[e,s]=(0,o.useState)(!1),[t,r]=(0,o.useState)(null);(0,o.useEffect)(()=>{n()},[]);let n=async()=>{s(!0);try{let e=JSON.parse(localStorage.getItem("auth_user")).token,s=await (0,d.Jm)(e);s&&r(s)}catch(e){s(!1)}finally{s(!1)}};return(0,a.jsx)("main",{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.Z,{loading:e}),(0,a.jsx)(f(),{children:(0,a.jsx)("title",{children:"Mamvo | Dashboard"})}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-2xl text-secondary font-bold mb-6",children:"Dashboard"}),(0,a.jsx)(i,{totalUsers:null==t?void 0:t.totalUsers,totalAffiliateUsers:null==t?void 0:t.totalAffiliateUsers,totalPRUsers:null==t?void 0:t.totalPRUsers,totalUpcomingEvents:null==t?void 0:t.totalUpcomingEvents}),(0,a.jsx)("div",{className:"my-10 flex sm:flex-nowrap flex-wrap gap-4"})]})]})})})},9008:function(e,s,t){e.exports=t(6665)}},function(e){e.O(0,[143,664,162,231,888,774,179],function(){return e(e.s=1015)}),_N_E=e.O()}]);