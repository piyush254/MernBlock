import React, { useState, useEffect } from "react";
import "./TestGroups.css";

const TestGroups = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [hiddenGroups, setHiddenGroups] = useState([]);
  const [commonGroups, setCommonGroups] = useState([]); 

  const items = [
    {
      testCodeResponse: [
        { TEST_GROUP: "COMPLETE HEMOGRAM (CBC)", TEST_CODE: "RDWSD", TEST_NAME: "RED CELL DISTRIBUTION WIDTH - SD (RDW-SD)" },
        { TEST_GROUP: "COMPLETE HEMOGRAM (CBC)", TEST_CODE: "RDWI", TEST_NAME: "RED CELL DISTRIBUTION WIDTH INDEX (RDWI)" },
        { TEST_GROUP: "COMPLETE HEMOGRAM (CBC1)", TEST_CODE: "RDWSD1", TEST_NAME: "RED CELL DISTRIBUTION WIDTH - SD (RDW-SD)" },
        { TEST_GROUP: "KIDNEY FUNCTION TEST - KFT", TEST_CODE: "URIC", TEST_NAME: "URIC ACID" },
      ],
    },
    {
      testCodeResponse: [
        { TEST_GROUP: "COMPLETE HEMOGRAM (CBC)", 
          TEST_CODE: "RDWSD",
           TEST_NAME: "RED CELL DISTRIBUTION WIDTH - SD (RDW-SD)" },
        { TEST_GROUP: "COMPLETE HEMOGRAM (CBC)", TEST_CODE: "RDWI", TEST_NAME: "RED CELL DISTRIBUTION WIDTH INDEX (RDWI)" },
        { TEST_GROUP: "KIDNEY FUNCTION TEST - KFT", TEST_CODE: "URIC", TEST_NAME: "URIC ACID" },
      ],
    },
    {
      "testCodeResponse": [
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "RDWSD",
          "TEST_NAME": "RED CELL DISTRIBUTION WIDTH - SD(RDW-SD)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "RDWI",
          "TEST_NAME": "RED CELL DISTRIBUTION WIDTH INDEX (RDWI)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "RDCV",
          "TEST_NAME": "RED CELL DISTRIBUTION WIDTH (RDW-CV)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "RBC",
          "TEST_NAME": "TOTAL RBC"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "PLT",
          "TEST_NAME": "PLATELET COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "PLCR",
          "TEST_NAME": "PLATELET TO LARGE CELL RATIO(PLCR)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "PDW",
          "TEST_NAME": "PLATELET DISTRIBUTION WIDTH(PDW)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "PCV",
          "TEST_NAME": "HEMATOCRIT(PCV)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "PCT",
          "TEST_NAME": "PLATELETCRIT(PCT)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "NRBC%",
          "TEST_NAME": "NUCLEATED RED BLOOD CELLS %"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "NRBC",
          "TEST_NAME": "NUCLEATED RED BLOOD CELLS"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "NEUT",
          "TEST_NAME": "NEUTROPHILS"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MPV",
          "TEST_NAME": "MEAN PLATELET VOLUME(MPV)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MONO",
          "TEST_NAME": "MONOCYTES"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MI",
          "TEST_NAME": "MENTZER INDEX"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MCV",
          "TEST_NAME": "MEAN CORPUSCULAR VOLUME(MCV)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MCHC",
          "TEST_NAME": "MEAN CORP.HEMO.CONC(MCHC)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "MCH",
          "TEST_NAME": "MEAN CORPUSCULAR HEMOGLOBIN(MCH)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "LYMPH",
          "TEST_NAME": "LYMPHOCYTE"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "LEUC",
          "TEST_NAME": "TOTAL LEUCOCYTES COUNT (WBC)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "IG%",
          "TEST_NAME": "IMMATURE GRANULOCYTE PERCENTAGE(IG%)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "IG",
          "TEST_NAME": "IMMATURE GRANULOCYTES(IG)"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "HB",
          "TEST_NAME": "HEMOGLOBIN"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "EOS",
          "TEST_NAME": "EOSINOPHILS"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "BASO",
          "TEST_NAME": "BASOPHILS"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "ANEU",
          "TEST_NAME": "NEUTROPHILS - ABSOLUTE COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "AMON",
          "TEST_NAME": "MONOCYTES - ABSOLUTE COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "ALYM",
          "TEST_NAME": "LYMPHOCYTES - ABSOLUTE COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "AEOS",
          "TEST_NAME": "EOSINOPHILS - ABSOLUTE COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE HEMOGRAM (CBC)",
          "TEST_CODE": "ABAS",
          "TEST_NAME": "BASOPHILS - ABSOLUTE COUNT"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UYST",
          "TEST_NAME": "YEAST"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UVOL",
          "TEST_NAME": "VOLUME"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "URBC",
          "TEST_NAME": "RED BLOOD CELLS"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UPROT",
          "TEST_NAME": "URINARY PROTEIN"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UPH",
          "TEST_NAME": "PH"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UPAR",
          "TEST_NAME": "PARASITE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UNIT",
          "TEST_NAME": "NITRITE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UMUC",
          "TEST_NAME": "MUCUS"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "ULEUC",
          "TEST_NAME": "URINARY LEUCOCYTES (PUS CELLS)"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "ULEST",
          "TEST_NAME": "LEUCOCYTE ESTERASE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UKET",
          "TEST_NAME": "URINE KETONE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UGLU",
          "TEST_NAME": "URINARY GLUCOSE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UEPIT",
          "TEST_NAME": "EPITHELIAL CELLS"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UCRYS",
          "TEST_NAME": "CRYSTALS"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UCOLO",
          "TEST_NAME": "COLOUR"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UCAST",
          "TEST_NAME": "CASTS"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBSAL",
          "TEST_NAME": "BILE SALT"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBPIG",
          "TEST_NAME": "BILE PIGMENT"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBNGN",
          "TEST_NAME": "UROBILINOGEN"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBLD",
          "TEST_NAME": "URINE BLOOD"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBIL",
          "TEST_NAME": "URINARY BILIRUBIN"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UBACT",
          "TEST_NAME": "BACTERIA"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "UAPPE",
          "TEST_NAME": "APPEARANCE"
        },
        {
          "TEST_GROUP": "COMPLETE URINE ANALYSIS",
          "TEST_CODE": "SPGR",
          "TEST_NAME": "SPECIFIC GRAVITY"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "URIC",
          "TEST_NAME": "URIC ACID"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "UREAC",
          "TEST_NAME": "UREA (CALCULATED)"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "UR/CR",
          "TEST_NAME": "UREA / SR.CREATININE RATIO"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "SCRE",
          "TEST_NAME": "CREATININE - SERUM"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "CALC",
          "TEST_NAME": "CALCIUM"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "BUN",
          "TEST_NAME": "BLOOD UREA NITROGEN (BUN)"
        },
        {
          "TEST_GROUP": "KIDNEY FUNCTION TEST - KFT",
          "TEST_CODE": "B/CR",
          "TEST_NAME": "BUN / SR.CREATININE RATIO"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "VLDL",
          "TEST_NAME": "VLDL CHOLESTEROL"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "TRIG",
          "TEST_NAME": "TRIGLYCERIDES"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "TRI/H",
          "TEST_NAME": "TRIG / HDL RATIO"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "TC/H",
          "TEST_NAME": "TC/ HDL CHOLESTEROL RATIO"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "NHDL",
          "TEST_NAME": "NON-HDL CHOLESTEROL"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "LDL/",
          "TEST_NAME": "LDL / HDL RATIO"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "LDL",
          "TEST_NAME": "LDL CHOLESTEROL - DIRECT"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "HD/LD",
          "TEST_NAME": "HDL / LDL RATIO"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "HCHO",
          "TEST_NAME": "HDL CHOLESTEROL - DIRECT"
        },
        {
          "TEST_GROUP": "LIPID PROFILE",
          "TEST_CODE": "CHOL",
          "TEST_NAME": "TOTAL CHOLESTEROL"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "SGPT",
          "TEST_NAME": "ALANINE TRANSAMINASE (SGPT)"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "SGOT",
          "TEST_NAME": "ASPARTATE AMINOTRANSFERASE (SGOT )"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "SEGB",
          "TEST_NAME": "SERUM GLOBULIN"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "SALB",
          "TEST_NAME": "ALBUMIN - SERUM"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "PROT",
          "TEST_NAME": "PROTEIN - TOTAL"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "OT/PT",
          "TEST_NAME": "SGOT / SGPT RATIO"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "GGT",
          "TEST_NAME": "GAMMA GLUTAMYL TRANSFERASE (GGT)"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "BILT",
          "TEST_NAME": "BILIRUBIN - TOTAL"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "BILI",
          "TEST_NAME": "BILIRUBIN (INDIRECT)"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "BILD",
          "TEST_NAME": "BILIRUBIN -DIRECT"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "ALKP",
          "TEST_NAME": "ALKALINE PHOSPHATASE"
        },
        {
          "TEST_GROUP": "LIVER FUNCTION TEST - LFT",
          "TEST_CODE": "A/GR",
          "TEST_NAME": "SERUM ALB/GLOBULIN RATIO"
        },
        {
          "TEST_GROUP": "THYROID PROFILE",
          "TEST_CODE": "USTSH",
          "TEST_NAME": "TSH - ULTRASENSITIVE"
        },
        {
          "TEST_GROUP": "THYROID PROFILE",
          "TEST_CODE": "T4",
          "TEST_NAME": "TOTAL THYROXINE (T4)"
        },
        {
          "TEST_GROUP": "THYROID PROFILE",
          "TEST_CODE": "T3",
          "TEST_NAME": "TOTAL TRIIODOTHYRONINE (T3)"
        },
        {
          "TEST_GROUP": "IRON PROFILE",
          "TEST_CODE": "UI_BC",
          "TEST_NAME": "UNSAT.IRON-BINDING CAPACITY(UIBC)"
        },
        {
          "TEST_GROUP": "IRON PROFILE",
          "TEST_CODE": "TIBC",
          "TEST_NAME": "TOTAL IRON BINDING CAPACITY (TIBC)"
        },
        {
          "TEST_GROUP": "IRON PROFILE",
          "TEST_CODE": "IRON",
          "TEST_NAME": "IRON"
        },
        {
          "TEST_GROUP": "IRON PROFILE",
          "TEST_CODE": "%TSA",
          "TEST_NAME": "% TRANSFERRIN SATURATION"
        }
      ],
    },
  ];

  // Find common groups across all three indexes
  useEffect(() => {
    const groupLists = items.map((item) =>
      new Set(item.testCodeResponse.map((test) => test.TEST_GROUP))
    );

    const common = [...groupLists[0]].filter((group) =>
      groupLists.every((set) => set.has(group))
    );

    setCommonGroups(common);
  }, []);

  // Group tests by group name
  const groupTestsByGroup = (tests) =>
    tests.reduce((acc, { TEST_GROUP, TEST_CODE, TEST_NAME }) => {
      if (!acc[TEST_GROUP]) acc[TEST_GROUP] = { tests: [], count: 0 };
      acc[TEST_GROUP].tests.push({ TEST_CODE, TEST_NAME });
      acc[TEST_GROUP].count++;
      return acc;
    }, {});

  const toggleAccordion = (uniqueIndex) => {
    setOpenIndexes((prev) =>
      prev.includes(uniqueIndex)
        ? prev.filter((i) => i !== uniqueIndex)
        : [...prev, uniqueIndex]
    );
  };

  // Toggle only common groups
  const toggleHideCommonGroups = () => {
    setHiddenGroups(hiddenGroups.length ? [] : commonGroups);
  };

  return (
    <>
      <div className="accordion">
        {items.map((item, index) => {
          const groupedTests = groupTestsByGroup(item.testCodeResponse);

          return (
            <div className="accordion-item" key={index}>
              {Object.entries(groupedTests).map(([group, { tests, count }], i) => {
                const uniqueIndex = `${index}-${i}`;

                return (
                  <div key={i} style={{ display: hiddenGroups.includes(group) ? "none" : "block" }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${openIndexes.includes(uniqueIndex) ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(uniqueIndex)}
                        aria-expanded={openIndexes.includes(uniqueIndex)}
                      >
                        <span className="accordion-toggle">
                          <i className={`fas ${openIndexes.includes(uniqueIndex) ? "fa-minus me-1" : "fa-plus me-1"}`}></i>
                          {group} ({count})
                        </span>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse ${openIndexes.includes(uniqueIndex) ? "show" : ""}`}
                      style={{
                        maxHeight: openIndexes.includes(uniqueIndex) ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <div className="accordion-body">
                        <ul>
                          {tests.map((test) => (
                            <li key={test.TEST_CODE}>
                              • {test.TEST_NAME} ({test.TEST_CODE})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Toggle Button to Hide Only Common Groups */}
      <div className="text-center mt-3">
        <button className="btn btn-secondary m-1" onClick={toggleHideCommonGroups}>
          {hiddenGroups.length ? "Show Common Groups" : "Hide Common Groups"}
        </button>
      </div>
    </>
  );
};

export default TestGroups;
