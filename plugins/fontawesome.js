import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRss, faMagnifyingGlass, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// add the nescesary icons
library.add(faRss, faInstagram, faGithub, faMagnifyingGlass, faArrowLeft, faArrowRight)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
