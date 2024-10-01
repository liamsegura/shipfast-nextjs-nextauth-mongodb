// app/components/navbar.jsx
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'
import Image from 'next/image'

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user.email}</p>
          <Image
            src={session.user.image}
            alt="User image"
            width={50}
            height={50}
          />
          <div className="flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/api/auth/signout">Sign out</Link>
          </div>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </div>
  )
}
