import React from 'react'
import Navbar from '../Navbar';
import Hero from '../Hero';
import HomeCards from '../HomeCards';
import JobListings from '../Joblistings'
import ViewAllJobs from '../ViewAllJobs'
const HomePage = () => {
  return (
  <>
  
  <Hero/>
  <HomeCards/>
  <JobListings isHome={true}/>
  <ViewAllJobs/>

  </>
  )
}

export default HomePage;