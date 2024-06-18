import{b as m,Q as _}from"./QCard.8c22dafe.js";import{Q as d}from"./QInput.58e40bbe.js";import{Q as f}from"./QBtn.b68c7b7b.js";import{k as V}from"./QForm.03b1815c.js";import{Q as w}from"./QPage.b4098c6a.js";import{r as S,z as g,A as x,B as s,ai as Q,D as u,f as o,X as C,Y as I,C as n}from"./index.28efd8ed.js";import{S as p}from"./SelectBoxComponent.08ff9a41.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./render.7c345959.js";import"./QChip.ec2f1b50.js";import"./QItem.ee689c94.js";const t=r=>(C("data-v-cac32676"),r=r(),I(),r),B={class:"signup-container"},U=t(()=>u("div",{class:"text-h5"},"\uD68C\uC6D0 \uAC00\uC785",-1)),j=t(()=>u("br",null,null,-1)),N=t(()=>u("p",{class:"subtext"},[n(" \uB2F9\uC2E0\uC774 \uB2E4\uC2DC \uC77C\uC5B4\uC124 \uC218 \uC788\uAC8C \uB108\uAC9F\uC774 \uD568\uAED8\uD574\uC694. "),u("br"),n("\uD68C\uC6D0\uAC00\uC785 \uD6C4 \uB108\uAC9F\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD574 \uBCF4\uC138\uC694. ")],-1)),P=t(()=>u("p",{class:"subtext"},[n(" \uADFC\uBB34 \uD76C\uB9DD \uC9C0\uC5ED\uACFC \uC9C1\uC885\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "),u("br"),n("\uC801\uD569\uD55C \uC77C\uC790\uB9AC \uACF5\uACE0\uAC00 \uB4F1\uB85D\uB418\uBA74 \uC54C\uB9BC\uC744 \uBCF4\uB0B4\uB4DC\uB824\uC694. ")],-1)),h=t(()=>u("br",null,null,-1)),k={__name:"SignupPage",setup(r){const i=Q(),l=S({username:"",password:"",passwordConfirm:"",location:null,job:null}),v=[{label:"\uAC15\uB0A8\uAD6C",value:"\uAC15\uB0A8\uAD6C"},{label:"\uAC15\uB3D9\uAD6C",value:"\uAC15\uB3D9\uAD6C"},{label:"\uAC15\uBD81\uAD6C",value:"\uAC15\uBD81\uAD6C"},{label:"\uAC15\uC11C\uAD6C",value:"\uAC15\uC11C\uAD6C"},{label:"\uAD00\uC545\uAD6C",value:"\uAD00\uC545\uAD6C"},{label:"\uAD11\uC9C4\uAD6C",value:"\uAD11\uC9C4\uAD6C"},{label:"\uAD6C\uB85C\uAD6C",value:"\uAD6C\uB85C\uAD6C"},{label:"\uAE08\uCC9C\uAD6C",value:"\uAE08\uCC9C\uAD6C"},{label:"\uB178\uC6D0\uAD6C",value:"\uB178\uC6D0\uAD6C"},{label:"\uB3C4\uBD09\uAD6C",value:"\uB3C4\uBD09\uAD6C"},{label:"\uB3D9\uB300\uBB38\uAD6C",value:"\uB3D9\uB300\uBB38\uAD6C"},{label:"\uB3D9\uC791\uAD6C",value:"\uB3D9\uC791\uAD6C"},{label:"\uB9C8\uD3EC\uAD6C",value:"\uB9C8\uD3EC\uAD6C"},{label:"\uC11C\uB300\uBB38\uAD6C",value:"\uC11C\uB300\uBB38\uAD6C"},{label:"\uC11C\uCD08\uAD6C",value:"\uC11C\uCD08\uAD6C"},{label:"\uC131\uB3D9\uAD6C",value:"\uC131\uB3D9\uAD6C"},{label:"\uC131\uBD81\uAD6C",value:"\uC131\uBD81\uAD6C"},{label:"\uC1A1\uD30C\uAD6C",value:"\uC1A1\uD30C\uAD6C"},{label:"\uC591\uCC9C\uAD6C",value:"\uC591\uCC9C\uAD6C"},{label:"\uC601\uB4F1\uD3EC\uAD6C",value:"\uC601\uB4F1\uD3EC\uAD6C"},{label:"\uC6A9\uC0B0\uAD6C",value:"\uC6A9\uC0B0\uAD6C"},{label:"\uC740\uD3C9\uAD6C",value:"\uC740\uD3C9\uAD6C"},{label:"\uC885\uB85C\uAD6C",value:"\uC885\uB85C\uAD6C"},{label:"\uC911\uAD6C",value:"\uC911\uAD6C"},{label:"\uC911\uB791\uAD6C",value:"\uC911\uB791\uAD6C"}],b=[{label:"\uAD00\uB9AC\uC9C1",value:"\uAD00\uB9AC\uC9C1"},{label:"\uC0AC\uBB34\uC9C1",value:"\uC0AC\uBB34\uC9C1"},{label:"\uAE30\uC220\uC9C1",value:"\uAE30\uC220\uC9C1"}];function c(){if(l.value.password!==l.value.passwordConfirm){alert("\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");return}localStorage.setItem("userName",l.value.username),localStorage.setItem("location",l.value.location),alert("\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),i.push("/")}return(q,a)=>(g(),x(w,null,{default:s(()=>[u("div",B,[o(_,{class:"signup-card"},{default:s(()=>[o(m,null,{default:s(()=>[U,j,N]),_:1}),o(m,null,{default:s(()=>[o(V,{onSubmit:c},{default:s(()=>[o(d,{modelValue:l.value.username,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.username=e),label:"\uC544\uC774\uB514",rules:[e=>!!e||"\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"],dense:"",outlined:""},null,8,["modelValue","rules"]),o(d,{modelValue:l.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.password=e),label:"\uBE44\uBC00\uBC88\uD638",type:"password",rules:[e=>!!e||"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"],dense:"",outlined:"",class:"q-mt-md"},null,8,["modelValue","rules"]),o(d,{modelValue:l.value.passwordConfirm,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.passwordConfirm=e),label:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778",type:"password",rules:[e=>e===l.value.password||"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."],dense:"",outlined:"",class:"q-mt-md"},null,8,["modelValue","rules"]),P,o(p,{modelValue:l.value.location,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.location=e),options:v,label:"\uADFC\uBB34 \uD76C\uB9DD \uC9C0\uC5ED"},null,8,["modelValue"]),h,o(p,{modelValue:l.value.job,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.job=e),options:b,label:"\uD76C\uB9DD \uC9C1\uC885"},null,8,["modelValue"]),o(f,{label:"\uAC00\uC785\uD558\uAE30",type:"submit",color:"primary",class:"q-mt-md full-width"})]),_:1})]),_:1})]),_:1})])]),_:1}))}};var J=y(k,[["__scopeId","data-v-cac32676"]]);export{J as default};
