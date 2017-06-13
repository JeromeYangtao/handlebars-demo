let code = '<h1>{{title}}</h1>'
let data = { title: 'Thomson' }

let html = Handlebars.compile(code)(data)

document.write(html)