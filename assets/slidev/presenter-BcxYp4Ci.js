import{i as V,j as W,k as G,l as H}from"../modules/unplugin-icons-COcGVr_s.js";import{d as E,b as c,C as e,n as M,o as n,r as $,z as y,E as z,R as q,O as K,K as O,ah as A,a5 as J,f as k,g as t,e as o,w as g,k as N,i as Q,t as U,F as X}from"../modules/vue-Bwf2ESld.js";import{a as Y,u as Z,h as ee,c as te,j as se,k as oe,l as ne,m as ae,n as re,s as le,d as ie,o as ce,_ as ue}from"../index-DWUSJTJJ.js";import{r as de,u as me,a as pe,o as _e,S as fe,_ as xe,G as ve,b as ke,c as ge}from"./useWakeLock-l27sxkSX.js";import{b as be,c as ye,a as F,S as Ce}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-V8g283rm.js";import{_ as he,C as we}from"./ClicksSlider-DWgloNXF.js";import{_ as Se}from"./DrawingControls.vue_vue_type_style_index_0_lang-DcoSxf2W.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-D2H_OtD2.js";import"../modules/shiki-BmRGQJHi.js";import"./title-renderer.md_vue_type_script_setup_true_lang-BdhGiLc-.js";import"./context-BDyuPJEf.js";const $e=E({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(C){const i=C,{info:l}=be(i.no);return(u,p)=>{var _,f;return n(),c(he,{class:M(i.class),note:(_=e(l))==null?void 0:_.note,"note-html":(f=e(l))==null?void 0:f.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),ze={class:"bg-main h-full slidev-presenter"},Ne={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Fe={key:1,class:"h-full flex justify-center items-center"},Be={key:0,class:"grid-section note of-auto"},Ee={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Me={class:"border-t border-main py-1 px-2 text-sm"},Pe={class:"grid-section bottom flex"},Re={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},De={class:"progress-bar"},Te=E({__name:"presenter",setup(C){const i=$();de(),me(i),pe();const{clicksContext:l,currentSlideNo:u,currentSlideRoute:p,hasNext:_,nextRoute:f,slides:P,getPrimaryClicks:R,total:D}=Y(),{isDrawing:T}=ye();Z({title:`Presenter - ${le}`}),$(!1);const{timer:j,resetTimer:h}=ee(),I=y(()=>P.value.map(v=>te(v))),a=y(()=>l.value.current<l.value.total?[p.value,l.value.current+1]:_.value?[f.value,0]:null),x=y(()=>a.value&&I.value[a.value[0].no-1]);z(a,()=>{x.value&&a.value&&(x.value.current=a.value[1])},{immediate:!0});const w=q();return K(()=>{const v=i.value.querySelector("#slide-content"),s=O(A()),b=J();z(()=>{if(!b.value||T.value||!ce.value)return;const r=v.getBoundingClientRect(),d=(s.x-r.left)/r.width*100,m=(s.y-r.top)/r.height*100;if(!(d<0||d>100||m<0||m>100))return{x:d,y:m}},r=>{ie.cursor=r})}),(v,s)=>{var S;const b=V,r=W,d=G,m=H;return n(),k(X,null,[t("div",ze,[t("div",{class:M(["grid-container",`layout${e(se)}`])},[t("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col"},[o(F,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(_e)},{default:g(()=>[o(fe,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(n(),c(we,{key:(S=e(p))==null?void 0:S.no,"clicks-context":e(R)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),s[3]||(s[3]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1))],512),t("div",Ne,[a.value&&x.value?(n(),c(F,{key:"next"},{default:g(()=>[(n(),c(Ce,{key:a.value[0].no,"clicks-context":x.value,route:a.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(n(),k("div",Fe,s[4]||(s[4]=[t("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),s[5]||(s[5]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),w.value&&e(oe)?(n(),k("div",Be,[o(e(w))])):(n(),k("div",Ee,[(n(),c($e,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:N({fontSize:`${e(ne)}em`}),"clicks-context":e(l)},null,8,["no","style","clicks-context"])),t("div",Me,[o(B,{title:"Increase font size",onClick:e(ae)},{default:g(()=>[o(b)]),_:1},8,["onClick"]),o(B,{title:"Decrease font size",onClick:e(re)},{default:g(()=>[o(r)]),_:1},8,["onClick"]),Q("",!0)])])),t("div",Pe,[o(xe,{persist:!0}),s[6]||(s[6]=t("div",{"flex-auto":""},null,-1)),t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[2]||(s[2]=(...L)=>e(h)&&e(h)(...L))},[o(d,{class:"absolute"}),o(m,{class:"absolute opacity-0"})]),t("div",Re,U(e(j)),1)]),(n(),c(Se,{key:2}))],2),t("div",De,[t("div",{class:"progress h-3px bg-primary transition-all",style:N({width:`${(e(u)-1)/(e(D)-1)*100+1}%`})},null,4)])]),o(ve),o(ke),o(ge)],64)}}}),Je=ue(Te,[["__scopeId","data-v-f93ceb4e"]]);export{Je as default};
