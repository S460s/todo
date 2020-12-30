(()=>{"use strict";const t=function(){const t=document.getElementById("addProjectBtn"),e=document.getElementById("cancelNewProject"),n=document.getElementById("projectForm"),o=function(){console.log("show"),n.style.cssText="display: flex",t.style.cssText="display: none"},d=function(){console.log("hide"),n.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",o),e.addEventListener("click",d)},addProject:function(t){n.addEventListener("submit",t)}}}();class e{constructor(t,e){this.title=t,this.todoList=e}}const n=function(){const t=function(t,e){JSON.parse(localStorage.getItem(e)).forEach((e=>{t.push(e)}))};return{getList:t,populateStorage:function(t,e){localStorage.setItem(e,JSON.stringify(t))},checkStorage:function(e,n){if(localStorage.getItem(n))return t(e,n),!0;e=[]}}}(),o=function(){const t=document.getElementById("projectTitleInput"),d=[];return{deleteProject:function(t){let e=d.indexOf(t);d.splice(e,1),n.populateStorage(d,"projectList")},projectList:d,handleAddProject:function(){let o=new e(t.value,[]);return d.push(o),n.populateStorage(d,"projectList"),console.table(d),o},updateProject:function(t,e){t.title=e,n.populateStorage(o.projectList,"projectList")}}}();class d{constructor(t,e,n,o){this.title=t,this.dueDate=e,this.priority=n,this.description=o,this.done=!1}}const i=function(){const t=document.getElementById("todoTitleInput"),e=document.getElementById("dateInput"),i=document.getElementById("priorities"),c=document.getElementById("todoDescInput");return{deleteTodo:function(t,e){let d=t.todoList.indexOf(e);t.todoList.splice(d,1),n.populateStorage(o.projectList,"projectList")},handleAddTodo:function(l){let r=i.options[i.selectedIndex].text,s=new d(t.value,e.value,r,c.value);return l.todoList.push(s),n.populateStorage(o.projectList,"projectList"),console.log(l.title),console.table(l.todoList),console.log("TEST"),s},handleChangeState:function(t,e){t.done=e.value,n.populateStorage(o.projectList,"projectList")},updateTodo:function(t,e,d,i,c){console.log(t),console.log(e),t.title=e,t.dueDate=d,t.priority=i,t.description=c,n.populateStorage(o.projectList,"projectList")}}}(),c=function(){const t=document.getElementById("todoList"),e=function(t,e){for(;t.childNodes.length!==e;)t.removeChild(t.lastChild)},n=function(t,e,n){let o=document.createElement("p");o.setAttribute("id","todoTitleP"),o.textContent=e.title;let c=document.createElement("p");c.setAttribute("id","todoDueDateP"),c.textContent=e.dueDate;let l=document.createElement("p");l.setAttribute("id","todoPriorityP"),l.textContent=e.priority;let r=document.createElement("p");r.setAttribute("id","editTodoBtn"),r.textContent="edit";let s=document.createElement("p");s.setAttribute("id","todoDelBtn"),s.textContent="x";let u=document.createElement("input");u.setAttribute("type","checkbox"),u.setAttribute("id","doneCheck"),u.checked=e.done,t.appendChild(u),t.appendChild(o),t.appendChild(c),t.appendChild(l),t.appendChild(r),t.appendChild(s),function(t,e,n,o){t.addEventListener("click",(()=>{i.deleteTodo(n,e),o.remove()}))}(s,e,n,t),function(t,e){e.addEventListener("change",(()=>{i.handleChangeState(t,e)}))}(e,u),d(r,t,e,n)},o=function(e,o){let d=document.createElement("div");d.setAttribute("id","todoCard"),t.appendChild(d),n(d,e,o)},d=function(t,o,d,c){t.addEventListener("click",(()=>{e(o,0);let t=document.createElement("input");t.setAttribute("id","todoTitleEdit"),t.value=d.title,t.required=!0;let l=document.createElement("input"),r=(new Date).toISOString().substr(0,10);l.setAttribute("id","todoDueDateEdit"),l.setAttribute("type","date"),l.setAttribute("min",r),l.value=d.dueDate;let s=document.createElement("select");s.setAttribute("id","todoPriorityEdit");let u=document.createElement("p");u.setAttribute("id","saveEditedTodo"),u.textContent="save";let a=document.createElement("p");a.setAttribute("id","todoDelBtn"),a.textContent="cancel";let p=document.createElement("textarea");p.setAttribute("id","todoDescription"),p.textContent=`Description: ${d.description}`,o.appendChild(t),o.appendChild(l),o.appendChild(s),["High","Medium","Low"].forEach((t=>{let e=document.createElement("option");e.textContent=`${t} Priority`,e.value=t,s.append(e)})),o.appendChild(u),o.appendChild(a),o.appendChild(p),function(t,o,d,c,l,r,s,u){o.addEventListener("click",(()=>{let o=l.value,a=r.value,p=s.value,m=u.value;console.log(o),i.updateTodo(d,o,a,p,m),e(t,0),n(t,d,c)}))}(o,u,d,c,t,l,s,p),function(t,o,d,i){t.addEventListener("click",(()=>{e(o,0),n(o,d,i)}))}(a,o,d,c)}))};return{renderTodos:function(n){e(t,0),n.todoList.forEach((t=>{o(t,n)}))},displayTodo:o}}(),l=function(){const t=document.getElementById("currentProject"),e=document.getElementById("addTodoBtn"),n=document.getElementById("todoForm"),d=document.getElementById("todoPopUp");let l;const r=function(t){t.preventDefault(),console.log(l),d.style.display="none",e.style.display="block";let o=i.handleAddTodo(l);console.log(o),c.displayTodo(o,l),n.reset()};return{startLogic:function(e){!function(e){t.textContent=e.title,l=e,c.renderTodos(l)}(e)},defaultProject:function(){t.textContent=o.projectList[0].title,l=o.projectList[0],c.renderTodos(l)},submitProjectEvent:function(){n.addEventListener("submit",r)}}}(),r=function(){const t=document.getElementById("projectSection"),e=document.getElementById("addProjectBtn"),n=function(t){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)},d=function(t,i){const c=document.createElement("p");c.setAttribute("id","projectTitle"),c.textContent=i.title;const l=document.createElement("button");l.setAttribute("id","projectEditBtn"),l.textContent="Edit";const r=document.createElement("button");r.textContent="Delete",r.setAttribute("id","deleteProjectBtn"),t.appendChild(c),t.appendChild(l),t.appendChild(r),function(t,e,n){t.addEventListener("click",(()=>{o.deleteProject(e),n.remove()}))}(r,i,t),function(t,i,c,l,r){c.addEventListener("click",(s=>{s.stopPropagation();let u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","editProjectTitleInpu"),u.setAttribute("placeholder","Project Title"),u.value=r.title,i=t.replaceChild(u,i);let a=document.createElement("button");a.setAttribute("id","saveProjectTitleBtn"),a.textContent="Save",c=t.replaceChild(a,c);let p=document.createElement("button");p.setAttribute("id","cancelEditProjectBtn"),p.textContent="Cancel",l=t.replaceChild(p,l),function(t,i,c,l){t.addEventListener("click",(()=>{i.value?(o.updateProject(c,i.value),n(l),d(l,c),e.style.display="block"):alert("Please enter a name for the project")}))}(a,u,r,t),function(t,e,o){t.addEventListener("click",(t=>{t.stopPropagation(),n(e),d(e,o)}))}(p,t,r)}))}(t,c,l,r,i)},i=function(e){const n=document.createElement("div");n.setAttribute("id","projectCard"),t.appendChild(n),d(n,e),console.log("display project, DOM project"),console.log(e),n.addEventListener("click",(()=>{l.startLogic(e)}))};return{start:function(){n(t),o.projectList.forEach((t=>{i(t)})),l.submitProjectEvent(),l.defaultProject()},displayProject:i}}(),s=function(){const t=document.getElementById("addTodoBtn"),e=document.getElementById("cancelNewTodo"),n=document.getElementById("todoForm"),o=document.getElementById("todoPopUp"),d=function(){console.log("show"),o.style.cssText="display: flex",t.style.cssText="display: none"},i=function(){console.log("hide"),o.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",d),e.addEventListener("click",i)},addTodo:function(t){n.addEventListener("submit",t)}}}();(function(){const e=document.getElementById("projectForm"),d=document.getElementById("dateInput"),i=function(t){t.preventDefault(),r.displayProject(o.handleAddProject()),e.style.cssText="display: none",addProjectBtn.style.cssText="display: block",e.reset()};return{startApp:function(){!function(){let t=(new Date).toISOString().substr(0,10);d.setAttribute("min",t)}(),n.checkStorage(o.projectList,"projectList")&&r.start(),t.startForm(),t.addProject(i),s.startForm()}}})().startApp()})();
//# sourceMappingURL=main.js.map