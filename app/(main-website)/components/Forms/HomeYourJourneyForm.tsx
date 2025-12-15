const HomeYourJourneyForm = () => {
  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search Your Programmes"
          className="text-center w-full bg-white text-black p-2.5 mb-2.5 rounded-md h-14 text-xl"
        />
        <input type="submit" value="Explore Our Programmes" className="py-1.5 px-5 bg-[#cb000d] text-white w-full text-center rounded-md font-bold" />
      </form>
    </>
  );
};

export default HomeYourJourneyForm;
