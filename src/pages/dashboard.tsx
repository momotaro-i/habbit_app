import { Dashboard } from '@/components/pages/Dashboard'
import { PrivateRoute } from '@/components/templates/PrivateRoute'
import React from 'react'

const dashboard = () => {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  )
}

export default dashboard