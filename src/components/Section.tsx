import type { PropsWithChildren } from "react";

type SectionProps = {
  imageUrl: string;
  imageLeft: boolean;
};

const Section = ({
  imageUrl,
  imageLeft,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className="timeline-section">
      <div className="left">
        {imageLeft ? (
          <h3 className={"date"}>{imageUrl}</h3>
        ) : (
          <div>{children}</div>
        )}
      </div>

      <div className="right">
        {!imageLeft ? (
          <h3 className={"date"}>{imageUrl}</h3>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </section>
  );
};

export default Section;
