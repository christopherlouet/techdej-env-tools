import{d as m,N as f,z as _,f as x,g as o,aa as a,t as r,C as v,b as u,i,w as c,a as g,o as n}from"../modules/vue-Bwf2ESld.js";import{a as k,_ as h}from"../index-DWUSJTJJ.js";import"../modules/shiki-BmRGQJHi.js";const N={class:"grid justify-center text-center pt-15% gap-5"},C={class:"text-2xl"},w={class:"op-60"},y={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},B=m({__name:"404",setup(R){const{currentRoute:l}=f(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=g("RouterLink");return n(),x("div",N,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",C,[t[0]||(t[0]=a(" Page ")),o("code",w,r(v(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",y,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:c(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):i("",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:c(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("",!0)])])}}}),L=h(B,[["__scopeId","data-v-7e160e61"]]);export{L as default};
