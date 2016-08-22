import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Home from './components/HelloFromVux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const FastClick = require('fastclick'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
FastClick.attach(document.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const router = new VueRouter(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.map({
  '/': {
    component: Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.start(App, '#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

