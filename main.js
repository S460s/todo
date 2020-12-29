(()=>{"use strict";const t=function(){const t=document.getElementById("addProjectBtn"),e=document.getElementById("cancelNewProject"),n=document.getElementById("projectForm"),o=function(){console.log("show"),n.style.cssText="display: flex",t.style.cssText="display: none"},c=function(){console.log("hide"),n.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",o),e.addEventListener("click",c)},addProject:function(t){n.addEventListener("submit",t)}}}();class e{constructor(t,e){this.title=t,this.todoList=e}}const n=function(){const t=function(t,e){JSON.parse(localStorage.getItem(e)).forEach((e=>{t.push(e)}))};return{getList:t,populateStorage:function(t,e){localStorage.setItem(e,JSON.stringify(t))},checkStorage:function(e,n){if(localStorage.getItem(n))return t(e,n),!0;e=[]}}}(),o=function(){const t=document.getElementById("projectTitleInput"),c=[];return{deleteProject:function(t){let e=c.indexOf(t);c.splice(e,1),n.populateStorage(c,"projectList")},projectList:c,handleAddProject:function(){let o=new e(t.value,[]);return c.push(o),n.populateStorage(c,"projectList"),console.table(c),o},updateProject:function(t,e){t.title=e,n.populateStorage(o.projectList,"projectList")}}}();class c{constructor(t,e,n,o){this.title=t,this.dueDate=e,this.priority=n,this.description=o}}const d=function(){const t=document.getElementById("todoTitleInput"),e=document.getElementById("dateInput"),n=(document.getElementsByName("priorities"),document.getElementById("todoDescInput"));return{deleteTodo:function(t,e){let n=t.todoList.indexOf(e);t.todoList.splice(n,1)},handleAddTodo:function(o){let d=new c(t.value,e.value,"high",n.value);o.todoList.push(d),console.log(o.title),console.table(o.todoList)}}}(),l=function(){const t=document.getElementById("currentProject"),e=document.getElementById("addTodoBtn"),n=document.getElementById("todoForm"),c=document.getElementById("todoPopUp");let l;document.getElementById("cancelNewTodo"),document.getElementById("todoList");const i=function(t){t.preventDefault(),console.log(l),d.handleAddTodo(l),n.reset(),c.style.display="none",e.style.display="block"};return{startLogic:function(e){!function(e){t.textContent=e.title,l=e,console.log(l)}(e)},defaultProject:function(){l.textContent=o.projectList[0].title},submitProjectEvent:function(){n.addEventListener("submit",i)}}}(),i=function(){const t=document.getElementById("projectSection"),e=document.getElementById("addProjectBtn"),n=function(t){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)},c=function(t,d){const l=document.createElement("p");l.setAttribute("id","projectTitle"),l.textContent=d.title;const i=document.createElement("button");i.setAttribute("id","projectEditBtn"),i.textContent="Edit";const s=document.createElement("button");s.textContent="Delete",s.setAttribute("id","deleteProjectBtn"),t.appendChild(l),t.appendChild(i),t.appendChild(s),function(t,e,n){t.addEventListener("click",(()=>{o.deleteProject(e),n.remove()}))}(s,d,t),function(t,d,l,i,s){l.addEventListener("click",(r=>{r.stopPropagation();let u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","editProjectTitleInpu"),u.setAttribute("placeholder","Project Title"),u.value=s.title,d=t.replaceChild(u,d);let a=document.createElement("button");a.setAttribute("id","saveProjectTitleBtn"),a.textContent="Save",l=t.replaceChild(a,l);let p=document.createElement("button");p.setAttribute("id","cancelEditProjectBtn"),p.textContent="Cancel",i=t.replaceChild(p,i),function(t,d,l,i){t.addEventListener("click",(()=>{d.value?(o.updateProject(l,d.value),n(i),c(i,l),e.style.display="block"):alert("Please enter a name for the project")}))}(a,u,s,t),function(t,e,o){t.addEventListener("click",(t=>{t.stopPropagation(),n(e),c(e,o)}))}(p,t,s)}))}(t,l,i,s,d)},d=function(e){const n=document.createElement("div");n.setAttribute("id","projectCard"),t.appendChild(n),c(n,e),console.log("display project, DOM project"),console.log(e),n.addEventListener("click",(()=>{l.startLogic(e)}))};return{start:function(){n(t),o.projectList.forEach((t=>{d(t)})),l.submitProjectEvent()},displayProject:d}}(),s=function(){const t=document.getElementById("addTodoBtn"),e=document.getElementById("cancelNewTodo"),n=document.getElementById("todoForm"),o=document.getElementById("todoPopUp"),c=function(){console.log("show"),o.style.cssText="display: flex",t.style.cssText="display: none"},d=function(){console.log("hide"),o.style.cssText="display: none",t.style.cssText="display: block",n.reset()};return{startForm:function(){t.addEventListener("click",c),e.addEventListener("click",d)},addTodo:function(t){n.addEventListener("submit",t)}}}();(function(){const e=document.getElementById("projectForm"),c=function(t){t.preventDefault(),i.displayProject(o.handleAddProject()),e.style.cssText="display: none",addProjectBtn.style.cssText="display: block",e.reset()};return{startApp:function(){n.checkStorage(o.projectList,"projectList")&&i.start(),t.startForm(),t.addProject(c),s.startForm()}}})().startApp()})();
//# sourceMappingURL=main.js.map