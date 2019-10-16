document.addEventListener('DOMContentLoaded', function () {
  let nameModule = "blueberry"; ///////////////////////// КОМПОНЕНТЫ ПАНЕЛИ /////////////////////////

  let logoBlueberry = `
		<div class="logoBlueberry">
			<a href="" target="_blank"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1Mi40NyA1NTIuNDciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTUyLjQ3IDU1Mi40NyIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTQ3NC45OTMgMjk5Ljk1My0xLjY5LTEzLjYwMi0xMy42MDItMS42OTQtMTAuODE4LTguNDIyLTEwLjgxMSA4LjQxOS0xMy42MDIgMS42OS0xLjY5NCAxMy42MDItOC40MjIgMTAuODE4IDguNDE5IDEwLjgxMiAxLjY5IDEzLjYgMTMuNjAyIDEuNjk3IDEwLjgxOCA4LjQyMiAxMC44MTItOC40MTkgMTMuNjAyLTEuNjkgMS42OTQtMTMuNjA0IDguNDIyLTEwLjgxNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0xOTcuMDY3IDI1MS44MjItMTMuNjAyLTEuNjk0LTEwLjgxOC04LjQyMi0xMC44MTEgOC40MTktMTMuNjAyIDEuNjktMS42OTQgMTMuNjAyLTguNDIyIDEwLjgxOCA4LjQxOSAxMC44MTEgMS42OSAxMy42IDEzLjYwMiAxLjY5NyAxMC44MTggOC40MjIgMTAuODEyLTguNDE5IDEzLjYwMi0xLjY5IDEuNjk0LTEzLjYwNCA4LjQyMi0xMC44MTYtOC40MTktMTAuODExeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTQwOC44NDYgMTQxLjA1MWMyNy44MTUtMzYuMDIzIDM3LjA1Mi03MC44MjcgMzkuNzY2LTg2LjI1Ni44OTQtNS4wMjQtLjQ4OS0xMC4xODMtMy43Ni0xNC4wOTUtMy4yODgtMy45MTItOC4xMjctNi4xNzEtMTMuMjM1LTYuMTcxLTg4LjUwNyAwLTE0Mi4yNDYgNDAuMzMxLTE2My42NDggMTIyLjY5My0yNi4xNDEtODEuMjMtODYuOTE5LTEyMi42OTMtMTgxLjY0Ni0xMjIuNjkzLTUuMjI3IDAtMTAuMTY3IDIuMzYtMTMuNDM3IDYuNDI0LTMuMjcxIDQuMDYzLTQuNTM1IDkuMzkxLTMuNDM5IDE0LjQ4MyAxMS4xMzQgNTEuNDk3IDQyLjM3OCA5MC44OTUgOTIuNDM3IDExOC4yOTktOTAuMSA1LjY3Ny0xNjEuODg0IDgwLjA1My0xNjEuODg0IDE3MS41NTkgMCA5NS4xOTIgNzcuNDU1IDE3Mi42NDcgMTcyLjY0NyAxNzIuNjQ3IDQ5LjgzNiAwIDk0LjQ0OC0yMS41NDkgMTI1Ljk5MS01NS40MzggMjUuMDU2IDEzLjQ1NCA1Mi43MTMgMjAuOTA5IDgxLjE4NiAyMC45MDkgOTUuMTkyIDAgMTcyLjY0Ny03Ny40NTUgMTcyLjY0Ny0xNzIuNjQ3LS4wMDEtODUuMjUzLTYyLjI3MS0xNTUuODEyLTE0My42MjUtMTY5LjcxNHptLjEyOC03MC44OTZjLTguNTg2IDI0LjcxNy0yNC40MDUgNDkuMDU3LTQ0LjQxOCA2OC44NC0yMS4wMjUgMS44ODItNDEuMzA5IDcuNDMzLTU5Ljk1NCAxNi42MjQgMTYuNjYyLTUyLjMxMSA0OS45MzEtNzkuODYzIDEwNC4zNzItODUuNDY0em0tMjk5LjIzMi0uMTAxYzY1LjM2NyA1Ljc2NiAxMDUuOTE1IDM2Ljg5IDEyNS4zMjEgOTYuMzIxLTY2LjA3NS0xOC41MjktMTA3LjM4Mi01MC4yNi0xMjUuMzIxLTk2LjMyMXptNjIuOTA1IDQxMy4zNThjLTc2LjE1NyAwLTEzOC4xMTgtNjEuOTYxLTEzOC4xMTgtMTM4LjExOHM2MS45NjEtMTM4LjExNyAxMzguMTE4LTEzOC4xMTcgMTM4LjExOCA2MS45NjEgMTM4LjExOCAxMzguMTE4LTYxLjk2MSAxMzguMTE3LTEzOC4xMTggMTM4LjExN3ptMjA3LjE3Ni0zNC41MjljLTIwLjk3NCAwLTQxLjQ2My00Ljk0LTYwLjI0Ny0xNC4xMzcgMTUuOTk2LTI2LjE3MyAyNS43MTgtNTYuNTk3IDI1LjcxOC04OS40NTEgMC01Mi44NDQtMjQuMzgtOTkuNjMyLTYxLjkwMi0xMzEuMzI3IDI1Ljg4Mi0yNS45OTggNTkuODU3LTQxLjMyIDk2LjQzMS00MS4zMiA3Ni4xNTcgMCAxMzguMTE4IDYxLjk2MSAxMzguMTE4IDEzOC4xMThzLTYxLjk2MSAxMzguMTE2LTEzOC4xMTggMTM4LjExN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" /></a>
		</div>`;
  let sizeTextBlueberry = `
		<div>
			<p>Размер</p>
			<ul>
				<li id="larger_text-${nameModule}" title="Увеличить текст">
					<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkxLjg2IDQ5MS44NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkxLjg2IDQ5MS44NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTY3LDIxMS42MTRIMjgwLjI0NVYyNi42OTFjMC04LjQyNC0xMS40MzktMjYuNjktMzQuMzE2LTI2LjY5cy0zNC4zMTYsMTguMjY3LTM0LjMxNiwyNi42OXYxODQuOTI0SDI2LjY5ICAgIEMxOC4yNjcsMjExLjYxNCwwLDIyMy4wNTMsMCwyNDUuOTI5czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDE4NC45MjR2MTg0LjkyNGMwLDguNDIyLDExLjQzOCwyNi42OSwzNC4zMTYsMjYuNjkgICAgczM0LjMxNi0xOC4yNjgsMzQuMzE2LTI2LjY5VjI4MC4yNDVINDY1LjE3YzguNDIyLDAsMjYuNjktMTEuNDM4LDI2LjY5LTM0LjMxNlM0NzMuNTksMjExLjYxNCw0NjUuMTY3LDIxMS42MTR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
				</li>
				<li id="reduce_text-${nameModule}" title="Уменьшить текст">
					<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkxLjg1OCA0OTEuODU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTEuODU4IDQ5MS44NTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY1LjE2NywyMTEuNjEzSDI0MC4yMUgyNi42OWMtOC40MjQsMC0yNi42OSwxMS40MzktMjYuNjksMzQuMzE2czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDIxMy41MmgyMjQuOTU5ICAgIGM4LjQyMSwwLDI2LjY4OS0xMS40MzksMjYuNjg5LTM0LjMxNlM0NzMuNTksMjExLjYxMyw0NjUuMTY3LDIxMS42MTN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
				</li>
			</ul>
		</div>`;
  let letterSpaceTextBlueberry = `
		<div>
			<p>Интервал</p>
			<ul>
				<li id="larger_interval-${nameModule}" title="Увеличить интервал">
					<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkxLjg2IDQ5MS44NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkxLjg2IDQ5MS44NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTY3LDIxMS42MTRIMjgwLjI0NVYyNi42OTFjMC04LjQyNC0xMS40MzktMjYuNjktMzQuMzE2LTI2LjY5cy0zNC4zMTYsMTguMjY3LTM0LjMxNiwyNi42OXYxODQuOTI0SDI2LjY5ICAgIEMxOC4yNjcsMjExLjYxNCwwLDIyMy4wNTMsMCwyNDUuOTI5czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDE4NC45MjR2MTg0LjkyNGMwLDguNDIyLDExLjQzOCwyNi42OSwzNC4zMTYsMjYuNjkgICAgczM0LjMxNi0xOC4yNjgsMzQuMzE2LTI2LjY5VjI4MC4yNDVINDY1LjE3YzguNDIyLDAsMjYuNjktMTEuNDM4LDI2LjY5LTM0LjMxNlM0NzMuNTksMjExLjYxNCw0NjUuMTY3LDIxMS42MTR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
				</li>
				<li id="reduce_interval-${nameModule}" title="Уменьшить интервал">
					<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkxLjg1OCA0OTEuODU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTEuODU4IDQ5MS44NTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY1LjE2NywyMTEuNjEzSDI0MC4yMUgyNi42OWMtOC40MjQsMC0yNi42OSwxMS40MzktMjYuNjksMzQuMzE2czE4LjI2NywzNC4zMTYsMjYuNjksMzQuMzE2aDIxMy41MmgyMjQuOTU5ICAgIGM4LjQyMSwwLDI2LjY4OS0xMS40MzksMjYuNjg5LTM0LjMxNlM0NzMuNTksMjExLjYxMyw0NjUuMTY3LDIxMS42MTN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" />
				</li>
			</ul>
		</div>`;
  let imagesBlueberry = `
		<div class="imgBlueberry">
			<p>Изображения</p>
			<ul>
				<li id="img-${nameModule}" title="Выключить изображения">Вык</li>
				<li id="gray_img-${nameModule}" title="Чёрно-белые изображения">Ч/Б</li>
			</ul>
		</div>`;
  let themeBlueberry = `
		<div class="themeBlueberry">
			<p>цветовая Схема</p>
			<ul>
				<li id="white_theme-${nameModule}" class="btn_theme-blueberry" title="Белое на чёрном">Б/Ч</li>
				<li id="black_theme-${nameModule}" class="btn_theme-blueberry" title="Чёрное на белом">Ч/Б</li>
				<li id="blue_theme-${nameModule}" class="btn_theme-blueberry" title="Чёрное на белом">С/Ж</li>
			</ul>
		</div>`;
  let resetSettingsBlueberry = `
		<div class="resetSettingsBlueberry" title="Сохранить настройки">
			<p>Сбросить настройки</p>
		</div>`;
  let btnOffBlueberry = `
		<div class="blueberry-btn" title="Включить обычную версию сайта">
			<p>Обычная версия</p>
		</div>`; // сборка панели и добавление её в DOM

  let blueberry = document.createElement('div');
  blueberry.id = nameModule;
  blueberry.innerHTML = [logoBlueberry, sizeTextBlueberry, letterSpaceTextBlueberry, imagesBlueberry, themeBlueberry, resetSettingsBlueberry, btnOffBlueberry].join('');
  document.body.prepend(blueberry); ///////////////////////// ФУНКЦИИ ДЛЯ РАБОТЫ С COOKIE /////////////////////////
  // получение cookie

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  } // создание cookie


  function setCookie(name, value, props) {
    props = props || {};
    var exp = props.expires;

    if (typeof exp == "number" && exp) {
      var d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }

    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;

    for (var propName in props) {
      updatedCookie += "; " + propName;
      var propValue = props[propName];

      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  } // удаление cookie


  function deleteCookie(name) {
    setCookie(name, null, {
      expires: -1
    });
  } ///////////////////////// СОСТОЯНИЕ ПАНЕЛИ /////////////////////////


  function moduleStatusBlueberry(typeEvent) {
    let moduleStatusCookie = getCookie("moduleStatus-" + nameModule);

    function openBlueberry() {
      blueberry.classList.add('active');
      document.body.classList.add('active-' + nameModule);
      setCookie("moduleStatus-" + nameModule, "active", {});
    }

    function closeBlueberry() {
      blueberry.classList.remove('active'); // удаление cookies

      let cookies = document.cookie.split(';');
      cookies.forEach(function (e) {
        let cookieArr = e.split(/-|=/);

        if (cookieArr[cookieArr.length - 2] == nameModule) {
          let nameCookie = cookieArr.splice(0, 2).join('-');
          deleteCookie(nameCookie);
        }
      }); // удаление классов с body

      let classesBody = document.body.className.split(' ');
      classesBody.forEach(function (e) {
        let arrClass = e.split('-');

        if (arrClass[arrClass.length - 1] == nameModule) {
          document.body.classList.remove(e);
        }
      });
    }

    if (typeEvent == 'load') {
      if (moduleStatusCookie == "active") {
        document.body.classList.add('active-' + nameModule);
        blueberry.classList.add('active');
      }
    } else if (typeEvent == 'click') {
      moduleStatusCookie == "active" ? closeBlueberry() : openBlueberry();
    }
  } // находит все кнопки на странице для открытия и закрытия модуля


  let btnBlueberryStatus = document.querySelectorAll(".blueberry-btn");

  for (var i = 0; i < btnBlueberryStatus.length; i++) {
    btnBlueberryStatus[i].addEventListener('click', () => moduleStatusBlueberry('click'));
  } ///////////////////////// ИЗОБРАЖЕНИЯ /////////////////////////
  // включение отключение изображений


  function imgOnOffBlueberry(typeEvent) {
    let imgCookie = getCookie("img-" + nameModule);

    function disabledImg() {
      document.body.classList.add('disabledImg-blueberry');
      setCookie("img-" + nameModule, "disabled", {});
      document.querySelector('#img-blueberry').textContent = "Вкл";
    }

    function enebledImg() {
      document.body.classList.remove('disabledImg-blueberry');
      deleteCookie("img-" + nameModule);
      document.querySelector('#img-blueberry').textContent = "Вык";
    }

    if (typeEvent == 'load') {
      if (imgCookie == "disabled") {
        document.body.classList.add('disabledImg-blueberry');
        document.querySelector('#img-blueberry').textContent = "Вкл";
      }
    } else if (typeEvent == 'click') {
      imgCookie == "disabled" ? enebledImg() : disabledImg();
    }
  }

  document.querySelector('#img-blueberry').addEventListener('click', () => imgOnOffBlueberry('click')); // чёно-белые изображения

  function imgGrayBlueberry(typeEvent) {
    let imgGrayCookie = getCookie("imgGray-" + nameModule);

    function onImgGray() {
      document.body.classList.add('grayImg-blueberry');
      document.querySelector('#gray_img-blueberry').textContent = "ЦВ";
      setCookie("imgGray-" + nameModule, "on", {});
    }

    function offImgGray() {
      document.body.classList.remove('grayImg-blueberry');
      document.querySelector('#gray_img-blueberry').textContent = "Ч/Б";
      deleteCookie("imgGray-" + nameModule);
    }

    if (typeEvent == 'load') {
      if (imgGrayCookie == "on") {
        document.body.classList.add('grayImg-blueberry');
        document.querySelector('#gray_img-blueberry').textContent = "ЦВ";
      }
    } else if (typeEvent == 'click') {
      imgGrayCookie == "on" ? offImgGray() : onImgGray();
    }
  }

  document.querySelector('#gray_img-blueberry').addEventListener('click', () => imgGrayBlueberry('click')); ///////////////////////// ТЕМЫ /////////////////////////

  function themesBlueberry(typeEvent, idBtn) {
    let themeCookie = getCookie("theme-" + nameModule);

    if (typeEvent == 'load') {
      document.body.classList.add(themeCookie);
    } else if (typeEvent == 'click') {
      const classesBtn = ["white_theme-blueberry", "black_theme-blueberry", "blue_theme-blueberry"];
      document.body.classList.remove(...classesBtn);
      document.body.classList.add(idBtn);
      setCookie("theme-" + nameModule, idBtn, {});
    }
  }

  let btnsThemeBlueberry = document.querySelectorAll('.btn_theme-blueberry');
  btnsThemeBlueberry.forEach(e => {
    e.addEventListener('click', function () {
      themesBlueberry('click', this.id);
    });
  }); ///////////////////////// ПРИ ЗАГРУЗКЕ СТРАНИЦЫ /////////////////////////
  // состояние панели

  if (getCookie("moduleStatus-" + nameModule) == 'active') {
    moduleStatusBlueberry('load');
  }

  ; // вкл-выкл изображения

  if (getCookie('img-' + nameModule)) {
    imgOnOffBlueberry('load');
  }

  ; // чб изображения

  if (getCookie('imgGray-' + nameModule)) {
    imgGrayBlueberry('load');
  }

  ; // чб изображения

  if (getCookie('theme-' + nameModule)) {
    themesBlueberry('load');
  }

  ;
});