import TeamCIFCard from "../global-comp/TeamCIFCard"

const TeamCIF = () => {
  return (
    <div className="max-w-[1664px] mx-auto w-full mt-10">
        <h3 className="text-2xl md:text-5xl font-bold text-white mb-10">Team CIF</h3>
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <TeamCIFCard />
            </div>
        </div>
    </div>
  )
}

export default TeamCIF