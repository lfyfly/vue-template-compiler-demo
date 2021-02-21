const { compileTemplate } = require('@vue/component-compiler-utils')
const  VueTemplateCompiler = require('vue-template-compiler')


const res = compileTemplate({source:'<hello-word id="app">123</hello-word>',compiler: VueTemplateCompiler,})

console.log(res.code)
