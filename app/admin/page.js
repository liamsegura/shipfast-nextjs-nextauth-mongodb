// app/admin/page.js
// server-side protected route
import { requireAuth } from '@/app/lib/auth'

export default async function AdminPage() {
  await requireAuth()

  return (
    <div>
      <h1>Admin Page</h1>
      <p>This is a protected server-side route.</p>
    </div>
  )
}
