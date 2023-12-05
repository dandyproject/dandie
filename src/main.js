import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faFacebook, faLinkedin, faInstagram, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'

library.add(faWhatsapp, faFacebook, faLinkedin, faInstagram, faGithub, faMastodon)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
