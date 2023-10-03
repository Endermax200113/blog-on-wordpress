# Сайт "Блог на WordPress"

## Стек
- HTML5
- SASS
- JavaScript
- ReactJS v18

## Версии
### v0.0.4
- Добавлен UI-компонент `TextLink.jsx`, отвечающий за гиперссылку
- Добавлен UI-компонент `Line.jsx`, разделяющий элементами, блоками и компонентами между ними

### v0.0.3
- Добавлен файл `_vars.sass` для хранения переменных для SASS файлов
- Добавлен UI-компонент `RegularButton.jsx` для нажатия обычных кнопок
- Добавлено новое изображение `404.png` об отсутствия страницы
- Добавлен UI-компонент `Datetime.jsx` для информации даты
- Добавлена папка `util` для необходимых функций
- Добавлен UI-компонент `Title.jsx` для отображения заголовков
- Добавлен UI-компонент `Description.jsx` для отображения описания статей
- Добавлен UI-компонент `ArticleBlock.jsx` для отображения блоков статей. Они имеют 4 типа:
	1. `USUALLY` — это обычный блок, растянутый на всю горизонтальную страницу
	2. `SHORTER` — это блок, растянутый на 0.(6)% всего горизонтальной страницы
	3. `SMALL` — это блок, растянутый на 0.(3)% всего горизонтальный страницы
	4. `ONLY_TITLE` - это блок, который растянут на 0.(6)% всего горизонтальной страницы, однако разделён пополам на тип блока `SHORTER` по вертикали
- Папки `fonts`, `img`, `sass` и `svg` были перемещены в папку `assets`

### v0.0.2
- Для тестирования компонентов был добавлен класс `component`, который выравнивается по середине экрана
- Был добавлен миксин `font()` в файле `_fonts.sass`
- Добавлены все нужные шрифты под названием `Futura PT`
- Добавлена favicon'ка на .ico (x32), .svg, .png (x180, x192, x512)
- Добавлены все изображения и иконки из макета

### v0.0.1
- Очищен мусор, оставленный от ReactJS

### v0.0.0
- Стандартный старт ReactJS перед началом проекта
