import{_ as H,r,a as u,l as N,m as L,o as a,c as m,e as l,w as i,v as f,t as y,i as w,b as s,n as V,d as A,q as Q,F as x,h as I,E as D,p as z,f as P,k as F,C as U,K as M,g as j}from"./index-dg0POEbG.js";import{a as S}from"./index-D4ibRccp.js";const K={class:"ai-assistant"},R={class:"text"},G=["innerHTML"],J={__name:"AiAssistant",props:{message:{type:String,required:!0}},setup(v){const g=v,n=r(!1),o=r(""),c=r("");let d=null;const _=r(!1),C=async e=>{_.value=!0,n.value=!0,o.value="",c.value="";try{o.value=await S.ask({content:g.message}),t()}catch(h){console.error("Error fetching AI answer:",h)}finally{n.value=!1}},t=()=>{let e=0;d=setInterval(()=>{e<o.value.length?(c.value+=o.value[e],e++):clearInterval(d)},20)};return(e,h)=>{const q=u("el-button"),k=u("el-card"),T=N("loading");return L((a(),m("div",K,[l(q,{type:"primary",onClick:C,loading:n.value,class:"load-button",disabled:_.value},{default:i(()=>[f(y(n.value?"正在加载...":"向AI提问"),1)]),_:1},8,["loading","disabled"]),n.value?(a(),w(k,{key:0,class:"creator_card"})):o.value?(a(),w(k,{key:1,class:"creator_card custom-scrollbar"},{default:i(()=>[s("div",R,[s("p",{innerHTML:c.value},null,8,G)])]),_:1})):V("",!0)])),[[T,n.value]])}}},B=H(J,[["__scopeId","data-v-8bb488cc"]]),O=v=>(z("data-v-3b49c521"),v=v(),P(),v),W={class:"comment-header",style:{display:"flex","justify-content":"space-between","align-items":"center"}},X=O(()=>s("h2",{style:{"margin-bottom":"20px","font-size":"20px","font-weight":"bold"}},"评论列表",-1)),Y={class:"comment-input"},Z={class:"content-list"},ee=["src"],te={class:"comment-details"},se={class:"commenter-name"},ne={class:"comment-content"},oe=20,ae=A({__name:"CommentList",props:{id:Number},setup(v){const g=r([]),n=r(0),o=r(1),c=e=>{o.value=e,C()},d=r(""),_=v,C=async()=>{try{const e=await S.getComments({page:o.value,id:_.id});e&&(g.value=e.results,n.value=e.count)}catch(e){console.error("Error fetching comments:",e)}};Q(C);const t=()=>{d.value===""?D.error("评论内容不能为空"):S.postComment({question:_.id,comment:d.value}).then(()=>{D.success("评论成功"),d.value="",o.value=1,C()})};return(e,h)=>{const q=u("el-button"),k=u("el-input"),T=u("el-popover"),$=u("el-pagination");return a(),m(x,null,[s("div",W,[X,l(T,{placement:"right",width:400,trigger:"click"},{reference:i(()=>[l(q,{style:{"margin-right":"16px"}},{default:i(()=>[f("发表评论")]),_:1})]),default:i(()=>[s("div",Y,[l(q,{type:"primary",style:{"margin-bottom":"10px"},onClick:t},{default:i(()=>[f("发表")]),_:1}),l(k,{modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=p=>d.value=p),rows:2,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])]),_:1})]),s("div",Z,[(a(!0),m(x,null,I(g.value,(p,b)=>(a(),m("div",{key:b,class:"comment"},[s("img",{src:p.author.avatar,class:"avatar"},null,8,ee),s("div",te,[s("p",se,y(p.author.username),1),s("p",ne,y(p.comment),1)])]))),128)),l($,{onCurrentChange:c,"current-page":o.value,"page-size":oe,total:n.value},null,8,["current-page","total"])])],64)}}}),E=H(ae,[["__scopeId","data-v-3b49c521"]]),le={class:"single-question-container"},ie={class:"question-header"},ce=["innerHTML"],re={class:"choices"},ue=["onClick"],de={class:"choice-content"},_e={class:"choice-label"},pe=["innerHTML"],me={class:"comment-list",style:{"margin-top":"30px"}},ve={class:"single-question-right"},he=["innerHTML"],ge=A({__name:"SingleChoice",props:{question:{}},setup(v){const g=v,n=r(null),o=r({}),c=r(!1);async function d(t){if(!c.value)try{const e=await S.checkQuestion({question_id:g.question.id,ans:t});c.value=!0,n.value=t,e.message?o.value[t]="correct":o.value[t]="incorrect"}catch(e){console.error(e)}}const _=r(null),C=F(()=>{var t,e;return((e=(t=_.value)==null?void 0:t.textContent)==null?void 0:e.trim())||""});return(t,e)=>{const h=u("el-tag"),q=u("el-divider"),k=u("el-collapse-item"),T=u("el-collapse");return a(),m("div",le,[s("div",{class:"single-question-left",ref_key:"questionContent",ref:_},[l(h,{type:"info",style:{margin:"15px 5px"}},{default:i(()=>[f("单选题")]),_:1}),(a(!0),m(x,null,I(t.question.tags,$=>(a(),w(h,{key:$.id},{default:i(()=>[f(y($.name),1)]),_:2},1024))),128)),s("h3",null,y(t.question.title),1),s("div",ie,[s("p",null,y(t.question.id)+".",1),s("div",{innerHTML:t.question.content},null,8,ce)]),s("ul",re,[(a(!0),m(x,null,I(t.question.choices,($,p)=>(a(),m("li",{key:p,class:U({selected:n.value===String.fromCharCode(65+p),correct:o.value[String.fromCharCode(65+p)]==="correct",incorrect:o.value[String.fromCharCode(65+p)]==="incorrect"}),onClick:b=>!c.value&&d(String.fromCharCode(65+p))},[s("div",de,[s("div",_e,y(String.fromCharCode(65+p))+".",1),s("div",{class:"choice-text",innerHTML:$},null,8,pe)])],10,ue))),128))]),l(q),L(s("div",me,[l(E,{id:g.question.id},null,8,["id"])],512),[[M,c.value]])],512),s("div",ve,[c.value?(a(),w(T,{key:0},{default:i(()=>[l(k,{title:"答案"},{default:i(()=>[s("div",{innerHTML:t.question.ans},null,8,he)]),_:1})]),_:1})):V("",!0),L(l(B,{message:C.value},null,8,["message"]),[[M,c.value]])])])}}}),fe=H(ge,[["__scopeId","data-v-aa50d971"]]),ye={class:"single-question-container"},Ce={class:"question-header"},qe=["innerHTML"],ke={class:"question-choices"},$e={class:"comment-list",style:{"margin-top":"30px"}},be={class:"single-question-right"},we={key:0},Te={key:1},Le=["innerHTML"],Me=A({__name:"TrueFalse",props:{question:{}},setup(v){const g=v,n=r(!1),o=r(null),c=r(null);async function d(t){try{const e=await S.checkQuestion({question_id:g.question.id,ans:t});n.value=!0,e.message?c.value=!0:c.value=!1}catch(e){console.error(e)}}const _=r(null),C=F(()=>{var t,e;return((e=(t=_.value)==null?void 0:t.textContent)==null?void 0:e.trim())||""});return(t,e)=>{const h=u("el-tag"),q=u("el-radio-button"),k=u("el-radio-group"),T=u("el-divider"),$=u("el-collapse-item"),p=u("el-collapse");return a(),m("div",ye,[s("div",{class:"single-question-left",ref_key:"questionContent",ref:_},[l(h,{type:"info",style:{margin:"15px 5px"}},{default:i(()=>[f("判断题")]),_:1}),(a(!0),m(x,null,I(t.question.tags,b=>(a(),w(h,{key:b.id},{default:i(()=>[f(y(b.id),1)]),_:2},1024))),128)),s("h3",null,y(t.question.title),1),s("div",Ce,[s("p",null,y(t.question.id)+".",1),s("div",{innerHTML:t.question.content},null,8,qe)]),s("div",ke,[l(k,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=b=>o.value=b),onChange:e[1]||(e[1]=b=>d(o.value)),disabled:n.value},{default:i(()=>[l(q,{value:"0"},{default:i(()=>[f(" 错误 ")]),_:1}),l(q,{value:"1"},{default:i(()=>[f(" 正确 ")]),_:1})]),_:1},8,["modelValue","disabled"]),L(l(h,{type:"success",style:{"margin-left":"10px","margin-top":"2px"}},{default:i(()=>[f("回答正确 ")]),_:1},512),[[M,n.value&&c.value===!0]]),L(l(h,{type:"danger",style:{"margin-left":"10px","margin-top":"2px"}},{default:i(()=>[f("回答错误 ")]),_:1},512),[[M,n.value&&c.value===!1]])]),l(T),L(s("div",$e,[l(E,{id:g.question.id},null,8,["id"])],512),[[M,n.value]])],512),s("div",be,[n.value?(a(),w(p,{key:0},{default:i(()=>[l($,{title:"答案"},{default:i(()=>[t.question.ans==="1"?(a(),m("div",we,"正确")):t.question.ans==="0"?(a(),m("div",Te,"错误")):(a(),m("div",{key:2,innerHTML:t.question.ans},null,8,Le))]),_:1})]),_:1})):V("",!0),L(l(B,{message:C.value},null,8,["message"]),[[M,n.value]])])])}}}),Se=H(Me,[["__scopeId","data-v-26ac847c"]]),xe={class:"question-detail-container"},He=A({__name:"QuestionDetail",props:{id:{}},setup(v){const g=v,n=r();return r(!0),j(async()=>{try{n.value=await S.getQuestionDetail(g.id)}catch(o){console.error("Failed to fetch question detail:",o)}}),(o,c)=>{var d,_;return a(),m("div",xe,[((d=n.value)==null?void 0:d.type)==="single_choice"?(a(),w(fe,{key:0,question:n.value},null,8,["question"])):((_=n.value)==null?void 0:_.type)==="True/False"?(a(),w(Se,{key:1,question:n.value},null,8,["question"])):V("",!0)])}}}),Ae=H(He,[["__scopeId","data-v-584cb269"]]);export{Ae as default};
