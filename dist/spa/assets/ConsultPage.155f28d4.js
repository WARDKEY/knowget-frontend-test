import{b as u,Q as m}from"./QCard.8c22dafe.js";import{Q as v}from"./QBtnToggle.229dae7b.js";import{Q as f}from"./QInput.58e40bbe.js";import{Q as b}from"./QBtn.b68c7b7b.js";import{Q as g}from"./QPage.b4098c6a.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,c as Q,z as C,A as x,B as l,f as t,D as e,E as y,X as V,Y as B}from"./index.28efd8ed.js";import"./render.7c345959.js";const d=a=>(V("data-v-8ebc65b4"),a=a(),B(),a),w=d(()=>e("div",{class:"text-h5"},"\uC0C1\uB2F4\uD558\uAE30",-1)),I=d(()=>e("p",null,"\uC0C1\uB2F4 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD574\uBCF4\uC138\uC694.",-1)),S={class:"consultation-form"},P={class:"type-selector"},k={class:"consultation-content"},T={class:"consultation-description"},z={class:"submit-button"},D={__name:"ConsultPage",setup(a){const o=c("\uC77C\uC790\uB9AC"),n=c(""),i=[{label:"\uC77C\uC790\uB9AC",value:"\uC77C\uC790\uB9AC"},{label:"\uC774\uB825\uC11C \uBC0F \uC11C\uB958 \uC791\uC131",value:"\uC774\uB825\uC11C \uBC0F \uC11C\uB958 \uC791\uC131"},{label:"\uAD50\uC721 \uC2E0\uCCAD",value:"\uAD50\uC721 \uC2E0\uCCAD"},{label:"\uAE30\uD0C0",value:"\uAE30\uD0C0"}],p=Q(()=>{switch(o.value){case"\uC77C\uC790\uB9AC":return"\uC77C\uC790\uB9AC \uC0C1\uB2F4\uC744 \uC120\uD0DD \uD558\uC168\uAD70\uC694! \uB108\uAC9F\uC5D0\uAC8C \uC6D0\uD558\uB294 \uAD6C\uC9C1 \uAD00\uB828 \uC11C\uBE44\uC2A4\uB098 \uAD6C\uC9C1 \uC2DC \uC5B4\uB824\uC6C0 \uB4F1\uC5D0 \uB300\uD574 \uC0C1\uB2F4\uD574\uBCF4\uC138\uC694!";case"\uC774\uB825\uC11C \uBC0F \uC11C\uB958 \uC791\uC131":return"\uC774\uB825\uC11C \uBC0F \uC11C\uB958 \uC791\uC131 \uAD00\uB828 \uC0C1\uB2F4\uC744 \uC120\uD0DD \uD558\uC168\uAD70\uC694! \uC791\uC131 \uD301, \uBB38\uC11C \uD615\uC2DD \uB4F1\uC5D0 \uB300\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";case"\uAD50\uC721 \uC2E0\uCCAD":return"\uAD50\uC721 \uC2E0\uCCAD \uC0C1\uB2F4\uC744 \uC120\uD0DD \uD558\uC168\uAD70\uC694! \uC6D0\uD558\uB294 \uAD50\uC721 \uACFC\uC815\uC774\uB098 \uC2E0\uCCAD \uC808\uCC28 \uB4F1\uC5D0 \uB300\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";case"\uAE30\uD0C0":return"\uAE30\uD0C0 \uC0C1\uB2F4\uC744 \uC120\uD0DD \uD558\uC168\uAD70\uC694! \uAE30\uD0C0 \uAD81\uAE08\uD55C \uC0AC\uD56D\uC774\uB098 \uC5B4\uB824\uC6C0\uC744 \uC0C1\uB2F4\uD574\uBCF4\uC138\uC694. \uB108\uAC9F \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC194\uC9C1\uD55C \uD3C9\uAC00\uB3C4 \uD658\uC601\uD569\uB2C8\uB2E4.";default:return""}}),_=()=>{alert(`\uC0C1\uB2F4 \uC720\uD615: ${o.value}
\uC0C1\uB2F4 \uB0B4\uC6A9: ${n.value}`)};return(N,s)=>(C(),x(g,{class:"page-wrapper"},{default:l(()=>[t(m,{class:"page-card"},{default:l(()=>[t(u,null,{default:l(()=>[w,I]),_:1}),t(u,null,{default:l(()=>[e("div",S,[e("div",P,[t(v,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),options:i,color:"light-blue-14",unelevated:"",size:"md"},null,8,["modelValue"])]),e("div",k,[e("p",T,y(p.value),1),t(f,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),type:"textarea",placeholder:"\uC0C1\uB2F4 \uB0B4\uC6A9\uC744 \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694.",filled:"",class:"content-input",rows:"12"},null,8,["modelValue"])]),e("div",z,[t(b,{label:"\uC0C1\uB2F4 \uC2E0\uCCAD",color:"primary",onClick:_})])])]),_:1})]),_:1})]),_:1}))}};var q=h(D,[["__scopeId","data-v-8ebc65b4"]]);export{q as default};