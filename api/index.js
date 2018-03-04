import app from './app'

const port = process.env.PORT || 4000

app.listen(port, err => {
  if (err) throw err
  console.log(`express api server is running on http://localhost:${port}`)
})
