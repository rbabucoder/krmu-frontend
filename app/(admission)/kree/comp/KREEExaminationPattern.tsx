const KREEExaminationPattern = () => {
  return (
    <section className="py-[4%]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-5xl font-semibold text-center">
          KREE Examination Pattern
        </h4>
        <p className="text-center mt-2.5 mb-5">
          The sections constituting the KREE Examinations are:
        </p>
        <div className="table-1 kree-toggles1">
          <table width="80%" align="center">
            <tbody>
              <tr>
                <td align="left">
                  <ul>
                    <li>Arithmetic &amp; Logical Reasoning;</li>
                  </ul>
                </td>
                <td align="left">
                  <ul>
                    <li>General English</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td align="left">
                  <ul>
                    <li>General Awareness</li>
                  </ul>
                </td>
                <td align="left">
                  <ul>
                    <li>And some programme-specific questions</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KREEExaminationPattern;
