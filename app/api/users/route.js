// app/api/users/route.js
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('test')

    const users = await db.collection('users').find({}).limit(10).toArray()

    return NextResponse.json(
      { users },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
