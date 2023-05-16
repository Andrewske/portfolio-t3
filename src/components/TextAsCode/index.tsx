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
        {data.map(({ indent, text }, dataIndex) => (
          <div key={"row-" + dataIndex} className={styles["indent-" + indent]}>
            {text.map(([string, type], textIndex) => (
              <span key={"piece-" + textIndex} className={styles[`${type}`]}>
                {string}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextAsCode;
