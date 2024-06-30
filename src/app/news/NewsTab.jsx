"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewsCardMap from './NewsCardMap';

export default function NewsTab() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='layout-section tab-class' >
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="View All" /> 
        <Tab value="two" label="Insight"  />
        <Tab value="three" label="Insight Unravel Carbon" />
        <Tab value="four" label="Announcements" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 'one' && <div>
               <NewsCardMap />
            </div>}
        {value === 'two' &&  <div>
               <NewsCardMap />
            </div>}
        {value === 'three' &&  <div>
               <NewsCardMap />
            </div>}
        {value === 'four' &&  <div>
               <NewsCardMap />
            </div>}
      </Box>
    </Box>
    </div>
 
    </>
 
  );
}
