import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'  //(!)


// A)
// Здесь мы не тестируем реальный стор из проекта,
// а создаем стор-подмену, в которую привлекаем код реального стора by
// const store = new Vuex.Store(saladStore)

// А данные из реального стора привлечены в компонент by (!)
//что бы можно было геттерить результат изменения стора
// data() {
//   return {
//     ...this.$store.state
//   }
// },

Vue.use(Vuex)

test('store works directly', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladlComponent, {
    store
  })
  store.state.salad.push('cucumber')      //изменяем стор напрямую, без Actions.

  expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('actions works', () => {
  const store = new Vuex.Store(saladStore)    // для каждого теста- инициализируем СВОЙ стор
  const wrapper = mount(SaladlComponent, {
    store
  })
  wrapper.vm.addIngredient('tomato')     //addIngredient- из ...mapActions(['addIngredient'])
  expect(wrapper.vm.salad).toEqual(['tomato'])
})


// B)Что бы не загрязнять Vue-экземпляр дополнительными сторами используем createLocalVue()
const VueWithVuex = createLocalVue()
VueWithVuex.use(Vuex)

test('store is loaded ', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladlComponent, {
    localVue: VueWithVuex,
    store
  })
  store.state.salad.push('cucumber')

  expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('actions works', () => {
  const store = new Vuex.Store(saladStore)  // для каждого теста- инициализируем СВОЙ стор
  const wrapper = mount(SaladlComponent, {
    localVue: VueWithVuex,
    store
  })
  wrapper.vm.addIngredient('tomato')     //addIngredient- из ...mapActions(['addIngredient'])
  expect(wrapper.vm.salad).toEqual(['tomato'])
})