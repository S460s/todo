(()=>{"use strict";const t=function(){const t=document.getElementById("addProjectBtn"),e=document.getElementById("cancelNewProject"),n=document.getElementById("projectForm"),o=function(){n.style.cssText="display: flex",t.style.cssText="display: none"},d=function(){console.log("hide"),n.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",o),e.addEventListener("click",d)},addProject:function(t){n.addEventListener("submit",t)}}}();function e(t,e){this.title=t,this.todoList=e}const n=function(){const t=function(t,e){JSON.parse(localStorage.getItem(e)).forEach((e=>{t.push(e)}))};return{getList:t,populateStorage:function(t,e){localStorage.setItem(e,JSON.stringify(t))},checkStorage:function(e,n){if(localStorage.getItem(n))return t(e,n),!0;e=[]}}}(),o=function(){const t=document.getElementById("projectTitleInput"),d=[];return{deleteProject:function(t){let e=d.indexOf(t);d.splice(e,1),n.populateStorage(d,"projectList")},projectList:d,handleAddProject:function(){console.count("handleProject");let o=new e(t.value,[]);return d.push(o),n.populateStorage(d,"projectList"),o},updateProject:function(t,e){t.title=e,n.populateStorage(o.projectList,"projectList")}}}();function d(t,e,n,o){this.title=t,this.dueDate=e,this.priority=n,this.description=o,this.done=!1}const i=function(){const t=document.getElementById("todoTitleInput"),e=document.getElementById("dateInput"),i=document.getElementById("priorities"),c=document.getElementById("todoDescInput");return{deleteTodo:function(t,e){let d=t.todoList.indexOf(e);t.todoList.splice(d,1),n.populateStorage(o.projectList,"projectList")},handleAddTodo:function(r){let l=i.options[i.selectedIndex].text,s=new d(t.value,e.value,l,c.value);return r.todoList.push(s),n.populateStorage(o.projectList,"projectList"),s},handleChangeState:function(t,e){t.done=e.value,n.populateStorage(o.projectList,"projectList")},updateTodo:function(t,e,d,i,c){t.title=e,t.dueDate=d,t.priority=i,t.description=c,n.populateStorage(o.projectList,"projectList")}}}(),c=function(){const t=document.getElementById("todoList"),e=function(t,e){for(;t.childNodes.length!==e;)t.removeChild(t.lastChild)},n=function(t,e,n){let o=document.createElement("p");o.setAttribute("id","todoTitleP"),o.textContent=e.title;let c=document.createElement("p");c.setAttribute("id","todoDueDateP"),c.textContent=e.dueDate;let r=document.createElement("p");r.setAttribute("id","todoPriorityP"),r.textContent=e.priority;let l=document.createElement("button");l.setAttribute("id","editTodoBtn"),l.textContent="Edit";let s=document.createElement("button");s.setAttribute("id","todoDelBtn"),s.textContent="Delete";let u=document.createElement("input");u.setAttribute("type","checkbox"),u.setAttribute("id","doneCheck"),u.checked=e.done,t.appendChild(u),t.appendChild(o),t.appendChild(c),t.appendChild(r),t.appendChild(l),t.appendChild(s),function(t,e,n,o){t.addEventListener("click",(()=>{i.deleteTodo(n,e),o.remove()}))}(s,e,n,t),function(t,e){e.addEventListener("change",(()=>{i.handleChangeState(t,e)}))}(e,u),d(l,t,e,n)},o=function(e,o){let d=document.createElement("div");d.setAttribute("id","todoCard"),t.appendChild(d),n(d,e,o)},d=function(t,o,d,c){t.addEventListener("click",(()=>{e(o,0),o.setAttribute("id","test");let t=document.createElement("form");t.setAttribute("id","todoEditForm");let r=document.createElement("input");r.setAttribute("id","todoTitleEdit"),r.value=d.title;let l=document.createElement("input"),s=(new Date).toISOString().substr(0,10);l.setAttribute("id","todoDueDateEdit"),l.setAttribute("type","date"),l.setAttribute("min",s),l.value=d.dueDate;let u=document.createElement("select");u.setAttribute("id","todoPriorityEdit");let a=document.createElement("button");a.setAttribute("id","saveEditedTodo"),a.textContent="save";let p=document.createElement("button");p.setAttribute("id","todoDelBtn"),p.textContent="Cancel";let m=document.createElement("textarea");m.setAttribute("id","todoDescription"),m.textContent=`Description: ${d.description}`,o.appendChild(t),t.appendChild(r),t.appendChild(l),t.appendChild(u),["High","Medium","Low"].forEach((t=>{let e=document.createElement("option");e.textContent=`${t} Priority`,e.value=t,u.append(e)})),t.appendChild(a),t.appendChild(p),t.appendChild(m),function(t,o,d,c,r,l,s,u){o.addEventListener("click",(()=>{t.setAttribute("id","todoCard");let o=r.value,a=l.value,p=`${s.value} Priority`,m=u.value;i.updateTodo(d,o,a,p,m),e(t,0),n(t,d,c)}))}(o,a,d,c,r,l,u,m),function(t,o,d,i){t.addEventListener("click",(()=>{o.setAttribute("id","todoCard"),e(o,0),n(o,d,i)}))}(p,o,d,c)}))};return{renderTodos:function(n){e(t,0),n.todoList.forEach((t=>{o(t,n)}))},displayTodo:o}}(),r=function(){const t=document.getElementById("currentProject"),e=document.getElementById("addTodoBtn"),n=document.getElementById("todoForm"),d=document.getElementById("todoPopUp"),r=document.getElementById("todoList");let l;const s=function(t){t.preventDefault(),d.style.display="none",e.style.display="block";let o=i.handleAddTodo(l);c.displayTodo(o,l),n.reset()};return{selectProject:function(n){t.textContent=n.title,l=n,c.renderTodos(l),e.style.display="block"},defaultProject:function(){o.projectList[0]?(console.count("defaultProject"),t.textContent=o.projectList[0].title,l=o.projectList[0],c.renderTodos(l)):(function(t,e){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)}(r),t.innerText='Looks like there are no projects. You can create one by clicking "Add new Project"',e.style.display="none")},submitProjectEvent:function(){n.addEventListener("submit",s)}}}(),l=function(){const t=document.getElementById("projectSection"),e=function(t){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)},n=function(t,d){const i=document.createElement("p");i.setAttribute("id","projectTitle"),i.textContent=d.title;const c=document.createElement("button");c.setAttribute("id","projectEditBtn"),c.textContent="Edit";const l=document.createElement("button");l.textContent="Delete",l.setAttribute("id","deleteProjectBtn"),t.appendChild(i),t.appendChild(c),t.appendChild(l),function(t,e,n){t.addEventListener("click",(t=>{t.stopPropagation(),o.deleteProject(e),n.remove(),o.projectList[0]||r.defaultProject()}))}(l,d,t),function(t,d,i,c,l){i.addEventListener("click",(()=>{let s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","editProjectTitleInpu"),s.setAttribute("placeholder","Project Title"),s.value=l.title,d=t.replaceChild(s,d);let u=document.createElement("button");u.setAttribute("id","saveProjectTitleBtn"),u.textContent="Save",i=t.replaceChild(u,i);let a=document.createElement("button");a.setAttribute("id","cancelEditProjectBtn"),a.textContent="Cancel",c=t.replaceChild(a,c),function(t,d,i,c){t.addEventListener("click",(t=>{t.stopPropagation(),d.value?(o.updateProject(i,d.value),e(c),n(c,i),r.selectProject(i)):alert("Please enter a name for the project")}))}(u,s,l,t),function(t,o,d){t.addEventListener("click",(t=>{t.stopPropagation(),e(o),n(o,d)}))}(a,t,l),r.selectProject(l)}))}(t,i,c,l,d)},d=function(e){const o=document.createElement("div");o.setAttribute("id","projectCard"),t.appendChild(o),n(o,e),o.addEventListener("click",(()=>{r.selectProject(e)}))};return{start:function(){e(t),o.projectList.forEach((t=>{d(t)})),r.submitProjectEvent(),r.defaultProject()},displayProject:d}}(),s=function(){const t=document.getElementById("addTodoBtn"),e=document.getElementById("cancelNewTodo"),n=document.getElementById("todoForm"),o=document.getElementById("todoPopUp"),d=function(){o.style.cssText="display: flex",t.style.cssText="display: none"},i=function(){o.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",d),e.addEventListener("click",i)}}}();(function(){const e=document.getElementById("projectForm"),d=document.getElementById("dateInput"),i=function(t){t.preventDefault();let n=o.handleAddProject();l.displayProject(n),e.style.cssText="display: none",addProjectBtn.style.cssText="display: block",r.selectProject(n),e.reset()};return{startApp:function(){!function(){let t=(new Date).toISOString().substr(0,10);d.setAttribute("min",t)}(),n.checkStorage(o.projectList,"projectList")&&l.start(),t.startForm(),t.addProject(i),s.startForm(),r.defaultProject()}}})().startApp()})();
//# sourceMappingURL=main.js.map