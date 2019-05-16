import express from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
.prepare()
.then(() => {
  express()
    .get('/posts/:slug', (req, res) => {
      const queryParams = { slug: req.params.slug }
      app.render(req, res, '/post', queryParams)
    })
    .get('*', (req, res) => handle(req, res))
    .listen(3000, (err: any) => {
      if (err) { throw err }
      process.stdout.write(`Point your browser to: http://localhost:3000\n`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
