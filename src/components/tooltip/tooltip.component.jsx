import React, { useEffect, useRef, useState } from "react";
import "./tooltip.component.css";

function TooltipComponent({ title, position, children }) {
  const node = useRef();
  const [isVisible, setState] = useState(false);

  const onToggle = ({ target }) => {
    if (node.current.contains(target)) return;
    setState(false);
  };

  useEffect(() => {
    document.addEventListener("mouseenter", onToggle);
    return document.removeEventListener("mouseenter", onToggle);
  }, []);

  return (
    <div
      className="tooltip-container"
      ref={node}
      onMouseEnter={() => setState(!isVisible)}
      onMouseLeave={() => setState(!isVisible)}
    >
      {children}
      {isVisible && (
        <span className={`tooltip-container__label ${position}`}>{title}</span>
      )}
    </div>
  );
}

export default TooltipComponent;
