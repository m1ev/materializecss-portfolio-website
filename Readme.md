# Сайт-портфолио на Materialize CSS
Одностраничный веб-сайт портфолио, выполненный с использованием CSS фреймворка [Materialize](https://materializecss.com) и подготовленный для хостинга на [pythonanywhere.com](https://pythonanywhere.com).

Для создания фонового изображения html кода использован сервис [Ray.so](https://ray.so).

## Реализация формы обратной связи

Для сбора данных формы используется Python фреймворк Flask (pythonanywhere [не поддерживает PHP](https://www.pythonanywhere.com/forums/topic/330/)):
- [Sending_and_retrieving_form_data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data) [[RU](https://developer.mozilla.org/ru/docs/Learn/Forms/Sending_and_retrieving_form_data)]  
- [Retrieving HTML Form data using Flask](https://www.geeksforgeeks.org/retrieving-html-from-data-using-flask/)  
- [How to pass HTML form input to Python script?](https://stackoverflow.com/questions/67334671/how-to-pass-html-form-input-to-python-script)

Отправка сообщения, содержащего полученные из формы данные, осуществляется через SMTP-сервер Gmail:
- [SMTP for free users](https://help.pythonanywhere.com/pages/SMTPForFreeUsers/)

Для защиты адреса и пароля от почтового ящика gmail отправителя и адреса получателя [используются переменные окружения](https://habr.com/ru/articles/472674/):  
[How to set environment variables for your web apps (for SECRET_KEY etc)](https://help.pythonanywhere.com/pages/environment-variables-for-web-apps)