(()=>{"use strict";(function(){const e=document.getElementsByClassName("menu");let t;for(t=0;t<e.length;t++)e[t].addEventListener("click",(function(){var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}))})(),function(){const e=document.getElementById("pop-up"),t=document.getElementById("projectBtn"),n=document.getElementsByClassName("close")[0];t.onclick=function(){e.style.display="block"},n.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}(),window.localStorage,localStorage.allTasks;let e=[];function t(e,t,n){return this.title=e,this.description=t,this.notes=n,e+", "+t+". "+n+"."}const n=function(n){n=new t(document.getElementById("tasknameinput").value,document.getElementById("descriptioninput").value,document.getElementById("notes").value),e.push(n),console.log(n),console.log(e)};n(),document.getElementById("addtaskbutton").addEventListener("click",(()=>{n()})),document.getElementById("today").addEventListener("click",(()=>{!function(){console.log(e);let t=0;for(t in e){const n=document.getElementById("taskContainer"),o=document.createElement("div");o.classList.add("task");const l=document.createElement("input");l.type="checkbox",console.log(e[t].title);const c=document.createElement("p");c.textContent=e[t].title;const s=document.createElement("div");s.classList.add("arrowyellow"),o.appendChild(l),o.appendChild(c),o.appendChild(s),n.appendChild(o),t++}}()}))})();