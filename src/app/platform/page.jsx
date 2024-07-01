import React from 'react'
import PlatformBanner from './PlatformBanner'
import WorkflowSection from './WorkflowSection'
import PlatformDetails from './PlatformDetails'
import PlatformTeam from './PlatformTeam'

export default function page() {
  return (
    <div>
      <PlatformBanner />
       <WorkflowSection />
      <PlatformDetails />
     <PlatformTeam />
    </div>
  )
}
