import React from 'react';
import Construction from "./Construction";
import About from "./about";
import OurMission from './ourmission';
import Weare from "../aboutus/weare";
import Wedo from "../aboutus/wedo";
import Chooseus from "../aboutus/chooseus";
import CommonFooterSection from '../components/common/CommonFooterSection';



const Page = () => {
  return (
    <div >
      <div><Construction /></div>
      <div className='flex'>
    <About/>
    <OurMission/>
    <Weare/>
    <Wedo/>
    <Chooseus/>
    <CommonFooterSection />
    </div>
    </div>
  );
  
}

export default Page;
