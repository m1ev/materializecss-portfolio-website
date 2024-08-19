document.addEventListener('DOMContentLoaded', function () {
	// инициализация элементов Materialize CSS
	var ssElems = document.querySelectorAll('.scrollspy');
	var ssOptions = {
		scrollOffset: 0,
	}
	var ssInstances = M.ScrollSpy.init(ssElems, ssOptions);
	
	var parallaxElems = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallaxElems);
	
	var tabElems = document.querySelectorAll('.tabs');
	var tabInstance = M.Tabs.init(tabElems);
	  
	var ttElems = document.querySelectorAll('.tooltipped');
    var ttInstances = M.Tooltip.init(ttElems);
	
	var textAreaElems = document.querySelectorAll('.materialize-textarea');
	var inputElems = document.querySelectorAll('input');
	M.CharacterCounter.init(textAreaElems);
	M.CharacterCounter.init(inputElems);
	
    var colElems = document.querySelectorAll('.collapsible');
    var colInstances = M.Collapsible.init(colElems);
	
	var navElems = document.querySelectorAll('.sidenav');
    var navInstances = M.Sidenav.init(navElems);
	
	// Настройка формы обратной связи
	let nameField = document.getElementById('name'),
		emailField = document.getElementById('email'),
		messageField = document.getElementById('message'),
		submitBtn = document.getElementById('submit'),
		inputFieldStates = [],
		inputFieldStatesLength = 3;
		
	nameField.addEventListener('focusin', () => {
		if (!submitBtn.classList.contains('disabled')) {
			submitBtn.classList.add('disabled');
		};
	});
	
	emailField.addEventListener('focusin', () => {
		if (!submitBtn.classList.contains('disabled')) {
			submitBtn.classList.add('disabled');
		};
	});
	
	messageField.addEventListener('focusin', () => {
		if (!submitBtn.classList.contains('disabled')) {
			submitBtn.classList.add('disabled');
		};
	});
	
	nameField.addEventListener('focusout', () => {
		if (nameField.classList.contains('valid')) {
			inputFieldStates[0] = true;
		}
		else {
			inputFieldStates[0] = false;
		}
		if (!submitBtn.classList.contains('disabled')) {
			submitBtn.classList.add('disabled');
		};
		
		checkInputsAndEnableSubmitBtn();
	});
	
	emailField.addEventListener('focusout', () => {
		if ((emailField.classList.contains('valid'))) {
			inputFieldStates[1] = true;
		}
		else {
			inputFieldStates[1] = false;
		}
		
		checkInputsAndEnableSubmitBtn();
	});
	
	messageField.addEventListener('focusout', () => {
		if ( (messageField.classList.contains('valid'))) {
			inputFieldStates[2] = true;
		}
		else {
			inputFieldStates[2] = false;
		}
		if (!submitBtn.classList.contains('disabled')) {
			submitBtn.classList.add('disabled');
		};
		
		checkInputsAndEnableSubmitBtn();
	});
	
	function checkInputsAndEnableSubmitBtn() {
		let res = true;
		for(let i=0; i < inputFieldStatesLength; i++) {
			if(!inputFieldStates[i]) {
				res = false;
			}
		}
		if(res) {
			submitBtn.classList.remove('disabled');
		}
		else {
			submitBtn.classList.add('disabled');
		}
	};
	
	// Отправка формы обратной связи и отключение полей ввода и кнопки
	document.querySelectorAll('form > a.btn')[0].addEventListener('click', function(e) {
	    document.getElementById("form").submit();
	    M.toast({html: 'Ваше сообщение отправлено!', classes: 'material-toast'});
	    document.getElementById('name').setAttribute("disabled", "");
	    document.getElementById('email').setAttribute("disabled", "");
	    document.getElementById('message').setAttribute("disabled", "");
	    this.setAttribute("disabled", "");
	});
});