// app/dashboard/page.js
// clientside protected route
'use client'

import { withAuth } from '@/app/components/withAuth'
import UsersList from '@/app/components/UsersList'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        This is a clientside protected route. Only authenticated users can see
        this.
      </p>
      <UsersList />
    </div>
  )
}

export default withAuth(Dashboard)
