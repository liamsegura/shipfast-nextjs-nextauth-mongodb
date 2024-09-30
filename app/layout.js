// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import SessionProvider from './components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
