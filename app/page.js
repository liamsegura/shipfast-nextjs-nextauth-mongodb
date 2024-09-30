// app/page.js
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Welcome to Next Auth</h1>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <Link href="/api/auth/signout">Sign out</Link>
        </>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </main>
  )
}
