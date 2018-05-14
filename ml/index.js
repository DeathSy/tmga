import './config/mongoose'
import app from './app'

const port = process.env.PORT || 5000

app.listen(port, err => {
  if (err) throw err
  console.log(`express ml server is running on http://localhost:${port}`)
})
