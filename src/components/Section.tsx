import { useState, useRef, PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";

type SectionProps = {
  color: string;
};

const Section = ({ color, children }: PropsWithChildren<SectionProps>) => {
  return <section className="blue container">{children}</section>;
};

export default Section;
