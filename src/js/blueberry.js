// document.addEventListener('DOMContentLoaded', function(){

// 	new blueberryWidget({
// 		modules: ['fontSizeModule', 'letterSpacingModule', 'imagesModule', 'themesModule', 'resetSettingsModule', 'offModule'],
// 		skipFontSize: ['.heading-1', '.heading-5', '.link a'],
// 		//skipLatterSpacing: '.fffff .tyt .ewe'
// 	});
// });


function blueberryWidget(options){

	const WIDGET_NAME = "blueberry";

	let skipFontSize = options.skipFontSize || null,
		skipLatterSpacing = options.skipLatterSpacing || null,
		modulesUsesWidget = options.modules || null;

	///////////////////////// КОМПОНЕНТЫ ПАНЕЛИ /////////////////////////

	// логотип
	let logoModule = `
		<div class="${WIDGET_NAME}-logo ${WIDGET_NAME}-module">
			<a href="https://github.com/Veiron93/blueberry" target="_blank"> 
				<img class="skip-blueberry" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1Mi40NyA1NTIuNDciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTUyLjQ3IDU1Mi40NyIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQ3NC45OTMgMjk5Ljk1My0xLjY5LTEzLjYwMi0xMy42MDItMS42OTQtMTAuODE4LTguNDIyLTEwLjgxMSA4LjQxOS0xMy42MDIgMS42OS0xLjY5NCAxMy42MDItOC40MjIgMTAuODE4IDguNDE5IDEwLjgxMiAxLjY5IDEzLjYgMTMuNjAyIDEuNjk3IDEwLjgxOCA4LjQyMiAxMC44MTItOC40MTkgMTMuNjAyLTEuNjkgMS42OTQtMTMuNjA0IDguNDIyLTEwLjgxNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOTcuMDY3IDI1MS44MjItMTMuNjAyLTEuNjk0LTEwLjgxOC04LjQyMi0xMC44MTEgOC40MTktMTMuNjAyIDEuNjktMS42OTQgMTMuNjAyLTguNDIyIDEwLjgxOCA4LjQxOSAxMC44MTEgMS42OSAxMy42IDEzLjYwMiAxLjY5NyAxMC44MTggOC40MjIgMTAuODEyLTguNDE5IDEzLjYwMi0xLjY5IDEuNjk0LTEzLjYwNCA4LjQyMi0xMC44MTYtOC40MTktMTAuODExeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQwOC44NDYgMTQxLjA1MWMyNy44MTUtMzYuMDIzIDM3LjA1Mi03MC44MjcgMzkuNzY2LTg2LjI1Ni44OTQtNS4wMjQtLjQ4OS0xMC4xODMtMy43Ni0xNC4wOTUtMy4yODgtMy45MTItOC4xMjctNi4xNzEtMTMuMjM1LTYuMTcxLTg4LjUwNyAwLTE0Mi4yNDYgNDAuMzMxLTE2My42NDggMTIyLjY5My0yNi4xNDEtODEuMjMtODYuOTE5LTEyMi42OTMtMTgxLjY0Ni0xMjIuNjkzLTUuMjI3IDAtMTAuMTY3IDIuMzYtMTMuNDM3IDYuNDI0LTMuMjcxIDQuMDYzLTQuNTM1IDkuMzkxLTMuNDM5IDE0LjQ4MyAxMS4xMzQgNTEuNDk3IDQyLjM3OCA5MC44OTUgOTIuNDM3IDExOC4yOTktOTAuMSA1LjY3Ny0xNjEuODg0IDgwLjA1My0xNjEuODg0IDE3MS41NTkgMCA5NS4xOTIgNzcuNDU1IDE3Mi42NDcgMTcyLjY0NyAxNzIuNjQ3IDQ5LjgzNiAwIDk0LjQ0OC0yMS41NDkgMTI1Ljk5MS01NS40MzggMjUuMDU2IDEzLjQ1NCA1Mi43MTMgMjAuOTA5IDgxLjE4NiAyMC45MDkgOTUuMTkyIDAgMTcyLjY0Ny03Ny40NTUgMTcyLjY0Ny0xNzIuNjQ3LS4wMDEtODUuMjUzLTYyLjI3MS0xNTUuODEyLTE0My42MjUtMTY5LjcxNHptLjEyOC03MC44OTZjLTguNTg2IDI0LjcxNy0yNC40MDUgNDkuMDU3LTQ0LjQxOCA2OC44NC0yMS4wMjUgMS44ODItNDEuMzA5IDcuNDMzLTU5Ljk1NCAxNi42MjQgMTYuNjYyLTUyLjMxMSA0OS45MzEtNzkuODYzIDEwNC4zNzItODUuNDY0em0tMjk5LjIzMi0uMTAxYzY1LjM2NyA1Ljc2NiAxMDUuOTE1IDM2Ljg5IDEyNS4zMjEgOTYuMzIxLTY2LjA3NS0xOC41MjktMTA3LjM4Mi01MC4yNi0xMjUuMzIxLTk2LjMyMXptNjIuOTA1IDQxMy4zNThjLTc2LjE1NyAwLTEzOC4xMTgtNjEuOTYxLTEzOC4xMTgtMTM4LjExOHM2MS45NjEtMTM4LjExNyAxMzguMTE4LTEzOC4xMTcgMTM4LjExOCA2MS45NjEgMTM4LjExOCAxMzguMTE4LTYxLjk2MSAxMzguMTE3LTEzOC4xMTggMTM4LjExN3ptMjA3LjE3Ni0zNC41MjljLTIwLjk3NCAwLTQxLjQ2My00Ljk0LTYwLjI0Ny0xNC4xMzcgMTUuOTk2LTI2LjE3MyAyNS43MTgtNTYuNTk3IDI1LjcxOC04OS40NTEgMC01Mi44NDQtMjQuMzgtOTkuNjMyLTYxLjkwMi0xMzEuMzI3IDI1Ljg4Mi0yNS45OTggNTkuODU3LTQxLjMyIDk2LjQzMS00MS4zMiA3Ni4xNTcgMCAxMzguMTE4IDYxLjk2MSAxMzguMTE4IDEzOC4xMThzLTYxLjk2MSAxMzguMTE2LTEzOC4xMTggMTM4LjExN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" />
			</a>
		</div>`;

	// размер шрифта
	let fontSizeModule = `
		<div class="${WIDGET_NAME}-module">
			<div class="${WIDGET_NAME}-module_title">Шрифт</div>

			<div class="${WIDGET_NAME}-module_list">
				<div class="${WIDGET_NAME}_font-size" data-event="larger" title="Увеличить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${WIDGET_NAME}_font-size" data-event="reduce" title="Уменьшить шрифт">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`;

	// интервал
	let letterSpacingModule = `
		<div class="${WIDGET_NAME}-module">
			<div class="${WIDGET_NAME}-module_title">Интервал</div>

			<div class="${WIDGET_NAME}-module_list">
				<div class="${WIDGET_NAME}_letter-spacing" data-event="larger" title="Увеличить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z"/>
					</svg>
				</div>

				<div class="${WIDGET_NAME}_letter-spacing" data-event="reduce" title="Уменьшить интервал">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"/>
					</svg>
				</div>
			</div>
		</div>`;

	// изображения
	// функционал модуля [1. вкл-выл изображения, 2. Чёрно-белые изображения]
	let imagesModule = `
		<div class="${WIDGET_NAME}-module">
			<div class="${WIDGET_NAME}-module_title">Изображения</div>

			<div class="${WIDGET_NAME}-module_list">
				<div class="${WIDGET_NAME}_img" data-event="status" title="Выключить изображения">Вык</div>
				<div class="${WIDGET_NAME}_img" data-event="gray" title="Чёрно-белые изображения">Ч/Б</div>
			</div>
		</div>`;

	// темы
	// список тем [1. Бело-чёрная, 2. Чёрно-белая, 3. Сине-желтая]
	let themesModule = `
		<div class="${WIDGET_NAME}-module">
			<div class="${WIDGET_NAME}-module_title">Цветовая схема</div>

			<div class="${WIDGET_NAME}-module_list">
				<div class="${WIDGET_NAME}_theme" data-theme="white">Б/Ч</div>
				<div class="${WIDGET_NAME}_theme" data-theme="black">Ч/Б</div>
				<div class="${WIDGET_NAME}_theme" data-theme="blue">С/Ж</div>
			</div>
		</div>`;

	// сброс настроек
	let resetSettingsModule = `
		<div class="${WIDGET_NAME}-module">
			<div 
				class="${WIDGET_NAME}-reset-settings ${WIDGET_NAME}-module_btn"
				title="Сохранить настройки">
				Сбросить настройки
			</div>
		</div>`;

	// выключить
	let offModule = `
		<div class="${WIDGET_NAME}-module">
			<div 
				class="${WIDGET_NAME}-btn ${WIDGET_NAME}-module_btn"
				title="Включить обычную версию сайта">
				Обычная версия
			</div>
		</div>`;

	let listModules = [
		{name: 'logoModule', module: logoModule},
		{name: 'fontSizeModule', module: fontSizeModule},
		{name: 'letterSpacingModule', module: letterSpacingModule},
		{name: 'imagesModule', module: imagesModule},
		{name: 'themesModule', module: themesModule},
		{name: 'resetSettingsModule', module: resetSettingsModule},
		{name: 'offModule', module: offModule}
	];

	///////////////////////// СБОРКА ВИДЖЕТА /////////////////////////

	let blueberryWidget = document.createElement('div');
		blueberryWidget.id = WIDGET_NAME + '-widget';
		blueberryWidget.className = WIDGET_NAME,
		selectedModules = [];

	// список модулей, включенных в панель

	listModules.forEach(module => {
		if(modulesUsesWidget){
			modulesUsesWidget.forEach(e=>{
				if(module.name == e) selectedModules.push(module.module);
			})
		}else{
			selectedModules.push(module.module);
		}	
	})

	blueberryWidget.innerHTML = selectedModules.join('');
	document.body.prepend(blueberryWidget);



///////////////////////// COOKIE /////////////////////////

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

			if(propValue !== true) updatedCookie += "=" + propValue;
		}

		document.cookie = updatedCookie;
	}

	// удаление cookie
	function deleteCookie(name) {
	    setCookie(name, null, { 
			expires: -1, 
			path: '/' 
		})
	}

