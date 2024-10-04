(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{4615:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/addDiscount",function(){return r(4578)}])},1304:function(e,t,r){"use strict";var n=r(5893);r(7294),t.Z=e=>{let{label:t,placeholder:r,value:a,onChange:l,disabled:o,type:s,name:i}=e;return(0,n.jsxs)("div",{style:{display:"Flex",flexDirection:"column"},children:[(0,n.jsx)("label",{style:{color:"#5A5A5A",fontSize:"20px",fontWeight:500,marginBottom:"10px"},children:t}),(0,n.jsx)("input",{style:{width:"100%",height:"50px",backgroundColor:"white",border:"1px solid #0000001A",borderRadius:"5px",boxShadow:"0px 0px 5px 0px #0000001A",paddingLeft:"20px",paddingRight:"20px"},placeholder:r,value:a,onChange:l,disabled:o,name:i,type:s})]})}},4578:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),a=r(7294),l=r(6474),o=r(1789),s=r(9881),i=r(1304),d=r(9470),c=r(1163),u=r(5678),p=r(8591);function h(){let[e,t]=(0,a.useState)({}),[r,h]=(0,a.useState)(""),[g,m]=(0,a.useState)(""),[f,x]=(0,a.useState)(""),[b,v]=(0,a.useState)(""),[y,w]=(0,a.useState)(""),[j,N]=(0,a.useState)(!1),[S,C]=(0,a.useState)(!1),[A,U]=(0,a.useState)(!1),[E,_]=(0,a.useState)(null),[k,D]=(0,a.useState)(null),L=(0,c.useRouter)(),{item:R}=L.query,Z=(0,a.useRef)();(0,a.useEffect)(()=>{if(R){let e=JSON.parse(R);t(e),h(null==e?void 0:e.brandName),m(null==e?void 0:e.discount),x(null==e?void 0:e.description),v(null==e?void 0:e.qrCode),w(null==e?void 0:e.discountUrl),D(null==e?void 0:e.brandLogo),console.log(e,"parsedItem")}},[R]);let q=e=>{_(e[0]),D(URL.createObjectURL(e[0]))},B=async()=>{try{let t;if(0===Object.keys(e).length){if(""===r)u.Am.warn("Please enter Brand Name");else if(""===g)u.Am.warn("Please enter discount");else if(""===f)u.Am.warn("Please enter description");else if(""===b&&""===y)u.Am.warn("Please enter QR Code or Discount URL");else if(y&&!y.startsWith("https://"))u.Am.warn("Please enter a valid discount URL starting with https://");else{U(!0),null!==E&&(t=await (0,p.Z)(E));let e={brandName:r,discount:g,description:f,qrCode:b,discountUrl:y,isQr:j,isUrl:S,brandLogo:t},n=JSON.parse(localStorage.getItem("auth_user")).token;console.log(e,"body..."),await (0,d.WQ)(n,e).then(async e=>{L.push("/dashboard/discount"),u.Am.success(e.message),U(!1)}).catch(e=>{U(!1),console.log(e,"err..."),u.Am.error(e.message)})}}else{U(!0),null!==E&&(t=await (0,p.Z)(E));let n={brandName:r||(null==e?void 0:e.brandName),discount:g||(null==e?void 0:e.discount),description:f||(null==e?void 0:e.description),qrCode:b||(null==e?void 0:e.qrCode),discountUrl:y||(null==e?void 0:e.discountUrl),brandLogo:null!==t?t:null==e?void 0:e.brandLogo,isQr:j||(null==e?void 0:e.isQr),isUrl:S||(null==e?void 0:e.isUrl)};U(!0);let a=JSON.parse(localStorage.getItem("auth_user"));await (0,d.Eo)(null==a?void 0:a.token,n,null==e?void 0:e._id).then(async e=>{L.push("/dashboard/discount"),u.Am.success(null==e?void 0:e.message),U(!1)}).catch(e=>{U(!1),u.Am.error(e.message)})}}catch(e){u.Am.error(e.message)}};return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{loading:A}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex text-gray-600 text-sm font-medium",children:["Dashboard ",(0,n.jsx)(o.Ev,{})," Discount ",(0,n.jsx)(o.Ev,{})]}),(0,n.jsx)("h1",{className:"text-2xl text-secondary font-bold my-3",children:"Add Discount"}),(0,n.jsxs)("div",{className:"mb-5 mt-5 shadow-lg p-4 bg-white rounded-md",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2 p-5",children:[(0,n.jsx)(i.Z,{id:"brandName",name:"brandName",type:"text",label:"Brand Name",placeholder:"Enter Brand Name",value:r,onChange:e=>h(e.target.value),required:!0,className:"w-full"}),(0,n.jsx)(i.Z,{id:"discount",name:"discount",type:"text",label:"Discount",placeholder:"Enter Discount",value:g,onChange:e=>m(e.target.value),required:!0,className:"w-full"}),(0,n.jsx)(i.Z,{id:"Description",name:"description",type:"text",label:"Description",value:f,onChange:e=>x(e.target.value),required:!0,className:"w-full",placeholder:"Enter Description"}),(0,n.jsx)(i.Z,{id:"qrCode",name:"qrCode",type:"text",label:"QR Code",value:b,onChange:e=>{let t=e.target.value;v(t),t&&(N(!0),C(!1),w(""))},disabled:!!y,className:"w-full",placeholder:"Enter Discount Url"}),(0,n.jsx)(i.Z,{id:"discountUrl",name:"discountUrl",type:"text",label:"Discount Url",placeholder:"Enter Url",value:y,onChange:e=>{let t=e.target.value;w(t),t&&(N(!1),C(!0),v(""))},disabled:!!b,required:!0,className:"w-full"}),(0,n.jsxs)("div",{style:{marginTop:"15px",position:"relative",flexDirection:"row",display:"flex",alignItems:"center"},children:[(0,n.jsx)("input",{type:"file",onChange:e=>q(e.target.files),hidden:!0,accept:".doc, .docx, .pdf, .png, .jpg, .jpeg,",ref:Z}),(0,n.jsx)("img",{style:{width:"6rem",height:"6rem",cursor:"pointer",borderRadius:"10rem"},src:k||"/icons/profile.jpg",onClick:()=>Z.current.click()}),(0,n.jsx)("div",{style:{marginLeft:"20px"},children:(0,n.jsx)("button",{onClick:()=>Z.current.click(),style:{width:"130px",height:"40px",backgroundColor:"black",borderRadius:"10px",color:"white"},children:"Select Brand Logo"})})]})]}),(0,n.jsx)("div",{className:"flex justify-end mt-4",children:(0,n.jsx)("button",{type:"submit",className:"btn-primary px-4 py-2 bg-secondary text-white rounded-md",onClick:B,children:R?" Update":" Submit"})})]})]})]})}},8591:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(6650);let a=(0,r(3977).ZF)({apiKey:"AIzaSyC2BSPa-7N2TVHeXVF8qgbePgsTTSRdCwU",authDomain:"mamvo-ece7c.firebaseapp.com",projectId:"mamvo-ece7c",storageBucket:"mamvo-ece7c.appspot.com",messagingSenderId:"92973546222",appId:"1:92973546222:web:93e73f0bf3e62cda4d51ff"}),l=(0,n.cF)(a);var o=r(5678),s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"".concat("HALALManagement","/thumbnail"),r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Date().toISOString();try{let i=(0,n.iH)(l,"".concat(t,"/").concat(s)),d=(0,n.B0)(i,e);return d.on("state_changed",e=>{let t=Math.round(e.bytesTransferred/e.totalBytes*100);console.log("progress: ",t),r&&r(t),a&&a({total:e.totalBytes,uploaded:e.bytesTransferred})},e=>{console.error("Upload error:",e),o.Am.error("Error uploading file.")},async()=>{try{let e=await (0,n.Jt)(d.snapshot.ref);return console.log("File uploaded successfully:",e),e}catch(e){throw console.error("Error getting download URL:",e),o.Am.error("Error getting download URL."),e}}),new Promise((e,t)=>{d.on("state_changed",null,t,async()=>{try{let t=await (0,n.Jt)(d.snapshot.ref);e(t)}catch(e){t(e)}})})}catch(e){throw console.error("Upload error:",e),o.Am.error("Error uploading file."),e}}},3977:function(e,t,r){"use strict";r.d(t,{ZF:function(){return n.ZF}});var n=r(7779);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.13.1","app")}},function(e){e.O(0,[143,664,650,162,231,888,774,179],function(){return e(e.s=4615)}),_N_E=e.O()}]);