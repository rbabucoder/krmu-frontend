import EditorialReflection from "./comp/EditorialReflection"
import MagazineHero from "./comp/MagazineHero"
import ReflectionCards from "./comp/ReflectionCards"

const page = () => {
  return (
    <>
        <MagazineHero />
        <EditorialReflection />
        <ReflectionCards />
    </>
  )
}

export default page