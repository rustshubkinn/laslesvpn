[![Netlify Status](https://api.netlify.com/api/v1/badges/eccb46e5-c90b-44ca-93aa-40075bb6b455/deploy-status)](https://app.netlify.com/sites/focused-kepler-bf6c6d/deploys)

## LaslesVPN

LaslesVPN представляет собой landing page. Страница написана с возможностью адаптивной резиновой и мобильной верстки. Для сборки проекта используется сборщик Gulp. Присутствует транспайлер Babel для поддержки современного JavaScript (ES6) в браузерах. Дизайн сайта был найден в интернете.
- В проекте используются шаблонизатор Pug и препроцессор SASS.
- Компоненты сайта оформляются в проекте как миксины и являются переиспользуемыми.
- Страница сверстана с использованием grid и flexbox.

## Особенности

- используются препроцессоры [Pug](https://pugjs.org/) и [SCSS](https://sass-lang.com/)
- используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
- используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
- используется проверка кода на ошибки перед коммитом

## :open_file_folder: Файловая структура

```
gulp-pug-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

[Live-Version](https://focused-kepler-bf6c6d.netlify.app/)
