import JobInfo from "./comp/JobInfo"


const page = () => {
  return (
    <section className="py-[140px]">
      <div className="max-w-[1600px] mx-auto w-full flex">
        <div className="w-1/2">
            <JobInfo />
        </div>
        <div className="w-1/2">
          
        </div>
      </div>
    </section>
  )
}

export default page