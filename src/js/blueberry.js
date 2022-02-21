document.addEventListener('DOMContentLoaded', function(){

	let widgetName = "blueberry";

///////////////////////// КОМПОНЕНТЫ ПАНЕЛИ /////////////////////////

	// логотип
	let logoModule = `
		<div class="${widgetName}-logo ${widgetName}-module">
			<a href="https://github.com/Veiron93/blueberry" target="_blank"> 
				<img class="skip-blueberry" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1Mi40NyA1NTIuNDciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTUyLjQ3IDU1Mi40NyIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQ3NC45OTMgMjk5Ljk1My0xLjY5LTEzLjYwMi0xMy42MDItMS42OTQtMTAuODE4LTguNDIyLTEwLjgxMSA4LjQxOS0xMy42MDIgMS42OS0xLjY5NCAxMy42MDItOC40MjIgMTAuODE4IDguNDE5IDEwLjgxMiAxLjY5IDEzLjYgMTMuNjAyIDEuNjk3IDEwLjgxOCA4LjQyMiAxMC44MTItOC40MTkgMTMuNjAyLTEuNjkgMS42OTQtMTMuNjA0IDguNDIyLTEwLjgxNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOTcuMDY3IDI1MS44MjItMTMuNjAyLTEuNjk0LTEwLjgxOC04LjQyMi0xMC44MTEgOC40MTktMTMuNjAyIDEuNjktMS42OTQgMTMuNjAyLTguNDIyIDEwLjgxOCA4LjQxOSAxMC44MTEgMS42OSAxMy42IDEzLjYwMiAxLjY5NyAxMC44MTggOC40MjIgMTAuODEyLTguNDE5IDEzLjYwMi0xLjY5IDEuNjk0LTEzLjYwNCA4LjQyMi0xMC44MTYtOC40MTktMTAuODExeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQwOC44NDYgMTQxLjA1MWMyNy44MTUtMzYuMDIzIDM3LjA1Mi03MC44MjcgMzkuNzY2LTg2LjI1Ni44OTQtNS4wMjQtLjQ4OS0xMC4xODMtMy43Ni0xNC4wOTUtMy4yODgtMy45MTItOC4xMjctNi4xNzEtMTMuMjM1LTYuMTcxLTg4LjUwNyAwLTE0Mi4yNDYgNDAuMzMxLTE2My42NDggMTIyLjY5My0yNi4xNDEtODEuMjMtODYuOTE5LTEyMi42OTMtMTgxLjY0Ni0xMjIuNjkzLTUuMjI3IDAtMTAuMTY3IDIuMzYtMTMuNDM3IDYuNDI0LTMuMjcxIDQuMDYzLTQuNTM1IDkuMzkxLTMuNDM5IDE0LjQ4MyAxMS4xMzQgNTEuNDk3IDQyLjM3OCA5MC44OTUgOTIuNDM3IDExOC4yOTktOTAuMSA1LjY3Ny0xNjEuODg0IDgwLjA1My0xNjEuODg0IDE3MS41NTkgMCA5NS4xOTIgNzcuNDU1IDE3Mi42NDcgMTcyLjY0NyAxNzIuNjQ3IDQ5LjgzNiAwIDk0LjQ0OC0yMS41NDkgMTI1Ljk5MS01NS40MzggMjUuMDU2IDEzLjQ1NCA1Mi43MTMgMjAuOTA5IDgxLjE4NiAyMC45MDkgOTUuMTkyIDAgMTcyLjY0Ny03Ny40NTUgMTcyLjY0Ny0xNzIuNjQ3LS4wMDEtODUuMjUzLTYyLjI3MS0xNTUuODEyLTE0My42MjUtMTY5LjcxNHptLjEyOC03MC44OTZjLTguNTg2IDI0LjcxNy0yNC40MDUgNDkuMDU3LTQ0LjQxOCA2OC44NC0yMS4wMjUgMS44ODItNDEuMzA5IDcuNDMzLTU5Ljk1NCAxNi42MjQgMTYuNjYyLTUyLjMxMSA0OS45MzEtNzkuODYzIDEwNC4zNzItODUuNDY0em0tMjk5LjIzMi0uMTAxYzY1LjM2NyA1Ljc2NiAxMDUuOTE1IDM2Ljg5IDEyNS4zMjEgOTYuMzIxLTY2LjA3NS0xOC41MjktMTA3LjM4Mi01MC4yNi0xMjUuMzIxLTk2LjMyMXptNjIuOTA1IDQxMy4zNThjLTc2LjE1NyAwLTEzOC4xMTgtNjEuOTYxLTEzOC4xMTgtMTM4LjExOHM2MS45NjEtMTM4LjExNyAxMzguMTE4LTEzOC4xMTcgMTM4LjExOCA2MS45NjEgMTM4LjExOCAxMzguMTE4LTYxLjk2MSAxMzguMTE3LTEzOC4xMTggMTM4LjExN3ptMjA3LjE3Ni0zNC41MjljLTIwLjk3NCAwLTQxLjQ2My00Ljk0LTYwLjI0Ny0xNC4xMzcgMTUuOTk2LTI2LjE3MyAyNS43MTgtNTYuNTk3IDI1LjcxOC04OS40NTEgMC01Mi44NDQtMjQuMzgtOTkuNjMyLTYxLjkwMi0xMzEuMzI3IDI1Ljg4Mi0yNS45OTggNTkuODU3LTQxLjMyIDk2LjQzMS00MS4zMiA3Ni4xNTcgMCAxMzguMTE4IDYxLjk2MSAxMzguMTE4IDEzOC4xMThzLTYxLjk2MSAxMzguMTE2LTEzOC4xMTggMTM4LjExN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
			</a>
		</div>`;

	// размер шрифта
	let fontSizeModule = `
		<div class="${widgetName}-module">
			<div class="${widgetName}-module_title">Шрифт</div>

			<div class="${widgetName}-module_list">
				<div class="${widgetName}_font-size" data-event="larger" title="Увеличить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${widgetName}_font-size" data-event="reduce" title="Уменьшить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`;

	// интервал
	let letterSpacingModule = `
		<div class="${widgetName}-module">
			<div class="${widgetName}-module_title">Интервал</div>

			<div class="${widgetName}-module_list">
				<div class="${widgetName}_letter-spacing" data-event="larger" title="Увеличить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${widgetName}_letter-spacing" data-event="reduce" title="Уменьшить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`;

	// изображения
	// функционал модуля [1. вкл-выл изображения, 2. Чёрно-белые изображения]
	let imagesModule = `
		<div class="${widgetName}-module">
			<div class="${widgetName}-module_title">Изображения</div>

			<div class="${widgetName}-module_list">
				<div class="${widgetName}_img" data-event="status" title="Выключить изображения">Вык</div>
				<div class="${widgetName}_img" data-event="gray" title="Чёрно-белые изображения">Ч/Б</div>
			</div>
		</div>`;

	// темы
	// список тем [1. Бело-чёрная, 2. Чёрно-белая, 3. Сине-желтая]
	let themesModule = `
		<div class="${widgetName}-module">
			<div class="${widgetName}-module_title">Цветовая схема</div>

			<div class="${widgetName}-module_list">
				<div class="${widgetName}_theme" data-theme="white">Б/Ч</div>
				<div class="${widgetName}_theme" data-theme="black">Ч/Б</div>
				<div class="${widgetName}_theme" data-theme="blue">С/Ж</div>
			</div>
		</div>`;

	// сброс настроек
	let resetSettingsModule = `
		<div class="${widgetName}-reset-settings ${widgetName}-module" title="Сохранить настройки">
			<div class="${widgetName}-module_btn">Сбросить настройки</div>
		</div>`;

	// выключить
	let offModule = `
		<div class="${widgetName}-btn ${widgetName}-module" title="Включить обычную версию сайта">
			<div class="${widgetName}-module_btn">Обычная версия</div>
		</div>`;


	///////////////////////// ИНИЦИАЛИЗАЦИЯ ВИДЖЕТА /////////////////////////

	let blueberryWidget = document.createElement('div');
		blueberryWidget.id = widgetName + '-widget';
		blueberryWidget.className = widgetName;

		// список модулей, включенных в панель
		blueberryWidget.innerHTML = [
			logoModule, 
			fontSizeModule, 
			letterSpacingModule, 
			imagesModule, 
			themesModule, 
			resetSettingsModule, 
			offModule
		].join('');

	document.body.prepend(blueberryWidget);



///////////////////////// ФУНКЦИИ ДЛЯ РАБОТЫ С COOKIE /////////////////////////

	// получение cookie
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	// создание cookie
	function setCookie(name, value, props) {

		props = props || {}

		var exp = props.expires;

		if (typeof exp == "number" && exp) {
			var d = new Date();
			d.setTime(d.getTime() + exp*1000);
			exp = props.expires = d;
		}

		if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

			value = encodeURIComponent(value);

		var updatedCookie = name + "=" + value;

		for(var propName in props){
			updatedCookie += "; " + propName;
			var propValue = props[propName];
			if(propValue !== true){ updatedCookie += "=" + propValue }
		}

		document.cookie = updatedCookie
	}

	// удаление cookie
	function deleteCookie(name) {
	    setCookie(name, null, { expires: -1 })
	}


///////////////////////// СОСТОЯНИЕ ПАНЕЛИ /////////////////////////

	function moduleStatusBlueberry(typeEvent){

		let moduleStatusCookie = getCookie("moduleStatus-" + widgetName);

		function openBlueberry(cookie = false){

			blueberryWidget.classList.add('active');
			document.body.classList.add('active-' + widgetName);

			if (cookie) setCookie("moduleStatus-" + widgetName, "active", {});
		}

		function closeBlueberry(){

			// УДАЛЕНИЕ КЛАССОВ
			// статус панели
			blueberryWidget.classList.remove('active');

			// удаление классов которые относятся к blueberry с body 
			let classesBody = document.body.className.split(' ');

			classesBody.forEach( function(e) {
				
				let arrClass = e.split('-');

				if(arrClass[arrClass.length - 1] == widgetName){
					document.body.classList.remove(e);
				}
			});	
			
			// УДАЛЕНИЕ COOKIE
			let cookies = document.cookie.split(';');

			cookies.forEach( function(e) {

				let cookieArr = e.split(/-|=/);

				if(cookieArr[cookieArr.length - 2] == widgetName){

					let nameCookie = cookieArr.splice(0,2).join('-');
					deleteCookie(nameCookie);
				}
			});
		}


		if(typeEvent == 'load'){
			if (moduleStatusCookie == "active") openBlueberry();
		}else if(typeEvent == 'click'){
			moduleStatusCookie == "active" ? closeBlueberry() : openBlueberry(true);
		}
	}

	// находит все кнопки на странице для открытия и закрытия модуля
	let btnsBlueberry = document.querySelectorAll(".blueberry-btn");

	if(btnsBlueberry){
		btnsBlueberry.forEach(btn => btn.addEventListener('click', ()=> moduleStatusBlueberry('click')))
	}






///////////////////////// МОДУЛЬ - ИЗОБРАЖЕНИЯ /////////////////////////

	function imgMobuleBlueberry(){

		// вкл-вык изображения
		function imgOff(typeEvent){

			let className = 'img-off__blueberry',
				state = getCookie("img-"+ widgetName),
				btn = blueberryWidget.querySelector(".blueberry_img[data-event='status']")

				
			// вык
			function off(addCookie = false){
				document.body.classList.add(className);
				btn.textContent = "Вкл";

				if(addCookie) setCookie("img-"+ widgetName, 'off', {});
			}
	
			// вкл
			function on(){
				document.body.classList.remove(className);
				btn.textContent = "Вык";

				deleteCookie("img-"+ widgetName);
			}
	
			if(typeEvent == 'load' && state) off()
			
			if(typeEvent == 'click'){
				(state) ? on() : off(true)
			}
		}


		// чёрно-белые изображения
		function imgGray(typeEvent){

			let className = 'img-gray__blueberry',
				state = getCookie("img-gray-"+ widgetName),
				btn = blueberryWidget.querySelector(".blueberry_img[data-event='gray']")

				
			function gray(addCookie = false){
				document.body.classList.add(className);
				btn.textContent = "ЦВ";

				if(addCookie) setCookie("img-gray-"+ widgetName, 'off', {});
			}
	
			function color(){
				document.body.classList.remove(className);
				btn.textContent = "Ч/Б";

				deleteCookie("img-gray-"+ widgetName);
			}
	
			if(typeEvent == 'load' && state) gray()
			
			if(typeEvent == 'click'){
				(state) ? color() : gray(true)
			}
		}

		
		let btns = blueberryWidget.querySelectorAll('.' + widgetName + '_img')

		if(btns){

			btns.forEach(btn => {

				let type = btn.getAttribute('data-event')

				if(type == 'status'){
					btn.addEventListener('click', () => imgOff('click'))
				}else if(type == 'gray'){
					btn.addEventListener('click', () => imgGray('click'))
				}
			})
		}

		// запуск при загрузке страницы
		if (getCookie("img-"+ widgetName)) imgOff('load')
		if (getCookie("img-gray-"+ widgetName)) imgGray('load')
	}

	imgMobuleBlueberry()

	

// ///////////////////////// МОДУЛЬ - ТЕМА /////////////////////////

	function themesMobuleBlueberry(){

		function selectTheme(typeEvent, theme = null){

			//console.log(theme)

			let state = getCookie("theme-"+ widgetName)

			if(theme){
				theme = theme.getAttribute('data-theme')
			}else{
				theme = getCookie("theme-" + widgetName)
			}

			function clearThemes(){
				themes.forEach(theme =>{
					document.body.classList.remove('theme-' + theme + '__' + widgetName);
				})
			}


			// вкл
			function on(addCookie = false){

				clearThemes()
				document.body.classList.add('theme-' + theme + '__' + widgetName);

				if(addCookie){
					setCookie("theme-" + widgetName, theme, {});
				}
			}

			// вык
			function off(){
				clearThemes()
				deleteCookie("theme-" + widgetName);
			}


			if(typeEvent == 'load' && state) on()

			if(typeEvent == 'click'){

				if(state){
					state == theme ? off() : on(true)
				}else{
					on(true)
				}
			}
		}

		
		let btns = document.querySelectorAll('.blueberry_theme'),
			themes = []

		if(btns){
			btns.forEach(btn => {
				themes.push(btn.getAttribute('data-theme'))
				btn.addEventListener('click', () => selectTheme('click', btn))
			})
		}

		// запуск при загрузке страницы
		if (getCookie("theme-" + widgetName)) selectTheme('load')
	}

	themesMobuleBlueberry()

// 	function themesBlueberry(typeEvent, idBtn){

// 		let themeCookie = getCookie("theme-" + widgetName);

// 		if(typeEvent == 'load'){

// 			document.body.classList.add(themeCookie);

// 		}else if(typeEvent == 'click'){

// 			const classesBtn = ["white_theme-blueberry", "black_theme-blueberry", "blue_theme-blueberry"];

// 			document.body.classList.remove(...classesBtn);
// 			document.body.classList.add(idBtn);

// 			setCookie("theme-" + widgetName, idBtn, {});
// 		}
// 	}


// 	let btnsThemeBlueberry = document.querySelectorAll('.btn_theme-blueberry');

// 	btnsThemeBlueberry.forEach((e) => {
// 		e.addEventListener('click', function(){
// 			themesBlueberry('click', this.id);
// 		});
// 	});


///////////////////////// МОДУЛЬ - СБРОСИТЬ НАСТРОЙКИ /////////////////////////
	
function resetSettingsMobuleBlueberry(){

	function reset(){

		// удаление cookies
		let cookies = document.cookie.split(';');

		cookies.forEach( function(e) {

			let cookieArr = e.split(/-|=/);

			if(cookieArr[0].trim() != "moduleStatus" && cookieArr[cookieArr.length - 2] == widgetName){

				let nameCookie = cookieArr.splice(0,2).join('-');
				deleteCookie(nameCookie);
			}
		});

		// удаление классов с body
		let classesBody = document.body.className.split(' ');

		classesBody.forEach( function(e) {

			let arrClass = e.split('-');

			if(arrClass[0] != "active" && arrClass[1] == widgetName){
				document.body.classList.remove(e);
			}
		});
	}

	let btnResetSettings = blueberryWidget.querySelector(widgetName + '-reset-settings')

	if(btnResetSettings){
		btnResetSettings.addEventListener('click', reset);
	}
}

resetSettingsMobuleBlueberry()



///////////////////////// ПРИ ЗАГРУЗКЕ СТРАНИЦЫ /////////////////////////

	// состояние панели
	if(getCookie("moduleStatus-" + widgetName) == 'active'){
		moduleStatusBlueberry('load');
	};

	// вкл-выкл изображения
	// if(getCookie('img-' + widgetName)){
	// 	imgOnOffBlueberry('load');
	// };

	// // чб изображения
	// if(getCookie('imgGray-' + widgetName)){
	// 	imgGrayBlueberry('load');
	// };

	// // чб изображения
	// if(getCookie('theme-' + widgetName)){
	// 	themesBlueberry('load');
	// };

})








