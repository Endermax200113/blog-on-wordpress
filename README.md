# Сайт "Блог на WordPress"

## Стек
- HTML5
- SASS
- TypeScript
- ReactJS v18

## Версии
### v0.0.6
- Добавлен компонент `ContactInfo.tsx`, отображающий все контактные информации
- Добавлена возможность добавлять `svg`-иконки в компоненте `TextLink`

### v0.0.5
- Добавлен компонент `Pagination.tsx`, в котором пронумерованы страницы
- Исправлена ошибка, из-за которой при нажатии `NormalButton` обновлялась страница
- Добавлена возможность в компонентах `NormalButton` и `RegularButton` менять расположение `svg`-иконки:
	1. `LEFT` — левое расположение
	2. `RIGHT` — правое расположение
- Добавлена возможность добавлять классы в `svg`-иконках в 2-ух типов кнопок
- Добавлена возможность добавлять свои классы в `RegularButton`
- Добавлен UI-компонент `RegularText.tsx`, который отображается как обычный текст

### v0.0.4.1
- Исправлена ошибка, из-за которой при наведении и активации `NormalButton` никак не реагировал

### v0.0.4
- Весь проект был перейдён на TypeScript
- Добавлен UI-компонент `TextLink.tsx`, отвечающий за гиперссылку
- Добавлен UI-компонент `Line.tsx`, разделяющий элементами, блоками и компонентами между ними
- Добавлен компонент `Sidebar.tsx`, отображающие последние новости, а также форма для рассылки сбоку
- Добавлен UI-компонент `ArticleItem.tsx`, для отображения ссылки на определённую статью
- Добавлен компонент `SidebarNews.tsx`, отображащие последние новости в `Sidebar'е`
- Добавлен UI-компонент `InputText.tsx`, отвечающий за ввод текста
- Добавлен UI-компонент `NormalButton.tsx`, отвечающий для нажатия кнопок (другой стиль)
- Добавлен компонент `SidebarNewsletter.tsx`, отвечающий за форму рассылки писем

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
