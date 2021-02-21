const  VueTemplateCompiler = require('vue-template-compiler')

const res = VueTemplateCompiler.compile('<hello-word id="app">123</hello-word>')

console.log(res.render)
