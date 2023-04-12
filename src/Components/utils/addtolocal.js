

export const addToLocal = (job) => {
  let allJob = []
  
  let local = localStorage.getItem('AllJobs')
  let localJobs = JSON.parse(local)

  if(localJobs){
    allJob = [...localJobs,job]
  }
  allJob.push(job)
    localStorage.setItem('AllJobs', JSON.stringify(allJob))
}
