//https://webdevblog.ru/cypress-dlya-nachinajushhih-nachalo-raboty-so-skvoznym-testirovaniem/


# 1. Формируем:
# Формируем проект
- index.html
- form.js


# Добавляем Cypress
## инстиллируем Cypress
> npm i cypress --save-dev

## запуск Cypress для дозагрузки в проект папочек
> ./node_modules/.bin/cypress open

=>> Появиться диалоговое окно Cypress.
НАДО(!) по нему пойти и тогда
> в проекте появится куча новых папок.
> откроется UI-окно Chrome




# 2. Запуск проекта
> npx serve

Онo запустит сервер и наш проект на нем.
Открываем в броузере на http://localhost:3000     

=>> порт, на котором запустился проект, запоминаем.




# 3. Добавляем в проект:

# package.json
"scripts": {
  "e2e-open": "cypress open",
  "e2e-run": "cypress run"
},

open - отображение тестов в браузере 
run  - отображение тестов в консоле



# cypress.json
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",     << проверяем порт запуска проекта
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})




# тест
//cypress/e2e/form.cy.js

describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/")
    cy.get("form")
  })
})




# 4. Запуск тестировщика
> останавливаем тестировщик, запущенный ренее via "node_modules/.bin/cypress open"

> npm run e2e-open

=>> откроется спец окно Cypress, как и при запуске "node_modules/.bin/cypress open".
-  Клацаем в нем. =>>
=>> откроется такое же окно броузера для отслеживания тестирования



