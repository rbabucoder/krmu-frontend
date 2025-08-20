import Image from "next/image";

const Specialisation = () => {
  return (
    <section className="prog-global-padding">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="heading">
            Specialisations Curated{" "}
            <span className="prog-highlight-text">For You</span>
          </h2>
        </div>
        <div className="flex mt-12">
          <div className="w-1/2">
            <Image
              src="/programmes/specilasation.webp"
              width={636}
              height={652}
              alt="specilisation"
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2 pl-[30px]">
            <div className="pl-[50px] flex flex-col justify-between gap-[30px] h-full relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-[#db2a1a] before:rounded-[50px]">
              <div className="prog_highlight_content_container">
                <div className="prog_highlight_content_inner_container">
                  <div className="prog_highlight_img">
                    <Image
                      width={111}
                      height={80}
                      src="/programmes/p_1.webp"
                      alt="ai-ml"
                    />
                  </div>
                  <div className="prog_highlight_content">
                    <a
                      href="https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title">
                        B.Tech. Computer Science and Engineering (AI & ML)
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="prog_highlight_content_container">
                <div className="prog_highlight_content_inner_container">
                  <div className="prog_highlight_img">
                    <Image
                      width={111}
                      height={80}
                      src="/programmes/p_1.webp"
                      alt="ai-ml"
                    />
                  </div>
                  <div className="prog_highlight_content">
                    <a
                      href="https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title">
                        B.Tech. Computer Science and Engineering (AI & ML)
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="prog_highlight_content_container">
                <div className="prog_highlight_content_inner_container">
                  <div className="prog_highlight_img">
                    <Image
                      width={111}
                      height={80}
                      src="/programmes/p_1.webp"
                      alt="ai-ml"
                    />
                  </div>
                  <div className="prog_highlight_content">
                    <a
                      href="https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title">
                        B.Tech. Computer Science and Engineering (AI & ML)
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="prog_highlight_content_container">
                <div className="prog_highlight_content_inner_container">
                  <div className="prog_highlight_img">
                    <Image
                      width={111}
                      height={80}
                      src="/programmes/p_1.webp"
                      alt="ai-ml"
                    />
                  </div>
                  <div className="prog_highlight_content">
                    <a
                      href="https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title">
                        B.Tech. Computer Science and Engineering (AI & ML)
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="prog_highlight_content_container">
                <div className="prog_highlight_content_inner_container">
                  <div className="prog_highlight_img">
                    <Image
                      width={111}
                      height={80}
                      src="/programmes/p_1.webp"
                      alt="ai-ml"
                    />
                  </div>
                  <div className="prog_highlight_content">
                    <a
                      href="https://www.krmangalam.edu.in/programs/btech-cse-ai-ml/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="title">
                        B.Tech. Computer Science and Engineering (AI & ML)
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialisation;
