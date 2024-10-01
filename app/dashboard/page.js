// app/dashboard/page.js
// clientside protected route
'use client'

import { withAuth } from '@/app/components/withAuth'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected route. Only authenticated users can see this.</p>
    </div>
  )
}

export default withAuth(Dashboard)
