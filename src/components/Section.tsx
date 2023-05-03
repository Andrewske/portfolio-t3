import type { PropsWithChildren } from "react";

type SectionProps = {
  date: string;
  dateLeft: boolean;
};

const Section = ({
  date,
  dateLeft,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className="timeline-section">
      <div className="left">
        {dateLeft ? <h3 className={"date"}>{date}</h3> : <div>{children}</div>}
      </div>

      <div className="right">
        {!dateLeft ? <h3 className={"date"}>{date}</h3> : <div>{children}</div>}
      </div>
    </section>
  );
};

export default Section;
