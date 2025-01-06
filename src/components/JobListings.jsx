import React, { useEffect, useState } from 'react'
import Job from './Job'

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      console.log('fetching...',);
      
      try {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
        setLoading(false)
        console.log('ans:',jobs);
        
      }catch(err){
        console.log('api err:',err);
      } finally{
        setLoading(false)
      }
    } 
    fetchJobs()
  }, [])
  if( loading ) return <h1>Loading...</h1>  
  return (

    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Job job={job} key={job.id}></Job>
          ))}
          
          
        </div>
      </div>
    </section>

  )
}

export default JobListings