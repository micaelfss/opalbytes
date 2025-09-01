const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'  // Important for Azure - use 0.0.0.0 instead of localhost
const port = process.env.PORT || 8080  // Azure typically uses port 8080

console.log(`Starting server in ${dev ? 'development' : 'production'} mode`)
console.log(`Server will listen on ${hostname}:${port}`)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
    .once('error', (err) => {
      console.error('Server error:', err)
      process.exit(1)
    })
    .listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
}).catch((err) => {
  console.error('Error starting Next.js app:', err)
  process.exit(1)
})