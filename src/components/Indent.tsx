import { PropsWithChildren } from "react";

const Indent = ({ children }: PropsWithChildren) => {
  return (
    <div className="indent" style={{ marginLeft: "2rem" }}>
      {children}
    </div>
  );
};

export default Indent;
