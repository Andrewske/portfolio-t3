import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <button onClick={handleClick}>
        <h1 className="hover-color">KEVIN ANDREWS</h1>
      </button>
      {isOpen && (
        <div ref={nodeRef}>
          <p>Here is some about information</p>
        </div>
      )}
    </section>
  );
};

export default Section;
