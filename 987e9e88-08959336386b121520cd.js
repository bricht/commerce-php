"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[42914],{77503:function(e,t,l){l.d(t,{MF:function(){return N},MH:function(){return j},SL:function(){return F},UW:function(){return V},cI:function(){return L},dd:function(){return B},ie:function(){return M}});var o=l(4942),n=l(15785),a=l(35776),r=l(67293),i=l(40374),s=l.n(i),d=l(65480),c=l(47720),u=l(59273),p=l(48325),g=l(27860),m=l(68457),v=l(8),h=l(53971);function f(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function y(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?f(Object(l),!0).forEach((function(t){(0,o.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const b=/^(localhost:\d{1,5}|(\*\.|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)|\*|(\*\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+))$/,w=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var x={name:"19cme6k",styles:"margin-left:10px;color:var(--spectrum-global-color-gray-800);&:hover{color:var(--spectrum-global-color-gray-900);}"},Z={name:"17fjgey",styles:"width:fit-content;margin-top:10px"},O={name:"1e43w35",styles:"color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},D={name:"1kjtuj9",styles:"color:var(--spectrum-global-color-gray-800);margin:0"},C={name:"oq6u0f",styles:"display:flex;gap:10px"},S={name:"ftyx0c",styles:"display:flex;gap:24px;flex-direction:column;width:100%"},k={name:"1pmf9ly",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;margin-left:10px;text-decoration:underline;color:var(--spectrum-global-color-gray-800);cursor:pointer"},A={name:"7hgi8",styles:"color:var(--spectrum-global-color-gray-800)"},z={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"};const F=e=>{var t;let{formProps:l,credentialType:o,service:i}=e;const{0:v,1:f}=(0,a.useState)(!1),{0:P,1:E}=(0,a.useState)(!1),{0:H,1:U}=(0,a.useState)({}),{0:I,1:T}=(0,a.useState)(""),{0:q,1:_}=(0,a.useState)(!0),{0:$,1:R}=(0,a.useState)(!1),{0:G,1:J}=(0,a.useState)([]),{0:W,1:Y}=(0,a.useState)({}),{0:X,1:K}=(0,a.useState)(!1),{0:Q,1:ee}=(0,a.useState)(!1),{0:te,1:le}=(0,a.useState)(!1),{0:oe,1:ne}=(0,a.useState)(!1),{0:ae,1:re}=(0,a.useState)(!1),{0:ie,1:se}=(0,a.useState)({}),{0:de,1:ce}=(0,a.useState)(!0),{0:ue,1:pe}=(0,a.useState)(!0),ge=null==l?void 0:l[F],me=null==ge||null===(t=ge.children)||void 0===t?void 0:t.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp"))))),ve=()=>{const e={},t={label:"Language",selectOptions:[]};null==ge||ge.children.forEach((l=>{let{type:o,props:a}=l;var r;o===M&&null!=a&&a.children&&(t.required=a.required||!1,(r=t.selectOptions).push.apply(r,(0,n.Z)([].concat(a.children).map((e=>{let{props:{title:t,href:l}}=e;return{title:t,href:l}})))),Y((e=>{var t,l;return y(y({},e),Array.isArray(a.children)?null:{Download:null===(t=a.children)||void 0===t||null===(l=t.props)||void 0===l?void 0:l.title})})));e[o]=y(y({},a),{},{required:o===j||(null==a?void 0:a.required)})})),t.selectOptions.length&&(e[V]=t,1===t.selectOptions.length&&Y((e=>{var l,o;return y(y({},e),{},{Download:null===(l=t.selectOptions[0])||void 0===l?void 0:l.title,zipUrl:null===(o=t.selectOptions[0])||void 0===o?void 0:o.href})}))),J(e),(async()=>{var e;const t=null===(e=localStorage)||void 0===e?void 0:e.getItem("OrgInfo");if(null===t){const e=(0,m.Xu)(se);1===(null==e?void 0:e.length)&&ce(!1)}else{const e=JSON.parse(t);ce(1!==e.orgLen),se(e)}})()};(0,a.useEffect)((()=>{setTimeout((()=>{re(!1)}),8e3)}),[ae]),(0,a.useEffect)((()=>{q&&E(!1)}),[q]),(0,a.useEffect)((()=>{if(!$&&q){const e=y({},W);for(const t in e)e[t]="";Y(e),ne(!1)}}),[$]),(0,a.useEffect)((()=>{ve()}),[]),(0,a.useEffect)((()=>{if(P){const e=y({},W);for(const t in e)e[t]="";Y(e)}}),[P]),(0,a.useEffect)((()=>{var e,t,l,o;const n=null===(e=Array.from((null==ge?void 0:ge.children)||[]).filter((e=>{var t;return(null==e||null===(t=e.props)||void 0===t?void 0:t.required)||e.type===j})))||void 0===e?void 0:e.map((e=>e.type)),a=w.test(W.CredentialName)&&(null===(t=W.CredentialName)||void 0===t?void 0:t.length)>=6,r=n.filter((e=>"AllowedOrigins"===e.name)),i=null===(l=W.AllowedOrigins)||void 0===l?void 0:l.split(",").map((e=>b.test(e.trim()))),s=!r||(null==i?void 0:i.every((e=>!0===e)))&&void 0!==W.AllowedOrigins&&0!==(null===(o=W.AllowedOrigins)||void 0===o?void 0:o.length),d=a&&s&&!0===W.Agree;le(d)}),[W]);const he=(e,t)=>{const l="Downloads"===t||"Agree"===t?e.target.checked:e.target.value;if(Y((e=>y(y({},e),{},{[t]:l}))),"Download"===t&&W.Downloads){var o;const t=null==G||null===(o=G[V])||void 0===o?void 0:o.selectOptions.find((t=>t.title===e.target.value));t&&Y((e=>y(y({},e),{},{zipUrl:t.href})))}},fe=null==G?void 0:G[N],ye=null==G?void 0:G[j],be=null==G?void 0:G[B],we=null==G?void 0:G[M],xe=null==G?void 0:G[V];return(0,r.tZ)(a.default.Fragment,null,!Q&&q&&!v&&(0,r.tZ)("div",{className:s()(null==ge?void 0:ge.className),css:z},(0,r.tZ)("div",{css:(0,r.iv)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){padding:0;width:100%;}","")},(null==ge?void 0:ge.title)&&(0,r.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==ge?void 0:ge.title),(null==ge?void 0:ge.paragraph)&&(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==ge?void 0:ge.paragraph),ue&&(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:A},"You're creating this credential in  ","developer"===(null==ie?void 0:ie.type)?"in your personal developer organization":(0,r.tZ)("span",null,"[",(0,r.tZ)("b",null,null==ie?void 0:ie.name),"] "),".",de&&(0,r.tZ)("button",{tabIndex:"0",css:k,onClick:()=>K(!0)},"Change organization?"))),(0,r.tZ)("div",{css:(0,r.iv)("display:flex;gap:35px;@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){flex-direction:column;padding-left:0;}","")},(0,r.tZ)("div",{css:(0,r.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){width:100%;}","")},(0,r.tZ)("div",{css:S},ye&&(0,r.tZ)(j,{nameProps:ye,isFormValue:me,formData:W,handleChange:he}),be&&(0,r.tZ)(B,{originsProps:be,isFormValue:me,formData:W,handleChange:he}),we&&xe&&(0,r.tZ)(M,{downloadsProp:we,type:"Downloads",formData:W,handleChange:he}),W.Downloads&&xe&&(0,r.tZ)(V,{downloadProp:xe,formData:W,isFormValue:me,handleChange:he}),(0,r.tZ)("div",{css:C},(0,r.tZ)("input",{type:"checkbox",checked:W.Agree,onChange:e=>he(e,"Agree")}),(0,r.tZ)("p",{css:D},"By checking this box, you agree to ",(0,r.tZ)("a",{href:"https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf",css:O,target:"_blank",rel:"noreferrer"},"Adobe Developer Terms of Use"),".")),(0,r.tZ)("button",{id:"credentialButton",className:"spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM",css:Z,onClick:async()=>{var e,t;const l=null===(e=window.adobeIMS)||void 0===e||null===(t=e.getTokenFromStorage())||void 0===t?void 0:t.token;l||console.log("User not logged in"),f(!0),_(!1);const n={name:W.CredentialName,platform:o,description:"created for get credential",domain:W.AllowedOrigins,services:[{sdkCode:i}]};try{var a,r,s;const e=await fetch(`/console/api/organizations/${null==ie?void 0:ie.id}/integrations/adobeid`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`,"x-api-key":null===(a=window)||void 0===a||null===(r=a.adobeIMS)||void 0===r||null===(s=r.adobeIdData)||void 0===s?void 0:s.client_id},body:JSON.stringify(n)}),t=await e.json();if(200===e.status)U(t),R(!0),ne(!0);else if(null!=t&&t.messages){var d;ne(!0),le(!1),T(null==t||null===(d=t.messages[0])||void 0===d?void 0:d.message),_(!0)}}catch(c){E(!0)}finally{f(!1)}},disabled:!te},(0,r.tZ)("span",{className:"spectrum-Button-label"},"Create credential")))),fe?(0,r.tZ)(L,{sideContent:null==fe?void 0:fe.children}):null),(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:(0,r.iv)("color:var(--spectrum-global-color-gray-800);@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){padding-left:0;}","")},"Have existing credentials?",(0,r.tZ)("a",{href:"/console/",target:"_blank",rel:"noreferrer",css:x},"Go to Developer Console"))),oe&&(0,r.tZ)(a.default.Fragment,null,ae?(0,r.tZ)(h.F,{message:"Organization Changed",variant:"success",disable:8e3,customDisableFunction:ne}):(0,r.tZ)(h.F,{customDisableFunction:ne,message:q&&!$?I:!P&&$&&"Your credentials were created successfully.",variant:P||q&&!$?"error":"success",disable:P||q&&!$?null:8e3})),v&&!$&&(0,r.tZ)(c.g,{credentials:ge,downloadStatus:W.Downloads}),X&&(0,r.tZ)(p.G,{setModalOpen:K,redirectToBeta:Q,setRedirectBetaProgram:ee,setAlertShow:ne,alertShow:oe,organizationChange:ae,setOrganization:re,setOrganizationValue:se}),P&&!q&&!$&&(0,r.tZ)(u.I,{errorMessage:null==l?void 0:l[u.I]}),$&&!q&&(0,r.tZ)(d.Z,{credentialProps:l,response:H,setShowCreateForm:_,setShowCredential:R,organizationName:null==ie?void 0:ie.name,formData:W,orgID:null==ie?void 0:ie.id}),Q&&(0,r.tZ)(g.Z,{joinBeta:null==l?void 0:l[g.Z]}))},N=e=>{let{side:t}=e;return t};var P={name:"8sarsy",styles:"position:relative;display:inline-block;width:100%"};const j=e=>{var t,l,o;let{nameProps:n,isFormValue:a,formData:i,handleChange:s}=e;const d=!w.test(i.CredentialName),c=0!==(null===(t=i.CredentialName)||void 0===t?void 0:t.length)&&d;return(0,r.tZ)(m.Mt,{isFormValue:a,fields:n,formData:i,isRed:c},(0,r.tZ)("div",{css:P},(0,r.tZ)("input",{type:"text",css:(0,r.iv)("padding:7px;border-radius:3px;width:97%;border:1px solid ",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";&::placeholder{font-style:italic;color:var(--spectrum-global-color-gray-400);}&:focus{outline:none;border-color:",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}",""),value:i.CredentialName,onChange:e=>s(e,"CredentialName"),placeholder:null==n?void 0:n.placeholder,maxLength:null==n?void 0:n.range}),(0,r.tZ)("span",{css:(0,r.iv)("display :",(null===(l=i.CredentialName)||void 0===l?void 0:l.length)<3&&0!==(null===(o=i.CredentialName)||void 0===o?void 0:o.length)?"block":"none",";","")},(0,r.tZ)(m.zM,null))))},B=e=>{var t,l;let{originsProps:o,isFormValue:n,type:a,formData:i,handleChange:s}=e;const d=null===(t=i.AllowedOrigins)||void 0===t?void 0:t.split(",").map((e=>b.test(e.trim()))),c=null==d?void 0:d.every((e=>!0===e)),u=void 0!==i.AllowedOrigins&&!c&&0!==(null===(l=i.AllowedOrigins)||void 0===l?void 0:l.length);return(0,r.tZ)(m.Mt,{isFormValue:n,fields:o,type:a,formData:i,isRed:u},(0,r.tZ)("textarea",{css:(0,r.iv)("flex:1;padding:7px;height:50px;border-radius:3px;border:1px solid ",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";resize:none;width:90%;color:#4b4b4b;font-family:adobe-clean,Helvetica,Arial,sans-serif;&::placeholder{color:var(--spectrum-global-color-gray-600);font-style:italic;}&:focus{outline:none;border-color:",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}&:hover{&::placeholder{color:var(--spectrum-global-color-gray-800);}}",""),value:i.AllowedOrigins,placeholder:null==o?void 0:o.placeholder,onChange:e=>s(e,"AllowedOrigins")}))};var E={name:"i92civ",styles:"cursor:pointer;display:flex;justify-content:center;align-items:center"},H={name:"18ny2tv",styles:"color:var(--spectrum-dialog-confirm-description-text-color, var(--spectrum-global-color-gray-800));margin:0"},U={name:"zatqba",styles:"display:flex;gap:10px;align-items:center"};const M=e=>{let{downloadsProp:t,handleChange:l,formData:o}=e;const{label:n,contextHelpLabelForLink:a,contextHelpLink:i,contextHelpText:s,contextHelp:d,contextHelpHeading:c}=t;return(0,r.tZ)("div",{css:U},(0,r.tZ)("input",{type:"checkbox",onChange:e=>l(e,"Downloads"),checked:o.Downloads}),(0,r.tZ)("p",{css:H}," ",n," "),(0,r.tZ)("div",{css:E},d&&(0,r.tZ)(v.r,{heading:c,text:s,link:i,label:a})))};var I={name:"wd7e5h",styles:"font-style:italic;font-weight:500;font-family:'adobe-clean';padding:7px;border-radius:3px;border:1px solid #D0D0D0!important;width:100%"};const V=e=>{var t,l,o;let{downloadProp:n,formData:i,isFormValue:s,handleChange:d}=e;return(0,r.tZ)(a.default.Fragment,null,(null==n||null===(t=n.selectOptions)||void 0===t?void 0:t.length)>1&&(0,r.tZ)(m.Mt,{isFormValue:s,fields:n},(0,r.tZ)("select",{css:I,id:"selectBox",value:i.Download,onChange:e=>d(e,"Download")},(null==n||null===(l=n.selectOptions)||void 0===l?void 0:l.length)>1&&(0,r.tZ)("option",{value:"",hidden:!0},"Select language for your code pickData"),null==n||null===(o=n.selectOptions)||void 0===o?void 0:o.map(((e,t)=>(0,r.tZ)("option",{key:t,"data-link":e.href,value:e.title},e.title))))))},L=e=>{let{sideContent:t}=e;return(0,r.tZ)(a.default.Fragment,null,(0,r.tZ)("div",{css:(0,r.iv)("width:2px;background-color:#D0D0D0;@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){display:none;}","")}),(0,r.tZ)("div",{css:(0,r.iv)("width:50%;@media screen and (min-width:",m.xU,") and (max-width:",m.Ey,"){width:100%;}","")},(0,r.tZ)(N,{side:t})))}}}]);
//# sourceMappingURL=987e9e88-08959336386b121520cd.js.map