///////////////////////// HELPER METHODS /////////////////////////

	function skipElements(){

		// name classes skip 
		let nameClassSkipFontSize = 'skip_font-size',
			nameClassSkipLatterSpacing = 'skip_letter-spacing';

		function toggleClass(arr, nameClassSkip){
			arr.forEach(classSkip => {
				let elementsDom = document.querySelectorAll(classSkip);
				
				elementsDom.forEach(e=>{
					e.classList.toggle(nameClassSkip)
			
					if(!e.classList.length) e.removeAttribute('class');
				});
			})
		}
	
		if(skipFontSize) toggleClass(skipFontSize, nameClassSkipFontSize);
		if(skipLatterSpacing) toggleClass(skipLatterSpacing, nameClassSkipLatterSpacing);
	}

	// тема по умолчанию, если не выбрана другая
	function themeDefault(theme = 'white'){
		if(!getCookie('blueberry-theme')){
			document.body.classList.add('theme-' + theme + '__' + WIDGET_NAME);
			setCookie('blueberry-theme', theme, {path: '/'})
		}
	}


///////////////////////// СОСТОЯНИЕ ВИДЖЕТА /////////////////////////

	function stateBlueberryWidget(){

		function open(cookie = false){
			document.body.classList.add('active__bluebbery');
			if (cookie) setCookie(cookieName, true, {path: '/'});

			themeDefault();
		}

		function close(){

			// УДАЛЕНИЕ КЛАССОВ
			// удаление класса с виджета
			document.body.classList.remove('active__bluebbery');

			// удаление классов которые относятся к blueberry с body 
			let classesBody = document.body.className.split(' ');

			classesBody.forEach(e => {
				if(e.split('__')[1] == WIDGET_NAME) document.body.classList.remove(e);
				if(!document.body.classList.length) document.body.removeAttribute('class');
			});		
			
			// УДАЛЕНИЕ COOKIE
			let cookies = document.cookie.split(';');

			cookies.forEach(cookie => {
				cookie = cookie.trim().split('=')[0]
				if(cookie.split('-')[0] == WIDGET_NAME) deleteCookie(cookie);
			});
		}


		function state(typeEvent){

			let stateCookie = getCookie(cookieName);

			if(typeEvent == 'click'){
				stateCookie ? close() : open(true);
			}

			if(typeEvent == 'load' && stateCookie) open();

			skipElements();
		}


		// находит все кнопки на странице для открытия и закрытия виджета
		let btnsBlueberry = document.querySelectorAll(".blueberry-btn"),
			cookieName = WIDGET_NAME + "-state-widget";

		if(btnsBlueberry){
			btnsBlueberry.forEach(btn => btn.addEventListener('click', ()=> state('click')));
		}

		if (getCookie(cookieName)) state('load');
	}

	stateBlueberryWidget();



