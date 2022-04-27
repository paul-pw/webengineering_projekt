import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add({ faRss, faInstagram, faGithub })

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.config.productionTip = false
