function blueberryWidget(e){const s="blueberry";let l=e.skipFontSize||null,d=e.skipLatterSpacing||null,i=e.modules||null;let t=[{name:"logoModule",module:`
		<div class="${s}-logo ${s}-module">
			<a href="https://github.com/Veiron93/blueberry" target="_blank"> 
				<img class="skip-blueberry" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1Mi40NyA1NTIuNDciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTUyLjQ3IDU1Mi40NyIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQ3NC45OTMgMjk5Ljk1My0xLjY5LTEzLjYwMi0xMy42MDItMS42OTQtMTAuODE4LTguNDIyLTEwLjgxMSA4LjQxOS0xMy42MDIgMS42OS0xLjY5NCAxMy42MDItOC40MjIgMTAuODE4IDguNDE5IDEwLjgxMiAxLjY5IDEzLjYgMTMuNjAyIDEuNjk3IDEwLjgxOCA4LjQyMiAxMC44MTItOC40MTkgMTMuNjAyLTEuNjkgMS42OTQtMTMuNjA0IDguNDIyLTEwLjgxNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOTcuMDY3IDI1MS44MjItMTMuNjAyLTEuNjk0LTEwLjgxOC04LjQyMi0xMC44MTEgOC40MTktMTMuNjAyIDEuNjktMS42OTQgMTMuNjAyLTguNDIyIDEwLjgxOCA4LjQxOSAxMC44MTEgMS42OSAxMy42IDEzLjYwMiAxLjY5NyAxMC44MTggOC40MjIgMTAuODEyLTguNDE5IDEzLjYwMi0xLjY5IDEuNjk0LTEzLjYwNCA4LjQyMi0xMC44MTYtOC40MTktMTAuODExeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQwOC44NDYgMTQxLjA1MWMyNy44MTUtMzYuMDIzIDM3LjA1Mi03MC44MjcgMzkuNzY2LTg2LjI1Ni44OTQtNS4wMjQtLjQ4OS0xMC4xODMtMy43Ni0xNC4wOTUtMy4yODgtMy45MTItOC4xMjctNi4xNzEtMTMuMjM1LTYuMTcxLTg4LjUwNyAwLTE0Mi4yNDYgNDAuMzMxLTE2My42NDggMTIyLjY5My0yNi4xNDEtODEuMjMtODYuOTE5LTEyMi42OTMtMTgxLjY0Ni0xMjIuNjkzLTUuMjI3IDAtMTAuMTY3IDIuMzYtMTMuNDM3IDYuNDI0LTMuMjcxIDQuMDYzLTQuNTM1IDkuMzkxLTMuNDM5IDE0LjQ4MyAxMS4xMzQgNTEuNDk3IDQyLjM3OCA5MC44OTUgOTIuNDM3IDExOC4yOTktOTAuMSA1LjY3Ny0xNjEuODg0IDgwLjA1My0xNjEuODg0IDE3MS41NTkgMCA5NS4xOTIgNzcuNDU1IDE3Mi42NDcgMTcyLjY0NyAxNzIuNjQ3IDQ5LjgzNiAwIDk0LjQ0OC0yMS41NDkgMTI1Ljk5MS01NS40MzggMjUuMDU2IDEzLjQ1NCA1Mi43MTMgMjAuOTA5IDgxLjE4NiAyMC45MDkgOTUuMTkyIDAgMTcyLjY0Ny03Ny40NTUgMTcyLjY0Ny0xNzIuNjQ3LS4wMDEtODUuMjUzLTYyLjI3MS0xNTUuODEyLTE0My42MjUtMTY5LjcxNHptLjEyOC03MC44OTZjLTguNTg2IDI0LjcxNy0yNC40MDUgNDkuMDU3LTQ0LjQxOCA2OC44NC0yMS4wMjUgMS44ODItNDEuMzA5IDcuNDMzLTU5Ljk1NCAxNi42MjQgMTYuNjYyLTUyLjMxMSA0OS45MzEtNzkuODYzIDEwNC4zNzItODUuNDY0em0tMjk5LjIzMi0uMTAxYzY1LjM2NyA1Ljc2NiAxMDUuOTE1IDM2Ljg5IDEyNS4zMjEgOTYuMzIxLTY2LjA3NS0xOC41MjktMTA3LjM4Mi01MC4yNi0xMjUuMzIxLTk2LjMyMXptNjIuOTA1IDQxMy4zNThjLTc2LjE1NyAwLTEzOC4xMTgtNjEuOTYxLTEzOC4xMTgtMTM4LjExOHM2MS45NjEtMTM4LjExNyAxMzguMTE4LTEzOC4xMTcgMTM4LjExOCA2MS45NjEgMTM4LjExOCAxMzguMTE4LTYxLjk2MSAxMzguMTE3LTEzOC4xMTggMTM4LjExN3ptMjA3LjE3Ni0zNC41MjljLTIwLjk3NCAwLTQxLjQ2My00Ljk0LTYwLjI0Ny0xNC4xMzcgMTUuOTk2LTI2LjE3MyAyNS43MTgtNTYuNTk3IDI1LjcxOC04OS40NTEgMC01Mi44NDQtMjQuMzgtOTkuNjMyLTYxLjkwMi0xMzEuMzI3IDI1Ljg4Mi0yNS45OTggNTkuODU3LTQxLjMyIDk2LjQzMS00MS4zMiA3Ni4xNTcgMCAxMzguMTE4IDYxLjk2MSAxMzguMTE4IDEzOC4xMThzLTYxLjk2MSAxMzguMTE2LTEzOC4xMTggMTM4LjExN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
			</a>
		</div>`},{name:"fontSizeModule",module:`
		<div class="${s}-module">
			<div class="${s}-module_title">Шрифт</div>

			<div class="${s}-module_list">
				<div class="${s}_font-size" data-event="larger" title="Увеличить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${s}_font-size" data-event="reduce" title="Уменьшить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`},{name:"letterSpacingModule",module:`
		<div class="${s}-module">
			<div class="${s}-module_title">Интервал</div>

			<div class="${s}-module_list">
				<div class="${s}_letter-spacing" data-event="larger" title="Увеличить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${s}_letter-spacing" data-event="reduce" title="Уменьшить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`},{name:"imagesModule",module:`
		<div class="${s}-module">
			<div class="${s}-module_title">Изображения</div>

			<div class="${s}-module_list">
				<div class="${s}_img" data-event="status" title="Выключить изображения">Вык</div>
				<div class="${s}_img" data-event="gray" title="Чёрно-белые изображения">Ч/Б</div>
			</div>
		</div>`},{name:"themesModule",module:`
		<div class="${s}-module">
			<div class="${s}-module_title">Цветовая схема</div>

			<div class="${s}-module_list">
				<div class="${s}_theme" data-theme="white">Б/Ч</div>
				<div class="${s}_theme" data-theme="black">Ч/Б</div>
				<div class="${s}_theme" data-theme="blue">С/Ж</div>
			</div>
		</div>`},{name:"resetSettingsModule",module:`
		<div class="${s}-module">
			<div 
				class="${s}-reset-settings ${s}-module_btn"
				title="Сохранить настройки">
				Сбросить настройки
			</div>
		</div>`},{name:"offModule",module:`
		<div class="${s}-module">
			<div 
				class="${s}-btn ${s}-module_btn"
				title="Включить обычную версию сайта">
				Обычная версия
			</div>
		</div>`}],u=document.createElement("div");function o(e){e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}function a(e,t,i){var M,l,d=(i=i||{}).expires,c=("number"==typeof d&&d&&((M=new Date).setTime(M.getTime()+1e3*d),d=i.expires=M),d&&d.toUTCString&&(i.expires=d.toUTCString()),e+"="+(t=encodeURIComponent(t)));for(l in i){c+="; "+l;var s=i[l];!0!==s&&(c+="="+s)}document.cookie=c}function n(e){a(e,null,{expires:-1,path:"/"})}function g(e="white"){o("blueberry-theme")||(document.body.classList.add("theme-"+e+"__"+s),a("blueberry-theme",e,{path:"/"}))}u.id=s+"-widget",u.className=s,selectedModules=[],t.forEach(t=>{i?i.forEach(e=>{t.name==e&&selectedModules.push(t.module)}):selectedModules.push(t.module)}),u.innerHTML=selectedModules.join(""),document.body.prepend(u);{function c(e=!1){document.body.classList.add("active__bluebbery"),e&&a(M,!0,{path:"/"}),g()}function L(e){var t=o(M);if("click"==e)if(t){document.body.classList.remove("active__bluebbery");let e=document.body.className.split(" "),t=(e.forEach(e=>{e.split("__")[1]==s&&document.body.classList.remove(e),document.body.classList.length||document.body.removeAttribute("class")}),document.cookie.split(";"));t.forEach(e=>{(e=e.trim().split("=")[0]).split("-")[0]==s&&n(e)})}else c(!0);function i(e,i){e.forEach(e=>{let t=document.querySelectorAll(e);t.forEach(e=>{e.classList.toggle(i),e.classList.length||e.removeAttribute("class")})})}"load"==e&&t&&c(),l&&i(l,"skip_font-size"),d&&i(d,"skip_letter-spacing")}let e=document.querySelectorAll(".blueberry-btn"),M=s+"-state-widget";e&&e.forEach(e=>e.addEventListener("click",()=>L("click"))),o(M)&&L("load")}{function M(e){let t="img-off__blueberry",i=o(d),M=u.querySelector(".blueberry_img[data-event='status']");function l(e=!1){document.body.classList.add(t),M.textContent="Вкл",e&&a(d,"off",{path:"/"})}"load"==e&&i&&l(),"click"==e&&(i?(document.body.classList.remove(t),M.textContent="Вык",n(d)):l(!0))}function T(e){let t="img-gray__blueberry",i=o(c),M=u.querySelector(".blueberry_img[data-event='gray']");function l(e=!1){document.body.classList.add(t),M.textContent="ЦВ",e&&a(c,"off",{path:"/"})}"load"==e&&i&&l(),"click"==e&&(i?(document.body.classList.remove(t),M.textContent="Ч/Б",n(c)):l(!0))}let e=u.querySelectorAll("."+s+"_img"),d=s+"-img",c=s+"-img-gray";e&&e.forEach(e=>{var t=e.getAttribute("data-event");"status"==t?e.addEventListener("click",()=>M("click")):"gray"==t&&e.addEventListener("click",()=>T("click"))}),o(d)&&M("load"),o(c)&&T("load")}{function r(e,t=null){t=t||o(d);var i=o(d);function M(){c.forEach(e=>{document.body.classList.remove("theme-"+e+"__"+s)})}function l(e=!1){M(),document.body.classList.add("theme-"+t+"__"+s),e&&a(d,t,{path:"/"})}"load"==e&&i&&l(),"click"==e&&(i&&i!=t||!i?l(!0):(M(),n(d),g()))}let e=u.querySelectorAll("."+s+"_theme"),d=s+"-theme",c=[];e&&e.forEach(e=>{let t=e.getAttribute("data-theme");c.push(t),e.addEventListener("click",()=>r("click",t))}),o(d)&&r("load")}{let e=u.querySelector("."+s+"-reset-settings");e&&e.addEventListener("click",function(){let e=document.cookie.split(";"),t=(e.forEach(e=>{(e=e.trim().split("=")[0])!=s+"-state-widget"&&e.split("-")[0]==s&&n(e)}),document.body.className.split(" "));t.forEach(e=>{e.split("__")[1]==s&&document.body.classList.remove(e)}),g()})}{function j(e,t){function i(e){document.body.classList.add("font-size_"+e+"__"+s)}function M(e){document.body.classList.remove("font-size_"+e+"__"+s)}let l=Number(o(d));"click"==e&&("larger"==t&&((l=l||0)<5&&M(l),++l<=5&&(i(l),a(d,l,{path:"/"}))),"reduce"==t&&l&&(M(l),0<--l?(i(l),a(d,l,{path:"/"})):n(d))),"load"==e&&l&&i(l)}let e=u.querySelectorAll("."+s+"_font-size"),d=s+"-font-size";e&&(e.forEach(e=>{e.addEventListener("click",()=>j("click",e.getAttribute("data-event")))}),o(d)&&j("load"))}{function m(e,t){function i(e){document.body.classList.add("letter-spacing_"+e+"__"+s)}function M(e){document.body.classList.remove("letter-spacing_"+e+"__"+s)}let l=Number(o(d));"click"==e&&("larger"==t&&((l=l||0)<5&&M(l),++l<=5&&(i(l),a(d,l,{path:"/"}))),"reduce"==t&&l&&(M(l),0<--l?(i(l),a(d,l,{path:"/"})):n(d))),"load"==e&&l&&i(l)}let e=u.querySelectorAll("."+s+"_letter-spacing"),d=s+"-letter-spacing";return void(e&&(e.forEach(e=>{e.addEventListener("click",()=>m("click",e.getAttribute("data-event")))}),o(d)&&m("load")))}}