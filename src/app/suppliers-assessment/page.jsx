import React from 'react'
import OurImpact from './OurImpact'
import SupplyChain from './SupplyChain'
import ChainCard from './ChainCard'
import ImpactSlider from './ImpactSlider'
import BalanceImpact from './BalanceImpact'

export default function page() {
  return (
    <div>
      <OurImpact />
      <SupplyChain />
      <ChainCard />
      <ImpactSlider />
      <BalanceImpact />
    </div>
  )
}
