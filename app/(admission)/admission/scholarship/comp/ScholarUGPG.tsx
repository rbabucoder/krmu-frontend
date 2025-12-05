import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ScholarUGPG = () => {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <Tabs defaultValue="account">
          <TabsList
            className="mx-auto bg-[#ebecec] rounded-full text-white h-[75px]"
            style={{
              boxShadow: `0px 1.30061px 2.21381px 0px rgba(0,0,0,.01),0px 3.12555px 5.32008px 0px rgba(0,0,0,.02),0px 5.88513px 10.01724px 0px rgba(0,0,0,.03),0px 10.49806px 17.86905px 0px rgba(0,0,0,.03),0px 19.63548px 33.42209px 0px rgba(0,0,0,.04),0px 47px 80px 0px rgba(0,0,0,.05)`,
            }}
          >
            <TabsTrigger
              value="account"
              className="text-2xl leading-[3] px-[100px] hover:bg-[#cb000d] hover:text-white data-[state=active]:bg-[#cb000d] data-[state=active]:text-white rounded-full cursor-pointer font-semibold"
            >
              UG Programmes
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-2xl leading-[3] px-[100px] hover:bg-[#cb000d] hover:text-white data-[state=active]:bg-[#cb000d] data-[state=active]:text-white rounded-full cursor-pointer font-semibold"
            >
              PG Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <h3 className="text-[64px] font-medium text-center mt-[50px] mb-[30px]">
              Under Graduate (UG) Programme
            </h3>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="rounded-[12px] py-2.5 px-[30px] text-2xl leading-[1.83] text-white hover:no-underline cursor-pointer"
                  style={{
                    background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                  }}
                >
                  Part A - On The Basis of Marks Scored in Class XII Examination
                </AccordionTrigger>
                <AccordionContent className="pt-[30px] px-5 pb-[15px] ugpgtable">
                  <table>
                    <thead>
                      <tr>
                        <th>Eligibility Criteria</th> <th>Scholarship</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>90% and above</td> <td>100%</td>
                        <td>
                          To be paid in 3 instalment-1st instalment (25%) will
                          be paid upfront post documents verification and the
                          amount of scholarship will be deducted from the
                          semester fee at the time of registration. 2nd
                          instalment (50%) and 3rd instalment (25%) will be paid
                          by cheque in 2nd Semester and 3rd Semester
                          respectively, if the student fulfils all the criteria
                          listed under Note : 7 given below the table.
                        </td>
                      </tr>
                      <tr>
                        <td>85% to less than 90%</td>
                        <td id="undergraduate">35%</td>
                        <td>
                          To be paid in 2 equal instalments-1st instalment will
                          be paid upfront post documents verification and the
                          amount of scholarship will be deducted from the
                          semester fee at the time of registration. 2nd
                          instalment will be paid by cheque in 2nd Semester, if
                          the student fulfils all the criteria listed under
                          Note: 7 given below the table.
                        </td>
                      </tr>
                      <tr>
                        <td>80% to less than 85%</td> <td>25%</td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="password">kl;k;k;kl;</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScholarUGPG;
