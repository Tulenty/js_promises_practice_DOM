var e=new Promise(function(e,t){var n=setTimeout(function(){t(Error("First promise was rejected in 3 seconds if not clicked"))},3e3);document.addEventListener("click",function(t){0===t.button&&(clearTimeout(n),e("First promise was resolved on a left click in the document"))})}),t=new Promise(function(e){document.addEventListener("click",function(t){(0===t.button||2===t.button)&&e("Second promise was resolved")}),document.addEventListener("contextmenu",function(t){t.preventDefault(),e("Second promise was resolved")})}),n=!1,o=!1,i=new Promise(function(e){document.addEventListener("click",function(t){0===t.button&&(n=!0),2===t.button&&(o=!0),n&&o&&(e("Third promise was resolved"),n=!1,o=!1)})}),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");n.classList.add("notification"),n.classList.add(t?"error":"success"),n.textContent=e,n.setAttribute("data-qa","notification"),document.body.appendChild(n)};e.then(function(e){return c(e)}).catch(function(e){return c(e.message,!0)}),t.then(function(e){return c(e)}),i.then(function(e){return c(e)}),document.addEventListener("contextmenu",function(e){e.preventDefault()});
//# sourceMappingURL=index.4fc03db8.js.map
