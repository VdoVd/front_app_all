/* empty css               *//* empty css                  *//* empty css                */import{u as z}from"./clockInData-ChilEIJB.js";import{a as I}from"./req-bZRZhQjY.js";import{a as v,r as p,B as j,o as N,p as O,e,w as t,F as S,i as E,v as D,u as a,n as $,f as s,t as c,g as y,N as g,m as B,j as F,M,O as T}from"./index-U8SeVnrU.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./userStore-CWKKMDdA.js";const J=["onClick"],P=v({__name:"clockInPage",setup(A){const _=z().clockIn;let d=new Date,m=p(d.getDate());console.log(`date:${JSON.stringify(m)}`);let x=d.getMonth(),k=d.getFullYear(),f=p({}),r=p([]);return j(async()=>{const u=await I();f.value=u,console.log(`clock_date:${JSON.stringify(f.value)}`),r.value=f.value.clockins.map(i=>i.createdAt.split("-")[2])}),(u,i)=>{const l=B,o=E,h=F,w=D("Calendar"),C=M,b=T;return N(),O(S,null,[e(o,null,{default:t(()=>[e(l,{span:2,style:{"font-size":"20px","font-weight":"bolder"},onClick:i[0]||(i[0]=n=>a($).back())},{default:t(()=>[s("<")]),_:1}),e(l,{span:20,style:{"font-size":"20px","font-weight":"bolder","text-align":"center"}},{default:t(()=>[s("每日打卡")]),_:1})]),_:1}),e(o,{style:{height:"10px"}}),e(o,{justify:"start",gutter:5,align:"middle"},{default:t(()=>[e(l,{span:8},{default:t(()=>[e(h,{style:{"font-weight":"bolder","font-size":"18px"}},{default:t(()=>[s("今日已打卡")]),_:1})]),_:1}),e(l,{span:2},{default:t(()=>[e(C,null,{default:t(()=>[e(w)]),_:1})]),_:1})]),_:1}),e(o,{gutter:20},{default:t(()=>[e(l,{span:6},{default:t(()=>[e(o,{justify:"start",align:"bottom",gutter:20},{default:t(()=>[e(l,{span:12,style:{"font-size":"25px","font-weight":"bolder"}},{default:t(()=>[s(c(a(_).clockinTotal),1)]),_:1}),e(l,{span:4,style:{"font-size":"13px",color:"gray"}},{default:t(()=>[s("天")]),_:1})]),_:1}),e(o,{justify:"center"},{default:t(()=>[e(l,{span:24,style:{"font-size":"13px",color:"gray"}},{default:t(()=>[s("累计打卡")]),_:1})]),_:1})]),_:1}),e(l,{span:6},{default:t(()=>[e(o,{justify:"start",align:"bottom",gutter:20},{default:t(()=>[e(l,{span:12,style:{"font-size":"25px","font-weight":"bolder"}},{default:t(()=>[s(c(a(_).clockinNumbers),1)]),_:1}),e(l,{span:4,style:{"font-size":"13px",color:"gray"}},{default:t(()=>[s("天")]),_:1})]),_:1}),e(o,{justify:"center"},{default:t(()=>[e(l,{span:24,style:{"font-size":"13px",color:"gray"}},{default:t(()=>[s("连续打卡")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{justify:"center"},{default:t(()=>[e(b,null,{"date-cell":t(({data:n})=>[y("p",{class:g(n.isSelected||a(r).indexOf(n.day.split("-")[2])!=-1?"is-selected":""),onClick:R=>console.log(`${a(r).indexOf(n.day.split("-")[2])}`)},c(n.day.split("-")[2]),11,J),y("p",{class:g(n.isSelected||a(r).indexOf(n.day.split("-")[2])!=-1?"is-selected-font":"no-selected-font")},c(n.isSelected||a(r).indexOf(n.day.split("-")[2])!=-1?"已打卡":""),3)]),header:t(({date:n})=>[e(o,{justify:"center",style:{width:"100%"}},{default:t(()=>[e(l,{span:24,style:{"text-align":"center",color:"gray",width:"100%"}},{default:t(()=>[s(c(a(k))+"年"+c(a(x))+"月 ",1)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}}),X=V(P,[["__scopeId","data-v-9762d9cb"]]);export{X as default};
