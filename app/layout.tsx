import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpalBYTES',
  description: 'Mais do que uma software house, somos parceiros estratégicos na criação de soluções disruptivas, ajudando empresas a se reinventarem, inovarem e se manterem competitivas em um mercado em constante evolução.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
