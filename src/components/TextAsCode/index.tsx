import React from "react";
import Image from "next/image";
import bonzIcon from "/public/images/bonz_green_square@2x.png";

import styles from "./styles.module.scss";

const iconSize = 75;

interface TextAsCodeDataType {
  data: {
    indent: number;
    text: string[][];
  }[];
}

// const bonanzaExperience = [
//   {
//     indent: 0,
//     text: [[`// Experience at Bonanza`, "comment"]],
//   },
//   {
//     indent: 0,
//     text: [
//       [`export `, "declaration"],
//       [`const `, "keyword"],
//       [`workedAt = (companyName, jobTitle) => {`, "default"],
//     ],
//   },
//   {
//     indent: 1,
//     text: [
//       [`if`, "keyword"],
//       [`(companyName === `, "default"],
//       [`"Bonanza"`, "text"],
//       [`) {`, "default"],
//     ],
//   },
//   {
//     indent: 2,
//     text: [
//       [`switch `, "keyword"],
//       [`(jobTitle) {`, "default"],
//     ],
//   },
//   {
//     indent: 3,
//     text: [
//       [`case `, "keyword"],
//       [`"Data Analyst":`, "default"],
//     ],
//   },
//   {
//     indent: 4,
//     text: [
//       [`return `, "keyword"],
//       [`{`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`startDate: `, "default"],
//       [`"2019-07-01",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`endDate: `, "default"],
//       [`null,`, "declaration"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`duties: [`, "default"]],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Author MySQL queries to coordinate acquisition of data"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Use Excel/Python to clean, visualize, and analyze large datasets"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Use Python to create visualizations and conduct analysis"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Identify patterns, use insights to educate and advise stakeholders"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Create reports to present data, identify issues, and develop new processes"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`],`, "default"]],
//   },
//   {
//     indent: 4,
//     text: [[`};`, "default"]],
//   },
//   {
//     indent: 3,
//     text: [
//       [`case `, "keyword"],
//       [`"Marketing Project Manager":`, "default"],
//     ],
//   },
//   {
//     indent: 4,
//     text: [
//       [`return `, "keyword"],
//       [`{`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`startDate: `, "default"],
//       [`"2017-06-01",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`endDate: `, "default"],
//       [`"2019-07-01",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`duties: [`, "default"]],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Spearheaded the development and implementation of marketing and communication campaigns"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Carried out regular research into market trends, customer behavior, and sales"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Leverage comprehensive campaign management tools to set up, test, and deploy campaigns"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`],`, "default"]],
//   },
//   {
//     indent: 4,
//     text: [[`};`, "default"]],
//   },
//   {
//     indent: 3,
//     text: [
//       [`case `, "keyword"],
//       [`"Happiness Producer":`, "default"],
//     ],
//   },
//   {
//     indent: 4,
//     text: [
//       [`return `, "keyword"],
//       [`{`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`startDate: `, "default"],
//       [`"2016-06-13",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`endDate: `, "default"],
//       [`"2017-06-01",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`duties: [`, "default"]],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Solve buyer support inquiries through email and live chat"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Find and report bugs and potential website improvements"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [
//         `"Handle tough conversations through customer experience phone calls"`,
//         "text",
//       ],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`],`, "default"]],
//   },
//   {
//     indent: 4,
//     text: [[`};`, "default"]],
//   },
//   {
//     indent: 3,
//     text: [
//       [`default`, "keyword"],
//       [`:`, "default"],
//     ],
//   },
//   {
//     indent: 4,
//     text: [
//       [`return `, "keyword"],
//       [`{`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`startDate: `, "default"],
//       [`"2016-06-13",`, "text"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [
//       [`endDate: `, "default"],
//       [`null,`, "declaration"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`jobTitles: [`, "default"]],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Data Analyst"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Marketing Project Manager"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 6,
//     text: [
//       [`"Happiness Producer"`, "text"],
//       [`,`, "default"],
//     ],
//   },
//   {
//     indent: 5,
//     text: [[`],`, "default"]],
//   },
//   {
//     indent: 4,
//     text: [[`};`, "default"]],
//   },
// ];

const TextAsCode = ({ data }: TextAsCodeDataType) => {
  return (
    <div className={styles.wrapper}>
      <div className="icon">
        <Image
          src={bonzIcon}
          height={iconSize}
          width={iconSize}
          alt="bonanza logo"
          className="icon"
        />
      </div>
      <div className={styles.textContainer}>
        {data.map(({ indent, text }) => (
          <div className={styles["indent-" + indent]}>
            {text.map(([string, type]) => (
              <span className={styles[`${type}`]}>{string}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextAsCode;
