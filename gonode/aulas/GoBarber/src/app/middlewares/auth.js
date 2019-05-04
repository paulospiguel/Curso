module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user // Obj disponívels a todas as views do sistema
    return next()
  }

  return res.redirect('/')
}