///////////////////////// МОДУЛЬ - ИЗОБРАЖЕНИЯ /////////////////////////

	function imgModuleBlueberry(){

		// вкл-вык изображения
		function imgOff(typeEvent){

			let className = 'img-off__blueberry',
				state = getCookie(cookieNameImg),
				btn = blueberryWidget.querySelector(".blueberry_img[data-event='status']")
				
			// вык
			function off(addCookie = false){
				document.body.classList.add(className);
				btn.textContent = "Вкл";

				if(addCookie) setCookie(cookieNameImg, 'off', {path: '/'});
			}
	
			// вкл
			function on(){
				document.body.classList.remove(className);
				btn.textContent = "Вык";

				deleteCookie(cookieNameImg);
			}
	
			if(typeEvent == 'load' && state) off()
			
			if(typeEvent == 'click'){
				(state) ? on() : off(true)
			}
		}


		// чёрно-белые изображения
		function imgGray(typeEvent){

			let className = 'img-gray__blueberry',
				state = getCookie(cookieNameImgGray),
				btn = blueberryWidget.querySelector(".blueberry_img[data-event='gray']")

				
			function gray(addCookie = false){
				document.body.classList.add(className);
				btn.textContent = "ЦВ";

				if(addCookie) setCookie(cookieNameImgGray, 'off', {path: '/'});
			}
	
			function color(){
				document.body.classList.remove(className);
				btn.textContent = "Ч/Б";

				deleteCookie(cookieNameImgGray);
			}
	
			if(typeEvent == 'load' && state) gray()
			
			if(typeEvent == 'click'){
				(state) ? color() : gray(true)
			}
		}

		
		let btns = blueberryWidget.querySelectorAll('.' + WIDGET_NAME + '_img'),
			cookieNameImg = WIDGET_NAME + "-img",
			cookieNameImgGray = WIDGET_NAME + "-img-gray"


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
		if (getCookie(cookieNameImg)) imgOff('load')
		if (getCookie(cookieNameImgGray)) imgGray('load')
	}

	imgModuleBlueberry();

	

