import React from "react";

function BreakLine({ vertical = false, height }) {
  if (vertical) {
    return (
      <hr className={"border-l border-neutral-800 w-[1px] h-8 " + height} />
    );
  } else {
    return <hr className="border-neutral-800" />;
  }
}

export default BreakLine;
