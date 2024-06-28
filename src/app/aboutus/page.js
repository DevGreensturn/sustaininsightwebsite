import React from 'react';
import Construction from "./Construction";
import About from "./about";
import OurMission from './ourmission';
import Weare from "../aboutus/weare";
import Wedo from "../aboutus/wedo";
import Chooseus from "../aboutus/chooseus"


const Page = () => {
  return (
    <div >
      <div><Construction /></div>
      <div className='flex px-4'>
    <About/>
    <OurMission/>
    <Weare/>
    <Wedo/>
    <Chooseus/></div>
    </div>
  );
  
}

export default Page;