// ///////////////////////// МОДУЛЬ - ТЕМА /////////////////////////

	function themesModuleBlueberry(){

		function selectTheme(typeEvent, theme = null){

			if(!theme) theme = getCookie(cookieName);

			let state = getCookie(cookieName);

			// удаление классов с body
			function clearThemes(){
				themes.forEach(theme =>{
					document.body.classList.remove('theme-' + theme + '__' + WIDGET_NAME);
				})
			}

			// вкл
			function on(addCookie = false){
				clearThemes();

				document.body.classList.add('theme-' + theme + '__' + WIDGET_NAME);

				if(addCookie) setCookie(cookieName, theme, {path: '/'})
			}

			// вык
			function off(){
				clearThemes();
				deleteCookie(cookieName);
				themeDefault();
			}

			if(typeEvent == 'load' && state) on();
			if(typeEvent == 'click') (state && state != theme || !state) ? on(true) : off();
		}
		
		let btns = blueberryWidget.querySelectorAll('.' + WIDGET_NAME + '_theme'),
			cookieName = WIDGET_NAME + "-theme",
			themes = [];

		if(btns){
			btns.forEach(btn => {
				let theme = btn.getAttribute('data-theme');
				themes.push(theme);
				btn.addEventListener('click', () => selectTheme('click', theme));
			})
		}

		// запуск при загрузке страницы
		if (getCookie(cookieName)) selectTheme('load');
	}

	themesModuleBlueberry();


///////////////////////// МОДУЛЬ - СБРОСИТЬ НАСТРОЙКИ /////////////////////////
	
	function resetSettingsModuleBlueberry(){

		function reset(){

			// УДАЛЕНИЕ COOKIE
			let cookies = document.cookie.split(';');

			cookies.forEach(cookie => {
				cookie = cookie.trim().split('=')[0];
				if(cookie != WIDGET_NAME + "-state-widget" && cookie.split('-')[0] == WIDGET_NAME) deleteCookie(cookie);
			});


			// УДАЛЕНИЕ КЛАССОВ
			let classesBody = document.body.className.split(' ');

			classesBody.forEach(e => {
				if(e.split('__')[1] == WIDGET_NAME) document.body.classList.remove(e);
			});	

			themeDefault();
		}

		let btnResetSettings = blueberryWidget.querySelector('.' + WIDGET_NAME + '-reset-settings');
		
		if(btnResetSettings) btnResetSettings.addEventListener('click', reset);
	}

	resetSettingsModuleBlueberry();


