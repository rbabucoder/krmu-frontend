import React from 'react'
import PHDprogramHero from './comp/PHDprogramHero'
import PHDOverview from './comp/PHDOverview'
import PHDScholar from './comp/PHDScholar'
import PHDConnectingDream from './comp/PHDConnectingDream'
import PHDSlide from './comp/PHDSlide'
import PHDCareer from './comp/PHDCareer'
import PHDOutcome from './comp/PHDOutcome'
import PHDHighlight from './comp/PHDHighlight'
import PHDPursue from './comp/PHDPursue'
import PHDProgrammeHighlight from './comp/PHDProgrammeHighlight'
import PHDAdmission from './PHDAdmission'

const page = () => {
  return (
   <>
    <PHDprogramHero />
    <PHDOverview />
    <PHDScholar />
    <PHDConnectingDream />
    <PHDSlide />
    <PHDCareer />
    <PHDOutcome />
    <PHDProgrammeHighlight />
    <PHDAdmission />
    <PHDPursue />
    <PHDHighlight />
   </>
  )
}

export default page