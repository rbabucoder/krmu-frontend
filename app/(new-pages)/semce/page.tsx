import Stats from "./comp/Stats";
import FutureReady from "./comp/FutureReady";
import LearnByCreating from "./comp/LearnByCreating";

const page = () => {
  return (
    <>
      <main className="semce_main_container">
        <Stats />
        <FutureReady />
        <LearnByCreating />
      </main>
    </>
  );
};

export default page;
