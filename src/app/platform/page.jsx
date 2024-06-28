import React from 'react'
import PlatformBanner from './PlatformBanner'
import Navbar from '../components/Navbar'
import WorkflowSection from './WorkflowSection'
import PlatformDetails from './PlatformDetails'
import PlatformTeam from './PlatformTeam'

export default function page() {
  return (
    <div>
      <Navbar />
      <PlatformBanner />
       <WorkflowSection />
      <PlatformDetails />
     <PlatformTeam />
    </div>
  )
}
