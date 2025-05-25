import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  ...pluginVue.configs['flat/recommended'],
  prettier,
] 