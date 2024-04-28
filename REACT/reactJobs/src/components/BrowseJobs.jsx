import React from 'react'
import jobs from '../jobs.json'
import { BrowseJob } from './BrowseJob';
const BrowseJobs = ({isHome = false}) => {
  const jobListing = isHome ? jobs.slice(0,3) : jobs;
 
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          {jobListing.map((job) => (
            <BrowseJob key={job.id} job = {job}/>
          ))}
         
 
        
        </div>
      </div>
    </section>
    </>
  )
}

export default BrowseJobs