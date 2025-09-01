const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = process.env.PORT || 8080

console.log('=== Azure Next.js Server Starting ===')
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`PORT: ${port}`)
console.log(`Development mode: ${dev}`)
console.log(`Hostname: ${hostname}`)
console.log(`Node version: ${process.version}`)
console.log(`Working directory: ${process.cwd()}`)

// Check if Next.js build exists
const fs = require('fs')
const path = require('path')
const buildDir = path.join(process.cwd(), '.next')

if (!fs.existsSync(buildDir)) {
  console.error('ERROR: .next build directory not found!')
  console.error('Make sure "next build" ran successfully during deployment')
  process.exit(1)
}

console.log('✅ .next build directory found')

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

console.log('Preparing Next.js application...')

app.prepare().then(() => {
  console.log('✅ Next.js app prepared successfully')
  
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Request handling error:', err)
      console.error('URL:', req.url)
      console.error('Stack:', err.stack)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })

  server.on('error', (err) => {
    console.error('Server error:', err)
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use`)
    }
    process.exit(1)
  })

  server.listen(port, hostname, () => {
    console.log(`🚀 Server ready on http://${hostname}:${port}`)
    console.log('=== Server Started Successfully ===')
  })

}).catch((err) => {
  console.error('❌ Failed to prepare Next.js app:', err)
  console.error('Stack:', err.stack)
  process.exit(1)
})