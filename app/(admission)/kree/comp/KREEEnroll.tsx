import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KREEEnroll = () => {
  return (
    <section className="py-[4%]">
      <div className="max-w-[1267px] mx-auto w-full">
        <h2 className="kree-titlecolor text-5xl font-semibold text-center leading-[1.5] mt-2.5 mb-[15px]">
          KREE 2025
        </h2>
        <p className="mb-5">
          KR Entrance Exam is a gateway to enrolment for the preferred
          Undergraduate and Postgraduate programme at K.R. Mangalam University.
          The entrance exam comprises sections on objective-type questions for
          sentence completion, matching, multiple-choice, and true-false
        </p>
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Programmes For Enrolment</h3>
            <h5 className="text-xl font-semibold mt-2.5 mb-[15px]">
              Undergraduate and Postgraduate Programmes
            </h5>
          </div>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full kree-accordion "
              defaultValue="soet"
            >
              <AccordionItem value="soet">
                <AccordionTrigger className="bg-[#051630] py-[15px] px-5 text-white text-base cursor-pointer hover:no-underline">
                  School of Engineering and Technology
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance p-5 kree-toggles">
                  <ul>
                    <li>
                      <ul>
                        <li>
                          B.Tech. Computer Science and Engineering (4 Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science and Engineering (3
                          Years)
                        </li>
                        <li>
                          B.Tech. Computer Science and Engineering (AI &amp; ML)
                          with academic support of Samatrix and IBM (4 Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science and Engineering (AI
                          &amp; ML) with academic support of Samatrix and IBM (3
                          Years)
                        </li>
                        <li>
                          B.Tech. Computer Science and Engineering (Full Stack
                          Development) with academic support of ImaginXP (4
                          Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science and Engineering
                          (Full Stack Development) with academic support of
                          Xebia (3 Years)
                        </li>
                        <li>
                          B.Tech. Computer Science &amp; Engineering (UX/UI)
                          with academic support of ImaginXP (4 Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science &amp; Engineering
                          (UX/UI) with academic support of ImaginXP (3 Years)
                        </li>
                        <li>
                          B.Tech. Computer Science and Engineering (Cyber
                          Security) with academic support of EC-Council and IBM
                          (4 Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science and Engineering
                          (Cyber Security) with academic support of EC-Council
                          and IBM (3 Years)
                        </li>
                        <li>
                          B.Tech. Computer Science and Engineering (Data
                          Science) with academic support of IBM (4 Years)
                        </li>
                        <li>
                          B.Tech. (Lateral) Computer Science and Engineering
                          (Data Science) with academic support of IBM (3 Years)
                        </li>
                        <li>
                          B.Tech. Computer Science and Engineering (Robotics
                          &amp; AI) with academic support of IBM &amp; powered
                          by Microsoft Certifications (4 Years)
                        </li>
                        <li>
                          BCA (AI &amp; Data Science) with academic support of
                          IBM &amp; powered by Microsoft Certifications (4
                          Years)
                        </li>
                        <li>
                          BCA (Hons. / Hons. with Research)(AI &amp; Data
                          Science) with academic support of IBM &amp; powered by
                          Microsoft Certifications (4 Years)
                        </li>
                        <li>
                          BCA (Cyber Security) with academic support of
                          EC-Council (3 Years)
                        </li>
                        <li>
                          BCA (Hons. / Hons. with Research) Cyber Security with
                          academic support of EC-Council (3 Years)
                        </li>
                        <li>
                          B.Sc. (Hons.) Computer Science with academic support
                          of IBM (3 Years)
                        </li>
                        <li>B.Sc. (Hons.) Cyber Security (3 Years)</li>
                        <li>B.Sc. (Hons.) Data Science (3 Years)</li>
                        <li >
                          <strong>Post Graduation Course</strong>
                        </li>
                        <li>M.Tech. in Automobile Engineering (2 Years)</li>
                        <li>MCA (2 Years)</li>
                        <li>
                          MCA (AI &amp; ML) with academic support of IBM and
                          powered by Microsoft Certifications (2 Years)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KREEEnroll;
