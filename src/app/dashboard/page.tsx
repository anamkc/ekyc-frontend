'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const router = useRouter();
  return (
    <div>
        <button onClick={() => router.push('/login')}>Hello</button>
    </div>
  )
}

export default Dashboard