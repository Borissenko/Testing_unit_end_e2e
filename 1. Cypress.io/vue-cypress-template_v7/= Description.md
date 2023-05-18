//https://www.cypress.io/blog/2021/04/06/getting-start-with-cypress-component-testing-vue-2-3/
Cypress 7.0


# 1. Creating a new Vue CLI Project
> npm init vue@latest


# 2. Add too
## Vue 2
yarn add cypress 
         @cypress/vue 
         @cypress/webpack-dev-server -D


## Vue 3
npm install cypress 
            @cypress/vue@next 
            @cypress/webpack-dev-server -D






# cypress/plugins/index.js
Component testing is configured as a Cypress plugin. This means you need to create a plugins file. 
By default this goes in 
> cypress/plugins/index.js




# cypress.json
- где будут лежать тесты.
- All my comoponent are in 'src', and 
the spec-files are always named '*.spec.ts'.

{
  "component": {
    "componentFolder": "src",
    "testFiles": "**/*.spec.ts"
  }
}



# Запускаем тестовое UI
> npx cypress open-ct



