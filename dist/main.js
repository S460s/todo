(()=>{"use strict";(function(){const e=document.getElementById("addProjectBtn"),t=document.getElementById("projectPopUp"),n=document.getElementById("cancelNewProject"),c=document.getElementById("projectForm"),o=function(){t.style.cssText="display: flex"},d=function(){t.style.cssText="display: none",c.reset()};return{startForm:function(){e.addEventListener("click",o),n.addEventListener("click",d)}}})().startForm()})();