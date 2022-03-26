(()=>{const t=(t,e,r)=>({name:t,marker:e,hp:r});(()=>{const e=document.querySelector(".player-board"),r=document.querySelector(".computer-board"),n=document.querySelector(".reset-btn"),o=document.querySelector(".game-started"),a=document.querySelector(".start-btn"),m=document.querySelector(".press-start"),C=document.querySelector(".hit-text"),x=document.querySelector(".miss-text"),k=document.querySelector(".player-turn");let l=[],c=!1,d=!0,s=!1;window.addEventListener("DOMContentLoaded",(()=>{e.classList.add("disabled"),r.classList.add("disabled")}));const u=()=>{a.addEventListener("click",(t=>{t.preventDefault(),c||(c=!0,e.classList.remove("disabled"),r.classList.remove("disabled"),o.textContent="Game Started!",k.textContent="Player 1 Turn",m.style.visibility="hidden",a.classList.add("disabled"))}))};(()=>{const e=t("Player","X",19),r=t("Computer","O",19);l.push(e),l.push(r)})(),((t,r)=>{for(let t=0;t<100;t++){const t=document.createElement("div");t.setAttribute("class","player-grid"),e.appendChild(t)}})(),((t,e)=>{for(let t=0;t<100;t++){const t=document.createElement("div");t.setAttribute("class","computer-grid"),r.appendChild(t)}})(),(()=>{const t=document.querySelectorAll(".computer-grid"),e=document.querySelector(".win"),r=document.querySelector(".game-started");t.forEach((t=>{t.addEventListener("click",(()=>{if(d&&!s)if(t.textContent===l[1].marker)t.style.backgroundColor="red",t.textContent=1,k.textContent="Player 2 Turn",y(),l[1].hp--,console.log(l[1].hp),d=!1,s=!0,0===l[1].hp&&(e.textContent="You Win!",r.style.visibility="hidden",g());else{if("1"===t.textContent)return;t.style.backgroundColor="blue",x.textContent="MISSED!",k.textContent="Player 2 Turn",setTimeout((()=>{x.textContent=""}),1e3),d=!1,s=!0}}))}))})(),(()=>{const t=document.querySelectorAll(".player-grid"),e=document.querySelector(".lost"),r=document.querySelector(".game-started");t.forEach((t=>{t.addEventListener("click",(()=>{if(s)if(t.textContent===l[0].marker)t.style.backgroundColor="red",t.textContent=1,k.textContent="Player 1 Turn",i(),l[0].hp--,console.log(l[0].hp),s=!1,d=!0,console.log(s,d),0===l[0].hp&&(e.textContent="You Lost!",r.style.visibility="hidden",g());else{if("1"===t.textContent)return;t.style.backgroundColor="blue",x.textContent="MISSED!",k.textContent="Player 1 Turn",setTimeout((()=>{x.textContent=""}),1e3),s=!1,d=!0}}))}))})();const i=()=>{C.textContent="PLAYER SHIP HIT!",setTimeout((()=>{C.textContent=""}),1500)},y=()=>{C.textContent="ENEMY SHIP HIT!",setTimeout((()=>{C.textContent=""}),1500)};n.addEventListener("click",(()=>{console.log("refreshed"),window.location.reload()}));const g=()=>{c=!1,e.classList.add("disabled"),r.classList.add("disabled"),a.classList.add("disabled")},b=()=>Math.floor(4*Math.random());(t=>{const e=document.querySelector(".random-btn"),r=document.querySelectorAll(".instruct");e.addEventListener("click",(()=>{let t=b();console.log(t),0===t?(q(),v(),u(),h(e),S(),p(r)):1===t?(f(),A(),u(),h(e),S(),p(r)):2===t?(L(),T(),u(),h(e),S(),p(r)):3===t&&(E(),P(),u(),h(e),S(),p(r))}))})(b());const S=()=>{document.querySelector(".press-start").textContent="Press Start Button"},p=t=>{t.forEach((t=>{t.style.visibility="hidden"}))},h=t=>{t.classList.add("disabled")},q=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[2].textContent=l[0].marker,t[12].textContent=l[0].marker,t[22].textContent=l[0].marker,t[32].textContent=l[0].marker,t[42].textContent=l[0].marker,t[58].textContent=l[0].marker,t[57].textContent=l[0].marker,t[56].textContent=l[0].marker,t[55].textContent=l[0].marker,t[96].textContent=l[0].marker,t[86].textContent=l[0].marker,t[76].textContent=l[0].marker,t[80].textContent=l[0].marker,t[81].textContent=l[0].marker,t[82].textContent=l[0].marker,t[25].textContent=l[0].marker,t[26].textContent=l[0].marker,t[38].textContent=l[0].marker,t[39].textContent=l[0].marker,t[e].textContent===l[0].marker&&(t[e].style.backgroundColor="gray")},f=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[17].textContent=l[0].marker,t[27].textContent=l[0].marker,t[37].textContent=l[0].marker,t[47].textContent=l[0].marker,t[57].textContent=l[0].marker,t[99].textContent=l[0].marker,t[89].textContent=l[0].marker,t[79].textContent=l[0].marker,t[69].textContent=l[0].marker,t[12].textContent=l[0].marker,t[13].textContent=l[0].marker,t[14].textContent=l[0].marker,t[73].textContent=l[0].marker,t[74].textContent=l[0].marker,t[75].textContent=l[0].marker,t[52].textContent=l[0].marker,t[53].textContent=l[0].marker,t[40].textContent=l[0].marker,t[50].textContent=l[0].marker,t[e].textContent===l[0].marker&&(t[e].style.backgroundColor="gray")},L=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[73].textContent=l[0].marker,t[74].textContent=l[0].marker,t[75].textContent=l[0].marker,t[76].textContent=l[0].marker,t[77].textContent=l[0].marker,t[15].textContent=l[0].marker,t[16].textContent=l[0].marker,t[17].textContent=l[0].marker,t[18].textContent=l[0].marker,t[20].textContent=l[0].marker,t[21].textContent=l[0].marker,t[22].textContent=l[0].marker,t[71].textContent=l[0].marker,t[61].textContent=l[0].marker,t[51].textContent=l[0].marker,t[46].textContent=l[0].marker,t[47].textContent=l[0].marker,t[95].textContent=l[0].marker,t[96].textContent=l[0].marker,t[e].textContent===l[0].marker&&(t[e].style.backgroundColor="gray")},E=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[65].textContent=l[0].marker,t[66].textContent=l[0].marker,t[67].textContent=l[0].marker,t[68].textContent=l[0].marker,t[69].textContent=l[0].marker,t[10].textContent=l[0].marker,t[20].textContent=l[0].marker,t[30].textContent=l[0].marker,t[40].textContent=l[0].marker,t[51].textContent=l[0].marker,t[52].textContent=l[0].marker,t[53].textContent=l[0].marker,t[15].textContent=l[0].marker,t[16].textContent=l[0].marker,t[17].textContent=l[0].marker,t[22].textContent=l[0].marker,t[32].textContent=l[0].marker,t[90].textContent=l[0].marker,t[91].textContent=l[0].marker,t[e].textContent===l[0].marker&&(t[e].style.backgroundColor="gray")},v=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[1].textContent=l[1].marker,t[2].textContent=l[1].marker,t[3].textContent=l[1].marker,t[4].textContent=l[1].marker,t[5].textContent=l[1].marker,t[10].textContent=l[1].marker,t[20].textContent=l[1].marker,t[30].textContent=l[1].marker,t[40].textContent=l[1].marker,t[55].textContent=l[1].marker,t[56].textContent=l[1].marker,t[57].textContent=l[1].marker,t[70].textContent=l[1].marker,t[71].textContent=l[1].marker,t[72].textContent=l[1].marker,t[78].textContent=l[1].marker,t[79].textContent=l[1].marker,t[18].textContent=l[1].marker,t[28].textContent=l[1].marker,t[e].textContent===l[1].marker&&(t[e].style.backgroundColor="gray")},A=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[15].textContent=l[1].marker,t[25].textContent=l[1].marker,t[35].textContent=l[1].marker,t[45].textContent=l[1].marker,t[55].textContent=l[1].marker,t[31].textContent=l[1].marker,t[41].textContent=l[1].marker,t[51].textContent=l[1].marker,t[61].textContent=l[1].marker,t[75].textContent=l[1].marker,t[76].textContent=l[1].marker,t[77].textContent=l[1].marker,t[80].textContent=l[1].marker,t[81].textContent=l[1].marker,t[82].textContent=l[1].marker,t[8].textContent=l[1].marker,t[9].textContent=l[1].marker,t[94].textContent=l[1].marker,t[95].textContent=l[1].marker,t[e].textContent===l[1].marker&&(t[e].style.backgroundColor="gray")},T=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[25].textContent=l[1].marker,t[26].textContent=l[1].marker,t[27].textContent=l[1].marker,t[28].textContent=l[1].marker,t[29].textContent=l[1].marker,t[55].textContent=l[1].marker,t[65].textContent=l[1].marker,t[75].textContent=l[1].marker,t[85].textContent=l[1].marker,t[41].textContent=l[1].marker,t[42].textContent=l[1].marker,t[43].textContent=l[1].marker,t[70].textContent=l[1].marker,t[80].textContent=l[1].marker,t[90].textContent=l[1].marker,t[1].textContent=l[1].marker,t[2].textContent=l[1].marker,t[89].textContent=l[1].marker,t[99].textContent=l[1].marker,t[e].textContent===l[1].marker&&(t[e].style.backgroundColor="gray")},P=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[15].textContent=l[1].marker,t[25].textContent=l[1].marker,t[35].textContent=l[1].marker,t[45].textContent=l[1].marker,t[55].textContent=l[1].marker,t[95].textContent=l[1].marker,t[96].textContent=l[1].marker,t[97].textContent=l[1].marker,t[98].textContent=l[1].marker,t[49].textContent=l[1].marker,t[59].textContent=l[1].marker,t[69].textContent=l[1].marker,t[27].textContent=l[1].marker,t[28].textContent=l[1].marker,t[29].textContent=l[1].marker,t[1].textContent=l[1].marker,t[11].textContent=l[1].marker,t[62].textContent=l[1].marker,t[72].textContent=l[1].marker,t[e].textContent===l[1].marker&&(t[e].style.backgroundColor="gray")}})()})();