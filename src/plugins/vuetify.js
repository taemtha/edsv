import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../assets/styl/main.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.base,
    secondary: colors.pink.base,
    accent: colors.grey.base,
    error: colors.red.base,
    warning: colors.indigo.base,
    info: colors.blue.base,
    success: colors.cyan.base
  },
  iconfont: 'md'
})
