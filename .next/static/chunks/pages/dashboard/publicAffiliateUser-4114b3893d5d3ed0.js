(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{6893:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/publicAffiliateUser",function(){return a(5422)}])},5422:function(e,t,a){"use strict";a.r(t);var s=a(5893),l=a(6474),i=a(7673),r=a(9881),n=a(6047);a(9414);var o=a(1789),c=a(5678),d=a(7294);a(6737),a(7590);var u=a(7048),m=a(9470);t.default=(0,n.Q)(()=>{var e,t;let[a,n]=(0,d.useState)([]),[g,x]=(0,d.useState)(""),[f,v]=(0,d.useState)(!1),[h,p]=(0,d.useState)([]),[b,w]=(0,d.useState)(1),[y,N]=(0,d.useState)(10);console.log("selectedRows: ",h);let[P,S]=(0,d.useState)([]);(0,d.useEffect)(()=>{j()},[]);let j=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;v(!0);try{let a=JSON.parse(localStorage.getItem("auth_user")).token;console.log(a,"getToken");let s=await (0,m.Mh)(a,e,t);s&&(n(null==s?void 0:s.affiliateRequests),S(s))}catch(e){v(!1),console.log("error: ",e)}finally{v(!1)}},_=()=>{var e,t;(null==P?void 0:null===(e=P.data)||void 0===e?void 0:e.hasNextPage)&&(console.log("123"),j(null==P?void 0:null===(t=P.data)||void 0===t?void 0:t.totalPages,y),w(b+1))},E=()=>{var e,t;(null===(e=P.data)||void 0===e?void 0:e.hasPrevPage)&&(j((null==P?void 0:null===(t=P.data)||void 0===t?void 0:t.totalPages)-1,y),w(b-1))},A=async(e,t)=>{console.log(e,"userId",t,"status");let a=JSON.parse(localStorage.getItem("auth_user")).token;v(!0),await (0,m.Wb)(a,{status:t},e).then(async e=>{c.Am.success(null==e?void 0:e.message),j(),v(!1)}).catch(e=>{v(!1),c.Am.error(e.message)})},k=(0,d.useMemo)(()=>[{Header:"Email",accessor:"requestedBy.email",disableFilters:!0,filterable:!1,Cell:e=>(0,s.jsxs)("div",{className:"flex items-center whitespace-nowrap text-secondary text-sm gap-2",children:[e.row.original.requestedBy.email," "]}),minSize:20},{Header:"Full Name",accessor:"requestedBy.fullName",disableFilters:!0,filterable:!1,Cell:e=>(0,s.jsxs)("div",{className:"flex items-center text-secondary text-sm gap-2",children:[e.row.original.requestedBy.fullName," "]}),minSize:20},{Header:"Type",accessor:"type",disableFilters:!0,filterable:!1,Cell:e=>(0,s.jsxs)("div",{className:"flex items-center text-secondary text-sm gap-2",children:[e.row.original.type," "]}),minSize:20},{Header:"Status",accessor:"status",disableFilters:!0,hideElement:!1,Cell:e=>{let t=e.row.original.status,a="",l="",i="";switch(t){case"approved":a="bg-successBg",l="text-success",i="Approved";break;case"rejected":a="bg-dangerBG",l="text-danger",i="Rejected";break;default:a="bg-yellow-200",l="text-yellow-600",i="Pending"}return(0,s.jsx)("p",{className:"".concat(a," ").concat(l," w-32 text-xs font-medium px-[14px] py-[6px] flex items-center justify-center rounded-full"),children:i})},minSize:30},{Header:"",accessor:"action",disableFilters:!0,hideElement:!0,canFilter:!1,Cell:e=>(0,s.jsx)(u.Z,{isEdit:!0,onActionSelect:t=>A(e.row.original._id,t)}),minSize:5}],[a]);return(0,s.jsxs)(r.Z,{onChange:e=>x(e.target.value),searchValue:g,children:[(0,s.jsx)(l.Z,{loading:f}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex text-[#4D515A] text-sm font-medium",children:["Dashboard ",(0,s.jsx)(o.Ev,{})," Public Affiliate User"," ",(0,s.jsx)(o.Ev,{})]}),(0,s.jsx)("h1",{className:"text-2xl text-secondary font-bold my-3",children:"Public Affiliate User"}),(0,s.jsx)("div",{className:"mb-5 mt-5 shadow-buttonShadow",children:(0,s.jsx)(i.Z,{currentItems:a,setCurrentItems:n,columns:k,data:a,isAddOptions:!1,customPageSize:6,selectedRows:h,dataName:"Public Affiliate User",nextPage:()=>_(),previousPage:()=>E(),setPageLimit:e=>{j(1,e,()=>N(e))},canNextPage:null!=P&&null!==(e=P.data)&&void 0!==e&&!!e.hasNextPage,canPreviousPage:null!==(t=P.data)&&void 0!==t&&!!t.hasPrevPage})})]})]})})}},function(e){e.O(0,[143,664,521,650,737,162,231,118,888,774,179],function(){return e(e.s=6893)}),_N_E=e.O()}]);