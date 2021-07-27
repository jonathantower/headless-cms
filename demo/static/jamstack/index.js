import MainApp from './app/app.js'

const App = {
  el: 'main',

  components: {
    'main-app': MainApp
  },

  mounted () {
    console.log('Application mounted.')
  }
}
window.addEventListener('load', () => {
  new Vue(App)
})
