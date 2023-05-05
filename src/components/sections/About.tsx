import React from "react";
import Image from "next/image";
import universityIcon from "/public/images/icons8-university-50.png";

interface TextColorType {
  text: "string";
  color: "string";
}

const About = () => {
  const textColor = (text: string, color: string) => {
    return <span className={`${color}`}>{text}</span>;
  };

  return (
    <section className="container" id="about">
      {/* <div className="code-image">
        <Image priority src={aboutKevin} fill={true} alt="AboutKevin" />
      </div> */}

      <div className="box jetbrains">
        <p>
          {textColor("export", "purple")} {textColor("const", "blue")}{" "}
          AboutKevin = () ={">"} {"{"}
        </p>
        <div style={{ marginLeft: "1rem" }}>
          <p>
            {textColor("const", "blue")} {textColor("interest", "yellow")} =
            prompt(&quot;Web Developer or Data Analyst&quot;);
          </p>
          <br />
          <div style={{ marginLeft: "1rem" }}>
            <span style={{ marginLeft: "-1rem !important" }} className="indent">
              {textColor("let", "green")}
              {" about = "}
              {textColor(
                "`Passionate, motivated, life learner with experience in web development and data analysis. Seeking interesting and complex problems to solve.",
                "yellow"
              )}
              {";"}
            </span>
            <br />
            <br />
            <p>
              {textColor("if", "green")} {"("}interest === &quot;Web
              Developer&quot;{")"}
              {"  {"}
            </p>
            <div style={{ marginLeft: "3rem" }}>
              <span
                // style={{ marginLeft: "-1rem !important" }}
                className="indent"
              >
                {"about = "}
                {textColor(
                  `${"`"}I began learning HTML and CSS in 2017 while working as a Marketing Project Manager out of a desire to build landing pages.\n\nI quickly felt limited and found Javascript as the
                  solution to set me free. In 2020, I decided to pursue web development and learned React. I have been building projects and continuing my education since.${"`"}`,
                  "yellow"
                )}
                {";"}
              </span>
            </div>
            <br />
            <p>
              {"} "}
              {textColor("else if", "green")} {"("}interest === &quot;Data
              Analyst&quot;
              {")"}
              {"  {"}
            </p>

            <div style={{ marginLeft: "3rem" }}>
              <span
                // style={{ marginLeft: "-1rem !important" }}
                className="indent"
              >
                {"about = "}
                {textColor(
                  `${"`"}I began learning HTML and CSS in 2017 while working as a Marketing Project Manager out of a desire to build landing pages.\n\nI quickly felt limited and found Javascript as the
                  solution to set me free. In 2020, I decided to pursue web development and learned React. I have been building projects and continuing my education since.${"`"}`,
                  "yellow"
                )}
                {";"}
              </span>
            </div>
            {"}"}
            <br />
            <br />
            <p>{textColor("return", "green")} about;</p>

            <div style={{ marginLeft: "-2rem" }}>{"};"}</div>
          </div>
        </div>
      </div>

      <div className="box row">
        <div id="school" className="box small jetbrains">
          <span className="icon">
            <Image
              src={universityIcon}
              height={100}
              width={100}
              alt="university-icon"
              className="icon"
            />
          </span>
          <span className="flex-center">
            <div className="indent" style={{ marginLeft: "2rem" }}>
              <p>
                {textColor("const", "blue")}
                {" BS = "}
                {textColor("Business Administration", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" specialization = "}
                {textColor("Marketing", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" college = "}
                {textColor("'Central Washington University'", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" graduationYear = "}
                {textColor("2016", "yellow")}
                {";"}
              </p>
            </div>
          </span>
        </div>
        <div id="school" className="box small jetbrains">
          <span className="icon">
            <Image
              src={universityIcon}
              height={100}
              width={100}
              alt="university-icon"
              className="icon"
            />
          </span>
          <span className="flex-center">
            <div className="indent" style={{ marginLeft: "2rem" }}>
              <p>
                {textColor("const", "blue")}
                {" BS = "}
                {textColor("Business Administration", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" specialization = "}
                {textColor("Marketing", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" college = "}
                {textColor("'Central Washington University'", "yellow")}
                {";"}
              </p>
              <p>
                {textColor("const", "blue")}
                {" graduationYear = "}
                {textColor("2016", "yellow")}
                {";"}
              </p>
            </div>
          </span>
        </div>
        <div className="box small jetbrains">
          <p>
            {textColor("export", "purple")} {textColor("const", "blue")}{" "}
            AboutKevin = () ={">"} {"{"}
          </p>
          <div style={{ marginLeft: "1rem" }}>
            <p>
              {textColor("const", "blue")} {textColor("interest", "yellow")} =
              prompt("Web Developer or Data Analyst");
            </p>
            <br />
            <div style={{ marginLeft: "1rem" }}>
              <span
                style={{ marginLeft: "-1rem !important" }}
                className="indent"
              >
                {textColor("let", "green")}
                {" about = "}
                {textColor(
                  "`Passionate, motivated, life learner with experience in web development and data analysis. Seeking interesting and complex problems to solve.",
                  "yellow"
                )}
                {";"}
              </span>
              <br />
              <br />
              <p>
                {textColor("if", "green")} {"("}interest === "Web Developer"
                {")"}
                {"  {"}
              </p>
              <div style={{ marginLeft: "3rem" }}>
                <span
                  // style={{ marginLeft: "-1rem !important" }}
                  className="indent"
                >
                  {"about = "}
                  {textColor(
                    `${"`"}I began learning HTML and CSS in 2017 while working as a Marketing Project Manager out of a desire to build landing pages.\n\nI quickly felt limited and found Javascript as the
                  solution to set me free. In 2020, I decided to pursue web development and learned React. I have been building projects and continuing my education since.${"`"}`,
                    "yellow"
                  )}
                  {";"}
                </span>
              </div>
              <br />
              <p>
                {"} "}
                {textColor("else if", "green")} {"("}interest === "Data Analyst"
                {")"}
                {"  {"}
              </p>

              <div style={{ marginLeft: "3rem" }}>
                <span
                  // style={{ marginLeft: "-1rem !important" }}
                  className="indent"
                >
                  {"about = "}
                  {textColor(
                    `${"`"}I began learning HTML and CSS in 2017 while working as a Marketing Project Manager out of a desire to build landing pages.\n\nI quickly felt limited and found Javascript as the
                  solution to set me free. In 2020, I decided to pursue web development and learned React. I have been building projects and continuing my education since.${"`"}`,
                    "yellow"
                  )}
                  {";"}
                </span>
              </div>
              {"}"}
              <br />
              <br />
              <p>{textColor("return", "green")} about;</p>

              <div style={{ marginLeft: "-2rem" }}>{"};"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
