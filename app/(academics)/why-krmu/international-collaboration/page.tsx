import { getInternationCollabData } from "@/lib/api/international-collab";
import InternationalCollabCards from "./comp/InternationalCollabCards";
import InternationalCollabHero from "./comp/InternationalCollabHero";

const page = async () => {
  const intCollabData = await getInternationCollabData();

  return (
    <>
      <InternationalCollabHero
        title={intCollabData?.title}
        desc={intCollabData?.desc}
        heroBtn={intCollabData?.int_collab_btn}
        heroGrid={intCollabData?.int_collab_hero_grid}
      />
      <InternationalCollabCards
        intCollabCard={intCollabData?.intcollab_card}
        intCollabFullWidthCard={intCollabData?.int_collab_full_width_card}
      />
    </>
  );
};

export default page;
