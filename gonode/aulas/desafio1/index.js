const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
app.use(express.urlencoded({ express: false }))
app.set('view engine', 'njk')

const checkAgeQueryParam = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }

  return next()
}

app.get('/', (req, res) => {
  return res.render('home')
})

app.get('/major', checkAgeQueryParam, (req, res) => {
  const { age } = req.query

  return res.render('major', { age })
})

app.get('/minor', checkAgeQueryParam, (req, res) => {
  const { age } = req.query

  return res.render('minor', { age })
})

app.post('/check', (req, res) => {
  const { age } = req.body
  const hoje = new Date().getTime()
  const dtNiver = new Date(age).getTime()

  const timeDiff = Math.abs(hoje - dtNiver)
  const diffAno = Math.trunc(timeDiff / (1000 * 60 * 60 * 24 * 365))

  // console.log(diffAno)

  if (diffAno >= 18) {
    return res.redirect(`/major?age=${diffAno}`)
  } else {
    return res.redirect(`/minor?age=${diffAno}`)
  }
})

app.listen(3000)
