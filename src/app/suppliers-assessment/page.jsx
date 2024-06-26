import React from 'react'
import OurImpact from './OurImpact'
import SupplyChain from './SupplyChain'
import ChainCard from './ChainCard'
import ImpactSlider from './ImpactSlider'
import BalanceImpact from './BalanceImpact'
import PlatformImpact from './PlatformImpact'
import ApproachImpact from './ApproachImpact'
import ImpactMeasuring from './ImpactMeasuring'
import ServiceSuppliers from './ServiceSuppliers'


export default function page() {
  return (
    <div>
      <OurImpact />
      <ServiceSuppliers />
      {/* <SupplyChain /> */}
      <ChainCard />
      <ImpactSlider />
      <BalanceImpact />
      <PlatformImpact />
      <ApproachImpact />
      <ImpactMeasuring />
     
    </div>
  )
}