///////////////////////// МОДУЛЬ - РАЗМЕР ШРИФТА /////////////////////////

	function fontSizeModuleBlueberry(){

		function size(start, typeEvent){

			// добавление класса в body
			function addClass(value){
				document.body.classList.add('font-size_' + value + '__' + WIDGET_NAME);
			}

			// удаление класса с body
			function delClass(value){
				document.body.classList.remove('font-size_' + value + '__' + WIDGET_NAME);
			}

			
			// увеличить
			function larger(){

				if (!fontSizeValue) fontSizeValue = 0;

				if (fontSizeValue < 5) delClass(fontSizeValue);

				fontSizeValue++;

				if(fontSizeValue <= 5){
					addClass(fontSizeValue);
					setCookie(cookieName, fontSizeValue, {path: '/'});
				}
			}

			// уменьшить
			function reduce(){

				delClass(fontSizeValue);

				fontSizeValue--;

				if(fontSizeValue > 0){
					addClass(fontSizeValue);
					setCookie(cookieName, fontSizeValue, {path: '/'});
				}else{
					deleteCookie(cookieName);
				}
			}

			
			let fontSizeValue = Number(getCookie(cookieName));
			
			if(start == 'click'){
				// +
				if(typeEvent == 'larger') larger();

				// -
				if(typeEvent == 'reduce' && fontSizeValue) reduce();
			}	

			if(start == 'load' && fontSizeValue) addClass(fontSizeValue);
		}


		let btns = blueberryWidget.querySelectorAll('.' + WIDGET_NAME + '_font-size'),
			cookieName = WIDGET_NAME + "-font-size";

		if(btns){

			// click
			btns.forEach(btn => {
				btn.addEventListener('click', () => size('click', btn.getAttribute('data-event')));
			})

			// load
			if (getCookie(cookieName)) size('load');
		}
	}

	fontSizeModuleBlueberry();



	///////////////////////// МОДУЛЬ - МЕЖБУКВЕННЫЙ ИНТЕРВАЛ /////////////////////////

	function letterSpacingModuleBlueberry(){

		function size(start, typeEvent){

			// добавление класса в body
			function addClass(value){
				document.body.classList.add('letter-spacing_' + value + '__' + WIDGET_NAME);
			}

			// удаление класса с body
			function delClass(value){
				document.body.classList.remove('letter-spacing_' + value + '__' + WIDGET_NAME);
			}
			
			// увеличить
			function larger(){

				if (!letterSpacingValue) letterSpacingValue = 0;

				if (letterSpacingValue < 5) delClass(letterSpacingValue);

				letterSpacingValue++;

				if(letterSpacingValue <= 5){
					addClass(letterSpacingValue);
					setCookie(cookieName, letterSpacingValue, {path: '/'});
				}
			}

			// уменьшить
			function reduce(){

				delClass(letterSpacingValue);

				letterSpacingValue--;

				if(letterSpacingValue > 0){
					addClass(letterSpacingValue);
					setCookie(cookieName, letterSpacingValue, {path: '/'});
				}else{
					deleteCookie(cookieName);
				}
			}

			
			let letterSpacingValue = Number(getCookie(cookieName));
			
			if(start == 'click'){
				// +
				if(typeEvent == 'larger') larger();

				// -
				if(typeEvent == 'reduce' && letterSpacingValue) reduce();
			}	

			if(start == 'load' && letterSpacingValue) addClass(letterSpacingValue);
		}


		let btns = blueberryWidget.querySelectorAll('.' + WIDGET_NAME + '_letter-spacing'),
			cookieName = WIDGET_NAME + "-letter-spacing";

		if(btns){

			// click
			btns.forEach(btn => {
				btn.addEventListener('click', () => size('click', btn.getAttribute('data-event')));
			})

			// load
			if (getCookie(cookieName)) size('load');
		}
	}

	letterSpacingModuleBlueberry();
}

	








