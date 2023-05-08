import React from "react";
import Image from "next/image";
import bonzIcon from "/public/images/bonz_green_square@2x.png";
import Indent from "../Indent";

const iconSize = 75;

const Bonanza = () => {
  const textColor = (text: string, color: string) => {
    return <span className={`${color}`}>{text}</span>;
  };
  return (
    <div className="row">
      <div id="school" className="box small jetbrains">
        <span className="icon">
          <Image
            src={bonzIcon}
            height={iconSize}
            width={iconSize}
            alt="bonanza logo"
            className="icon"
          />
        </span>
        <span className="flex-center">
          <p>{textColor("// Experience", "green")}</p>
          <div className="indent" style={{ marginLeft: "2rem" }}>
            <p>
              {textColor("export ", "purple")}
              {textColor("const", "blue")}
              {" workedAt = (company, jobTitle) => {"}
            </p>
            <Indent>
              <p>
                {textColor("if", "blue")}
                {"(companyName === "}
                {textColor(`"Bonanza"`, "yellow")}
                {") {"}
              </p>
              <Indent>
                <p>
                  {textColor("switch", "blue")}
                  {" (jobTitle) "}
                  {"{"}
                </p>
                <Indent>
                  <p>
                    {textColor("case", "blue")}
                    {` "Data Analyst"`}
                    {":"}
                  </p>
                  <Indent>
                    <p>
                      {textColor("return ", "blue")}
                      {"{"}
                    </p>
                    <Indent>
                      <p>
                        {`startDate: `}
                        {textColor(`"2019-07-01"`, "yellow")}
                        {`,`}
                      </p>
                      <p>
                        {`endDate: `}
                        {textColor(`null`, "purple")}
                        {`,`}
                      </p>
                      <p>{`duties: [`}</p>
                      <Indent>
                        <p>
                          {textColor(
                            `"Author MySQL queries to coordinate acquisition of data"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Use Excel/Python to clean, visualize, and analyze large datasets"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Use Python to create visualizations and conduct analysis"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Identify patterns, use insights to educate and advise stakeholders "`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Create reports to present data, identify issues, and develop new processes"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                      </Indent>
                    </Indent>
                    {"],"}
                  </Indent>
                  {"};"}
                </Indent>
                <Indent>
                  <p>
                    {textColor("case", "blue")}
                    {` "Marketing Project Manager"`}
                    {":"}
                  </p>
                  <Indent>
                    <p>
                      {textColor("return ", "blue")}
                      {"{"}
                    </p>
                    <Indent>
                      <p>
                        {`startDate: `}
                        {textColor(`"2017-06-01"`, "yellow")}
                        {`,`}
                      </p>
                      <p>
                        {`endDate: `}
                        {textColor(`2019-07-01`, "yellow")}
                        {`,`}
                      </p>
                      <p>{`duties: [`}</p>
                      <Indent>
                        <p>
                          {textColor(
                            `"Spearheaded the development and implementation of marketing and communication campaigns"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Carried out regular research into market trends, customer behavior, and sales"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Leverage comprehensive campaign management tools to set up, test, and deploy campaigns"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                      </Indent>
                    </Indent>
                    {"],"}
                  </Indent>
                  {"};"}
                </Indent>
                <Indent>
                  <p>
                    {textColor("case", "blue")}
                    {` "Happiness Producer"`}
                    {":"}
                  </p>
                  <Indent>
                    <p>
                      {textColor("return ", "blue")}
                      {"{"}
                    </p>
                    <Indent>
                      <p>
                        {`startDate: `}
                        {textColor(`"2016-06-13"`, "yellow")}
                        {`,`}
                      </p>
                      <p>
                        {`endDate: `}
                        {textColor(`2017-06-01`, "yellow")}
                        {`,`}
                      </p>
                      <p>{`duties: [`}</p>
                      <Indent>
                        <p>
                          {textColor(
                            `"Solve buyer support inquiries through email and live chat"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Find and report bugs and potential website improvements"`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                        <p>
                          {textColor(
                            `"Handle tough conversations through customer experience phone calls."`,
                            "yellow"
                          )}
                          {`,`}
                        </p>
                      </Indent>
                    </Indent>
                    {"],"}
                  </Indent>
                  {"};"}
                </Indent>
                <Indent>
                  <p>
                    {textColor("default", "blue")}
                    {":"}
                  </p>
                  <Indent>
                    <p>
                      {textColor("return ", "blue")}
                      {"{"}
                    </p>
                    <Indent>
                      <p>
                        {`startDate: `}
                        {textColor(`"2016-06-13"`, "yellow")}
                        {`,`}
                      </p>
                      <p>
                        {`endDate: `}
                        {textColor(`null`, "purple")}
                        {`,`}
                      </p>
                      <p>{`jobTitles: [`}</p>
                      <Indent>
                        <p>
                          {textColor(`"Data Analyst"`, "yellow")}
                          {`,`}
                        </p>
                        <p>
                          {textColor(`"Marketing Project Manager"`, "yellow")}
                          {`,`}
                        </p>
                        <p>
                          {textColor(`"Happiness Producer"`, "yellow")}
                          {`,`}
                        </p>
                      </Indent>
                    </Indent>
                    {"],"}
                  </Indent>
                  {"};"}
                </Indent>
              </Indent>
            </Indent>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Bonanza;
