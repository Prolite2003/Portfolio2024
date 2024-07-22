import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faLinkedin as fabLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add Font Awesome icons to the library
library.add(fasEnvelope, fabGithub, fabLinkedin);

// Create and mount the Vue app
const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
