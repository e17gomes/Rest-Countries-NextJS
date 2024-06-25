 import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from './provider/provider'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries in World',
  description: 'Countries test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
      <Providers>
        import Header from './components/Header'
        <Header />
          {children}
      </Providers>
      </body>
    </html>
  )
}
